import gymbeamLogo from "../assets/photos/gymbeam-logo.png";
import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiGraphql,
  SiGit,
  SiMysql,
  SiAnthropic,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiCalendar,
  FiBriefcase,
  FiMapPin,
  FiSmartphone,
  FiLayout,
  FiDatabase,
  FiSearch,
  FiPackage,
  FiTool,
  FiGlobe,
  FiChevronDown,
} from "react-icons/fi";
import { FaNetworkWired } from "react-icons/fa";
import { SectionTitle } from "./About.jsx";

const contributions = [
  {
    category: "Mobile Feature",
    Icon: FiSmartphone,
    title: "Virtual Try-On",
    text: "REST-backed try-on flow with image upload, attempt tracking, and error-state UX.",
  },
  {
    category: "UI Engineering",
    Icon: FiLayout,
    title: "Product Detail Screen",
    text: "Full product screen — attributes, dietary tags, logistics data, and collapsible sections.",
  },
  {
    category: "Data Layer",
    Icon: FiDatabase,
    title: "GraphQL + Type Safety",
    text: "Codegen + TanStack Query hooks against Magento, keeping schema and UI in sync at compile time.",
  },
  {
    category: "UX Engineering",
    Icon: FiSearch,
    title: "Search Fallback",
    text: "No-results screen with top 10 bestsellers and recently viewed, preventing dead-end sessions.",
  },
  {
    category: "Feature",
    Icon: FiPackage,
    title: "Laboratory Tests",
    text: "Dynamic PDF quality-cert fetching embedded in product detail pages.",
  },
  {
    category: "Business Logic",
    Icon: FiBriefcase,
    title: "Employee Pricing Limits",
    text: "Purchase-limit rules for staff accounts enforced in cart and checkout.",
  },
  {
    category: "Bug Fix",
    Icon: FiTool,
    title: "Keyboard Overlap Fix",
    text: "Resolved soft-keyboard overlap regression on both iOS and Android.",
  },
  {
    category: "Internationalisation",
    Icon: FiGlobe,
    title: "Localisation",
    text: "i18next translations extended for all new features across 14 European markets.",
  },
];

const stackGroups = [
  {
    label: "Mobile",
    items: ["React Native", "TypeScript", "Tamagui", "React Navigation"],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    label: "Data & API",
    items: ["GraphQL", "TanStack Query", "Axios", "REST API"],
  },
  { label: "Backend", items: ["Python", "FastAPI", "MySQL"] },
  {
    label: "Tools",
    items: ["Git", "Firebase", "Sentry", "i18next"],
    full: true,
  },
];

const languages = [
  { name: "Slovak", level: "Native" },
  { name: "English", level: "B2" },
  { name: "German", level: "A2" },
];

const techIcons = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { Icon: SiAnthropic, label: "Claude", color: "#D97757" },
  { Icon: SiHtml5, label: "HTML", color: "#E34F26" },
  { Icon: SiCss, label: "CSS", color: "#1572B6" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
];

