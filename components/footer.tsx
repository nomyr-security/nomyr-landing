export function Footer() {
  return (
    <footer className="foot" id="footer">
      <div className="foot-word" aria-hidden="true">
        Nomyr
      </div>
      <div className="wrap">
        <div className="foot-top">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "280px",
            }}
          >
            <a className="brand" href="#top" aria-label="Nomyr home">
              <span className="brand-mark"></span>Nomyr
            </a>
            <div
              style={{ fontSize: "13px", lineHeight: "21px", color: "#4E6C6E" }}
            >
              Non-human identity security, built on evidence rather than
              inference.
            </div>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <div className="h">Platform</div>
              <a href="#platform">Discovery</a>
              <a href="#platform">Ownership</a>
              <a href="#comparison">Posture</a>
              <a href="#lifecycle">Lifecycle</a>
              <a href="#lifecycle">Agent control plane</a>
            </div>
            <div className="foot-col">
              <div className="h">Open source</div>
              <a href="https://github.com/nomyr-security/nomyr">
                GitHub repository
              </a>
              <a href="https://github.com/nomyr-security/nomyr#local-development">
                Self-hosting guide
              </a>
              <a href="https://github.com/nomyr-security/nomyr/blob/main/LICENSING.md">
                Licensing
              </a>
              <a href="https://github.com/nomyr-security/nomyr/blob/main/CONTRIBUTING.md">
                Contributing
              </a>
              <a href="https://nomyr.zulipchat.com">Community chat</a>
            </div>
            <div className="foot-col">
              <div className="h">Resources</div>
              <a href="https://github.com/nomyr-security/nomyr#local-development">
                Documentation
              </a>
              <a href="#integrations">Integrations</a>
              <a href="https://github.com/nomyr-security/nomyr/commits/main/">
                Changelog
              </a>
              <a href="#operating-modes">Security model</a>
            </div>
            <div className="foot-col">
              <div className="h">Company</div>
              <a href="#platform">About</a>
              <a href="mailto:oss@nomyr.io?subject=Working%20with%20Nomyr">
                Careers
              </a>
              <a href="mailto:oss@nomyr.io">Contact</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © 2026 Nomyr. Non-human identity security, from discovery to
            retirement.
          </span>
          <span>AGPL-3.0 core · Apache-2.0 SDKs</span>
        </div>
      </div>
    </footer>
  );
}
