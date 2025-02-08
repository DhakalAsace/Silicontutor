// @ts-check
import { fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'

type Theme = {
  theme: (path: string) => string
}

/** @type {import("tailwindcss").Config} */
const config: Config = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }: Theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            p: {
              fontWeight: '300',
              lineHeight: '1.75',
            },
            'h1,h2,h3,h4,h5,h6': {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            ul: {
              fontWeight: '300',
            },
            ol: {
              fontWeight: '300',
            },
            li: {
              fontWeight: '300',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
          },
        },
      }),
    },
  },
  plugins: [
    forms,
    typography,
    ({ addBase, theme }: PluginAPI) => {
      addBase({
        'a, button': {
          outlineColor: theme('colors.primary.500'),
          '&:focus-visible': {
            outline: '2px solid',
            borderRadius: theme('borderRadius.DEFAULT'),
            outlineColor: theme('colors.primary.500'),
          },
        },
      })
    },
  ],
}

export default config
