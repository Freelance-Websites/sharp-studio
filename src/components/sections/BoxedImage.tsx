import Image from 'next/image';

const BoxedImage = ({ imageUrl, title, credit, color }: {
  imageUrl: string;
  title: string;
  credit: string;
  color: string;
}) => {
  return (
      <div
        className={`
          w-full h-full
          ${color}
        `}
      >
        <Image
          src={imageUrl}
          alt={`${title} – ${credit}`}
          fill={true}
          className="p-8 md:p-16 lg:p-24 lg:mt-4 w-full object-contain"
        />
      </div>
  );
};

export default BoxedImage;
