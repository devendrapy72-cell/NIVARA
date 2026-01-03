/**
 * Compresses an image file or base64 string to a smaller base64 string.
 * @param source Image source (File object, Blob, or base64 string)
 * @param maxWidth Maximum width of the output image (default: 300px for thumbnails)
 * @param quality JPEG quality (0 to 1, default: 0.7)
 * @returns Promise resolving to compressed base64 string
 */
export const compressImage = (
    source: File | Blob | string,
    maxWidth: number = 300,
    quality: number = 0.7
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image()

        // Handle loading completion
        img.onload = () => {
            // Calculate new dimensions
            let width = img.width
            let height = img.height

            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width)
                width = maxWidth
            }

            // Draw to canvas
            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height

            const ctx = canvas.getContext('2d')
            if (!ctx) {
                reject(new Error('Could not get canvas context'))
                return
            }

            ctx.drawImage(img, 0, 0, width, height)

            // Export as base64
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality)
            resolve(compressedDataUrl)
        }

        img.onerror = (err) => reject(err)

        // Load source into image
        if (typeof source === 'string') {
            img.src = source
        } else {
            img.src = URL.createObjectURL(source)
        }
    })
}
