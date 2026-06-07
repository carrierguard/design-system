/* CarrierGuard deck — slides 01-04: Market structure, Problem, Solution, Product. */
const { CGMark, CGWordmark, CGEyebrow, CGFoot, CGTag, CGIcon, CGIc, CGNodeIcon } = window;

/* ============================================================ 01 MARKET STRUCTURE */
function FlowNode({ icon, name, sub, tone = "neutral", badge }) {
  const isRisk = tone === "risk";
  return (
    <div style={{ position: "relative", flex: "0 0 180px" }}>
      {badge && (
        <div style={{ position: "absolute", top: -34, left: "50%", transform: "translateX(-50%)" }}>
          <CGTag tone="review">{badge}</CGTag>
        </div>
      )}
      <div style={{
        background: isRisk ? "var(--cg-caution-light)" : "var(--cg-white)",
        border: isRisk ? "1.5px solid var(--cg-caution)" : (tone === "sage" ? "1.5px solid var(--cg-sage)" : "1px solid var(--cg-border)"),
        borderRadius: "var(--radius-lg)", padding: "22px 20px", boxShadow: "var(--shadow-xs)", textAlign: "center",
      }}>
        <span style={{ color: isRisk ? "var(--cg-caution)" : (tone === "sage" ? "var(--cg-sage)" : "var(--cg-primary)"), display: "inline-flex" }}>
          <CGIcon d={icon} size={26} />
        </span>
        <div style={{ fontSize: 16, fontWeight: 500, marginTop: 12, color: "var(--cg-primary)" }}>{name}</div>
        <div style={{ fontSize: 12, color: "var(--cg-muted)", marginTop: 5, lineHeight: 1.45 }}>{sub}</div>
      </div>
      {isRisk && (
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 12, color: "var(--cg-caution)" }}>
          <CGIcon d={CGIc.alert} size={18} /><CGIcon d={CGIc.alert} size={18} /><CGIcon d={CGIc.alert} size={18} />
        </div>
      )}
    </div>
  );
}
function FlowArrow({ label }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 7, marginTop: -16, minWidth: 56 }}>
      <span style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--cg-very-muted)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", width: "100%", color: "var(--cg-border)" }}>
        <div style={{ flex: 1, height: 1.5, background: "var(--cg-border)" }} />
        <CGIcon d={CGIc.arrowR} size={18} style={{ color: "var(--cg-very-muted)", marginLeft: -2 }} />
      </div>
    </div>
  );
}
function Slide01() {
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Market</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "22px 0 0", fontSize: 31, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25, maxWidth: 1140 }}>
          In the $11T global logistics market, cargo owners outsource transport to freight forwarders, who subcontract to carriers.
        </h1>

        <div className="cg-anim cg-anim-3" style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 78, paddingTop: 8 }}>
          <FlowNode icon={CGIc.factory} name="Manufacturer" sub="Needs goods delivered" tone="neutral" />
          <FlowArrow label="books" />
          <FlowNode icon={CGIc.globe} name="Freight forwarder" sub="Organises the shipment" tone="sage" />
          <FlowArrow label="hires" />
          <FlowNode icon={CGIc.truck} name="Carrier" sub="Moves the goods" tone="risk" badge="Theft risk" />
          <FlowArrow label="delivers" />
          <FlowNode icon={CGIc.store} name="Destination" sub="e.g. retail stores" tone="neutral" />
        </div>

        <div className="cg-anim cg-anim-4" style={{ marginTop: 30, fontSize: 13, color: "var(--cg-muted)", textAlign: "center", lineHeight: 1.5 }}>
          70–80% of shipments go via a freight forwarder. In 20–30% of cases, manufacturers book carriers directly.
        </div>

        <div className="cg-anim cg-anim-5" style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 30, padding: "22px 34px",
          background: "var(--cg-caution-light)", border: "1px solid var(--cg-caution)", borderRadius: "var(--radius-lg)", maxWidth: 1140, marginLeft: "auto", marginRight: "auto" }}>
          <span style={{ color: "var(--cg-caution)", flexShrink: 0, display: "inline-flex" }}><CGIcon d={CGIc.alert} size={24} /></span>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "var(--cg-primary)" }}>
            The carrier is the only actor who physically handles the client's goods, making it the primary risk for cargo fraud.
          </p>
        </div>
      </div>
      <CGFoot page="02" label="Market structure" />
    </div>
  );
}

