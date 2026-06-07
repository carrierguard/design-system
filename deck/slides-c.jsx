/* CarrierGuard deck — slides 10-13: Traction, Team, Use of funds, Closing. */
const { CGMark, CGWordmark, CGEyebrow, CGFoot, CGTag, CGIcon, CGIc } = window;

/* ============================================================ 10 TRACTION */
function Milestone({ n, text, last, accent }) {
  return (
    <div style={{ flex: 1, position: "relative", paddingTop: 30 }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: last ? "50%" : 0, height: 2, background: accent ? "var(--cg-sage)" : "var(--cg-border)" }} />
      <div style={{ position: "absolute", top: -8, left: 0, width: 18, height: 18, borderRadius: "50%",
        background: accent ? "var(--cg-sage)" : "var(--cg-background)", border: `2px solid ${accent ? "var(--cg-sage)" : "var(--cg-very-muted)"}`,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        {accent && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cg-background)" }} />}
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: accent ? "var(--cg-sage)" : "var(--cg-very-muted)" }}>{n}</div>
      <div style={{ fontSize: 11.5, color: "var(--cg-primary)", marginTop: 7, lineHeight: 1.45, paddingRight: 16 }}>{text}</div>
    </div>
  );
}
function Slide10() {
  const evidence = [
    "Multiple account hijacking incidents on freight exchanges confirmed, with repeat occurrences across recent years",
    "Real impersonation case shared: fraudster spoofed a legitimate carrier using a fake email domain, took a Germany-to-France transport",
    "A list of carriers that used domain fraud offered to us directly",
    "Desired verifications take 20-25 minutes and miss pattern-based signals entirely",
    "~700 past fake carriers already obtained for our initial dataset",
    "Confirmed: freight forwarders already share blacklists informally, creating immediate appetite for a formalised version",
  ];
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Traction</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "12px 0 18px", fontSize: 30, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Early validation from inside the industry
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 34 }}>
          {/* enterprise hero */}
          <div className="cg-anim cg-anim-3" style={{ position: "relative", background: "var(--cg-sage-light)", border: "1.5px solid var(--cg-sage)", borderRadius: "var(--radius-xl)", padding: "22px 24px", overflow: "hidden" }}>
            <CGIcon d={CGIc.building} size={140} style={{ position: "absolute", right: -18, bottom: -24, color: "var(--cg-sage)", opacity: 0.1 }} />
            <CGTag tone="verified">Enterprise traction</CGTag>
            <div style={{ fontSize: 24, fontWeight: 500, marginTop: 14, color: "var(--cg-primary)", letterSpacing: "-0.02em", lineHeight: 1.14, maxWidth: 440, position: "relative" }}>A top-10 global logistics company is actively engaged</div>
            <p style={{ margin: "12px 0 0", fontSize: 12.5, color: "var(--cg-dark)", lineHeight: 1.55, maxWidth: 470, position: "relative" }}>
              Three meetings held, MVP demoed to their security team, v2 shipped on their feedback. Their internal champion has offered to sign an LOI. They have offered to refer us to a second major logistics firm, giving us a warm path to a second enterprise account pre-raise.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16, position: "relative" }}>
              {["3 meetings held", "MVP demoed", "v2 shipped", "LOI offered", "Warm referral"].map((c, i) => (
                <span key={i} style={{ fontSize: 11, fontWeight: 500, color: "var(--cg-sage)", background: "rgba(255,255,255,0.7)", border: "1px solid var(--cg-sage)", borderRadius: "var(--radius-pill)", padding: "5px 11px", whiteSpace: "nowrap" }}>{c}</span>
              ))}
            </div>
          </div>

          {/* problem evidence, single column */}
          <div className="cg-anim cg-anim-4">
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)" }}>Problem evidence</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
              {evidence.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 12, color: "var(--cg-muted)", lineHeight: 1.45 }}>
                  <span style={{ color: "var(--cg-sage)", flexShrink: 0, marginTop: 1, display: "inline-flex" }}><CGIcon d={CGIc.check} size={15} /></span>{e}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* milestones roadmap */}
        <div className="cg-anim cg-anim-5" style={{ marginTop: 28, paddingBottom: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cg-sage)", marginBottom: 22 }}>Near-term milestones</div>
          <div style={{ display: "flex", gap: 12 }}>
            <Milestone n="01" text="Begin cold outreach to CEE freight forwarders: offer free blacklist exchange to seed the shared database" />
            <Milestone n="02" text="Sign LOI with enterprise anchor" />
            <Milestone n="03" text="Meet second major logistics firm via warm referral" />
            <Milestone n="04" text="Reach ~4,000 shared list entries: threshold for converting to paid access" />
            <Milestone n="05" text="First paid pilot of carrier verification tool" last accent />
          </div>
        </div>
      </div>
      <CGFoot page="11" label="Traction" />
    </div>
  );
}

