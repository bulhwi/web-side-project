export const designTokens = {
  colors: {
    // Apple-style primary colors
    primary: {
      primary50: '#f0f9ff',
      primary100: '#e0f2fe',
      primary200: '#bae6fd',
      primary300: '#7dd3fc',
      primary400: '#38bdf8',
      primary500: '#007AFF', // Apple system blue
      primary600: '#0369a1',
      primary700: '#0284c7',
      primary800: '#075985',
      primary900: '#0c4a6e'
    },
    secondary: {
      secondary100: '#f8fafc',
      secondary500: '#64748b',
      secondary700: '#334155'
    },
    accent: {
      accent100: '#fef9c3',
      accent500: '#FF9500', // Apple orange
      accent700: '#a16207'
    },
    // Apple neutral colors
    neutral: {
      white: '#ffffff',
      gray50: '#fafafa',
      gray100: '#f5f5f5',
      gray200: '#e5e5e5',
      gray300: '#d4d4d4',
      gray400: '#a3a3a3',
      gray500: '#737373',
      gray600: '#525252',
      gray700: '#404040',
      gray800: '#262626',
      gray900: '#171717',
      black: '#000000'
    },
    // Apple system colors
    systemBlue: '#007AFF',
    systemGreen: '#34C759',
    systemOrange: '#FF9500',
    systemRed: '#FF3B30',
    systemPurple: '#AF52DE',
    systemTeal: '#5AC8FA',
    systemPink: '#FF2D92',
    // Apple background colors
    systemBackground: '#ffffff',
    secondarySystemBackground: '#f2f2f7',
    tertiarySystemBackground: '#ffffff',
    // Apple gray system colors
    systemGray: '#8E8E93',
    systemGray2: '#AEAEB2',
    systemGray3: '#C7C7CC',
    systemGray4: '#D1D1D6',
    systemGray5: '#E5E5EA',
    systemGray6: '#F2F2F7',
    // Legacy for backward compatibility
    grayscale: {
      white: '#ffffff',
      gray50: '#fafafa',
      gray100: '#f5f5f5',
      gray200: '#e5e5e5',
      gray300: '#d4d4d4',
      gray400: '#a3a3a3',
      gray500: '#737373',
      gray600: '#525252',
      gray700: '#404040',
      gray800: '#262626',
      gray900: '#171717',
      black: '#000000'
    }
  },
  typography: {
    fontFamilies: {
      // Apple system fonts
      heading: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
      body: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
      mono: '"SF Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    },
    fontSizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '8rem'      // 128px
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },
  // Apple-style spacing system
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem'     // 256px
  },
  // Apple-style border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'
  },
  // Apple-style shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000'
  }
} as const;

export type DesignTokens = typeof designTokens;