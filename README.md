# Nomyr landing page

The public website for [Nomyr](https://github.com/nomyr-security/nomyr), an open-source non-human identity security project.

**Live site:** https://nomyr-security.github.io/nomyr-landing/

## Development

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4311. The website is independent of the Nomyr product application.

## Build and deploy

```sh
npm run typecheck
NEXT_PUBLIC_BASE_PATH=/nomyr-landing npm run build
```

The static export is written to `out/`. The Pages workflow builds and deploys every push to `main`. GitHub Pages must use **GitHub Actions** as its publishing source.

For a root-domain deployment, build without `NEXT_PUBLIC_BASE_PATH` and update the canonical URL, sitemap, and metadata to the final domain.

## Design and content

The site recreates the supplied 1440px landing artboard with React section components, its original vector illustrations, IBM Plex Sans/Mono and Instrument Serif typography, gradients, textures, and motion. Responsive layouts adapt the design for tablets and phones; the identity graph remains horizontally scrollable where needed.

- `app/page.tsx`: section composition
- `app/styles.css`: design styles and responsive adaptations
- `components/`: section content and interactive source terminal
- `public/`: favicon, robots directive, and sitemap

The source export runtime is not shipped. Contact buttons open an email draft; they do not submit data. Repository links point to the actual project, and the source terminal uses documented commands. Product illustrations describe intended product scope rather than customer results. The site presents Nomyr as a free, open-source project.

## Contributing

Open an issue for substantial content or design changes. Keep desktop visual fidelity, mobile usability, semantic markup, keyboard navigation, and reduced-motion behavior intact. Run type checking and a static build before submitting a pull request. Sign commits with `git commit -s`.

## License

Website code is licensed under [AGPL-3.0-only](LICENSE). Third-party fonts, trademarks, and logos retain their respective rights; integration artwork does not imply endorsement.
