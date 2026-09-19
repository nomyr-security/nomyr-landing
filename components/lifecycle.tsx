export function Lifecycle() {
  return (
    <section className="sec" id="lifecycle" aria-label="Lifecycle">
      <div className="wrap">
        <div className="sec-head sec-split">
          <div>
            <div className="cap">Beyond discovery</div>
            <h2>Then it has to actually get fixed.</h2>
          </div>
          <p>
            Findings nobody can act on are just a longer list. Lifecycle runs,
            agent governance and a grounded assistant carry each one to a
            decision someone signed.
          </p>
        </div>
        <div className="panels">
          <div className="panel panel-half">
            <h3>Lifecycle that admits where it's stuck</h3>
            <p>
              Provisioning, ownership, vaulting, rotation and retirement run as
              one auditable track. An identity parked at a stage shows which
              stage and why — here, no accountable owner means rotation policy
              has nobody to attach to.
            </p>
            <div className="panel-art">
              <svg
                viewBox="0 0 400 88"
                className="art"
                fill="none"
                role="img"
                aria-label="Lifecycle track: provisioned, then stuck at owned, with vaulted, rotated and retired still ahead"
              >
                <circle
                  cx="34"
                  cy="40"
                  r="11"
                  fill="#07C983"
                  stroke="#07C983"
                  strokeWidth="1.75"
                ></circle>
                <path
                  d="M29 40 l4 4 7-8"
                  stroke="#08341C"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <text
                  x="34"
                  y="72"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                  fontWeight="400"
                >
                  Provisioned
                </text>
                <line
                  x1="47"
                  y1="40"
                  x2="105"
                  y2="40"
                  stroke="#07C983"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="118"
                  cy="40"
                  r="11"
                  fill="#FFFFFF"
                  stroke="#0C3B43"
                  strokeWidth="2.5"
                ></circle>
                <circle
                  cx="118"
                  cy="40"
                  r="18"
                  stroke="#0C3B43"
                  opacity="0.3"
                ></circle>
                <path d="M118 8 v14" stroke="#8A5A00" strokeWidth="1.5"></path>
                <circle cx="118" cy="6" r="3" fill="#8A5A00"></circle>
                <text
                  x="118"
                  y="72"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#0C3B43"
                  fontWeight="600"
                >
                  Owned
                </text>
                <line
                  x1="131"
                  y1="40"
                  x2="189"
                  y2="40"
                  stroke="#E1E9E8"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="202"
                  cy="40"
                  r="11"
                  fill="#FFFFFF"
                  stroke="#E1E9E8"
                  strokeWidth="1.75"
                ></circle>
                <text
                  x="202"
                  y="72"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                  fontWeight="400"
                >
                  Vaulted
                </text>
                <line
                  x1="215"
                  y1="40"
                  x2="273"
                  y2="40"
                  stroke="#E1E9E8"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="286"
                  cy="40"
                  r="11"
                  fill="#FFFFFF"
                  stroke="#E1E9E8"
                  strokeWidth="1.75"
                ></circle>
                <text
                  x="286"
                  y="72"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                  fontWeight="400"
                >
                  Rotated
                </text>
                <line
                  x1="299"
                  y1="40"
                  x2="357"
                  y2="40"
                  stroke="#E1E9E8"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="370"
                  cy="40"
                  r="11"
                  fill="#FFFFFF"
                  stroke="#E1E9E8"
                  strokeWidth="1.75"
                ></circle>
                <text
                  x="370"
                  y="72"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                  fontWeight="400"
                >
                  Retired
                </text>
              </svg>
            </div>
          </div>
          <div className="panel panel-half">
            <h3>A control plane for AI agents</h3>
            <p>
              Allow, flag or block what an agent may do, evaluated before the
              action executes and scoped by agent, team and resource. Agents
              with no declared manifest are flagged by default — visible
              immediately, never blocked blind.
            </p>
            <div className="panel-art">
              <svg
                viewBox="0 0 420 180"
                className="art"
                fill="none"
                role="img"
                aria-label="Agent control plane: one request allowed, one flagged, one blocked at the gate before execution"
              >
                <rect
                  x="8"
                  y="46"
                  width="64"
                  height="88"
                  rx="10"
                  fill="#F3F7F6"
                  stroke="#E1E9E8"
                ></rect>
                <rect
                  x="352"
                  y="46"
                  width="60"
                  height="88"
                  rx="10"
                  fill="#F3F7F6"
                  stroke="#E1E9E8"
                ></rect>
                <text
                  x="40"
                  y="96"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#4E6C6E"
                >
                  agent
                </text>
                <text
                  x="382"
                  y="96"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#4E6C6E"
                >
                  resource
                </text>
                <line
                  x1="72"
                  y1="66"
                  x2="340"
                  y2="66"
                  stroke="#07C983"
                  strokeWidth="1.9"
                ></line>
                <path
                  d="M323 62 l5 5 9-10"
                  stroke="#07C983"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <line
                  x1="72"
                  y1="96"
                  x2="340"
                  y2="96"
                  stroke="#C98A2E"
                  strokeWidth="1.9"
                ></line>
                <path
                  d="M330 87 v9 M330 100 v1.5"
                  stroke="#C98A2E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                ></path>
                <line
                  x1="72"
                  y1="126"
                  x2="190"
                  y2="126"
                  stroke="#B01E2E"
                  strokeWidth="1.9"
                  strokeDasharray="4 4"
                ></line>
                <path
                  d="M199 120 l10 10 M209 120 l-10 10"
                  stroke="#B01E2E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                ></path>
                <rect
                  x="182"
                  y="34"
                  width="8"
                  height="112"
                  rx="4"
                  fill="#0C3B43"
                ></rect>
                <text
                  x="186"
                  y="24"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#0C3B43"
                  letterSpacing="0.06em"
                >
                  GATE
                </text>
                <text
                  x="186"
                  y="166"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#4E6C6E"
                >
                  evaluated before execution
                </text>
              </svg>
            </div>
          </div>
          <div className="panel panel-wide">
            <div className="panel-body">
              <div>
                <h3>Ask Nomyr drafts the fix, and still waits for you</h3>
                <p>
                  The assistant works from the same evidence the screens show,
                  cites the finding it is acting on, and writes the remediation
                  step by step. It will not execute a production change without
                  a human approving the plan — that boundary is a product
                  decision, not a setting.
                </p>
                <div className="chiprow">
                  <span className="verdict v-ok">Cites its evidence</span>
                  <span className="verdict v-warn">Waits for approval</span>
                </div>
              </div>
              <div className="chat">
                <div className="chat-u">
                  Why is bot-payroll-sync still flagged after the rotation run?
                </div>
                <div className="chat-a">
                  RUN-9905 rotated the superseded key 7c1a…, not the active key
                  9f21…c04a — that one is still 214 days old and unvaulted. I've
                  drafted a rotation for the right key.
                  <div className="chat-cites">
                    <span>POST-HYG-014</span>
                    <span>RUN-9905</span>
                    <span>key 9f21…</span>
                  </div>
                </div>
                <div className="chat-gate">
                  <span className="chat-dot"></span>Draft ready · waiting for
                  your approval<b>Review plan</b>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-third">
            <h3>Evidence you can hand to an auditor</h3>
            <p>
              Every decision is timestamped with its actor, and an evidence
              package replays to the same findings it was built from.
            </p>
            <div className="panel-art">
              <div className="evpkg">
                <div className="ev-row">
                  <span className="ev-k">package</span>
                  <span>q3-access-review.evidence</span>
                </div>
                <div className="ev-row">
                  <span className="ev-k">sha256</span>
                  <span>3f9a c21e … 7b04</span>
                </div>
                <div className="ev-row">
                  <span className="ev-k">replays to</span>
                  <span>641 findings · identical</span>
                </div>
                <div className="ev-row">
                  <span className="ev-k">signed</span>
                  <span>2 approvers · 18 Sep</span>
                </div>
                <div className="ev-seal">
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
                  </svg>{" "}
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
