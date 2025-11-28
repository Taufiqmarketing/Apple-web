
import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Aura Phone 16</h1>
        <h2 className="text-2xl md:text-3xl mt-4 font-light">It’s a leap year.</h2>
        <div className="mt-6 flex justify-center items-center space-x-8 text-lg">
          <a href="#" className="text-blue-500 hover:underline">
            Learn more<ChevronRightIcon />
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            Buy<ChevronRightIcon />
          </a>
        </div>
        <div className="mt-16">
            <img src="https://picsum.photos/1000/500?random=1" alt="Aura Phone 16" className="mx-auto rounded-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
