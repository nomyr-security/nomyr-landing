export function Platform() {
  return (
    <section
      className="sec"
      style={{ paddingTop: "0" }}
      id="platform"
      aria-label="Platform"
    >
      <div className="wrap">
        <div className="sec-head sec-split">
          <div>
            <div className="cap">What the inventory leaves out</div>
            <h2>An identity list is not an answer.</h2>
          </div>
          <p>
            Every scanner can enumerate service accounts. The work starts at the
            three questions a flat list can't answer — and each one shapes the
            platform we’re building.
          </p>
        </div>

        <div className="panels">
          <div className="panel panel-wide">
            <div className="panel-body">
              <div>
                <h3>Who is accountable for this one?</h3>
                <p>
                  Candidate owners are ranked from authoritative evidence —
                  service-catalog fields, CODEOWNERS, creation events — with the
                  evidence shown beside the confidence. When nothing
                  authoritative exists, the identity stays unresolved rather
                  than taking the nearest plausible name.
                </p>
              </div>
              <div className="own">
                <div className="own-row">
                  <div className="own-who">Rev Ops</div>
                  <div className="own-ev">Service catalog owner field</div>
                  <div className="own-bar">
                    <i style={{ width: "94%" }}></i>
                  </div>
                  <div className="own-conf">94%</div>
                </div>
                <div className="own-row">
                  <div className="own-who">Payroll Eng</div>
                  <div className="own-ev">CODEOWNERS + creation event</div>
                  <div className="own-bar">
                    <i style={{ width: "71%" }}></i>
                  </div>
                  <div className="own-conf">71%</div>
                </div>
                <div className="own-row">
                  <div className="own-who">DevEx</div>
                  <div className="own-ev">Repository responsibility</div>
                  <div className="own-bar">
                    <i style={{ width: "58%" }}></i>
                  </div>
                  <div className="own-conf">58%</div>
                </div>
                <div className="own-row own-row-null">
                  <div className="own-who">No candidate</div>
                  <div className="own-ev">
                    No authoritative field — left unresolved
                  </div>
                  <div className="own-bar"></div>
                  <div className="own-conf">—</div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-third">
            <h3>How far does it reach?</h3>
            <p>
              Blast radius is scored on its own axis, beside severity — so a
              mid-severity finding on a widely-reachable identity stops hiding
              behind its rating.
            </p>
            <div className="panel-art">
              <svg
                viewBox="0 0 300 224"
                className="art"
                style={{ maxWidth: "256px" }}
                fill="none"
                role="img"
                aria-label="Reach rings: 3 direct resources, 12 one hop out, 340 reachable in total"
              >
                <circle cx="150" cy="112" r="94" stroke="#E1E9E8"></circle>
                <circle cx="150" cy="112" r="64" stroke="#E1E9E8"></circle>
                <circle cx="150" cy="112" r="34" stroke="#E1E9E8"></circle>
                <circle cx="182.2" cy="23.7" r="3.2" fill="#B01E2E"></circle>
                <circle cx="217.4" cy="46.4" r="3.2" fill="#B01E2E"></circle>
                <circle cx="239.1" cy="82.1" r="3.2" fill="#B01E2E"></circle>
                <circle cx="243.3" cy="123.8" r="3.2" fill="#B01E2E"></circle>
                <circle cx="228.9" cy="163.1" r="3.2" fill="#B01E2E"></circle>
                <circle cx="198.9" cy="192.3" r="3.2" fill="#B01E2E"></circle>
                <circle cx="159.3" cy="205.5" r="3.2" fill="#B01E2E"></circle>
                <circle cx="117.8" cy="200.3" r="3.2" fill="#B01E2E"></circle>
                <circle cx="82.6" cy="177.6" r="3.2" fill="#B01E2E"></circle>
                <circle cx="60.9" cy="141.9" r="3.2" fill="#B01E2E"></circle>
                <circle cx="56.7" cy="100.2" r="3.2" fill="#B01E2E"></circle>
                <circle cx="71.1" cy="60.9" r="3.2" fill="#B01E2E"></circle>
                <circle cx="101.1" cy="31.7" r="3.2" fill="#B01E2E"></circle>
                <circle cx="140.7" cy="18.5" r="3.2" fill="#B01E2E"></circle>
                <circle cx="171.9" cy="51.9" r="3.2" fill="#C98A2E"></circle>
                <circle cx="210.7" cy="91.7" r="3.2" fill="#C98A2E"></circle>
                <circle cx="203.7" cy="146.8" r="3.2" fill="#C98A2E"></circle>
                <circle cx="156.3" cy="175.7" r="3.2" fill="#C98A2E"></circle>
                <circle cx="104.1" cy="156.6" r="3.2" fill="#C98A2E"></circle>
                <circle cx="86.5" cy="104.0" r="3.2" fill="#C98A2E"></circle>
                <circle cx="116.7" cy="57.4" r="3.2" fill="#C98A2E"></circle>
                <circle cx="161.7" cy="80.1" r="3.2" fill="#0C3B43"></circle>
                <circle cx="171.8" cy="138.1" r="3.2" fill="#0C3B43"></circle>
                <circle cx="116.5" cy="117.9" r="3.2" fill="#0C3B43"></circle>
                <circle cx="150" cy="112" r="13" fill="#0C3B43"></circle>
                <circle
                  cx="150"
                  cy="112"
                  r="20"
                  stroke="#0C3B43"
                  opacity="0.35"
                ></circle>
                <text
                  x="246"
                  y="30"
                  fontSize="10"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#B01E2E"
                >
                  340
                </text>
                <text
                  x="214"
                  y="62"
                  fontSize="10"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#8A5A00"
                >
                  12
                </text>
                <text
                  x="180"
                  y="94"
                  fontSize="10"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#0C3B43"
                >
                  3
                </text>
              </svg>
            </div>
            <div className="chiprow">
              <span className="verdict v-warn">Severity · medium</span>
              <span className="verdict v-danger">Reach · 340 resources</span>
            </div>
          </div>
          <div className="panel panel-half">
            <h3>Is that access actually effective?</h3>
            <p>
              Configured, observed and evaluated access are three different
              claims. Nomyr walks the real path, and when one policy condition
              can't be read it reports an unproven path — not an assumed allow,
              not an assumed deny.
            </p>
            <div className="panel-art">
              <svg
                viewBox="0 0 420 100"
                className="art"
                fill="none"
                role="img"
                aria-label="Access path: three hops evaluated, the fourth condition unread, so the path is not proven effective"
              >
                <line
                  x1="33"
                  y1="46"
                  x2="107"
                  y2="46"
                  stroke="#0C3B43"
                  strokeWidth="1.5"
                ></line>
                <line
                  x1="133"
                  y1="46"
                  x2="207"
                  y2="46"
                  stroke="#0C3B43"
                  strokeWidth="1.5"
                ></line>
                <line
                  x1="233"
                  y1="46"
                  x2="307"
                  y2="46"
                  stroke="#5A7274"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                ></line>
                <line
                  x1="333"
                  y1="46"
                  x2="390"
                  y2="46"
                  stroke="#E1E9E8"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="20"
                  cy="46"
                  r="13"
                  fill="#0C3B43"
                  stroke="#0C3B43"
                  strokeWidth="1.75"
                ></circle>
                <text
                  x="20"
                  y="80"
                  textAnchor="middle"
                  fontSize="10.5"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                >
                  identity
                </text>
                <circle
                  cx="120"
                  cy="46"
                  r="13"
                  fill="#0C3B43"
                  stroke="#0C3B43"
                  strokeWidth="1.75"
                ></circle>
                <text
                  x="120"
                  y="80"
                  textAnchor="middle"
                  fontSize="10.5"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                >
                  role
                </text>
                <circle
                  cx="220"
                  cy="46"
                  r="13"
                  fill="#0C3B43"
                  stroke="#0C3B43"
                  strokeWidth="1.75"
                ></circle>
                <text
                  x="220"
                  y="80"
                  textAnchor="middle"
                  fontSize="10.5"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                >
                  policy
                </text>
                <circle
                  cx="320"
                  cy="46"
                  r="13"
                  fill="#FFFFFF"
                  stroke="#5A7274"
                  strokeWidth="1.75"
                  strokeDasharray="3 3"
                ></circle>
                <text
                  x="320"
                  y="80"
                  textAnchor="middle"
                  fontSize="10.5"
                  fontFamily="'IBM Plex Sans', sans-serif"
                  fill="#4E6C6E"
                >
                  condition
                </text>
                <circle cx="400" cy="46" r="7" fill="#E1E9E8"></circle>
                <text
                  x="320"
                  y="22"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'IBM Plex Mono', monospace"
                  fill="#5A7274"
                >
                  unread
                </text>
              </svg>
            </div>
            <div className="chiprow">
              <span className="verdict v-neutral">3 of 4 hops evaluated</span>
              <span className="verdict v-warn">Not proven effective</span>
            </div>
          </div>
          <div className="panel panel-half">
            <h3>What is coverage really telling you?</h3>
            <p>
              When a source loses log access, most tools quietly show an
              improvement. Nomyr separates what it can see from what it can
              prove — revoked log access marks usage coverage unknown, and never
              marks an identity inactive.
            </p>
            <div className="panel-art">
              <div className="cov">
                <div className="cov-row">
                  <div className="cov-name">AWS Organizations</div>
                  <div className="cov-track">
                    <i style={{ width: "97%", background: "#07C983" }}></i>
                  </div>
                  <div className="cov-note">97%</div>
                </div>
                <div className="cov-row">
                  <div className="cov-name">HashiCorp Vault</div>
                  <div className="cov-track">
                    <i style={{ width: "100%", background: "#07C983" }}></i>
                  </div>
                  <div className="cov-note">100%</div>
                </div>
                <div className="cov-row">
                  <div className="cov-name">Okta</div>
                  <div className="cov-track">
                    <i style={{ width: "88%", background: "#C98A2E" }}></i>
                  </div>
                  <div className="cov-note">88% · rate limited</div>
                </div>
                <div className="cov-row">
                  <div className="cov-name">Active Directory</div>
                  <div className="cov-track">
                    <i style={{ width: "64%", background: "#5A7274" }}></i>
                  </div>
                  <div className="cov-note">64% · usage unknown</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
