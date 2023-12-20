import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import TeacherCard from "./TeacherCard";

const StudentBoard = () => {
  return (
    <Tabs defaultValue="courses">
      <TabsList className="w-full gap-x-10 justify-start bg-white mb-5">
        <TabsTrigger
          className="p-0 text-2xl font-bold text-black/30 data-[state=active]:bg-white data-[state=active]:text-3xl data-[state=active]:text-black data-[state=active]:shadow-none"
          value="courses"
        >
          Courses
        </TabsTrigger>
        <TabsTrigger
          className="p-0 text-2xl font-bold text-black/30 data-[state=active]:bg-white data-[state=active]:text-3xl data-[state=active]:text-black data-[state=active]:shadow-none"
          value="fav-courses"
        >
          Favorite courses
        </TabsTrigger>
        <TabsTrigger
          className="p-0 text-2xl font-bold text-black/30 data-[state=active]:bg-white data-[state=active]:text-3xl data-[state=active]:text-black data-[state=active]:shadow-none"
          value="fav-teachers"
        >
          Favorite teachers
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="courses"
        className="mt-0 grid grid-cols-2 gap-x-7 gap-y-5"
      >
        <CourseCard className="bg-[#EFECF9]" key="1" />
        <CourseCard className="bg-[#ECF9F3]" key="2" />
        <CourseCard className="bg-[#F9F3EC]" key="3" />
        <CourseCard className="bg-[#F9ECEC]" key="4" />
      </TabsContent>
      <TabsContent
        value="fav-courses"
        className="mt-0 grid grid-cols-2 gap-x-7 gap-y-5"
      >
        <CourseCard className="bg-[#EFECF9]" key="1" />
        <CourseCard className="bg-[#ECF9F3]" key="2" />
        <CourseCard className="bg-[#F9F3EC]" key="3" />
        <CourseCard className="bg-[#F9ECEC]" key="4" />
      </TabsContent>
      <TabsContent
        value="fav-teachers"
        className="mt-0 grid grid-cols-2 gap-x-7 gap-y-5"
      >
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </TabsContent>
    </Tabs>
  );
};

export default StudentBoard;
