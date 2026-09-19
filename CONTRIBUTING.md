# Contributing to the Nomyr website

Thank you for helping improve Nomyr's public website. Contributions to content,
design, accessibility, performance, and code are welcome.

## Before you start

Search existing [issues](https://github.com/nomyr-security/nomyr-landing/issues)
and [pull requests](https://github.com/nomyr-security/nomyr-landing/pulls) first.
Open an issue before making a substantial design, information architecture, or
content change so the direction can be agreed before implementation. Small,
focused fixes may go directly to a pull request.

Use the issue forms and include enough evidence for someone else to act:

- Bugs: browser and device, affected URL, exact reproduction steps, expected
  and actual behavior, and screenshots or a short recording when visual.
- Feature requests: the user problem, proposed outcome, alternatives considered,
  and any accessibility or responsive-design implications.
- Documentation: the incorrect or missing text, its location, and the suggested
  correction with supporting sources when facts are involved.

Do not post credentials, access tokens, private infrastructure details, personal
data, or unannounced security vulnerabilities. Report security concerns privately
to [oss@nomyr.io](mailto:oss@nomyr.io).

## Set up development

Use Node.js 22 and npm. Fork the repository, clone your fork, and create a short
branch from the latest `main`.

```sh
npm ci
npm run dev
```

Open <http://127.0.0.1:4311>.

Use a descriptive branch name such as `fix/mobile-hero-overflow` or
`docs/local-development-link`.

## Make focused changes

- Keep each pull request focused on one problem.
- Preserve desktop fidelity, mobile usability, semantic HTML, keyboard access,
  visible focus states, and reduced-motion behavior.
- Use the supplied Nomyr brand assets instead of recreating the wordmark.
- Keep public claims accurate. Product illustrations and sample metrics must be
  clearly presented as examples rather than customer results.
- Do not add paid-plan language unless a paid offering exists publicly.
- Keep dependencies minimal and explain every new runtime dependency.
- Do not commit generated output from `.next/` or `out/`.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) with a short,
imperative subject:

```text
<type>(optional-scope): <description>
```

Common types are:

| Type | Use for |
| --- | --- |
| `feat` | A visible capability or new page behavior |
| `fix` | A defect or regression |
| `docs` | Documentation or copy that does not change behavior |
| `style` | Visual-only changes |
| `refactor` | Internal restructuring with unchanged behavior |
| `perf` | Performance improvements |
| `test` | Tests or test infrastructure |
| `build` | Build system or dependencies |
| `ci` | GitHub Actions and automation |
| `chore` | Repository maintenance |

Examples:

```text
fix(hero): prevent graph overflow on narrow screens
docs: clarify local development setup
ci: validate pull request titles
```

Keep the subject under 72 characters when practical. Explain the reason and any
non-obvious tradeoffs in the body. Add `BREAKING CHANGE:` in the footer only when
the change requires consumers to take action.

Sign off every commit to certify the
[Developer Certificate of Origin](https://developercertificate.org/):

```sh
git commit -s -m "fix(hero): prevent graph overflow on narrow screens"
```

Use your own contributor identity for the sign-off.

## Pull requests

Open pull requests against `main`. Use a Conventional Commit title because the
repository squash-merges pull requests and uses the pull request title for the
resulting commit.

The description should:

- state the concrete problem and resulting behavior;
- link the related issue with `Closes #123` when applicable;
- explain how the change was verified;
- include before and after screenshots for visual changes at relevant desktop
  and mobile widths;
- call out dependencies, accessibility effects, content claims, and follow-up
  work that affects review.

Before requesting review, run:

```sh
npm run typecheck
npm run build
git diff --check
```

Resolve review conversations and rerun affected checks after revisions. Do not
rewrite unrelated code or mix repository cleanup into a product change.

## Review and merge

Maintainers review correctness, visual quality, accessibility, responsive
behavior, performance, and the accuracy of public claims. Pull requests are
squash-merged after required checks pass. Branches are deleted after merge.

Website contributions are licensed under [AGPL-3.0-only](LICENSE). Third-party
fonts, trademarks, and logos retain their respective rights.