/* ============================================================ 02 PROBLEM */
function StatCard({ num, label, note }) {
  return (
    <div style={{ flex: 1, background: "var(--cg-white)", border: "1px solid var(--cg-border)", borderRadius: "var(--radius-lg)", padding: "20px 24px", boxShadow: "var(--shadow-xs)" }}>
      <div className="cg-fig" style={{ fontSize: 44, color: "var(--cg-primary)" }}>{num}{note && <sup style={{ fontSize: 28, color: "var(--cg-caution)", fontWeight: 500, marginLeft: 1, top: "-0.5em" }}>*</sup>}</div>
      <div style={{ fontSize: 12.5, color: "var(--cg-muted)", marginTop: 8, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}
function Slide02() {
  const how = ["Shell company registered overnight", "Impersonating a real carrier", "Buying aged company for legitimacy", "Hijacking a carrier's platform account"];
  const why = [
    ["Time pressure", "oftentimes, forwarders have minutes to decide on a carrier"],
    ["Fragmented knowledge", "some players informally exchange intel, but no central intelligence exists"],
    ["No secure infrastructure", "nothing like banks would use"],
  ];
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Problem</CGEyebrow>
        <div className="cg-anim cg-anim-2" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginTop: 18 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.14, maxWidth: 1040, textWrap: "balance" }}>
              Cargo theft is a €8.3B annual crisis in the EU, and growing
            </h1>
            <p style={{ margin: "12px 0 0", fontSize: 16, color: "var(--cg-muted)", lineHeight: 1.5, maxWidth: 720 }}>
              The fastest-growing theft method is identity fraud, rather than violent robberies.
            </p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 10, paddingBottom: 44 }}>
          <div className="cg-anim cg-anim-3" style={{ display: "flex", gap: 16 }}>
          <StatCard num="€2.5M" label="stolen per day in the EU" note />
          <StatCard num="€8.3B" label="annual EU losses" />
          <StatCard num="~10%" label="of thefts go reported" />
        </div>

          <div className="cg-anim cg-anim-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 34 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)" }}>How fraud happens</div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 11 }}>
              {how.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "baseline", fontSize: 14.5, color: "var(--cg-primary)", lineHeight: 1.4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--cg-caution)", flexShrink: 0, transform: "translateY(-2px)" }} />{h}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)" }}>Why it keeps working</div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {why.map(([k, v], i) => (
                <div key={i} style={{ fontSize: 14, color: "var(--cg-muted)", lineHeight: 1.45 }}>
                  <span style={{ fontWeight: 500, color: "var(--cg-primary)" }}>{k}:</span> {v}
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className="cg-anim cg-anim-5" style={{ marginTop: 34, borderLeft: "2px solid var(--cg-sage)", paddingLeft: 22 }}>
          <p style={{ margin: 0, fontSize: 17, fontWeight: 500, lineHeight: 1.45, color: "var(--cg-primary)", letterSpacing: "-0.01em", maxWidth: 980 }}>
            Banks conduct extensive checks before trusting anyone with money. Forwarders hand over a load to a carrier they found 20 minutes ago.
          </p>
          </div>
        </div>
      </div>
      <div className="cg-foot">
        <span style={{ whiteSpace: "nowrap", textTransform: "none", letterSpacing: 0, color: "var(--cg-muted)", lineHeight: 1.45, fontSize: 11.5 }}>
          <span style={{ color: "var(--cg-caution)", fontWeight: 500 }}>*</span> Experts believe only 10–15% of cargo thefts are ever reported. In CEE, which has the most carriers in the EU, there are almost no statistics at all.
        </span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>03</span>
      </div>
    </div>
  );
}

/* ============================================================ 03 SOLUTION */
function CycleNode({ title, sub, tone }) {
  const sage = tone === "sage";
  return (
    <div style={{ flex: 1, background: sage ? "var(--cg-sage-light)" : "var(--cg-white)", border: sage ? "1.5px solid var(--cg-sage)" : "1px solid var(--cg-border)",
      borderRadius: "var(--radius-lg)", padding: "20px 22px", boxShadow: "var(--shadow-xs)" }}>
      <div style={{ color: "var(--cg-sage)", display: "inline-flex" }}><CGIcon d={sage ? CGIc.layers : CGIc.shieldChk} size={24} /></div>
      <div style={{ fontSize: 16, fontWeight: 500, marginTop: 12 }}>{title}</div>
      <div style={{ fontSize: 12.5, color: "var(--cg-muted)", marginTop: 5, lineHeight: 1.45 }}>{sub}</div>
    </div>
  );
}
function Phase({ n, title, body, last, accent }) {
  return (
    <div style={{ flex: 1, position: "relative", paddingRight: last ? 0 : 18 }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: accent ? "var(--cg-sage)" : "var(--cg-very-muted)", letterSpacing: "0.04em" }}>{n}</div>
      <div style={{ fontSize: 15.5, fontWeight: 500, marginTop: 7, color: "var(--cg-primary)" }}>{title}</div>
      <div style={{ fontSize: 12.5, color: "var(--cg-muted)", marginTop: 7, lineHeight: 1.5 }}>{body}</div>
    </div>
  );
}
function Slide03() {
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Solution</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "18px 0 0", fontSize: 33, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.12, maxWidth: 1040 }}>
          CarrierGuard is the trust infrastructure logistics has never had
        </h1>
        <p className="cg-anim cg-anim-2" style={{ margin: "12px 0 0", fontSize: 16, color: "var(--cg-muted)", lineHeight: 1.5, maxWidth: 820 }}>
          We formalise what freight forwarders already do informally, then layer the intelligence on top.
        </p>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly", paddingTop: 6, paddingBottom: 26 }}>
          {/* flywheel */}
          <div className="cg-anim cg-anim-3">
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)", textAlign: "center" }}>The shared blacklist flywheel</div>
            <div style={{ display: "flex", alignItems: "stretch", justifyContent: "center", maxWidth: 900, margin: "20px auto 0" }}>
              <CycleNode title="Shared blacklist" sub="forwarders contribute, everyone benefits" tone="sage" />
              <div style={{ flex: "0 0 244px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, padding: "0 22px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--cg-sage)" }}>
                    <div style={{ flex: 1, height: 1.5, background: "currentColor", opacity: 0.45 }} />
                    <CGIcon d={CGIc.arrowR} size={15} />
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--cg-muted)", textAlign: "center", marginTop: 6 }}>every entry enriches detection</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--cg-sage)" }}>
                    <CGIcon d={CGIc.arrowR} size={15} style={{ transform: "rotate(180deg)" }} />
                    <div style={{ flex: 1, height: 1.5, background: "currentColor", opacity: 0.45 }} />
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--cg-muted)", textAlign: "center", marginTop: 6 }}>smarter flags feed the list over time</div>
                </div>
              </div>
              <CycleNode title="Carrier intelligence" sub="checks across 30+ registries, in seconds" tone="ink" />
            </div>
          </div>

          {/* phases */}
          <div className="cg-anim cg-anim-4">
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)", marginBottom: 18 }}>How we get there</div>
            <div style={{ display: "flex", gap: 28 }}>
              <Phase n="Phase 1" title="Seed (free)" body="Forwarders share their internal blacklists in exchange for access to everyone else's. No cost, no integration. The list grows." />
              <Phase n="Phase 2" title="Monetise" body="Once the shared list reaches critical mass, access becomes paid. Real-time carrier verification launches alongside it, also paid." />
              <Phase n="Phase 3" title="Expand" body="The dataset matures into a full lifecycle intelligence layer: live monitoring, claims, insurer access, and carrier accreditation." accent last />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 22 }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--cg-very-muted)" }} />
              <div style={{ flex: 1, height: 1.5, background: "var(--cg-border)" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--cg-sage)", opacity: 0.5 }} />
              <div style={{ flex: 1, height: 1.5, background: "var(--cg-border)" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--cg-sage)" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="cg-foot">
        <span style={{ textTransform: "none", letterSpacing: 0, color: "var(--cg-muted)", fontSize: 12.5 }}>More on the product in the following slides.</span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>04</span>
      </div>
    </div>
  );
}

