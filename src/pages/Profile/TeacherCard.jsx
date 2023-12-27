import teacherImage from "./images/teacher-image.jpg";

const TeacherCard = () => {
  return (
    <a
      href="#"
      className="bg-[${bgColor}] p-5 rounded-sm border border-black flex flex-col min-[420px]:flex-row gap-3"
    >
      <div className="min-[420px]:order-2 basis-[10rem]">
        <img
          src={teacherImage}
          className="rounded-sm w-full"
          alt="John's Doe image"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl break-keep leading-snug font-bold">John Doe</h2>
        <p className="text-sm">
          I&apos;m a Python developer with over a decade of experience, started
          coding at 16 in 2012. My Python courses are ...
        </p>
      </div>
    </a>
  );
};

export default TeacherCard;