const block =
  "bg-surface rounded-2xl overflow-hidden border border-border shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay },
});

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-3">
        <SectionTitle
          eyebrow="Work Experience"
          title="Experience"
          subtitle="Where I've put my skills to work in the real world."
        />

        <div className="flex justify-center overflow-hidden -mt-6 mb-6">
          <img
            src={gymbeamLogo}
            alt="GymBeam"
            className="h-24 sm:h-28 md:h-32 w-auto -my-8 sm:-my-9 md:-my-10"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* ── Block 1: Company overview + Live card ── */}
        <div className="grid sm:grid-cols-3 gap-3">
        <motion.div {...fadeUp(0)} className={`${block} sm:col-span-2`}>
          <div className="flex items-start gap-5 px-7 sm:px-9 py-6">
            <div className="w-12 h-12 rounded-xl bg-surfaceMid border border-border grid place-items-center shrink-0"></div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 mb-1.5">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <a
                    href="https://gymbeam.sk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-textmain hover:text-accent2 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    GymBeam, s.r.o.
                    <FiExternalLink
                      size={11}
                      className="opacity-30 group-hover:opacity-70 transition-opacity"
                    />
                  </a>
                  <span className="text-border">·</span>
                  <span className="font-bold text-textmain">
                    Frontend Developer Intern
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full border border-border text-sm font-medium text-textmuted whitespace-nowrap shrink-0">
                  Internship
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-textmuted">
                  <FiCalendar size={10} /> February – May 2026
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-textmuted">
                  <FiMapPin size={10} /> Slovakia
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-textmuted">
                  <FiSmartphone size={10} /> iOS &amp; Android
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-textmuted">
                  <FiBriefcase size={10} /> IT Dept. · Frontend Team
                </span>
              </div>

              <div className="space-y-3 max-w-2xl">
                <p className="text-base font-medium text-textmain leading-relaxed">
                  Embedded within the frontend team at GymBeam — one of Central
                  Europe&apos;s largest sports nutrition and fitness retailers,
                  operating across 25+ European markets. The company serves
                  hundreds of thousands of customers daily through a
                  multi-channel platform spanning regional web storefronts, a
                  native mobile app, and third-party marketplace integrations.
                </p>
                <p className="text-base font-medium text-textmain leading-relaxed">
                  As a Frontend Developer Intern, I was a contributing member of
                  the mobile team working directly on the production React
                  Native codebase shipped to both App Store and Google Play. The
                  app is a primary business channel, which means high standards
                  for performance, reliability, and cross-platform consistency —
                  features I built and bugs I fixed were visible to real users
                  within days of merging. Beyond the mobile app, I also
                  contributed to internal web tooling used across the IT
                  department.
                </p>
                <p className="text-base text-textmain leading-relaxed">
                  Day-to-day work involved TypeScript, Tamagui, and TanStack
                  Query against a Magento-backed GraphQL API serving 14+
                  regional storefronts simultaneously. The codebase runs at
                  enterprise scale — real CI/CD pipelines, Sentry-monitored
                  crash reporting, and localisation managed across languages via
                  i18next. This was my first sustained exposure to an
                  engineering organisation of this size, and it shaped how I
                  think about code quality, cross-team communication, and
                  shipping with confidence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Highlight card */}
        <motion.div
          {...fadeUp(0.1)}
          className={`${block} flex flex-col justify-between p-6 gap-4`}
          style={{ background: "linear-gradient(145deg, #eef6ff 0%, #f0f4ff 50%, #faf5ff 100%)" }}
        >
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-textmuted">
            Most used at GymBeam
          </p>

          <div className="flex flex-col items-center gap-5 flex-1 pt-10 pb-1 px-4">
            {/* Row 1: TypeScript · React Native · GraphQL */}
            <div className="flex items-end gap-7">
              <TechIcon Icon={SiTypescript} label="TypeScript" color="#3178C6" size={42} />
              <TechIcon Icon={SiReact} label="React Native" color="#61DAFB" size={60} large />
              <TechIcon Icon={SiGraphql} label="GraphQL" color="#E10098" size={42} />
            </div>
            {/* Row 2: Next.js · Git */}
            <div className="flex items-start gap-10">
              <TechIcon Icon={SiNextdotjs} label="Next.js" color="#000000" size={39} />
              <TechIcon Icon={SiGit} label="Git" color="#F05032" size={39} />
            </div>
          </div>
        </motion.div>
        </div>

        {/* ── Block 2: Contributions ── */}
        <motion.div {...fadeUp(0.08)} className={block}>
          <div className="px-7 sm:px-9 py-4 border-b border-border">
            <p className="text-sm font-bold tracking-[0.18em] uppercase text-textmain">
              Contributions
            </p>
          </div>

          {/* Always-visible first 4 */}
          <div className="grid sm:grid-cols-2">
            <div>
              {contributions.slice(0, 2).map((item, i) => (
                <ContributionRow key={i} item={item} index={i} />
              ))}
            </div>
            <div>
              {contributions.slice(2, 4).map((item, i) => (
                <ContributionRow key={i} item={item} index={i + 2} />
              ))}
            </div>
          </div>

          {/* Expandable remaining 4 */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="extra"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2">
                  <div>
                    {contributions.slice(4, 6).map((item, i) => (
                      <ContributionRow key={i} item={item} index={i + 4} />
                    ))}
                  </div>
                  <div>
                    {contributions.slice(6).map((item, i) => (
                      <ContributionRow key={i} item={item} index={i + 6} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex items-center justify-center gap-2 py-3.5 border-t border-border text-sm font-medium text-textmuted hover:text-textmain transition-colors group"
          >
            <span>
              {expanded ? "Show less" : `Show ${contributions.length - 4} more`}
            </span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex"
            >
              <FiChevronDown size={15} />
            </motion.span>
          </button>
        </motion.div>

        {/* ── Block 3: Skills ── */}
        <motion.div {...fadeUp(0.16)} className={`${block} px-7 sm:px-9 py-6`}>
          <p className="text-sm font-bold tracking-[0.18em] uppercase text-textmain mb-6">
            Skills
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-4 gap-y-6">
            {techIcons.map(({ Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={32} style={{ color }} />
                <span className="text-[10px] font-medium text-textmuted text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Block 4: Languages · Cert ── */}
        <div className="grid sm:grid-cols-2 gap-3">
          <motion.div {...fadeUp(0.28)} className={`${block} px-6 py-5`}>
            <p className="text-sm font-bold tracking-[0.18em] uppercase text-textmain mb-4">
              Languages
            </p>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between">
                  <span className="text-base text-textmain">{l.name}</span>
                  <span className="text-sm text-textmuted">{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.34)} className={`${block} px-6 py-5`}>
            <p className="text-sm font-bold tracking-[0.18em] uppercase text-textmain mb-3">
              Certification
            </p>
            <div className="flex items-start gap-3">
              <FaNetworkWired
                size={15}
                className="text-textmuted mt-0.5 shrink-0"
              />
              <div>
                <p className="text-base font-semibold text-textmain leading-snug">
                  Cisco CCNP Enterprise
                </p>
                <p className="text-sm text-textmuted mt-0.5">
                  Advanced Routing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechIcon({ Icon, label, color, size = 28, large = false }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`${large ? "w-24 h-24" : "w-16 h-16"} rounded-2xl bg-white shadow-sm border border-black/5 grid place-items-center`}
      >
        <Icon size={size} style={{ color }} />
      </div>
      <span className="text-[10px] font-semibold text-textmuted text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

function ContributionRow({ item, index }) {
  const { Icon, category, title, text } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="relative overflow-hidden px-7 sm:px-8 py-5"
    >
      <div className="relative flex items-start gap-3.5">
        <div className="mt-0.5 w-9 h-9 rounded-lg bg-surface border border-borderLight grid place-items-center shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <Icon size={16} className="text-textmain" />
        </div>

        <div className="min-w-0">
          <div className="mb-1.5">
            <span className="text-xs font-bold tracking-[0.08em] uppercase bg-accent2/[0.08] text-accent2 px-2 py-0.5 rounded-full">
              {category}
            </span>
          </div>
          <h4 className="text-base font-bold text-textmain mb-1 leading-snug">
            {title}
          </h4>
          <p className="text-sm text-textmuted leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
