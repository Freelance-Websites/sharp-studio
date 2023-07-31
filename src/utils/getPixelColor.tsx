export const getPixelColor = async (imageUrl: string, x: number, y: number) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous'; // To avoid CORS issues with external images

  return new Promise((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      const context = canvas.getContext('2d');
      context?.drawImage(img, -x, -y);

      const pixelData = context?.getImageData(0, 0, 1, 1).data;
      const color = `#${rgbToHex(pixelData?.[0], pixelData?.[1], pixelData?.[2])}`;
      
      resolve(color);
    };

    img.onerror = (error) => {
      reject(error);
    };

    img.src = imageUrl;
  });
};

// Helper function to convert RGB values to HEX
const rgbToHex = (r: number, g: number, b: number) => {
  return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
};
