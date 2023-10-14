import { useState } from 'react'
import html2canvas, { Options } from 'html2canvas'
import { UseScreenshotState } from './types'

const useScreenshot: UseScreenshotState = ({ type, quality } = {}) => {
  const [image, setImage] = useState<string>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const takeScreenShot = (node?: HTMLElement, options?: Partial<Options>) => {
    if (!node) {
      throw new Error('You should provide correct html node.')
    }
    setIsLoading(true)
    return html2canvas(node, options)
      .then((canvas) => {
        const croppedCanvas = document.createElement('canvas')
        const croppedCanvasContext = croppedCanvas.getContext('2d')

        const cropPositionTop = 0
        const cropPositionLeft = 0
        const cropWidth = canvas.width
        const cropHeight = canvas.height

        croppedCanvas.width = cropWidth
        croppedCanvas.height = cropHeight

        croppedCanvasContext?.drawImage(
          canvas,
          cropPositionLeft,
          cropPositionTop,
        )

        const base64Image = croppedCanvas.toDataURL(type, quality)

        setImage(base64Image)
        setIsLoading(false)
        return base64Image
      })
      .catch(setError)
  }

  const clear = () => setImage(undefined);

  return [
    image,
    takeScreenShot,
    isLoading,
    clear,
    {
      error,
    },
  ]
}

function createFileName(extension: string = '', ...names: string[]) {
  if (!extension) {
    return ''
  }

  return `${names.join('')}.${extension}`
}

export { useScreenshot, createFileName }
