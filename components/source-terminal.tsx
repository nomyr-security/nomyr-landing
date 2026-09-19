"use client";
import { useState } from "react";
const clone = "git clone https://github.com/nomyr-security/nomyr.git";
export function InstallCommand() {
  const [status, setStatus] = useState("Copy");
  async function copy() {
    try {
      await navigator.clipboard.writeText(clone);
      setStatus("Copied");
    } catch {
      setStatus("Select text");
    }
  }
  return (
    <div className="hero-install rise" style={{ animationDelay: ".32s" }}>
      <span className="p" aria-hidden="true">
        $
      </span>
      <code>{clone}</code>
      <button
        className="copy"
        onClick={copy}
        aria-label="Copy repository clone command"
      >
        <span aria-live="polite">{status}</span>
      </button>
    </div>
  );
}
const examples = {
  Source: [
    clone,
    "cd nomyr",
    "make web-install",
    "make test-fast",
    "make build",
    "./bin/nomyr demo",
  ],
  Develop: [
    "make web-install",
    "make test-fast",
    "make build",
    "./bin/nomyr demo",
    "# open http://127.0.0.1:8080",
    "# synthetic local data · loopback only",
  ],
  Contribute: [
    clone,
    "cd nomyr",
    "git switch -c your-change",
    "make test-fast",
    "git commit -s",
    "# open a pull request on GitHub",
  ],
};
export function SourceTerminal() {
  const [active, setActive] = useState<keyof typeof examples>("Source");
  const tabs = Object.keys(examples) as (keyof typeof examples)[];
  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div
          className="term-tabs"
          role="tablist"
          aria-label="Getting started commands"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              id={`tab-${tab}`}
              role="tab"
              aria-selected={active === tab}
              aria-controls="terminal-panel"
              tabIndex={active === tab ? 0 : -1}
              className={`term-tab ${active === tab ? "term-tab-on" : ""}`}
              onClick={() => setActive(tab)}
              onKeyDown={(event) => {
                let target = index;
                if (event.key === "ArrowRight")
                  target = (index + 1) % tabs.length;
                else if (event.key === "ArrowLeft")
                  target = (index + tabs.length - 1) % tabs.length;
                else if (event.key === "Home") target = 0;
                else if (event.key === "End") target = tabs.length - 1;
                else return;
                event.preventDefault();
                setActive(tabs[target]);
                document.getElementById(`tab-${tabs[target]}`)?.focus();
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <span className="grow" />
        <span className="term-lic">AGPL-3.0</span>
      </div>
      <div
        className="term-body"
        id="terminal-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
      >
        {examples[active].map((line, index) => (
          <div
            key={index}
            className={`term-line ${line.startsWith("#") ? "term-out" : ""}`}
          >
            <span className="term-p" aria-hidden="true">
              {line.startsWith("#") ? " " : "$"}
            </span>
            <code>{line}</code>
          </div>
        ))}
        <div className="term-line" aria-hidden="true">
          <span className="term-p">$</span>
          <span className="term-cursor" />
        </div>
      </div>
    </div>
  );
}
