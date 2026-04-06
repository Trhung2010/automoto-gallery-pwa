# AutoMoto Gallery PWA

Deploy-ready static bundle for GitHub Pages or any other static host.

Files:
- `index.html`
- `site.webmanifest`
- `sw.js`
- `icon-192.png`
- `icon-512.png`
- `apple-touch-icon.png`

GitHub Pages:
1. Create a new GitHub repo.
2. From this folder run `git init`.
3. Run `git add .`.
4. Run `git commit -m "Initial PWA deploy"`.
5. Add your remote and push to `main`.
6. In GitHub repo settings, enable Pages from the `main` branch root.

Notes:
- PWA install and offline mode require `https://` or `localhost`.
- Relative paths are already set, so this works on GitHub Pages project URLs too.
