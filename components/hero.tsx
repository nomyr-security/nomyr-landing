import { InstallCommand, SourceTerminal } from "./source-terminal";

type GraphFlowDotProps = {
  path: string;
  color: string;
  duration: number;
  delay: number;
};

function GraphFlowDot({
  path,
  color,
  duration,
  delay,
}: GraphFlowDotProps) {
  return (
    <circle className="hg-flow-dot" r="3" fill={color}>
      <animateMotion
        path={path}
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

export function Hero() {
  return (
    <header className="masthead" id="top">
      <svg className="tex" aria-hidden="true">
        <defs>
          <pattern id="gh" width="34" height="34" patternUnits="userSpaceOnUse">
            <path
              d="M 34 0 L 0 0 0 34"
              fill="none"
              stroke="#3FB5C4"
              strokeWidth="1"
            ></path>
          </pattern>
          <pattern
            id="gh-major"
            width="136"
            height="136"
            patternUnits="userSpaceOnUse"
          >
            <rect width="136" height="136" fill="url(#gh)"></rect>
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
          fill="url(#gh-major)"
          opacity="0.1"
        ></rect>
      </svg>
      <svg
        className="tex tex-drift"
        aria-hidden="true"
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMid slice"
        id="hcon"
      >
        <g opacity="0.2">
          <line
            x1="90"
            y1="70"
            x2="212"
            y2="148"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="212"
            y1="148"
            x2="524"
            y2="108"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="408"
            y1="210"
            x2="646"
            y2="188"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="646"
            y1="188"
            x2="868"
            y2="164"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="742"
            y1="78"
            x2="978"
            y2="96"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="978"
            y1="96"
            x2="1216"
            y2="118"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="1104"
            y1="196"
            x2="1330"
            y2="214"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="148"
            y1="262"
            x2="268"
            y2="330"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="268"
            y1="330"
            x2="396"
            y2="372"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="560"
            y1="300"
            x2="700"
            y2="356"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="840"
            y1="298"
            x2="980"
            y2="364"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="1128"
            y1="314"
            x2="1272"
            y2="380"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="318"
            y1="62"
            x2="524"
            y2="108"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
          <line
            x1="868"
            y1="164"
            x2="1104"
            y2="196"
            stroke="#3FB5C4"
            strokeWidth="0.75"
          ></line>
        </g>
        <g opacity="0.38">
          <circle cx="90" cy="70" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="212" cy="148" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="318" cy="62" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="408" cy="210" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="524" cy="108" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="646" cy="188" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="742" cy="78" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="868" cy="164" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="978" cy="96" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="1104" cy="196" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="1216" cy="118" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="1330" cy="214" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="148" cy="262" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="268" cy="330" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="396" cy="372" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="560" cy="300" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="700" cy="356" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="840" cy="298" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="980" cy="364" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="1128" cy="314" r="1.8" fill="#3FB5C4"></circle>
          <circle cx="1272" cy="380" r="1.8" fill="#3FB5C4"></circle>
        </g>
      </svg>
      <div
        className="bloom"
        style={{
          left: "50%",
          top: "-180px",
          width: "1100px",
          height: "760px",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(closest-side, rgba(7,201,131,0.10), rgba(7,201,131,0) 70%)",
        }}
      ></div>
      <div
        className="bloom"
        style={{
          left: "12%",
          top: "220px",
          width: "760px",
          height: "620px",
          background:
            "radial-gradient(closest-side, rgba(63,181,196,0.08), rgba(63,181,196,0) 70%)",
        }}
      ></div>
      <div
        className="bloom"
        style={{
          right: "4%",
          top: "120px",
          width: "680px",
          height: "560px",
          background:
            "radial-gradient(closest-side, rgba(23,100,111,0.16), rgba(23,100,111,0) 70%)",
        }}
      ></div>
      <svg
        className="tex tex-grain"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <filter id="gn1">
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
          filter="url(#gn1)"
          opacity="0.055"
        ></rect>
      </svg>

      <nav className="nav" aria-label="Main navigation">
        <details className="mobile-nav">
          <summary aria-label="Toggle navigation">Menu</summary>
          <div className="mobile-menu">
            <a href="#platform">Platform</a>
            <a href="#open-source">Open source</a>
            <a href="#integrations">Integrations</a>
            <a href="#community">Community</a>
            <a href="https://github.com/nomyr-security/nomyr#local-development">
              Documentation
            </a>
          </div>
        </details>
        <a className="brand" href="#top" aria-label="Nomyr home">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/nomyr-lockup-on-dark.svg`} alt="Nomyr" width="114" height="32" />
        </a>
        <div className="navlinks">
          <a href="#platform">Platform</a>
          <a href="#open-source">Open source</a>
          <a href="#integrations">Integrations</a>
          <a href="https://github.com/nomyr-security/nomyr#local-development">
            Docs
          </a>
          <a href="#community">Community</a>
        </div>
        <div className="grow"></div>
        <a className="ghchip" href="https://github.com/nomyr-security/nomyr">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="#ECF3F1"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
          GitHub
        </a>
        <a
          className="btn btn-accent"
          href="mailto:oss@nomyr.io?subject=Nomyr%20walkthrough"
        >
          Get a walkthrough
        </a>
      </nav>

      <div className="hero">
        <div className="cap rise" style={{ animationDelay: "0s" }}>
          Open-source non-human identity security
        </div>
        <h1 className="rise" style={{ animationDelay: ".08s" }}>
          Every machine identity you have, and the{" "}
          <span className="serif">human who answers for it.</span>
        </h1>
        <p className="rise" style={{ animationDelay: ".16s" }}>
          Service accounts, API keys, workload identities and AI agents power
          your business. We’re building Nomyr to map what each one can reach,
          resolve who is accountable for it, and never quietly report a blind
          spot as good news.
        </p>
        <div className="hero-ctas rise" style={{ animationDelay: ".24s" }}>
          <a
            className="btn btn-accent btn-lg"
            href="mailto:oss@nomyr.io?subject=Nomyr%20walkthrough"
          >
            Get a walkthrough
          </a>
          <a
            className="btn btn-line-dark btn-lg"
            href="https://github.com/nomyr-security/nomyr#local-development"
          >
            Explore the source
          </a>
        </div>
        <InstallCommand />
        <div className="hero-note rise" style={{ animationDelay: ".4s" }}>
          Free and open source, from discovery to retirement.
        </div>

        <div
          className="graph-viewport"
          tabIndex={0}
          role="region"
          aria-label="Illustrative identity graph; scroll horizontally on small screens"
        >
          <div
            className="hg motion-region"
            style={{ width: "1180px", height: "420px" }}
          >
            <svg
              className="hg-edges"
              width="1180"
              height="420"
              viewBox="0 0 1180 420"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="hgglow"
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="b"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <path
                className="draw"
                style={{ animationDelay: "0.7s" }}
                d="M210 51 C 320 51, 330 204, 420 204"
                pathLength="1"
                stroke="#3FB5C4"
                strokeWidth="1.25"
                opacity="0.45"
              ></path>
              <path
                className="draw"
                style={{ animationDelay: "0.75s" }}
                d="M210 125 C 320 125, 330 204, 420 204"
                pathLength="1"
                stroke="#3FB5C4"
                strokeWidth="1.25"
                opacity="0.45"
              ></path>
              <path
                className="draw"
                style={{ animationDelay: "0.7999999999999999s" }}
                d="M210 199 C 320 199, 330 204, 420 204"
                pathLength="1"
                stroke="#3FB5C4"
                strokeWidth="1.25"
                opacity="0.45"
              ></path>
              <path
                className="draw"
                style={{ animationDelay: "0.85s" }}
                d="M210 273 C 320 273, 330 204, 420 204"
                pathLength="1"
                stroke="#3FB5C4"
                strokeWidth="1.25"
                opacity="0.45"
              ></path>
              <path
                className="draw"
                style={{ animationDelay: "0.8999999999999999s" }}
                d="M210 347 C 320 347, 330 204, 420 204"
                pathLength="1"
                stroke="#3FB5C4"
                strokeWidth="1.25"
                opacity="0.45"
              ></path>
              <g filter="url(#hgglow)">
                <path
                  className="draw"
                  style={{ animationDelay: "0.85s" }}
                  pathLength="1"
                  d="M608 204 C 660 204, 650 173, 700 173"
                  stroke="#07C983"
                  strokeWidth="1.6"
                ></path>
                <path
                  className="draw"
                  style={{ animationDelay: "0.85s" }}
                  pathLength="1"
                  d="M608 204 C 660 204, 650 293, 700 293"
                  stroke="#3FB5C4"
                  strokeWidth="1.6"
                ></path>
                <path
                  className="draw"
                  style={{ animationDelay: "0.85s" }}
                  pathLength="1"
                  d="M778 150 L 778 100"
                  stroke="#07C983"
                  strokeWidth="1.6"
                ></path>
                <path
                  className="draw"
                  style={{ animationDelay: "0.85s" }}
                  pathLength="1"
                  d="M856 173 C 878 173, 870 131, 890 131"
                  stroke="#3FB5C4"
                  strokeWidth="1.6"
                ></path>
                <path
                  className="draw"
                  style={{ animationDelay: "1.2s" }}
                  pathLength="1"
                  d="M1046 131 C 1058 131, 1056 193, 1064 193"
                  stroke="#FF9DA4"
                  strokeWidth="2"
                ></path>
              </g>
              <path
                className="draw"
                style={{ animationDelay: "0.85s" }}
                pathLength="1"
                d="M856 293 C 878 293, 870 255, 890 255"
                stroke="#B78CE8"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              ></path>
              <path
                className="draw"
                style={{ animationDelay: "1.2s" }}
                pathLength="1"
                d="M1046 255 C 1058 255, 1056 193, 1064 193"
                stroke="#B8C9C9"
                strokeWidth="1.5"
                strokeDasharray="2 4"
                opacity="0.7"
              ></path>
              <g className="hg-flow" filter="url(#hgglow)">
                <GraphFlowDot
                  path="M210 51 C 320 51, 330 204, 420 204"
                  color="#3FB5C4"
                  duration={6.8}
                  delay={-1.2}
                />
                <GraphFlowDot
                  path="M210 125 C 320 125, 330 204, 420 204"
                  color="#3FB5C4"
                  duration={7.4}
                  delay={-4.6}
                />
                <GraphFlowDot
                  path="M210 199 C 320 199, 330 204, 420 204"
                  color="#3FB5C4"
                  duration={6.2}
                  delay={-3.1}
                />
                <GraphFlowDot
                  path="M210 273 C 320 273, 330 204, 420 204"
                  color="#3FB5C4"
                  duration={7.8}
                  delay={-5.7}
                />
                <GraphFlowDot
                  path="M210 347 C 320 347, 330 204, 420 204"
                  color="#3FB5C4"
                  duration={7}
                  delay={-2.4}
                />
                <GraphFlowDot
                  path="M608 204 C 660 204, 650 173, 700 173"
                  color="#07C983"
                  duration={5.2}
                  delay={-2.8}
                />
                <GraphFlowDot
                  path="M608 204 C 660 204, 650 293, 700 293"
                  color="#3FB5C4"
                  duration={5.8}
                  delay={-1.6}
                />
                <GraphFlowDot
                  path="M856 173 C 878 173, 870 131, 890 131"
                  color="#3FB5C4"
                  duration={4.8}
                  delay={-3.6}
                />
                <GraphFlowDot
                  path="M1046 131 C 1058 131, 1056 193, 1064 193"
                  color="#FF9DA4"
                  duration={4.2}
                  delay={-1.8}
                />
                <GraphFlowDot
                  path="M856 293 C 878 293, 870 255, 890 255"
                  color="#B78CE8"
                  duration={5.1}
                  delay={-2.2}
                />
                <GraphFlowDot
                  path="M1046 255 C 1058 255, 1056 193, 1064 193"
                  color="#B8C9C9"
                  duration={4.6}
                  delay={-3.4}
                />
              </g>
            </svg>

            <div
              className="hg-src rise"
              style={{ top: "34px", animationDelay: "0.55s" }}
            >
              <span className="hg-src-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#CFE0DE"
                  role="img"
                  aria-label="Okta"
                >
                  <path d="M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"></path>
                </svg>
              </span>
              Okta
            </div>
            <div
              className="hg-src rise"
              style={{ top: "108px", animationDelay: "0.6100000000000001s" }}
            >
              <span className="hg-src-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#CFE0DE"
                  role="img"
                  aria-label="Google Cloud"
                >
                  <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"></path>
                </svg>
              </span>
              Google Cloud
            </div>
            <div
              className="hg-src rise"
              style={{ top: "182px", animationDelay: "0.67s" }}
            >
              <span className="hg-src-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#CFE0DE"
                  role="img"
                  aria-label="GitHub"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </span>
              GitHub
            </div>
            <div
              className="hg-src rise"
              style={{ top: "256px", animationDelay: "0.73s" }}
            >
              <span className="hg-src-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#CFE0DE"
                  role="img"
                  aria-label="Jenkins"
                >
                  <path d="M2.872 24h-.975a3.866 3.866 0 01-.07-.197c-.215-.666-.594-1.49-.692-2.154-.146-.984.78-1.039 1.374-1.465.915-.66 1.635-1.025 2.627-1.62.295-.179 1.182-.624 1.281-.829.201-.408-.345-.982-.49-1.3-.225-.507-.345-.937-.376-1.435-.824-.13-1.455-.627-1.844-1.185-.63-.925-1.066-2.635-.525-3.936.045-.103.254-.305.285-.463.06-.308-.105-.72-.12-1.048-.06-1.692.284-3.15 1.425-3.66.463-1.84 2.113-2.453 3.673-3.367.58-.342 1.224-.562 1.89-.807 2.372-.877 6.027-.712 7.994.783.836.633 2.176 1.97 2.656 2.939 1.262 2.555 1.17 6.825.287 9.934-.12.421-.29 1.032-.533 1.533-.168.35-.689 1.05-.625 1.36.064.314 1.19 1.17 1.432 1.395.434.422 1.26.975 1.324 1.5.07.557-.248 1.336-.41 1.875-.217.721-.436 1.441-.654 2.131H2.87zm11.104-3.54c-.545-.3-1.361-.622-2.065-.757-.87-.164-.78 1.188-.75 1.994.03.643.36 1.316.51 1.744.076.197.09.41.256.449.3.068 1.29-.326 1.575-.479.6-.328 1.064-.844 1.574-1.189.016-.17.016-.34.03-.508a2.648 2.648 0 00-1.095-.277c.314-.15.75-.15 1.035-.332l.016-.193c-.496-.03-.69-.254-1.021-.436zm7.454 2.935a17.78 17.78 0 00.465-1.752c.06-.287.215-.918.178-1.176-.059-.459-.684-.799-1.004-1.086-.584-.525-.95-.975-1.56-1.469-.249.375-.78.615-.983.914 1.447-.689 1.71 2.625 1.141 3.69.09.329.391.45.514.735l-.086.166h1.29c.013 0 .03 0 .044.014zm-6.634-.012c-.05-.074-.1-.135-.15-.209l-.301.195h.45zm2.77 0c.008-.209.018-.404.03-.598-.53.029-.825-.48-1.196-.527-.324-.045-.6.361-1.02.195-.095.105-.183.227-.284.316.154.18.295.375.424.584h.815c.014-.164.135-.285.3-.285.165 0 .284.121.284.27h.66zm2.116 0c-.314-.479-.947-.898-1.68-.555l-.03.541h1.71zm-8.51 0l-.104-.344c-.225-.72-.36-1.26-.405-1.68-.914-.436-1.875-.87-2.654-1.426-.15-.105-1.109-1.35-1.23-1.305-1.739.676-3.359 1.86-4.814 2.984.256.557.48 1.141.69 1.74h8.505zm8.265-2.113c-.029-.512-.164-1.56-.48-1.74-.66-.39-1.846.78-2.34.943.045.15.135.271.15.48.285-.074.645-.029.898.092-.299.03-.629.03-.824.164-.074.195.016.48-.029.764.69.197 1.5.303 2.385.332.164-.227.225-.645.211-1.082zm-4.08-.36c-.044.375.046.51.12.943 1.26.391 1.034-1.74-.135-.959zM8.76 19.5c-.45.457 1.27 1.082 1.814 1.115 0-.29.165-.564.135-.77-.65-.118-1.502-.042-1.945-.347zm5.565.215c0 .043-.061.03-.068.064.58.451 1.014.545 1.802.51.354-.262.67-.563 1.043-.807-.855.074-1.931.607-2.774.23zm3.42-17.726c-1.606-.906-4.35-1.591-6.076-.731-1.38.692-3.27 1.84-3.899 3.292.6 1.402-.166 2.686-.226 4.109-.018.757.36 1.42.391 2.242-.2.338-.825.38-1.26.356-.146-.729-.4-1.549-1.155-1.63-1.064-.116-1.845.764-1.89 1.683-.06 1.08.833 2.864 2.085 2.745.488-.046.608-.54 1.139-.54.285.57-.445.75-.523 1.154-.016.105.06.511.104.705.233.944.744 2.16 1.245 2.88.635.9 1.884 1.051 3.229 1.141.24-.525 1.125-.48 1.706-.346-.691-.27-1.336-.945-1.875-1.529-.615-.676-1.23-1.41-1.261-2.28 1.155 1.604 2.1 3 4.2 3.704 1.59.525 3.45-.254 4.664-1.109.51-.359.811-.93 1.17-1.439 1.35-1.936 1.98-4.71 1.846-7.394-.06-1.111-.06-2.221-.436-2.955-.389-.781-1.695-1.471-2.475-.781-.15-.764.63-1.23 1.545-.96-.66-.854-1.336-1.858-2.266-2.384zM13.58 14.896c.615 1.544 2.724 1.363 4.505 1.323-.084.194-.256.435-.465.515-.57.232-2.145.408-2.937-.012-.506-.27-.824-.873-1.102-1.227-.137-.172-.795-.608-.012-.609zm.164-.87c.893.464 2.52.517 3.731.48.066.267.066.593.068.913-1.55.08-3.386-.304-3.794-1.395h-.005zm6.675-.586c-.473.9-1.145 1.897-2.539 1.928-.023-.284-.045-.735 0-.904 1.064-.103 1.727-.646 2.543-1.017zm-.649-.667c-1.02.66-2.154 1.375-3.824 1.21-.351-.31-.485-1-.14-1.458.181.313.06.885.57.97.944.165 2.038-.579 2.73-.84.42-.713-.046-.976-.42-1.433-.782-.93-1.83-2.1-1.802-3.51.314-.224.346.346.391.45.404.96 1.424 2.175 2.174 3 .18.21.48.39.51.524.092.39-.254.854-.209 1.11zm-13.439-.675c-.314-.184-.393-.99-.768-1.01-.535-.03-.438 1.05-.436 1.68-.37-.33-.435-1.365-.164-1.89-.308-.15-.445.164-.618.284.22-1.59 2.34-.734 1.99.96zM4.713 5.995c-.685.756-.54 2.174-.459 3.188 1.244-.785 2.898.06 2.883 1.394.595-.016.223-.744.115-1.215-.353-1.528.592-3.187.041-4.59-1.064.084-1.939.52-2.578 1.215zm9.12 1.113c.307.562.404 1.148.84 1.57.195.19.574.424.387.95-.045.121-.365.391-.551.45-.674.195-2.254.03-1.721-.81.563.015 1.314.36 1.732-.045-.314-.524-.885-1.53-.674-2.13zm6.198-.013h.068c.33.668.6 1.375 1.004 1.965-.27.628-2.053 1.19-2.023.057.39-.17 1.05-.035 1.395-.25-.193-.556-.48-1.006-.434-1.771zm-6.927-1.617c-1.422-.33-2.131.592-2.56 1.553-.384-.094-.231-.615-.135-.883.255-.701 1.28-1.633 2.119-1.506.359.057.848.386.576.834zM9.642 1.593c-1.56.44-3.56 1.574-4.2 2.974.495-.07.84-.321 1.33-.351.186-.016.428.074.641.015.424-.104.78-1.065 1.102-1.41.31-.345.685-.496.94-.81.167-.09.409-.074.42-.33-.073-.075-.15-.135-.232-.105v.017z"></path>
                </svg>
              </span>
              Jenkins
            </div>
            <div
              className="hg-src rise"
              style={{ top: "330px", animationDelay: "0.79s" }}
            >
              <span className="hg-src-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="#CFE0DE"
                  role="img"
                  aria-label="Vault"
                >
                  <path d="M0 0l11.955 24L24 0zm13.366 4.827h1.393v1.38h-1.393zm-2.77 5.569H9.22V8.993h1.389zm0-2.087H9.22V6.906h1.389zm0-2.086H9.22V4.819h1.389zm2.087 6.263h-1.377V11.08h1.388zm0-2.09h-1.377V8.993h1.388zm0-2.087h-1.377V6.906h1.388zm0-2.086h-1.377V4.819h1.388zm.683.683h1.393v1.389h-1.393zm0 3.475V8.993h1.389v1.388Z"></path>
                </svg>
              </span>
              HashiCorp Vault
            </div>
            <div
              className="hg-srclabel rise"
              style={{ animationDelay: "0.9s" }}
            >
              14 source types
            </div>

            <div className="hg-hub rise" style={{ animationDelay: "0.75s" }}>
              <div className="hg-hub-name">Nomyr</div>
              <div className="hg-hub-sub">identity graph</div>
            </div>

            <div
              className="hg-node hg-node-owner rise"
              style={{ left: "700px", top: "36px", animationDelay: "1.35s" }}
            >
              <div className="hg-node-role">Accountable owner</div>
              <div className="hg-node-name">Billing Team</div>
              <div className="hg-node-ev">confirmed · catalog</div>
            </div>

            <div
              className="hg-node hg-node-id rise"
              style={{ left: "700px", top: "150px", animationDelay: "1.1s" }}
            >
              <div className="hg-node-role">Non-human identity</div>
              <div className="hg-node-name">svc-billing-worker</div>
            </div>

            <div
              className="hg-node  rise"
              style={{ left: "700px", top: "270px", animationDelay: "1.1s" }}
            >
              <div className="hg-node-role">Workload</div>
              <div className="hg-node-name">billing-worker</div>
            </div>

            <div
              className="hg-node  rise"
              style={{ left: "890px", top: "108px", animationDelay: "1.35s" }}
            >
              <div className="hg-node-role">Credential</div>
              <div className="hg-node-name">key 9f21…c04a</div>
            </div>

            <div
              className="hg-node hg-node-dim rise"
              style={{ left: "890px", top: "232px", animationDelay: "1.35s" }}
            >
              <div className="hg-node-role">Path condition</div>
              <div className="hg-node-name">unread</div>
            </div>
            <div className="hg-target rise" style={{ animationDelay: "1.3s" }}>
              <span className="hg-target-ring"></span>
              <div className="hg-target-label">Sensitive</div>
              <div className="hg-target-name">billing-prod</div>
            </div>

            <div className="hg-legend rise" style={{ animationDelay: "1.4s" }}>
              <span>
                <i style={{ background: "#3FB5C4" }}></i>Configured
              </span>
              <span>
                <i className="dash" style={{ borderColor: "#B78CE8" }}></i>
                Inferred
              </span>
              <span>
                <i className="dot" style={{ borderColor: "#B8C9C9" }}></i>
                Unknown condition
              </span>
              <span>
                <i style={{ background: "#FF9DA4" }}></i>Reaches sensitive
                target
              </span>
            </div>
          </div>
        </div>

        <div
          className="mobile-hg motion-region"
          aria-label="Identity graph from connected sources through Nomyr to an accountable owner, identity, credentials, workloads and a sensitive target"
        >
          <div className="mhg-topline">
            <span>Connected sources</span>
            <span>14 source types</span>
          </div>
          <div className="mhg-sources">
            {[
              "Okta",
              "Google Cloud",
              "GitHub",
              "Jenkins",
              "Vault",
              "+9 more",
            ].map((source) => (
              <span className="mhg-source" key={source}>
                <i></i>
                {source}
              </span>
            ))}
          </div>

          <div className="mhg-flow" aria-hidden="true"><i></i></div>

          <div className="mhg-hub">
            <strong>Nomyr</strong>
            <span>Identity graph</span>
          </div>

          <div className="mhg-flow" aria-hidden="true"><i></i></div>

          <div className="mhg-grid mhg-resolved">
            <div className="mhg-card mhg-owner">
              <span>Accountable owner</span>
              <strong>Billing Team</strong>
              <small>confirmed · catalog</small>
            </div>
            <div className="mhg-card mhg-identity">
              <span>Non-human identity</span>
              <strong>svc-billing-worker</strong>
              <small>owned · active</small>
            </div>
          </div>

          <div className="mhg-flow mhg-flow-split" aria-hidden="true"><i></i></div>

          <div className="mhg-grid mhg-paths">
            <div className="mhg-card mhg-credential">
              <span>Credential</span>
              <strong>key 9f21…c04a</strong>
              <small>configured path</small>
            </div>
            <div className="mhg-card mhg-condition">
              <span>Workload</span>
              <strong>billing-worker</strong>
              <small>path condition · unread</small>
            </div>
          </div>

          <div className="mhg-flow mhg-flow-danger" aria-hidden="true"><i></i></div>

          <div className="mhg-target">
            <span>Sensitive target</span>
            <strong>billing-prod</strong>
          </div>
          <div className="mhg-legend">
            <span><i className="mhg-configured"></i>Configured</span>
            <span><i className="mhg-unknown"></i>Unknown condition</span>
            <span><i className="mhg-sensitive"></i>Sensitive reach</span>
          </div>
        </div>

        <div className="hero-tail"></div>
      </div>
    </header>
  );
}
