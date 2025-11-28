
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProduct from './components/FeaturedProduct';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#1d1d1f]">
      <Header />
      <main>
        <Hero />
        <FeaturedProduct
          superTitle="AURA NOTEBOOK"
          title="Supercharged for pros."
          description="The most powerful Notebook ever. With the blazing-fast A1 chip — the first silicon designed for pros — you get groundbreaking performance and amazing battery life."
          imageUrl="https://picsum.photos/1200/800?grayscale&blur=1"
          isDarkMode={true}
        />
        <FeaturedProduct
          superTitle="AURA WATCH"
          title="A healthy leap ahead."
          description="A beautiful display. Durable design. And powerful features to keep you connected, active, and healthy."
          imageUrl="https://picsum.photos/1200/800?random=2"
          isDarkMode={false}
        />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;
