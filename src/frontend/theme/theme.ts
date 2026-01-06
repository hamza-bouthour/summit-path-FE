import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

// Philosophical deep slate blue
const slate: MantineColorsTuple = [
  '#f4f6f8',
  '#e5e8ec',
  '#c7cdd5',
  '#a7b1bf',
  '#8b97a9',
  '#78869b',
  '#6b7b92',
  '#5a697f',
  '#4e5d73',
  '#3d4f66'
];

// Warm ivory/cream
const ivory: MantineColorsTuple = [
  '#fefdfb',
  '#faf8f4',
  '#f5f2eb',
  '#f0ebe0',
  '#ebe5d6',
  '#e6dfcc',
  '#ddd5be',
  '#d4caad',
  '#cbbf9c',
  '#c2b48b'
];

// Bronze/gold accent
const bronze: MantineColorsTuple = [
  '#fdf8f0',
  '#f8efe0',
  '#f0dcc0',
  '#e7c99e',
  '#deb87e',
  '#d5a85f',
  '#c99a4a',
  '#b58a3d',
  '#a07a34',
  '#8b6a2b'
];

// Sage green for accents
const sage: MantineColorsTuple = [
  '#f4f7f5',
  '#e5ebe8',
  '#c7d5cd',
  '#a8bfb2',
  '#8caa98',
  '#779a85',
  '#668f77',
  '#567d66',
  '#4a6d58',
  '#3d5d4a'
];

export const theme = createTheme({
  primaryColor: 'slate',
  colors: {
    slate,
    ivory,
    bronze,
    sage,
  },
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  headings: {
    fontFamily: '"Crimson Pro", Georgia, serif',
    fontWeight: '600',
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(24),
  },
  shadows: {
    xs: '0 1px 2px rgba(61, 79, 102, 0.05)',
    sm: '0 2px 4px rgba(61, 79, 102, 0.08)',
    md: '0 4px 12px rgba(61, 79, 102, 0.1)',
    lg: '0 8px 24px rgba(61, 79, 102, 0.12)',
    xl: '0 16px 48px rgba(61, 79, 102, 0.15)',
  },
  defaultRadius: 'md',
  other: {
    transitionDuration: '200ms',
    readModeBackground: '#1a1a2e',
    readModeText: '#e8e8e8',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
          transition: 'all 200ms ease',
        },
      },
    },
    Card: {
      styles: {
        root: {
          transition: 'transform 200ms ease, box-shadow 200ms ease',
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});

// Read mode theme overrides
export const readModeStyles = {
  backgroundColor: '#1a1a2e',
  color: '#e8e8e8',
  transition: 'all 0.4s ease',
};

export const lightModeStyles = {
  backgroundColor: '#fefdfb',
  color: '#3d4f66',
  transition: 'all 0.4s ease',
};
