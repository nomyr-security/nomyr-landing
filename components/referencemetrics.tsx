export function ReferenceMetrics() {
  return (
    <section
      className="stats"
      id="reference-metrics"
      aria-label="Reference Metrics"
    >
      <div className="stats-card">
        <div className="stats-inner">
          <div className="stat">
            <div className="v">3,006</div>
            <div className="rule"></div>
            <div className="l">
              non-human identities discovered across 14 connected sources
            </div>
          </div>
          <div className="stat">
            <div className="v">73%</div>
            <div className="rule"></div>
            <div className="l">
              owner-confirmed — the remaining 27% are tracked as unresolved, not
              as fine
            </div>
          </div>
          <div className="stat">
            <div className="v">4</div>
            <div className="rule"></div>
            <div className="l">
              evidence states kept separate from severity, never averaged into
              one score
            </div>
          </div>
          <div className="stat">
            <div className="v">0</div>
            <div className="rule"></div>
            <div className="l">
              owners ever assigned from a name match alone
            </div>
          </div>
        </div>
        <div className="stats-foot">
          Illustrative product scenarios throughout this page — not customer
          results or a live connected environment.
        </div>
      </div>
    </section>
  );
}
