import type { Config } from 'tailwindcss';

/**
 * Saffron & Ash — design tokens
 *
 * Warm editorial system: cream paper background, deep charcoal ink,
 * a single terracotta accent. No gradients, no glow. Type carries the design.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface
        cream: '#F7F2EA',        // page background
        parchment: '#EFE7DA',    // secondary surface / bands
        paper: '#FDFBF7',        // raised cards
        ink: {
          DEFAULT: '#22201D',    // primary text
          soft: '#5B564D',       // secondary text
          faint: '#8C8578',      // metadata, captions
        },
        // Single accent
        terracotta: {
          DEFAULT: '#B5532E',
          dark: '#93411F',       // hover / pressed
          light: '#D98B66',      // tints, borders
          wash: '#F3E2D6',       // subtle background tint
        },
        line: '#DDD3C2',         // hairline borders
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      // Editorial type scale
      fontSize: {
        'hero': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'title': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
        'lead': ['1.125rem', { lineHeight: '1.65' }],
      },
      // 4/8px rhythm helpers
      spacing: {
        '18': '4.5rem',
        'section': '7rem',       // vertical section padding (desktop)
      },
      borderRadius: {
        card: '4px',             // restrained radius throughout
      },
      maxWidth: {
        prose: '42rem',          // comfortable line length
        shell: '76rem',          // page container
      },
      boxShadow: {
        // One quiet elevation step only
        card: '0 1px 2px rgb(34 32 29 / 0.06)',
        raised: '0 4px 16px rgb(34 32 29 / 0.10)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
