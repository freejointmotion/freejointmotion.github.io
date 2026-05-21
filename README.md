## Free Joint Motion

Static site (Parcel + React) deployed to GitHub Pages from the `docs/` folder.

Custom domain: `public/CNAME` is copied to `docs/CNAME` on every `npm run build` (including after `clean`, which clears `docs/*`).

### Contact form (Formspree)

Formspree works on GitHub Pages: submissions go from the visitor’s browser directly to Formspree’s servers. This site does not need a backend.

1. Create a form at [formspree.io](https://formspree.io).
2. Copy the form ID from `https://formspree.io/f/YOUR_ID`.
3. Open `src/config/formspree.config.json` and set `"formId": "YOUR_ID"`.
4. Run `npm run build` and deploy the updated `docs/` folder (commit and push, or your usual deploy flow).

The form ID is embedded in the built JavaScript at **build time**. Changing `.env` alone without rebuilding will not update the live site.

**Optional:** set `FORMSPREE_FORM_ID` in `.env` when building locally—it overrides the JSON file for that build only.

**GitHub Actions:** if you build in CI, add `FORMSPREE_FORM_ID` as a repository secret and pass it into the build step:

```yaml
env:
  FORMSPREE_FORM_ID: ${{ secrets.FORMSPREE_FORM_ID }}
run: npm run build
```

### Development

```bash
npm install
npm start
```

### Production build

```bash
npm run build
```