/* ============================================================ 11 TEAM */
function Person({ slotId, name, role, tags, bullets }) {
  return (
    <div style={{ flex: 1, background: "var(--cg-white)", border: "1px solid var(--cg-border)", borderRadius: "var(--radius-xl)", padding: "26px 26px", display: "flex", flexDirection: "column" }}>
      <image-slot id={slotId} shape="circle" placeholder="Drop photo"
        style={{ width: "104px", height: "104px", display: "block", margin: "0 auto" }}></image-slot>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em" }}>{name}</div>
        <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cg-sage)", marginTop: 6 }}>{role}</div>
      </div>
      <div style={{ fontSize: 11.5, color: "var(--cg-muted)", textAlign: "center", marginTop: 10, lineHeight: 1.5, textWrap: "balance" }}>{tags}</div>
      <hr className="cg-rule" style={{ margin: "18px 0" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12.5, color: b.muted ? "var(--cg-very-muted)" : "var(--cg-primary)", lineHeight: 1.45, fontStyle: b.muted ? "italic" : "normal" }}>
            {!b.muted && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--cg-sage)", flexShrink: 0, marginTop: 6 }} />}
            {b.muted && <span style={{ width: 5, height: 5, borderRadius: "50%", border: "1px solid var(--cg-very-muted)", flexShrink: 0, marginTop: 6 }} />}
            <span>{b.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function Slide11() {
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Team</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "16px 0 24px", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Built by people who know this problem firsthand
        </h1>
        <div className="cg-anim cg-anim-3" style={{ display: "flex", gap: 20, flex: 1, paddingBottom: 78 }}>
          <Person slotId="team-zosia" name="Zofia Krajewska" role="CEO"
            tags="Commercial strategy · GTM · fundraising · investor relations"
            bullets={[
              { t: "Built £0 to £80K revenue in three months at Clerkenwell Health" },
              { t: "Investment team at Antler" },
              { t: "Strategy and Operations at ADC, a 150-person AI consultancy" },
              { t: "Family roots in European freight logistics, the direct source of our enterprise access" },
            ]} />
          <Person slotId="team-alek" name="Aleksander Jędrosz" role="CTO"
            tags="Technical architecture · fraud-detection intelligence · data pipelines · carrier and TMS integrations"
            bullets={[
              { t: "Engineering Team Lead at Snowflake Poland, building large-scale data infrastructure serving 100,000+ DAU" },
              { t: "Additional accomplishments to be added", muted: true },
            ]} />
          <Person slotId="team-rafal" name="Rafał Krajewski" role="Advisor"
            tags="Logistics industry insider · enterprise access · domain knowledge"
            bullets={[
              { t: "Decades at C-level inside European freight, with operator-level credibility in a relationship-driven industry" },
              { t: "His network opened our first enterprise relationship and is the foundation of our GTM" },
            ]} />
        </div>
      </div>
      <CGFoot page="12" label="Team" />
    </div>
  );
}

/* ============================================================ 12 USE OF FUNDS */
function FundCard({ icon, title, body, primary, span }) {
  return (
    <div style={{ gridColumn: span ? "span 2" : "auto", display: "flex", flexDirection: "column", justifyContent: "center",
      background: primary ? "var(--cg-sage-light)" : "var(--cg-white)",
      border: primary ? "1.5px solid var(--cg-sage)" : "1px solid var(--cg-border)",
      borderRadius: "var(--radius-lg)", padding: "20px 22px", boxShadow: "var(--shadow-xs)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <span style={{ color: "var(--cg-sage)", display: "inline-flex" }}><CGIcon d={icon} size={22} /></span>
        <span style={{ fontSize: 15.5, fontWeight: 500 }}>{title}</span>
        {primary && <CGTag tone="verified" style={{ marginLeft: "auto" }}>Primary GTM</CGTag>}
      </div>
      <p style={{ margin: "11px 0 0", fontSize: 12.5, color: primary ? "var(--cg-dark)" : "var(--cg-muted)", lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}
function Slide12() {
  return (
    <div className="cg-slide">
      <div className="cg-pad">
        <CGEyebrow className="cg-anim cg-anim-1">Use of funds</CGEyebrow>
        <h1 className="cg-anim cg-anim-2" style={{ margin: "16px 0 0", fontSize: 33, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Funding to reach first revenue and full-time focus
        </h1>
        <p className="cg-anim cg-anim-2" style={{ margin: "12px 0 0", fontSize: 14.5, color: "var(--cg-muted)", lineHeight: 1.5, maxWidth: 1160, whiteSpace: "nowrap" }}>
          We are raising funding to seed the shared network, convert our enterprise anchor, and give both founders full-time focus on CarrierGuard.
        </p>

        <div className="cg-anim cg-anim-3" style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 18, marginTop: 28, paddingBottom: 82 }}>
          <FundCard icon={CGIc.seed} title="Blacklist network seeding" primary span
            body="Cold outreach to CEE freight forwarders to seed the shared blacklist. This is our primary GTM activity: calls, relationships, and onboarding the first contributing partners before the list converts to paid." />
          <FundCard icon={CGIc.building} title="Enterprise conversion"
            body="Converting our enterprise anchor to a first paid pilot and meeting the second major logistics firm via the warm referral already offered to us." />
          <FundCard icon={CGIc.cpu} title="Product development"
            body="Completing the core carrier verification product, expanding registry coverage, and building the shared intelligence layer on top of the growing blacklist dataset." />
          <FundCard icon={CGIc.userPlus} title="Engineering hire"
            body="Bringing on a first engineering hire to accelerate product development and expand data pipeline capacity." />
          <FundCard icon={CGIc.users} title="Founder salaries"
            body="Enabling both founders to go full-time on CarrierGuard." />
        </div>
      </div>
      <CGFoot page="13" label="Use of funds" />
    </div>
  );
}

/* ============================================================ 13 CLOSING */
function Contact({ icon, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11, color: "rgba(253,252,249,0.82)", fontSize: 15, whiteSpace: "nowrap" }}>
      <span style={{ color: "var(--cg-sage-light)", display: "inline-flex" }}><CGIcon d={icon} size={18} /></span>{children}
    </div>
  );
}
function Slide13() {
  return (
    <div className="cg-slide cg-slide--dark">
      <CGMark className="cg-bgmark" size={620} theme="dark" style={{ left: -170, bottom: -190 }} />
      <div className="cg-pad" style={{ alignItems: "center", justifyContent: "center", textAlign: "center", paddingBottom: 64 }}>
        <CGMark className="cg-anim cg-anim-1" size={72} theme="dark" />
        <div className="cg-anim cg-anim-2" style={{ fontSize: 44, marginTop: 26, letterSpacing: "-0.02em", color: "var(--cg-background)" }}>
          <span style={{ fontWeight: 400 }}>Carrier</span><span style={{ fontWeight: 500 }}>Guard</span>
        </div>
        <div className="cg-anim cg-anim-3" style={{ fontSize: 19, color: "var(--cg-sage-light)", marginTop: 16, fontWeight: 400, letterSpacing: "-0.01em" }}>
          The trust infrastructure logistics has never had.
        </div>
        <div className="cg-anim cg-anim-4" style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 44, flexWrap: "wrap", justifyContent: "center" }}>
          <Contact icon={CGIc.link}>carrierguard.eu</Contact>
          <Contact icon={CGIc.phone}>+48 698 443 535</Contact>
        </div>
        <div className="cg-anim cg-anim-5" style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16, color: "rgba(253,252,249,0.7)", fontSize: 14 }}>
          <span style={{ color: "var(--cg-sage-light)", display: "inline-flex" }}><CGIcon d={CGIc.mail} size={18} /></span>
          zofia.krajewska@carrierguard.eu · aleksander.jedrosz@carrierguard.eu
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CGS10: Slide10, CGS11: Slide11, CGS12: Slide12, CGS13: Slide13 });
