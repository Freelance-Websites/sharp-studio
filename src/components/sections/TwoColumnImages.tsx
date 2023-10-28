import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import { getPixelColor } from '@/utils/getPixelColor';

const TwoColumnImages = ({ imageUrl, title, credit, imageMobile }: {
  imageUrl: string;
  imageMobile?: string;
  title: string;
  credit: string;
  titleTwo?: string;
  creditTwo?: string;
}) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPixelColor = async () => {
      try {
        const color = await getPixelColor(imageUrl, 0, 0);
        setBackgroundColor(`${color}`);
      } catch (error) {
        setBackgroundColor('#FFFFFF');
      }
    };

    fetchPixelColor();
  }, [imageUrl]);

  return (
      <div
        style={{ backgroundColor: backgroundColor }}
        className="w-full h-full relative"
      >
        <canvas ref={canvasRef} width="1" height="1" style={{ display: 'none' }}></canvas>
        <Image
          src={imageUrl}
          alt={`${title} – ${credit}`}
          fill={true}
          sizes="(max-width: 768px) 767px, (max-width: 1200px) 50vw, 33vw"
          className={`
            ${imageMobile && 'hidden lg:block'}
            w-full h-full object-contain
          `}
        />
        {imageMobile &&
          <Image
            src={imageMobile}
            alt={`${title} – ${credit}`}
            fill={true}
            sizes="(max-width: 768px) 767px, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-contain block lg:hidden px-16"
          />
        }
      </div>
  );
};

export default TwoColumnImages;
