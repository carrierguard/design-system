/* CarrierGuard deck — 00 cover / title slide. */
const { CGMark, CGWordmark, CGEyebrow, CGIcon, CGIc } = window;

function SlideTitle() {
  return (
    <div className="cg-slide cg-slide--dark">
      <CGMark className="cg-bgmark" size={660} theme="dark" style={{ right: -190, bottom: -210 }} />
      <div className="cg-pad" style={{ paddingBottom: 56 }}>
        <div className="cg-anim cg-anim-1" style={{ display: "flex", alignItems: "center" }}>
          <CGWordmark size={24} theme="dark" />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1000 }}>
          <CGEyebrow className="cg-anim cg-anim-2">Investor brief</CGEyebrow>
          <h1 className="cg-anim cg-anim-3" style={{ margin: "26px 0 0", fontSize: 62, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--cg-background)", textWrap: "balance" }}>
            The trust infrastructure logistics has never had
          </h1>
          <p className="cg-anim cg-anim-4" style={{ margin: "26px 0 0", maxWidth: 700, fontSize: 19, lineHeight: 1.6, color: "rgba(253,252,249,0.72)" }}>
            CarrierGuard verifies carriers before a load is ever assigned, turning fragmented signals into a clear, traceable risk view in seconds.
          </p>
        </div>

        <div className="cg-anim cg-anim-5" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 13, color: "rgba(253,252,249,0.5)" }}>
          <span style={{ letterSpacing: "0.04em" }}>carrierguard.eu</span>
          <span style={{ letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Carrier fraud prevention for freight</span>
          <span style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>01</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CGS0: SlideTitle });
