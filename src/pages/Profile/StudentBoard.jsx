import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import TeacherCard from "./TeacherCard";
import useMediaQuery from "@/hooks/useMediaQuery";

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

const StudentBoard = () => {
  const [category, setCategory] = useState("courses");

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  function handleValueChange(value) {
    setCategory(value);
  }

  console.log(isDesktop);

  return (
    <>
      <Tabs
        defaultValue={category}
        value={category}
        onValueChange={handleValueChange}
      >
        {isDesktop ? (
          <TabsList className="w-full gap-x-10 justify-start flex-wrap bg-white mb-3">
            <TabsTrigger
              className="p-0 duration-100 text-xl xl:text-2xl font-bold text-black/30 data-[state=active]:bg-white lg:data-[state=active]:text-2xl xl:data-[state=active]:text-3xl data-[state=active]:text-black data-[state=active]:shadow-none"
              value="courses"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              className="p-0 duration-100 text-xl xl:text-2xl font-bold text-black/30 data-[state=active]:bg-white lg:data-[state=active]:text-2xl xl:data-[state=active]:text-3xl data-[state=active]:text-black data-[state=active]:shadow-none"
              value="fav-courses"
            >
              Favorite courses
            </TabsTrigger>
            <TabsTrigger
              className="p-0 duration-100 text-xl xl:text-2xl font-bold text-black/30 data-[state=active]:bg-white lg:data-[state=active]:text-2xl xl:data-[state=active]:text-3xl data-[state=active]:text-black data-[state=active]:shadow-none"
              value="fav-teachers"
            >
              Favorite teachers
            </TabsTrigger>
          </TabsList>
        ) : (
          <Select
            defaultValue={category}
            onValueChange={handleValueChange}
            onOpenChange={(e) => {
              console.log(e);
            }}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="courses">Courses</SelectItem>
              <SelectItem value="fav-courses">Favorite courses</SelectItem>
              <SelectItem value="fav-teachers"> Favorite teachers</SelectItem>
            </SelectContent>
          </Select>
        )}
        <TabsContent
          value="courses"
          className="mt-0 data-[state='active']:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-5"
        >
          <CourseCard className="bg-[#EFECF9]" key="1" />
          <CourseCard className="bg-[#ECF9F3]" key="2" />
          <CourseCard className="bg-[#F9F3EC]" key="3" />
          <CourseCard className="bg-[#F9ECEC]" key="4" />
        </TabsContent>
        <TabsContent
          value="fav-courses"
          className="mt-0 data-[state='active']:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-5"
        >
          <CourseCard className="bg-[#EFECF9]" key="1" />
          <CourseCard className="bg-[#ECF9F3]" key="2" />
          <CourseCard className="bg-[#F9F3EC]" key="3" />
          <CourseCard className="bg-[#F9ECEC]" key="4" />
        </TabsContent>
        <TabsContent
          value="fav-teachers"
          className="mt-0 data-[state='active']:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-5"
        >
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default StudentBoard;
