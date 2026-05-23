/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // ── Core brand ──────────────────────────────
        primary:   "#8fd6ff",
        secondary: "#70df31",
        tertiary:  "#fcc554",
        background: "#050505",

        // ── Material Design tokens (dashboard) ──────
        "on-primary":            "#003549",
        "primary-container":     "#00bfff",
        "on-primary-container":  "#004a65",
        "primary-fixed":         "#c3e8ff",
        "primary-fixed-dim":     "#7ad0ff",

        "secondary-container":   "#52c001",
        "on-secondary":          "#133800",
        "secondary-fixed":       "#8bfd4d",
        "secondary-fixed-dim":   "#70df31",

        "tertiary-container":    "#ddaa3c",
        "on-tertiary":           "#412d00",
        "on-tertiary-container": "#5a4000",
        "tertiary-fixed":        "#ffdea4",
        "tertiary-fixed-dim":    "#f4be4e",

        "error":                 "#ff6b6b",
        "on-error":              "#690005",
        "error-container":       "#93000a",
        "on-error-container":    "#93000a",

        "surface":                    "#101419",
        "surface-dim":                "#101419",
        "surface-bright":             "#36393f",
        "surface-container-lowest":   "#0a0e13",
        "surface-container-low":      "#181c21",
        "surface-container":          "#1c2025",
        "surface-container-high":     "#262a30",
        "surface-container-highest":  "#31353b",
        "surface-variant":            "#31353b",
        "surface-tint":               "#7ad0ff",

        "on-surface":         "#e0e2ea",
        "on-surface-variant": "#bcc8d1",
        "on-background":      "#e0e2ea",

        "outline":         "#87929b",
        "outline-variant": "#3d4850",

        "inverse-surface":    "#e0e2ea",
        "inverse-on-surface": "#2d3136",
        "inverse-primary":    "#00668a",
        
      },
      spacing: {
        base:               "8px",
        gutter:             "16px",
        xs:                 "0.5rem",
        sm:                 "1rem",
        md:                 "1.5rem",
        lg:                 "2rem",
        xl:                 "3rem",
        "container-margin": "24px",
      },
      borderRadius: {
        card: "24px",        // rounded-card
      },

      fontFamily: {
        display: ["Sora", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        "display-lg":  ["Sora", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "headline-md": ["Sora", "sans-serif"],
        "body-lg":     ["Inter", "sans-serif"],
        "body-md":     ["Inter", "sans-serif"],
        "label-sm":    ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg":  ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg":     ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md":     ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm":    ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      
    },
  },

  plugins: [],

  safelist: [
    // brand
    "border-primary", "border-secondary", "border-tertiary",
    "text-primary",   "text-secondary",   "text-tertiary",
    "bg-primary/10",  "bg-secondary/10",  "bg-tertiary/10",
    "hover:border-primary/50", "hover:border-secondary/50", "hover:border-tertiary/50",
    // material tokens usados dinámicamente
    "text-error", "border-error", "bg-error/15",
    "text-on-surface", "text-on-surface-variant",
    "bg-surface-container-highest", "bg-surface-container-high",
    "border-outline-variant",
    // error completo
    "border-error", "border-error/50",
    "bg-error", "bg-error/5", "bg-error/10", "bg-error/15", "bg-error/20",
    "text-error", "shadow-error/10",

    // colores dinámicos tabla entrenador
    "text-primary",   "text-secondary",   "text-tertiary",   "text-error",
    "bg-primary/10",  "bg-secondary/10",  "bg-tertiary/10",  "bg-error/10",
    "bg-primary/20",  "bg-secondary/20",  "bg-tertiary/20",  "bg-error/20",
    "border-primary", "border-secondary", "border-tertiary", "border-error",
    "border-primary/30", "border-secondary/30", "border-tertiary/30", "border-error/30",

  ],
};