
import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface FeaturedProductProps {
  superTitle: string;
  title: string;
  description: string;
  imageUrl: string;
  isDarkMode: boolean;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  superTitle,
  title,
  description,
  imageUrl,
  isDarkMode,
}) => {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const bgColor = isDarkMode ? 'bg-black' : 'bg-gray-50';
  const linkColor = isDarkMode ? 'text-blue-500' : 'text-blue-600';

  return (
    <section className={`${bgColor} ${textColor} text-center py-20 px-4`}>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl md:text-2xl font-medium">{superTitle}</h3>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-2">{title}</h2>
        <p className="text-xl md:text-2xl mt-4 font-light max-w-2xl mx-auto">{description}</p>
        <div className="mt-6 flex justify-center items-center space-x-8 text-lg">
          <a href="#" className={`${linkColor} hover:underline`}>
            Learn more<ChevronRightIcon />
          </a>
          <a href="#" className={`${linkColor} hover:underline`}>
            Buy<ChevronRightIcon />
          </a>
        </div>
      </div>
      <div className="mt-16">
        <img src={imageUrl} alt={title} className="mx-auto" />
      </div>
    </section>
  );
};

export default FeaturedProduct;
