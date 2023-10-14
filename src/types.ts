import { Options } from 'html2canvas'

export type UseScreenshotState = (options?: {
  type?: 'image/jpeg' | 'image/png'
  quality?: number
}) => [
  string | undefined,
  (node?: HTMLElement, options?: Partial<Options>) => Promise<string | void>,
  { error?: string },
]
