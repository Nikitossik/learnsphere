import sideImageTablet from "./images/side-image-tablet.jpg";
import sideImageDesktop from "./images/side-image-desktop.jpg";

import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <main className="flex-auto">
      <div className="container pt-10 sm:flex gap-x-6 lg:gap-x-36 xl:gap-x-48">
        <div className="hidden sm:block relative sm:basis-[15rem] lg:basis-[20rem]">
          <div className="absolute z-[-1] top-0 left-0 -translate-x-[17%] -translate-y-[13%] lg:-translate-x-[7%] lg:-translate-y-[13%] w-max">
            <picture>
              <source srcSet={sideImageDesktop} media="(min-width:1024px)" />
              <img src={sideImageTablet} alt="side decore image" />
            </picture>
          </div>
        </div>
        <div className="flex-auto lg:basis-[30rem] lg:py-14 lg:pr-11">
          <h1 className="text-black text-center text-4xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-[3.12rem]">
            Let’s make it
          </h1>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
