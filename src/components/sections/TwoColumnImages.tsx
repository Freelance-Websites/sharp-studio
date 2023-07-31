import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { getPixelColor } from '@/utils/getPixelColor';

const ImageBackgroundColor = ({ imageUrl, title, credit }: {
  imageUrl: string;
  title: string;
  credit: string;
}) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPixelColor = async () => {
      try {
        const color = await getPixelColor(imageUrl, 0, 0);
        setBackgroundColor(color);
      } catch (error) {
        setBackgroundColor('#FFFFFF');
      }
    };

    fetchPixelColor();
  }, [imageUrl]);

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="w-full h-full"
    >
      <canvas ref={canvasRef} width="1" height="1" style={{ display: 'none' }}></canvas>
      <Image
        src={imageUrl}
        alt={`${title} – ${credit}`}
        fill={true}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ImageBackgroundColor;
