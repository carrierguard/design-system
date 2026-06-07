/* CarrierGuard investor deck — shared kit.
   Primitives lifted from the design system (Logo mark, Eyebrow, Tag, Icons)
   so every slide speaks the same vocabulary. Globals for the babel scripts. */

const { useState } = React;

/* ---- Four-square mark (SVG, official reversed treatment on dark) -------- */
function Mark({ size = 28, theme = "light", style, className }) {
  const p = theme === "dark"
    ? { dark: "#FDFCF9", sage: "#D1E8D8" }
    : { dark: "#1C1917", sage: "#4D7C5F" };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="CarrierGuard" className={className}
      style={{ display: "block", flexShrink: 0, ...style }}>
      <rect x="0" y="0" width="46" height="46" rx="4" fill={p.dark} />
      <rect x="54" y="0" width="46" height="46" rx="4" fill={p.sage} />
      <rect x="0" y="54" width="46" height="46" rx="4" fill={p.sage} />
      <rect x="54" y="54" width="46" height="46" rx="4" fill={p.dark} />
    </svg>
  );
}

function Wordmark({ size = 22, theme = "light" }) {
  const color = theme === "dark" ? "#FDFCF9" : "#1C1917";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.42 }}>
      <Mark size={size} theme={theme} />
      <span style={{ fontSize: size * 0.82, color, letterSpacing: "-0.01em", lineHeight: 1, whiteSpace: "nowrap" }}>
        <span style={{ fontWeight: 400 }}>Carrier</span><span style={{ fontWeight: 500 }}>Guard</span>
      </span>
    </span>
  );
}

/* ---- Eyebrow (sage rule + label) --------------------------------------- */
function Eyebrow({ children, theme = "light", className = "" }) {
  return (
    <span className={"cg-eb " + className}>
      <span className="cg-eb__rule" />
      <span className="cg-eb__txt">{children}</span>
    </span>
  );
}

/* ---- Slide footer ------------------------------------------------------- */
function Foot({ theme = "light", page, label }) {
  return (
    <div className="cg-foot">
      <Wordmark size={16} theme={theme} />
      <span style={{ whiteSpace: "nowrap" }}>{label}</span>
      <span style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{page}</span>
    </div>
  );
}

/* ---- Status / category tag --------------------------------------------- */
function Tag({ tone = "neutral", dot = true, children, style }) {
  const tones = {
    verified: { bg: "var(--cg-sage-light)", color: "var(--cg-sage)", d: "var(--cg-sage)" },
    review:   { bg: "var(--cg-caution-light)", color: "var(--cg-caution)", d: "var(--cg-caution)" },
    neutral:  { bg: "var(--cg-white)", color: "var(--cg-muted)", d: "var(--cg-very-muted)", border: "var(--cg-border)" },
    inverse:  { bg: "var(--cg-primary)", color: "var(--cg-background)", d: "var(--cg-sage-light)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)",
      fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1,
      padding: "6px 10px", borderRadius: "var(--radius-pill)", background: t.bg, color: t.color,
      border: t.border ? `1px solid ${t.border}` : "1px solid transparent", whiteSpace: "nowrap", ...style }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.d, flexShrink: 0 }} />}
      {children}
    </span>
  );
}

/* ---- Icon (Lucide-style, 1.75 stroke, currentColor) -------------------- */
function Icon({ d, size = 20, fill = "none", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", ...style }}>
      {d}
    </svg>
  );
}

const Ic = {
  factory: <><path d="M2 20h20"/><path d="M4 20V9l5 3V9l5 3V9l5 3v8"/><path d="M9 20v-4h4v4"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></>,
  truck: <><path d="M10 17h4V6H2v11h2"/><path d="M14 9h4l3 3v5h-3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
  store: <><path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M9 20v-6h6v6"/></>,
  alert: <><path d="M10.3 3.3a2 2 0 0 1 3.4 0l8 14A2 2 0 0 1 20 20.3H4a2 2 0 0 1-1.7-3l8-14z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
  arrowR: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  arrowDown: <><path d="M12 5v14M6 13l6 6 6-6"/></>,
  check: <><path d="M20 6L9 17l-5-5"/></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
  shieldChk: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  cycle: <><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></>,
  layers: <><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></>,
  trend: <><path d="M22 7l-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></>,
  phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></>,
  link: <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></>,
  scale: <><path d="M12 3v18"/><path d="M7 7h10"/><path d="M5 21h14"/><path d="M7 7l-3 6a3 3 0 0 0 6 0L7 7z"/><path d="M17 7l-3 6a3 3 0 0 0 6 0l-3-6z"/></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/><rect x="9" y="9" width="6" height="6" rx="1"/></>,
  fileChk: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></>,
  wrench: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.7-.4-.4-2.7 2.7-2.5z"/></>,
  userPlus: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></>,
  banknote: <><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></>,
  building: <><rect x="4" y="2" width="16" height="20" rx="1.5"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></>,
  seed: <><path d="M12 22V12"/><path d="M12 12C12 8 9 6 4 6c0 5 3 7 8 6z"/><path d="M12 14c0-4 3-6 8-6 0 5-3 7-8 6z"/></>,
  coins: <><circle cx="8" cy="8" r="5"/><path d="M16.7 4.3a5 5 0 0 1 0 9.4"/><path d="M19 18.7a5 5 0 0 1-7 0"/><path d="M3 13v3c0 1.7 2.2 3 5 3s5-1.3 5-3v-3"/></>,
  spark: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></>,
  flag: <><path d="M4 22V4s2-1 5-1 4 2 7 2 4-1 4-1v10s-2 1-4 1-4-2-7-2-5 1-5 1"/></>,
  hand: <><path d="M11 14V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M14 11.5a1.5 1.5 0 0 1 3 0V13"/><path d="M17 12.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2a7 7 0 0 1-5-2l-3.3-3.4a1.5 1.5 0 0 1 2.1-2.1L8 14V6.5a1.5 1.5 0 0 1 3 0V12"/></>,
  list: <><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></>,
  clipboard: <><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h4"/></>,
  hourglass: <><path d="M6 3h12M6 21h12"/><path d="M7 3c0 4 5 5 5 9s-5 5-5 9"/><path d="M17 3c0 4-5 5-5 9s5 5 5 9"/></>,
};

/* small inline node icon chip */
function NodeIcon({ d, tone = "ink", size = 22 }) {
  const map = {
    ink: { c: "var(--cg-primary)" },
    sage: { c: "var(--cg-sage)" },
    caution: { c: "var(--cg-caution)" },
    light: { c: "var(--cg-background)" },
  };
  return <span style={{ color: map[tone].c, display: "inline-flex" }}><Icon d={d} size={size} /></span>;
}

Object.assign(window, { CGMark: Mark, CGWordmark: Wordmark, CGEyebrow: Eyebrow, CGFoot: Foot, CGTag: Tag, CGIcon: Icon, CGIc: Ic, CGNodeIcon: NodeIcon });
