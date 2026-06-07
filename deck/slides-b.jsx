/* CarrierGuard deck — slides 05-09: Why now, Market size, Business model, GTM, Competition. */
const { CGMark, CGWordmark, CGEyebrow, CGFoot, CGTag, CGIcon, CGIc } = window;

/* ============================================================ 05 WHY NOW */
function Force({ idx, title, body, metric, metricSub, tone, accent }) {
  const col = tone === "caution" ? "var(--cg-caution)" : (tone === "sage" ? "var(--cg-sage)" : "var(--cg-primary)");
  return (
    <div style={{ display: "grid", gridTemplateColumns: "92px 1fr 260px", alignItems: "center", gap: 28 }}>
      <div className="cg-fig" style={{ fontSize: 40, color: "var(--cg-border)", fontWeight: 500 }}>{idx}</div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 500, color: "var(--cg-primary)", letterSpacing: "-0.01em" }}>{title}</div>
        <div style={{ fontSize: 13, color: "var(--cg-muted)", marginTop: 7, lineHeight: 1.55, maxWidth: 560 }}>{body}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div className="cg-fig" style={{ fontSize: metric.length > 5 ? 38 : 56, color: col }}>{metric}</div>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cg-very-muted)", marginTop: 6 }}>{metricSub}</div>
      </div>
    </div>
  );
}
function Slide05() {
  return (
    <div className="cg-slide">
      <CGMark className="cg-bgmark" size={560} style={{ right: -150, top: -120 }} />
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Why now</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "18px 0 6px", fontSize: 33, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.12, maxWidth: 1140 }}>
          Three forces have converged to make this the right moment
        </h1>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 12, paddingBottom: 40 }}>
          <div className="cg-anim cg-anim-3" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "1px solid var(--cg-border)" }}>
            <Force idx="01" title="Crime wave accelerating fastest in Europe"
              body="EU cargo theft losses grew 438% between 2022 and 2023, and 1,000% since 2021. The numbers are widely considered underreported."
              metric="438%" metricSub="loss growth, 2022 to 2023" tone="caution" />
          </div>
          <div className="cg-anim cg-anim-4" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "1px solid var(--cg-border)" }}>
            <Force idx="02" title="Regulatory pressure creating immediate compliance need"
              body="A US May 2026 ruling exposed freight brokers to negligent hiring liability for poor carrier selection. EU eFTI regulation mandates fully digital freight documentation by July 2027, making freight data aggregatable at scale for the first time."
              metric="Jul 2027" metricSub="eFTI digital mandate" tone="ink" />
          </div>
          <div className="cg-anim cg-anim-5" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "1px solid var(--cg-border)" }}>
            <Force idx="03" title="The infrastructure to build this is finally within reach"
              body="AI now enables ownership graph analysis and fraud pattern detection in seconds. EU registries have opened API access, making cross-border data aggregation buildable by a small team."
              metric="In seconds" metricSub="ownership graph + pattern AI" tone="sage" />
          </div>
        </div>
      </div>
      <CGFoot page="06" label="Why now" />
    </div>
  );
}

