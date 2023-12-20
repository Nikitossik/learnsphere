import ProfileCard from "./ProfileCard";
import StudentBoard from "./StudentBoard";
import TeacherBoard from "./TeacherBoard";

import { useLocation } from "react-router";

import studentProfile from "./images/student-profile-image.jpg";
import teacherProfile from "./images/teacher-profile-image.jpg";

const studentInfo = {
  imagePath: studentProfile,
  name: "Julia Fharat",
  age: "18",
  email: "juliafharat@gmail.com",
  phone: "+1 234 567 890",
};

const teacherInfo = {
  imagePath: teacherProfile,
  name: "Adam Hujir",
  age: "26",
  email: "adamhujir@gmail.com",
  phone: "+1 234 567 890",
};

const Profile = () => {
  const { pathname } = useLocation();

  const isStudent = pathname.includes("student");
  console.log(isStudent);

  return (
    <main className="flex-auto">
      <div className="container pt-10 lg:pt-20">
        <div className="flex gap-x-8">
          <div className="flex-auto">
            {isStudent ? <StudentBoard /> : <TeacherBoard />}
          </div>
          <div className="basis-[23.75rem] shrink-0">
            <h1 className="text-black text-4xl lg:text-3xl leading-tight font-bold mb-5">
              My profile
            </h1>
            <ProfileCard info={isStudent ? studentInfo : teacherInfo} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
