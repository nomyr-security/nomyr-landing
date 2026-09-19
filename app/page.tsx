import { Hero } from "../components/hero";
import { ReferenceMetrics } from "../components/referencemetrics";
import { OpenSource } from "../components/opensource";
import { Platform } from "../components/platform";
import { EvidenceComparison } from "../components/evidencecomparison";
import { Lifecycle } from "../components/lifecycle";
import { OperatingModes } from "../components/operatingmodes";
import { Community } from "../components/community";
import { Integrations } from "../components/integrations";
import { GetStarted } from "../components/getstarted";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="lp">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <ReferenceMetrics />
        <OpenSource />
        <Platform />
        <EvidenceComparison />
        <Lifecycle />
        <OperatingModes />
        <Community />
        <Integrations />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
