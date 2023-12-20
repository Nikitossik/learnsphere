import teacherImage from "./images/teacher-image.jpg";

const TeacherCard = () => {
  return (
    <a
      href="#"
      className="bg-[${bgColor}] p-5 rounded-sm border border-black flex gap-3"
    >
      <div className="">
        <h2 className="text-2xl break-keep leading-snug font-bold">John Doe</h2>
        <p className="text-sm">
          I&apos;m a Python developer with over a decade of experience, started
          coding at 16 in 2012. My Python courses are ...
        </p>
      </div>
      <img src={teacherImage} className="rounded-sm" alt="John's Doe image" />
    </a>
  );
};

export default TeacherCard;
