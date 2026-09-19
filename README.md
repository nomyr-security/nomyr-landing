<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/svg/nomyr-lockup-on-dark.svg">
  <img src="brand/svg/nomyr-lockup.svg" alt="Nomyr" width="240">
</picture>

# Nomyr landing page

The public website for [Nomyr](https://github.com/nomyr-security/nomyr), an open-source non-human identity security project.

**Live site:** https://nomyr.io/

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
npm run build
```

The static export is written to `out/`. The Pages workflow builds and deploys every push to `main`. GitHub Pages must use **GitHub Actions** as its publishing source.

The production site uses `nomyr.io` at the domain root. For a project-path preview, set `NEXT_PUBLIC_BASE_PATH` explicitly.

## Design and content

The site recreates the supplied 1440px landing artboard with React section components, its original vector illustrations, IBM Plex Sans/Mono and Instrument Serif typography, gradients, textures, and motion. Responsive layouts adapt the design for tablets and phones; the identity graph remains horizontally scrollable where needed.

- `app/page.tsx`: section composition
- `app/styles.css`: design styles and responsive adaptations
- `components/`: section content and interactive source terminal
- `public/`: favicon, robots directive, and sitemap

The source export runtime is not shipped. Contact buttons open an email draft; they do not submit data. Repository links point to the actual project, and the source terminal uses documented commands. Product illustrations describe intended product scope rather than customer results. The site presents Nomyr as a free, open-source project.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.
It documents issue quality, Conventional Commit messages, DCO sign-offs, local
validation, visual evidence, and review expectations.

## License

Website code is licensed under [AGPL-3.0-only](LICENSE). Third-party fonts, trademarks, and logos retain their respective rights; integration artwork does not imply endorsement.

## Brand assets

The complete [Nomyr brand kit](brand/README.md) includes SVG masters, PNG exports, web icons, and social artwork. Runtime assets live in `public`; its manifest uses relative URLs to support deployment paths. Use the supplied lockups without retyping the wordmark.
