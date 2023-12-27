import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import CourseCard from "./CourseCard";

import sort from "@/assets/icons/sort.svg";
import sort2 from "@/assets/icons/sort2.svg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

const TeacherBoard = () => {
  return (
    <div>
      <header className="mb-5 flex flex-wrap items-center justify-between gap-4 lg:justify-start lg:gap-48">
        <h2 className="text-black text-2xl lg:text-3xl font-bold">
          My courses
        </h2>

        <ToggleGroup type="single" value="a">
          <ToggleGroupItem value="a">
            <img src={sort} className="w-5 md:w-6" alt="" />
          </ToggleGroupItem>
          <ToggleGroupItem value="b">
            <img src={sort2} className="w-5 md:w-6" alt="" />
          </ToggleGroupItem>
        </ToggleGroup>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-5">
        <CourseCard key="1" />
        <CourseCard key="2" />
        <CourseCard key="3" />
        <CourseCard key="4" />
        <CourseCard key="5" />
      </div>
    </div>
  );
};

export default TeacherBoard;
