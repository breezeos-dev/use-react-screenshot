export type UseScreenshotState = (options?: {
  type?: 'image/jpeg' | 'image/png'
  quality?: number
}) => [
  string | undefined,
  (
    node?: HTMLElement,
    options?: {
      allowTaint?: boolean
      useCORS?: boolean
    },
  ) => Promise<string | void>,
  { error?: string },
]
