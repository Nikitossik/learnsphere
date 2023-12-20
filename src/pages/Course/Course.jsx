import courseImage from "./images/course.jpg";
import teacherImage from "./images/teacher.jpg";
import commentAvatar from "./images/comment-avatar.svg";

import instagramIcon from "../../assets/icons/instagram.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";

import { Button } from "@/components/ui/button";

const Course = () => {
  return (
    <main className="flex-auto">
      <div className="container pt-10 lg:pt-20 flex flex-col gap-y-7">
        <header className="flex gap-x-7">
          <div className="basis-[23.75rem] min-h-[23.75rem] shrink-0 relative">
            <div className="absolute z-[-1] top-0 l-0 w-max">
              <img src={courseImage} alt="Course image" />
            </div>
          </div>
          <div className="flex-auto flex flex-col gap-y-7">
            <div className="flex items-center justify-between gap-x-7">
              <h1 className="text-black text-4xl max-w-[6ch] lg:text-5xl xl:text-6xl leading-none font-bold">
                Python{" "}
                <span className="uppercase font-medium text-3xl">Junior</span>
              </h1>
              <div className="flex gap-x-4 justify-end flex-auto">
                <h2 className="text-2xl flex-1 leading-none font-bold max-w-[8ch]">
                  Duration:{" "}
                  <span className="uppercase font-medium text-xl">
                    6 months
                  </span>
                </h2>
                <h2 className="text-2xl flex-1 leading-none font-bold max-w-[13ch]">
                  Proof at the end:{" "}
                  <span className="uppercase font-medium text-xl">
                    Certificate
                  </span>
                </h2>
              </div>
            </div>
            <p className="flex-auto">
              Explore the fundamentals of Python programming with our
              Junior-Level course. This fast-paced, hands-on program will guide
              you through the essentials of Python syntax and application. Gain
              practical experience, build your coding portfolio, and acquire the
              skills to kickstart your journey in the dynamic world of
              programming.
            </p>
          </div>
        </header>
        <section className="">
          <h2 className="text-3xl font-bold mb-7">What will you learn</h2>
          <div className="grid grid-cols-3 auto-rows-fr gap-x-7 gap-y-2">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">01</h3>
              <p className="flex-auto">Basics of Python syntax</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">02</h3>
              <p className="flex-auto">Functions and their application</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">03</h3>
              <p className="flex-auto">Basics of object-oriented programming</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">04</h3>
              <p className="flex-auto">Working with variables and data types</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">05</h3>
              <p className="flex-auto">
                Data structures: lists, tuples, dictionaries
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">06</h3>
              <p className="flex-auto">
                Introduction to working with libraries and frameworks
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">07</h3>
              <p className="flex-auto">Conditional statements and loops</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">08</h3>
              <p className="flex-auto">File handling and exception handling</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold uppercase">09</h3>
              <p className="flex-auto">
                Practical projects for building a portfolio
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#ECF9F8] px-20 py-12">
          <div className="flex items-start gap-x-8">
            <div className="flex-auto">
              <h2 className="text-3xl mb-14">Teacher</h2>
              <div className="space-y-12">
                <div className="">
                  <h3 className="uppercase text-xl mb-3">Phone</h3>
                  <p>+1 354 958-23-51</p>
                </div>
                <div className="">
                  <h3 className="uppercase text-xl mb-3">Email</h3>
                  <p>hi@johndoe.com</p>
                </div>
                <div className="">
                  <h3 className="uppercase text-xl mb-3">Social</h3>
                  <p className="space-x-2">
                    <Button
                      type="ghost"
                      className="px-1 bg-transparent hover:bg-bg-white rounded-md"
                    >
                      <img src={instagramIcon} className="w-7" alt="" />
                    </Button>
                    <Button
                      type="ghost"
                      className="px-1 bg-transparent hover:bg-bg-white rounded-md"
                    >
                      <img src={youtubeIcon} className="w-7" alt="" />
                    </Button>
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[23.75rem]">
              <h2 className="text-2xl mb-11">John Doe</h2>
              <h3 className="text-2xl mb-5">Hey there!</h3>
              <p>
                I&apos;m a Python developer with over a decade of experience,
                started coding at 16 in 2012. My Python courses are intensive,
                hands-on programs focusing on practical skills. We cover key
                concepts like data structures, OOP, and web development using
                Django and Flask. The main goal is not just to teach syntax but
                to prepare students for solving real-world industry challenges.
                Welcome to the world of Python development!
              </p>
            </div>
            <div className="basis-[18.75rem] relative pb-[41%]">
              <img
                src={teacherImage}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-7">Comments</h2>
          <div className="space-y-5">
            <div className="flex">
              <div className="basis-[3.75rem] shrink-0">
                <img src={commentAvatar} className="" alt="" />
              </div>
              <div className="flex-auto">
                <div className="flex gap-x-2">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p className="text-sm">4 hours ago</p>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt ipsum beatae reiciendis laborum aliquam rerum quas
                  sapiente eius obcaecati. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non nesciunt ipsum beatae
                  reiciendis laborum aliquam rerum quas sapiente eius obcaecati.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt ipsum beatae reiciendis laborum aliquam rerum quas
                  sapiente eius obcaecati.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="basis-[3.75rem] shrink-0">
                <img src={commentAvatar} className="" alt="" />
              </div>
              <div className="flex-auto">
                <div className="flex gap-x-2">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p className="text-sm">4 hours ago</p>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt ipsum beatae reiciendis laborum aliquam rerum quas
                  sapiente eius obcaecati. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non nesciunt ipsum beatae
                  reiciendis laborum aliquam rerum quas sapiente eius obcaecati.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt ipsum beatae reiciendis laborum aliquam rerum quas
                  sapiente eius obcaecati.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="basis-[3.75rem] shrink-0">
                <img src={commentAvatar} className="" alt="" />
              </div>
              <div className="flex-auto">
                <div className="flex gap-x-2">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p className="text-sm">4 hours ago</p>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt ipsum beatae reiciendis laborum aliquam rerum quas
                  sapiente eius obcaecati. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non nesciunt ipsum beatae
                  reiciendis laborum aliquam rerum quas sapiente eius obcaecati.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt ipsum beatae reiciendis laborum aliquam rerum quas
                  sapiente eius obcaecati.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Course;
