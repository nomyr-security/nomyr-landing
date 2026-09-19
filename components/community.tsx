export function Community() {
  return (
    <section
      className="sec"
      style={{ paddingTop: "0" }}
      id="community"
      aria-label="Free and open source"
    >
      <div className="wrap">
        <div className="sec-head sec-split">
          <div>
            <div className="cap">Free and open source</div>
            <h2>Yours to run. Ours to build together.</h2>
          </div>
          <p>
            Explore the code, run Nomyr in your own environment, and help shape
            what comes next. An open project for teams who want control of their
            machine identity security.
          </p>
        </div>
        <div className="panels">
          <article className="panel panel-third">
            <h3>Explore the source</h3>
            <p>
              Start with the repository, follow development, and see how the
              platform is taking shape.
            </p>
            <a
              className="community-link"
              href="https://github.com/nomyr-security/nomyr"
            >
              View on GitHub →
            </a>
          </article>
          <article className="panel panel-third">
            <h3>Run it yourself</h3>
            <p>
              Build from source and try the local demo in your own environment
              with the getting-started guide.
            </p>
            <a
              className="community-link"
              href="https://github.com/nomyr-security/nomyr#local-development"
            >
              Get started →
            </a>
          </article>
          <article className="panel panel-third">
            <h3>Build with us</h3>
            <p>
              Bring your use cases, ideas, documentation, and code. Help make
              machine identity security better for everyone.
            </p>
            <a
              className="community-link"
              href="https://github.com/nomyr-security/nomyr/blob/main/CONTRIBUTING.md"
            >
              Contribute to Nomyr →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
