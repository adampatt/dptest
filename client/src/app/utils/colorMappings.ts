export const colorClasses = {
  yellow: {
    text: 'text-yellow',
    bg: 'bg-yellow',
  },
  blue: {
    text: 'text-blue',
    bg: 'bg-blue',
  },
  green: {
    text: 'text-green',
    bg: 'bg-green',
  },
  orange: {
    text: 'text-orange',
    bg: 'bg-orange',
  },
  black: {
    text: 'text-black',
    bg: 'bg-black',
  },
} as const;

export type ColorKey = keyof typeof colorClasses; 