import ProfileCard from "./ProfileCard";
import StudentBoard from "./StudentBoard";
import TeacherBoard from "./TeacherBoard";

import { useLocation } from "react-router";

import studentProfile from "./images/student-profile-image.jpg";
import teacherProfile from "./images/teacher-profile-image.jpg";

import { UserProvider } from "@/hoc/UserContext";

const studentInfo = {
  imagePath: studentProfile,
  firstName: "Julia",
  lastName: "Fharat",
  age: "18",
  email: "juliafharat@gmail.com",
  password: "0123456789",
  phone: "+1 234 567 890",
};

const teacherInfo = {
  imagePath: teacherProfile,
  firstName: "Adam",
  lastName: "Hujir",
  age: "26",
  email: "adamhujir@gmail.com",
  password: "0123456789",
  phone: "+1 234 567 890",
};

const Profile = () => {
  const { pathname } = useLocation();

  const isStudent = pathname.includes("student");

  return (
    <UserProvider value={isStudent ? studentInfo : teacherInfo}>
      <main className="flex-auto">
        <div className="container pt-10 lg:pt-20">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="basis-1/3 shrink-0 sm:order-2">
              <h1 className="text-black text-4xl lg:text-3xl font-bold mb-5">
                My profile
              </h1>
              <ProfileCard />
            </div>
            <div className="flex-auto order-1">
              {isStudent ? <StudentBoard /> : <TeacherBoard />}
            </div>
          </div>
        </div>
      </main>
    </UserProvider>
  );
};

export default Profile;
