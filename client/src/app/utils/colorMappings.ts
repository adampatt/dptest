import { z } from 'zod'

const ColorEnum = z.enum(['yellow', 'blue', 'green', 'orange', 'black'])

const ColorClassesSchema = z.object({
  text: z.string().startsWith('text-'),
  bg: z.string().startsWith('bg-'),
})

const ColorMappingSchema = z.record(ColorEnum, ColorClassesSchema)

export const colorClasses = ColorMappingSchema.parse({
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
})

export type ColorKey = z.infer<typeof ColorEnum>
export type ColorClasses = z.infer<typeof ColorMappingSchema> 