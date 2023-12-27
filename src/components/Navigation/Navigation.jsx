import profileIcon from "../../assets/icons/profile.svg";
import { Button } from "../ui/button";

import NavigationDropdown from "./NavigationDropdown";

const Navigation = () => {
  return (
    <header className="w-full pt-10 lg:pt-[50px]">
      <div className="container flex justify-between items-center space-x-4">
        <a
          href="#"
          className="text-base-sm font-bold uppercase tracking-wide leading-tight"
        >
          LearnSphere
        </a>
        <ul className="hidden sm:flex pl-[3.44rem] lg:pl-0 lg:justify-center flex-auto gap-x-[50px] text-sm ">
          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Course
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Topic
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline underline-offset-4">
              Teacher
            </a>
          </li>
        </ul>
        <div className="flex gap-x-4">
          <Button variant="ghost" className="p-0">
            <img
              src={profileIcon}
              className="w-[1.375rem] sm:w-[1.8125rem] lg:w-[2.875rem]"
              alt="profile icon"
            />
          </Button>
          <NavigationDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
