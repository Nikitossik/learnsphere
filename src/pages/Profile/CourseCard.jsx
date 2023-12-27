import { cn } from "@/lib/utils";

const CourseCard = ({ className }) => {
  return (
    <a
      href="#"
      className={cn(
        "bg-[${bgColor}] py-4 px-6 lg:py-5 lg:px-10 rounded-sm border border-black block",
        className
      )}
    >
      <h2 className="text-xl lg:text-2xl leading-snug font-bold">Python</h2>
      <p className="uppercase text-lg lg:text-xl mb-2 lg:mb-4">junior</p>
      <p className="text-sm lg:text-base">
        Learn the basics of Python 3, one of the most powerful, versatile, and
        in-demand programming languages today.
      </p>
    </a>
  );
};

export default CourseCard;
