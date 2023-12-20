import { Button } from "@/components/ui/button";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";

import hexagonDesktop from "./images/hexagon-desktop.jpg";
import hexagonTablet from "./images/hexagon-tablet.jpg";
import hexagonMobile from "./images/hexagon-mobile.jpg";

const Home = () => {
  return (
    <main className="flex-auto">
      <div className="container grid content-start grid-cols-1 sm:grid-cols-[16.4375rem,_1fr] sm:grid-rows-[min-content_,auto] lg:grid-cols-[22.75rem,_1fr] gap-x-8 lg:gap-x-12 pt-10 lg:pt-20">
        <h1 className="text-black text-4xl sm:max-w-[9ch] lg:text-5xl xl:text-6xl leading-tight font-bold mb-4">
          Our courses are the best
        </h1>
        <div className="row-start-3 sm:row-start-2 sm:pb-[1.31rem] lg:pb-24 xl:pb-[8.38rem] shrink-0">
          <h2 className="text-lg lg:text-xl font-bold uppercase mb-3 lg:mb-5">
            learning meets innovation
          </h2>
          <p className="mb-5 lg:mb-10 text-sm md:text-base">
            Unlock new opportunities with our interactive and engaging content,
            curated by industry experts
          </p>
          <Button variant="outline" size="xl">
            Our courses
          </Button>
        </div>
        <div className="max-w-sm justify-self-center sm:max-w-none sm:row-span-2 sm:col-start-2 relative pb-0">
          <div
            className="absolute translate-x-[-22%] translate-y-[-8%] 
          sm:translate-x-[-18%] sm:translate-y-[-10%]
          md:translate-x-[-18%] md:translate-y-[-7%]
          lg:translate-x-[-12%] lg:translate-y-[-6%]
          w-[138%] sm:w-[120%] md:w-[115%] z-[-1]"
          >
            <picture>
              <source srcSet={hexagonDesktop} media="(min-width:1024px)" />
              <source srcSet={hexagonTablet} media="(min-width:640px)" />
              <img
                src={hexagonMobile}
                className="w-full"
                alt="background pattern"
              />
            </picture>
          </div>
          <div className="flex h-full min-h-[calc(245px+15vw)] sm:min-h-min pb-10 sm:pb-28 lg:pb-0 gap-x-3 md:gap-x-4 lg:gap-x-8">
            <div className="basis-1/2 self-end rounded-sm overflow-hidden">
              <img src={image1} alt="" />
            </div>
            <div className="basis-1/2 rounded-sm overflow-hidden">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
