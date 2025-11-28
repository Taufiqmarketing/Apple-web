
import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface GridItemProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, description, imageUrl, className }) => {
    return (
        <div className={`relative text-center p-8 rounded-lg overflow-hidden ${className}`}>
            <div className="relative z-10">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="mt-2 text-lg">{description}</p>
                <div className="mt-4 flex justify-center items-center space-x-6">
                    <a href="#" className="text-blue-600 hover:underline">
                        Learn more<ChevronRightIcon />
                    </a>
                    <a href="#" className="text-blue-600 hover:underline">
                        Buy<ChevronRightIcon />
                    </a>
                </div>
            </div>
            <img src={imageUrl} alt={title} className="mt-8 mx-auto w-full h-64 object-cover" />
        </div>
    );
};

const ProductGrid: React.FC = () => {
  return (
    <section className="py-5 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <GridItem 
          title="AuraBuds" 
          description="Magic runs in the family." 
          imageUrl="https://picsum.photos/600/400?random=3"
          className="bg-gray-50"
        />
        <GridItem 
          title="Trade In" 
          description="Get credit toward a new device." 
          imageUrl="https://picsum.photos/600/400?random=4"
          className="bg-gray-50"
        />
        <GridItem 
          title="AuraCard" 
          description="Get 3% Daily Cashback." 
          imageUrl="https://picsum.photos/600/400?random=5"
          className="bg-gray-50 text-white"
        />
        <GridItem 
          title="Entertainment" 
          description="All on Aura+." 
          imageUrl="https://picsum.photos/600/400?random=6"
          className="bg-gray-50 text-white"
        />
      </div>
    </section>
  );
};

export default ProductGrid;
