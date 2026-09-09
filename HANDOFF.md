# GreenApe Flower Menu — Handoff Notes

This file exists so any person or AI agent picking up this project — after a handoff, a break, or a new session with no prior context — can get productive immediately without re-discovering the gotchas below the hard way.

**Live site / repo:** https://github.com/STIFPER/GreenApe (branch `main`)

## 1. Critical: two copies of the app exist — you must edit both

This is the single most important thing to know about this codebase.

- **`index.html`** contains the *entire app* — every component and the full `products` data array — hand-"compiled" into plain `React.createElement(...)` calls (aliased as `e(...)`) inside a `<script>` tag. There is **no Babel**, no build step. This is the exact file that is deployed and rendered live.
- **`App.js`, `components/**/*.js`, `data/products.js`** are a separate, parallel copy of the same app written in normal JSX. **These files are not loaded by `index.html` at all** — there's no `<script type="text/babel">` or bundler wiring them in. They exist as a readable source-of-truth copy, but the browser never executes them.

**Consequence:** any change to a component, to styling, or to the strain data must be made **twice** — once in the JSX file, once in the corresponding `e(...)` block inside `index.html`. If you only edit the JSX files, you will see zero change on the live site and may falsely conclude your edit had no effect or was reverted.

**How to verify a change actually took effect:** serve the folder locally and check the rendered DOM, don't trust the JSX source by itself:
```bash
python3 -m http.server 8080 --directory "/path/to/Green Ape "
```
then open `http://localhost:8080/index.html` (append a `?v=N` query string or hard-reload to dodge browser caching — this bit us more than once during development).

## 2. Deployment — there is no local git repo

The working directory itself (note the **trailing space** in the folder name: `Green Ape `) is a plain, non-git-tracked folder. It is *not* connected to any remote. To publish changes:

1. Clone the real repo fresh into a scratch directory — don't try to `git init` the working directory itself:
   ```bash
   gh repo clone STIFPER/GreenApe /path/to/scratch/GreenApe_check
   ```
