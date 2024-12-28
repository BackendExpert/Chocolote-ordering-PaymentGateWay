import React from 'react';
import BgNon from '../../components/Buttons/BgNon';
import HotProduct from './HotProduct';
import AboutUs from './AboutUs';
import OurCollection from './OurCollection';

const HomePage = () => {
  return (
    <div className="pt-8">
      <div className="relative h-[80vh] w-full py-16 px-4 md:px-16 bg-cover bg-center" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/ppd85lw.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> 
        {/* hero section */}
        <div className="relative px-2 md:px-32 text-white my-16 z-10">
          <h1 className="text-2xl md:text-4xl font-semibold">Satisfy Your Sweet Tooth with Chocoleta!</h1>
          <p className="">Order premium chocolates online and enjoy a delightful experience.</p>

          <div className="mt-6">
            <BgNon btntype={'button'} btnvalue={'Order Now'} />
          </div>

        </div>
      </div>

      {/* about us */}
      <div className="my-6">
        <AboutUs />
      </div>

      {/* our collection */}
      <div className="my-6">
        <OurCollection />
      </div>

      {/* hot products */}
      <div className="my-16">
        <HotProduct />
      </div>


      
    </div>
  );
};

export default HomePage;
