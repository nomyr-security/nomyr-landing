export function OperatingModes() {
  return (
    <section
      className="sec"
      style={{ paddingTop: "0" }}
      id="operating-modes"
      aria-label="Operating Modes"
    >
      <div className="wrap">
        <div className="sec-head sec-split">
          <div>
            <div className="cap">Operating modes</div>
            <h2>You decide how much Nomyr is allowed to do.</h2>
          </div>
          <p>
            Four operating modes in the Nomyr design. Explicit scope, human
            accountability, no silent escalation.
          </p>
        </div>
        <div className="modes">
          <div className="mode">
            <div className="mode-i">01</div>
            <h3>Observe</h3>
            <div className="mode-bar">
              <i style={{ width: "25%" }}></i>
            </div>
            <p>
              Discovers and evidences everything. Takes no automated action at
              all. Where every deployment starts.
            </p>
          </div>
          <div className="mode">
            <div className="mode-i">02</div>
            <h3>Assisted</h3>
            <div className="mode-bar">
              <i style={{ width: "50%" }}></i>
            </div>
            <p>
              Proposes fixes and drafts the change for a human to approve.
              Nothing moves without a signature.
            </p>
          </div>
          <div className="mode">
            <div className="mode-i">03</div>
            <h3>Policy-automated</h3>
            <div className="mode-bar">
              <i style={{ width: "75%" }}></i>
            </div>
            <p>
              Executes the low-risk, high-confidence actions you have defined.
              Everything else still routes to a person.
            </p>
          </div>
          <div className="mode">
            <div className="mode-i">04</div>
            <h3>Enforced</h3>
            <div className="mode-bar">
              <i style={{ width: "100%" }}></i>
            </div>
            <p>
              Blocks non-compliant access at request time, where a supported
              enforcement point exists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
