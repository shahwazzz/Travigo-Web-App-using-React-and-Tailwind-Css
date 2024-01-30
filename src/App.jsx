import React from "react";
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner, NewsLetter } from "./components";
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from "./data/travigodata";

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise  brands={brands} />
      <Pricings pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI}/>
      <NewsLetter />
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
