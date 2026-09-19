export function EvidenceComparison() {
  return (
    <section
      className="sec sec-dark band"
      id="comparison"
      aria-label="Evidence Comparison"
    >
      <svg className="tex" aria-hidden="true">
        <defs>
          <pattern id="gc" width="34" height="34" patternUnits="userSpaceOnUse">
            <path
              d="M 34 0 L 0 0 0 34"
              fill="none"
              stroke="#3FB5C4"
              strokeWidth="1"
            ></path>
          </pattern>
          <pattern
            id="gc-major"
            width="136"
            height="136"
            patternUnits="userSpaceOnUse"
          >
            <rect width="136" height="136" fill="url(#gc)"></rect>
            <path
              d="M 136 0 L 0 0 0 136"
              fill="none"
              stroke="#3FB5C4"
              strokeWidth="1.25"
            ></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#gc-major)"
          opacity="0.09"
        ></rect>
      </svg>
      <div
        className="bloom"
        style={{
          left: "50%",
          top: "-120px",
          width: "900px",
          height: "560px",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(closest-side, rgba(7,201,131,0.08), rgba(7,201,131,0) 70%)",
        }}
      ></div>
      <svg
        className="tex tex-grain"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <filter id="gn2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#gn2)"
          opacity="0.05"
        ></rect>
      </svg>
      <div className="wrap">
        <div className="sec-head center">
          <div className="cap">The difference, on one identity</div>
          <h2>Same credential. Two very different reports.</h2>
          <p>
            An illustrative comparison for a 214-day-old key: a flat scanner
            record beside the evidence-rich view Nomyr is designed to provide.
          </p>
        </div>
        <div className="cmp">
          <div className="cmp-card cmp-a">
            <div>
              <span className="verdict v-neutral">Conventional scanner</span>
            </div>
            <div className="readout">
              <div className="r">
                <span className="k">identity</span>
                <span>bot-payroll-sync</span>
              </div>
              <div className="r">
                <span className="k">credential</span>
                <span>static API key · 214d</span>
              </div>
              <div className="r">
                <span className="k">severity</span>
                <span>HIGH</span>
              </div>
              <div className="r">
                <span className="k">owner</span>
                <span>j.alvarez</span>
                <span className="rmark rx">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF9DA4"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6L6 18"></path>
                  </svg>
                </span>
              </div>
              <div className="r">
                <span className="k">coverage</span>
                <span>64% ▲ improved</span>
                <span className="rmark rx">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF9DA4"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6L6 18"></path>
                  </svg>
                </span>
              </div>
              <div className="r">
                <span className="k">status</span>
                <span>1 finding open</span>
              </div>
            </div>
            <div className="cmp-foot">
              The owner is whoever created it — a contractor who left in March.
              Coverage “improved” because the source stopped returning logs.
              Both readings are wrong in the direction that feels reassuring.
            </div>
          </div>
          <div className="cmp-card cmp-b">
            <div>
              <span className="verdict v-ok">Nomyr</span>
            </div>
            <div className="readout">
              <div className="r">
                <span className="k">identity</span>
                <span>bot-payroll-sync · mixed-use</span>
              </div>
              <div className="r">
                <span className="k">credential</span>
                <span>static API key · 214d · unvaulted</span>
              </div>
              <div className="r">
                <span className="k">severity</span>
                <span>HIGH · confidence 96%</span>
              </div>
              <div className="r">
                <span className="k">blast radius</span>
                <span>1 resource · no lateral reach</span>
                <span className="rmark rv">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#07603F"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l5 5 9-11"></path>
                  </svg>
                </span>
              </div>
              <div className="r">
                <span className="k">owner</span>
                <span>UNRESOLVED · creator departed</span>
                <span className="rmark rv">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#07603F"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l5 5 9-11"></path>
                  </svg>
                </span>
              </div>
              <div className="r">
                <span className="k">coverage</span>
                <span>64% · usage coverage UNKNOWN</span>
                <span className="rmark rv">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#07603F"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l5 5 9-11"></path>
                  </svg>
                </span>
              </div>
              <div className="r">
                <span className="k">lifecycle</span>
                <span>stuck at OWNED</span>
              </div>
            </div>
            <div className="cmp-foot">
              Same facts, none of them rounded toward comfort. High severity but
              narrow reach, an owner that is an open question with a named next
              action, and a coverage drop reported as a loss of evidence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