/* ============================================================ 06 MARKET SIZE */
function TierLegend({ swatch, border, tier, scope, num, desc, numColor }) {
  return (
    <div style={{ display: "flex", gap: 18 }}>
      <span style={{ width: 14, height: 14, borderRadius: 4, background: swatch, border: border ? `1.5px solid ${border}` : "none", flexShrink: 0, marginTop: 9 }} />
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 11 }}>
          <span className="cg-fig" style={{ fontSize: 32, color: numColor }}>{num}</span>
          <span style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-very-muted)", whiteSpace: "nowrap" }}>{tier} · ARR</span>
        </div>
        <div style={{ fontSize: 14.5, fontWeight: 500, marginTop: 6, color: "var(--cg-primary)" }}>{scope}</div>
        <div style={{ fontSize: 12.5, color: "var(--cg-muted)", marginTop: 5, lineHeight: 1.5, maxWidth: 470 }}>{desc}</div>
      </div>
    </div>
  );
}
function Slide06() {
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Market size</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "18px 0 0", fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Start in CEE, expand as the dataset compounds
        </h1>

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "400px 1fr", gap: 72, alignItems: "center", paddingBottom: 26 }}>
          {/* nested squares */}
          <div className="cg-anim cg-anim-3" style={{ position: "relative", width: 400, height: 400, margin: "0 auto" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--cg-white)", border: "1.5px solid var(--cg-border)", borderRadius: "var(--radius-xl)" }} />
            <div style={{ position: "absolute", left: 46, top: 46, right: 46, bottom: 46, background: "var(--cg-sage-light)", borderRadius: "var(--radius-lg)" }} />
            <div style={{ position: "absolute", left: 120, top: 120, right: 120, bottom: 120, background: "var(--cg-sage)", borderRadius: "var(--radius-md)" }} />
            {/* top-edge labels per band */}
            <div style={{ position: "absolute", top: 18, left: 0, right: 0, textAlign: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cg-very-muted)" }}>TAM</span>
              <span className="cg-fig" style={{ fontSize: 24, color: "var(--cg-very-muted)", marginLeft: 10 }}>€2.5–4B</span>
            </div>
            <div style={{ position: "absolute", top: 60, left: 0, right: 0, textAlign: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cg-sage)" }}>SAM</span>
              <span className="cg-fig" style={{ fontSize: 24, color: "var(--cg-sage)", marginLeft: 10 }}>€500–700M</span>
            </div>
            <div style={{ position: "absolute", left: 120, top: 120, right: 120, bottom: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--cg-background)" }}>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85 }}>SOM</span>
              <span className="cg-fig" style={{ fontSize: 24, marginTop: 4 }}>€20–30M</span>
            </div>
          </div>

          {/* legend */}
          <div className="cg-anim cg-anim-4" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <TierLegend swatch="var(--cg-white)" border="var(--cg-border)" tier="TAM" num="€2.5–4B" numColor="var(--cg-primary)"
              scope="The full freight trust market"
              desc="Every actor making trust decisions in freight: forwarders, insurers, freight finance, and carrier accreditation. Sized at 5–10% of $40B in annual global cargo losses." />
            <TierLegend swatch="var(--cg-sage-light)" tier="SAM" num="€500–700M" numColor="var(--cg-sage)"
              scope="All EU freight forwarders, enterprises and insurers"
              desc="80,000–120,000 SMB firms plus 2,000–3,000 enterprise logos, plus early insurer and freight finance integrations." />
            <TierLegend swatch="var(--cg-sage)" tier="SOM" num="€20–30M" numColor="var(--cg-sage)"
              scope="CEE SMBs and EU enterprise"
              desc="8,000–12,000 CEE firms plus 30–60 EU enterprise logos." />
          </div>
        </div>
      </div>
      <CGFoot page="07" label="Market size" />
    </div>
  );
}

/* ============================================================ 07 BUSINESS MODEL */
function PriceRow({ a, b, c }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "9px 0", borderTop: "1px solid var(--cg-border)", fontSize: 13 }}>
      <span style={{ fontWeight: 500, flex: "0 0 92px", color: "var(--cg-primary)" }}>{a}</span>
      <span style={{ flex: 1, color: "var(--cg-muted)" }}>{b}</span>
      <span style={{ fontWeight: 500, color: "var(--cg-sage)", whiteSpace: "nowrap" }}>{c}</span>
    </div>
  );
}
function Slide07() {
  const expand = [
    [CGIc.fileChk, "COI verification", "per-check add-on"],
    [CGIc.trend, "Claims acceleration", "pre-load evidence monetised"],
    [CGIc.shieldChk, "TAPA compliance support", "enablement subscription"],
    [CGIc.spark, "CarrierGuard Verified", "carrier-paid accreditation"],
    [CGIc.scale, "Insurer and freight finance", "per-query, GDPR-safe"],
  ];
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Business model</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "16px 0 18px", fontSize: 33, fontWeight: 500, letterSpacing: "-0.02em" }}>
          We build one asset and charge for it in several ways
        </h1>

        {/* hook bar */}
        <div className="cg-anim cg-anim-3" style={{ display: "flex", alignItems: "center", background: "var(--cg-primary)", color: "var(--cg-background)",
          borderRadius: "var(--radius-lg)", padding: "20px 32px" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-around", gap: 24 }}>
            <div>
              <div className="cg-fig" style={{ fontSize: 28, color: "var(--cg-sage-light)" }}>€100K–500K</div>
              <div style={{ fontSize: 12, color: "rgba(253,252,249,0.65)", marginTop: 5 }}>value protected per prevented loss</div>
            </div>
            <span style={{ fontSize: 13, color: "rgba(253,252,249,0.4)", textTransform: "uppercase", letterSpacing: "0.14em" }}>vs</span>
            <div>
              <div className="cg-fig" style={{ fontSize: 28, color: "var(--cg-background)" }}>€2K–100K</div>
              <div style={{ fontSize: 12, color: "rgba(253,252,249,0.65)", marginTop: 5 }}>what we charge per year</div>
            </div>
          </div>
          <div style={{ width: 1, alignSelf: "stretch", background: "rgba(253,252,249,0.18)", margin: "0 34px" }} />
          <div style={{ flex: "0 0 auto", maxWidth: 260 }}>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--cg-sage-light)", marginBottom: 6 }}>The result</div>
            <div style={{ fontSize: 20, fontWeight: 500, color: "var(--cg-background)", lineHeight: 1.2 }}>Obvious ROI from day one</div>
          </div>
        </div>

        {/* two streams */}
        <div className="cg-anim cg-anim-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
          <div style={{ background: "var(--cg-sage-light)", border: "1.5px solid var(--cg-sage)", borderRadius: "var(--radius-lg)", padding: "18px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CGTag tone="neutral">Stream 1</CGTag>
              <span style={{ fontSize: 15.5, fontWeight: 500 }}>Shared blacklist access</span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "var(--cg-dark)", lineHeight: 1.5 }}>
              The entry product. Seeded for free during network building, then converted to paid once the list reaches critical mass.
            </p>
            <div style={{ marginTop: 8 }}>
              <PriceRow a="SMB" b="annual subscription" c="full shared database" />
              <PriceRow a="Enterprise" b="annual subscription" c="API + onboarding" />
              <PriceRow a="Seeders" b="early contributors" c="preferential pricing" />
            </div>
          </div>
          <div style={{ background: "var(--cg-white)", border: "1px solid var(--cg-border)", borderRadius: "var(--radius-lg)", padding: "18px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CGTag tone="neutral">Stream 2</CGTag>
              <span style={{ fontSize: 15.5, fontWeight: 500 }}>Carrier verification</span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "var(--cg-dark)", lineHeight: 1.5 }}>
              The core verification tool. Per-seat pricing that scales from SMB to enterprise, with usage on top.
            </p>
            <div style={{ marginTop: 8 }}>
              <PriceRow a="SMB" b="~4 seats · €75/seat/month" c="€3.6K/yr" />
              <PriceRow a="Enterprise" b="~150 seats · €40/seat/month" c="€72K/yr" />
              <PriceRow a="Overage" b="scales with freight volume" c="on top" />
            </div>
          </div>
        </div>

        {/* expansion */}
        <div className="cg-anim cg-anim-5" style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)", marginBottom: 10 }}>Further expansion streams</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
            {expand.map(([icon, t, d], i) => (
              <div key={i} style={{ background: "var(--cg-white)", border: "1px solid var(--cg-border)", borderRadius: "var(--radius-md)", padding: "13px 14px" }}>
                <span style={{ color: "var(--cg-sage)", display: "inline-flex" }}><CGIcon d={icon} size={18} /></span>
                <div style={{ fontSize: 12.5, fontWeight: 500, marginTop: 9, lineHeight: 1.25 }}>{t}</div>
                <div style={{ fontSize: 11, color: "var(--cg-muted)", marginTop: 4, lineHeight: 1.4 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CGFoot page="08" label="Business model" />
    </div>
  );
}

/* ============================================================ 08 GO TO MARKET */
function StageCard({ title, body, extra, accent }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column",
      background: accent ? "var(--cg-sage-light)" : "var(--cg-white)",
      border: accent ? "1.5px solid var(--cg-sage)" : "1px solid var(--cg-border)",
      borderRadius: "var(--radius-lg)", padding: "18px 18px", boxShadow: "var(--shadow-xs)" }}>
      {accent && <div style={{ marginBottom: 9 }}><CGTag tone="verified">Payoff</CGTag></div>}
      <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.25, color: "var(--cg-primary)" }}>{title}</div>
      <div style={{ fontSize: 11.5, color: "var(--cg-muted)", marginTop: 8, lineHeight: 1.5 }}>{body}</div>
      {extra && (
        <div style={{ marginTop: "auto", paddingTop: 12 }}>
          <div style={{ padding: "9px 12px", background: "var(--cg-sage-light)", border: "1px solid var(--cg-sage)", borderRadius: "var(--radius-sm)", fontSize: 11, color: "var(--cg-dark)", lineHeight: 1.45 }}>{extra}</div>
        </div>
      )}
    </div>
  );
}
function Slide08() {
  const stages = [
    { label: "Seed", title: "Seed: free blacklist exchange",
      body: "Freight forwarders already share carrier blacklists informally. We formalise that behaviour. We cold-call forwarders across CEE: share your internal blacklist, get access to everyone else's. No cost, no integration.",
      extra: "Threshold: at ~4,000 shared entries the list becomes useful enough to charge for. That triggers Stage 02." },
    { label: "Monetise", title: "Monetise: paid access to the list and the tool",
      body: "We flip blacklist access from free to paid and launch the real-time verification tool, also paid: a growing fraud database plus an instant check across 30+ registries and shared signals. Early seeders get preferential pricing." },
    { label: "Scale", title: "Scale: growth and sales",
      body: "The network effect does the selling. Every check improves the dataset, every user strengthens the network. Mid-market forwarders convert on the product alone, with no IT involvement needed." },
    { label: "Expand", title: "Expand the product suite",
      body: "As the dataset matures, we open access to carriers seeking accreditation and insurers embedding risk decisions into their workflows.", accent: true },
  ];
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Go to market</CGEyebrow>
        <div className="cg-anim cg-anim-2" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 30, marginTop: 16 }}>
          <h1 style={{ margin: 0, fontSize: 33, fontWeight: 500, letterSpacing: "-0.02em" }}>Seed the network, then charge for it</h1>
          <p style={{ margin: 0, fontSize: 15, color: "var(--cg-muted)", lineHeight: 1.5, maxWidth: 560, textAlign: "right", whiteSpace: "nowrap" }}>
            We enter for free, convert once the network has value, then expand.
          </p>
        </div>

        <div className="cg-anim cg-anim-3" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly", paddingTop: 8, paddingBottom: 28 }}>
          {/* numbered timeline with free -> paid split */}
          <div>
            <div style={{ display: "flex", marginBottom: 14 }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <span style={{ fontSize: 10.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-very-muted)" }}>Free to enter</span>
              </div>
              <div style={{ flex: 3, textAlign: "center" }}>
                <span style={{ fontSize: 10.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)" }}>Paid, once the network has value</span>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: 11, left: "12.5%", right: "62.5%", height: 2, background: "var(--cg-border)" }} />
              <div style={{ position: "absolute", top: 11, left: "37.5%", right: "12.5%", height: 2, background: "var(--cg-sage)", opacity: 0.55 }} />
              <div style={{ display: "flex" }}>
                {stages.map((s, i) => {
                  const paid = i >= 1;
                  return (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: paid ? "var(--cg-sage)" : "var(--cg-background)", border: `2px solid ${paid ? "var(--cg-sage)" : "var(--cg-very-muted)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: paid ? "var(--cg-background)" : "var(--cg-very-muted)", position: "relative", zIndex: 1 }}>{i + 1}</div>
                      <div style={{ fontSize: 12, fontWeight: 500, marginTop: 9, color: paid ? "var(--cg-sage)" : "var(--cg-very-muted)" }}>{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* stage cards */}
          <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
            {stages.map((s, i) => (
              <StageCard key={i} title={s.title} body={s.body} extra={s.extra} accent={s.accent} />
            ))}
          </div>
        </div>
      </div>
      <CGFoot page="09" label="Go to market" />
    </div>
  );
}

/* ============================================================ 09 COMPETITION */
function CompCard({ role, roleTone, names, body, icon, iconColor, accentBorder }) {
  return (
    <div style={{ flex: 1, background: "var(--cg-white)", border: accentBorder ? `1.5px solid ${accentBorder}` : "1px solid var(--cg-border)",
      borderRadius: "var(--radius-lg)", padding: "22px 22px", boxShadow: "var(--shadow-xs)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <CGTag tone={roleTone} style={{ padding: "7px 13px" }}>{role}</CGTag>
        <span style={{ color: iconColor, display: "inline-flex" }}><CGIcon d={icon} size={22} /></span>
      </div>
      <div style={{ fontSize: 18, fontWeight: 500, marginTop: 16, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{names}</div>
      <div style={{ fontSize: 12.5, color: "var(--cg-muted)", marginTop: 10, lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}
function Slide09() {
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Competition</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "16px 0 24px", fontSize: 27, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 1140 }}>
          US companies prove the demand. No meaningful European competitor exists yet.
        </h1>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, paddingBottom: 10 }}>
        <div className="cg-anim cg-anim-3" style={{ display: "flex", gap: 18, alignItems: "stretch" }}>
          <CompCard role="Proof of demand" roleTone="verified" names="Highway, Descartes, CarrierMonitor"
            icon={CGIc.trend} iconColor="var(--cg-sage)" accentBorder="var(--cg-sage)"
            body="Over $100M raised, serving thousands of US brokers. Built on FMCSA/USDOT data that does not exist in Europe. GDPR-incompatible. Not a threat here, but a clear signal the market is real." />
          <CompCard role="Key EU competitor" roleTone="neutral" names="TrustedCarrier"
            icon={CGIc.shield} iconColor="var(--cg-muted)"
            body="German, state-backed carrier trust tool. Carriers self-enrol and pay for their own profile — a well-structured whitelist, but not a cross-company fraud intelligence layer." />
          <CompCard role="Substitutes" roleTone="review" names="Manual checks and informal blacklists"
            icon={CGIc.clipboard} iconColor="var(--cg-caution)"
            body="Security managers maintain hand-built blacklists, share intel informally, and cross-check registries under time pressure. Fast to fool, impossible to scale." />
        </div>

        <div className="cg-anim cg-anim-4" style={{ background: "var(--cg-primary)", borderRadius: "var(--radius-lg)", padding: "24px 34px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--cg-sage-light)", marginBottom: 16 }}>The opening</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              ["Substitutes cannot do the job", "Manual checks and informal blacklists are fast to fool and impossible to scale. The need is real, and unmet.", false],
              ["The one EU competitor is boxed in", "TrustedCarrier is a self-enrol whitelist, not a cross-company intelligence layer. Structurally constrained.", false],
              ["The European market is open", "No GDPR-native fraud intelligence network exists yet. That is the gap CarrierGuard is built to fill.", true],
            ].map(([h, b, hi], i) => (
              <div key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: hi ? "var(--cg-sage-light)" : "rgba(253,252,249,0.4)", flexShrink: 0 }} />
                  <span style={{ fontSize: 16, fontWeight: 500, color: hi ? "var(--cg-sage-light)" : "var(--cg-background)", letterSpacing: "-0.01em" }}>{h}</span>
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(253,252,249,0.62)", marginTop: 9, lineHeight: 1.55, paddingLeft: 17 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <CGFoot page="10" label="Competition" />
    </div>
  );
}

Object.assign(window, { CGS5: Slide05, CGS6: Slide06, CGS7: Slide07, CGS8: Slide08, CGS9: Slide09 });
