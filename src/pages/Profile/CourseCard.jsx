const CourseCard = ({ className }) => {
  const classes =
    "bg-[${bgColor}] py-5 px-10 rounded-sm border border-black block" +
    ` ${className}`;

  return (
    <a href="#" className={classes}>
      <h2 className="text-2xl leading-snug font-bold">Python</h2>
      <p className="uppercase text-xl mb-4">junior</p>
      <p>
        Learn the basics of Python 3, one of the most powerful, versatile, and
        in-demand programming languages today.
      </p>
    </a>
  );
};

export default CourseCard;