/* ============================================================ 04 PRODUCT */
function SigRow({ icon, title, desc, sev, tone, last }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 13, padding: "13px 0", borderTop: "1px solid var(--cg-border)" }}>
      <span style={{ color: tone === "review" ? "var(--cg-caution)" : "var(--cg-sage)", marginTop: 1, display: "inline-flex" }}><CGIcon d={icon} size={18} /></span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: 12, color: "var(--cg-muted)", marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
      </div>
      <CGTag tone={tone}>{sev}</CGTag>
    </div>
  );
}
function Callout({ children, style }) {
  return (
    <div style={{ position: "absolute", display: "inline-flex", alignItems: "center", gap: 9, background: "var(--cg-primary)", color: "var(--cg-background)",
      fontSize: 12.5, fontWeight: 500, padding: "10px 15px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-md)", whiteSpace: "nowrap", ...style }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cg-sage-light)" }} />{children}
    </div>
  );
}
function Slide04() {
  return (
    <div className="cg-slide">
      <div className="cg-pad" style={{ paddingBottom: 0 }}>
        <CGEyebrow className="cg-anim cg-anim-1">Product</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "18px 0 0", fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Carrier verification, in seconds
        </h1>

        <div style={{ position: "relative", flex: 1, marginTop: 14 }}>
          {/* verification result card */}
          <div className="cg-anim cg-anim-3" style={{ position: "absolute", left: "50%", top: 6, transform: "translateX(-50%)", width: 620,
            background: "var(--cg-white)", border: "1px solid var(--cg-border)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", padding: "24px 28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)" }}>Carrier check</div>
                <div style={{ fontSize: 21, fontWeight: 500, marginTop: 7, letterSpacing: "-0.01em" }}>Transeuro Spedycja Sp. z o.o.</div>
                <div style={{ fontSize: 12.5, color: "var(--cg-muted)", marginTop: 4 }}>Registered PL · VAT PL7831094562</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="cg-fig" style={{ fontSize: 46, color: "var(--cg-caution)" }}>100<span style={{ fontSize: 18, color: "var(--cg-very-muted)" }}>/100</span></div>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cg-very-muted)", marginTop: 2 }}>Risk score</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18, padding: "13px 16px", background: "var(--cg-primary)", borderRadius: "var(--radius-md)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--cg-background)", background: "var(--cg-caution)", padding: "7px 13px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap" }}>Stop · Escalate</span>
              <span style={{ fontSize: 12.5, color: "rgba(253,252,249,0.82)", lineHeight: 1.45 }}>Strong signals against engagement. Escalate before assigning a load.</span>
            </div>

            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-very-muted)", marginTop: 20 }}>Worth knowing</div>
            <SigRow icon={CGIc.alert} title="Sender domain consistency" desc="Outreach domain registered 9 days ago and does not match the registered company." sev="Critical" tone="review" />
            <SigRow icon={CGIc.scale} title="Sanctions screening" desc="Beneficial owner appears in a shared network flag raised by two forwarders." sev="High" tone="review" />
            <SigRow icon={CGIc.building} title="Operational presence" desc="No verifiable yard, fleet records or filed accounts for the stated volume." sev="High" tone="review" />
            <SigRow icon={CGIc.fileChk} title="Document trail" desc="Insurance certificate reused across three unrelated carrier identities." sev="Low" tone="neutral" />
          </div>

          {/* annotation callouts */}
          <Callout className="cg-anim cg-anim-4" style={{ left: 8, top: 40 }}>Instant risk score and verdict</Callout>
          <Callout className="cg-anim cg-anim-5" style={{ left: 8, top: 250 }}>Shared network flags</Callout>
          <Callout className="cg-anim cg-anim-6" style={{ right: 8, top: 360 }}>Severity grading per signal</Callout>
        </div>
      </div>
      <CGFoot page="05" label="Product" />
    </div>
  );
}

Object.assign(window, { CGS1: Slide01, CGS2: Slide02, CGS3: Slide03, CGS4: Slide04 });