2. **Before overwriting anything**, diff the clone's `index.html` against the working copy to confirm the remote hasn't drifted (e.g. someone edited directly on GitHub.com since your last pull). If it has, reconcile by hand rather than blindly overwriting.
3. Sync the updated files over (exclude `.git` and the clone's own `README.md`):
   ```bash
   rsync -a "SRC/App.js" "REPO/App.js"
   rsync -a "SRC/manifest.json" "REPO/manifest.json"
   rsync -a --delete "SRC/index.html" "REPO/index.html"
   rsync -a --delete "SRC/components/" "REPO/components/"
   rsync -a --delete "SRC/data/" "REPO/data/"
   rsync -a --delete "SRC/assets/" "REPO/assets/"   # only if assets changed
   ```
4. Clean up macOS junk before committing (`.DS_Store` files sneak in via `git add -A` — a `.gitignore` with `.DS_Store` is already committed to the repo to help with this).
5. `git add -A`, sanity-check `git diff --stat --cached` matches what you actually intended to change, commit, `git push origin main`.
6. Delete the scratch clone.

The site is presumably served via GitHub Pages from this repo, so a push should go live within a few minutes. There's no CI/build step to wait on.

`gh` CLI auth: in the environment this was developed in, `gh auth status` was already logged in as user `STIFPER` with `repo` scope — if you're picking this up somewhere else, you'll need to `gh auth login` yourself first.

## 3. Menu data model (per-product fields in `products`)

Each strain object looks like:
```js
{
  cat: "SATIVA" | "INDICA" | "HYBRID" | "COMPOUND_GENETICS",
  type: "SATIVA" | "INDICA" | "HYBRID",  // COMPOUND_GENETICS only — shown as a small badge under the name
  name: "STRAIN NAME",                    // always the *display* name — see CG- naming note below
  tags: [],                               // "BEST SELLER" | "NEW" | "BUY 1 GET 1 ..." | []
  thc: "20-24%",
  cbd: "0%",
  p1: "฿350",     // 1G price
  p35: "฿1,100",  // 3.5G price
  stock1: true,   // 1G in stock?
  stock35: true,  // 3.5G in stock?
  terpenes: ["MYRCENE (MUSK)", "LIMONENE (CITRUS)"],  // exactly 2, shown as colored pills
}
```

**Pricing convention:** regular flower defaults to ฿350 (1g) / ฿1,100 (3.5g). `COMPOUND_GENETICS` strains are fixed at ฿700 (1g) / ฿2,500 (3.5g) regardless of anything else — this has been confirmed explicitly by the client multiple times, don't second-guess it if a new stock sheet doesn't repeat it.

**Stock display (per-weight, not a single combined status):** the card shows 1G and 3.5G as two separate columns. If a size is out of stock, that column shows a muted "SOLD OUT" pill instead of the price, and the weight label (`1G`/`3.5G`) dims — the strain itself is NOT removed from view just because one size is out. This mirrors "The Dispensary" / "Ci Greenape" reference menus the client pointed to.

**Fully out-of-stock strains are hidden, never deleted.** When both `stock1` and `stock35` are `false`, the strain is filtered out of the rendered menu (see `stockRank`/`forMenu` in both `App.js` and `index.html`) but **stays in the `products` array** with all its real data (THC/CBD/terpenes/price) intact. This is deliberate: the client restocks month to month and wants strains to reappear automatically just by flipping `stock1`/`stock35` back to `true` — never re-ask them for the strain's details a second time. As of this writing the hidden-but-preserved list includes: Purple Thai, Pure Michigan, Papaya Cheesy Runtz, Oreoz, Super Lemon Haze, Sensi Dawg.

**Sort order within each category, top to bottom:**
1. Strains tagged `"BEST SELLER"` (always first)
2. Strains tagged `"NEW"` (always second, regardless of their own stock status)
3. Everything else, ordered by stock completeness: both sizes in stock → only 1G → only 3.5G

See the `tagRank`/`stockRank`/`forMenu` functions — they exist twice (App.js and index.html) and must stay in sync if the sort rule ever changes.

**Category ordering on screen:** SATIVA → INDICA → HYBRID → COMPOUND GENETICS, in that exact order on mobile (single column) and visually balanced into two CSS columns (`columns-2`) on desktop. This uses native CSS multi-column layout specifically so DOM order (and therefore mobile order) is never scrambled by a separate "balance the columns" algorithm — an earlier weight-balancing approach caused COMPOUND GENETICS to appear in the wrong position on mobile and was replaced for that reason. Don't reintroduce a manual left/right array-splitting layout without re-testing mobile order.

**"CG-" naming convention:** when the client's stock spreadsheet has strains prefixed `CG-` (e.g. `CG-Da Funk`), that prefix only indicates "this belongs in the COMPOUND GENETICS section of the spreadsheet" — it must **never** appear in the on-site display name. Strip it (`CG-Da Funk` → `DA FUNK`).

**Viewport is zoom-locked** (`user-scalable=no` in the `<meta viewport>` tag) at the client's explicit request — don't remove that when touching `<head>`.

## 4. How the client sends updates

The client (Thai-speaking) periodically sends either:
- A stock spreadsheet (`.xlsx`) with per-strain 1G/3.5G quantities (any positive number / "-" or "มี"/blank for in/out of stock) — treat quantity as irrelevant, only in-stock vs out-of-stock matters for `stock1`/`stock35`.
- Ad-hoc chat instructions to add/remove/retag specific strains, sometimes with only partial details.

**When details are incomplete** (e.g. a brand-new strain given only a name and "NEW" tag, no THC/CBD/terpenes/category), don't guess — ask, or explicitly report back exactly which fields are missing and hold off adding that strain until they're supplied. This has been the working pattern throughout the project and the client responds well to it.

**Before pushing, always recheck:** count strains visible vs. hidden and make sure the total matches what you'd expect from the running history of adds/removes — an arithmetic check like "18 visible + 6 hidden = 24 total" has caught mistakes before and is worth doing every time.

## 5. Known quirks / things that look like bugs but aren't (yet)

- `assets/logo.png` vs `assets/Green Ape Logo.png`: the header currently uses `Green Ape Logo.png` (a wordmark banner, ~290×67). `logo.png` (~800×800, the mascot icon) is used by `manifest.json` as the PWA icon. At one point these two files were inconsistent between the local working copy and what was already on GitHub — if asset drift shows up again, diff file dimensions/content before assuming one side is "right."
- The repo's own `README.md` is essentially empty (1 byte) — this `HANDOFF.md` is the actual onboarding doc; consider merging them if you want a single entry point.
