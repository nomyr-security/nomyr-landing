export function GetStarted() {
  return (
    <section className="final band" id="get-started" aria-label="Get Started">
      <svg className="tex" aria-hidden="true">
        <defs>
          <pattern id="gf" width="34" height="34" patternUnits="userSpaceOnUse">
            <path
              d="M 34 0 L 0 0 0 34"
              fill="none"
              stroke="#3FB5C4"
              strokeWidth="1"
            ></path>
          </pattern>
          <pattern
            id="gf-major"
            width="136"
            height="136"
            patternUnits="userSpaceOnUse"
          >
            <rect width="136" height="136" fill="url(#gf)"></rect>
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
          fill="url(#gf-major)"
          opacity="0.07"
        ></rect>
      </svg>
      <div
        className="bloom"
        style={{
          left: "50%",
          bottom: "-260px",
          width: "1200px",
          height: "700px",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(closest-side, rgba(7,201,131,0.14), rgba(7,201,131,0) 70%)",
        }}
      ></div>
      <svg
        className="tex tex-grain"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <filter id="gn3">
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
          filter="url(#gn3)"
          opacity="0.05"
        ></rect>
      </svg>
      <div className="wrap">
        <div className="cap">Get started</div>
        <h2>
          See your own identity graph,{" "}
          <span className="serif">not a demo of someone else's.</span>
        </h2>
        <p>
          Explore the open-source project, help shape machine identity security,
          or talk with us about your environment. Start with the source and see
          where Nomyr can fit into your identity stack.
        </p>
        <div className="final-ctas">
          <a
            className="btn btn-accent btn-lg"
            href="https://github.com/nomyr-security/nomyr#local-development"
          >
            Explore the source
          </a>
          <a
            className="btn btn-lg"
            href="mailto:oss@nomyr.io?subject=Nomyr%20walkthrough"
            style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#fff" }}
          >
            Get a walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}
