import { SourceTerminal } from "./source-terminal";

export function OpenSource() {
  return (
    <section className="sec" id="open-source" aria-label="Open Source">
      <div className="wrap">
        <div className="sec-head sec-split">
          <div>
            <div className="cap">Open source at the core</div>
            <h2>The governance layer your identity stack never had.</h2>
          </div>
          <p>
            SPIFFE and SPIRE issue workload identities. cert-manager renews
            certificates. OpenBao and Vault hold secrets. All of them do their
            job well, and none of them can tell you who is accountable for the
            service account that has been reaching production for 214 days.
            Nomyr's core is the open layer that answers that — designed for
            self-hosting and transparent, evidence-driven decisions.
          </p>
        </div>
        <div className="oss-split">
          <SourceTerminal />
          <div className="oss-points">
            <div className="oss-point">
              <h3>Your graph never leaves your network</h3>
              <p>
                Self-hosted means identity metadata, access paths and evidence
                stay inside your perimeter by construction — not because a
                vendor architecture promises it. Nomyr is designed around local
                control of evidence and explicitly authorized connections.
              </p>
            </div>
            <div className="oss-point">
              <h3>Source you can inspect</h3>
              <p>
                Explore the source, follow the decisions behind the product, and
                contribute improvements. Open development gives your team a
                direct way to understand the platform and shape what comes next.
              </p>
            </div>
            <div className="oss-point">
              <h3>The analysis engine is not the paid part</h3>
              <p>
                The open-core vision includes discovery, the graph,
                effective-access evaluation, posture rules, ownership resolution
                and the agent control plane. The commercial vision supports
                organizational scale — never a better answer to the same
                question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
