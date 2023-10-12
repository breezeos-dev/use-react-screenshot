declare type UseScreenshotState = (options?: {
  type: 'image/jpeg' | 'image/png'
  quality: number
}) => [
  string | undefined,
  (
    ref: HTMLDivElement,
    options?: { allowTaint: boolean; useCORS: boolean },
  ) => void,
]
declare type CreateFileNameState = (
  extension: string,
  names: string[],
) => string

declare function useScreenshot(): UseScreenshotState
declare function createFileName(): CreateFileNameState
export { useScreenshot, createFileName }
