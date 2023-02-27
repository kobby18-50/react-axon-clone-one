const ImgDataOne = ({ title, maintext, subtext }) => {
  return (
    <div className="text-white absolute top-[60px] left-[10%]">
      <div>
        <h5 className="text-sm uppercase font-medium">
          Creating Digital Products On A Global Scale
        </h5>

        <h1 className="text-4xl font-semibold py-8">{title}</h1>

        <span className="mt-7">
          {maintext} <br /> {subtext}
        </span>
        <br />

        <button className="btn bg-red text-white mt-10 hover:bg-transparent hover:text-red hover:border-red sm:absolute sm:top-80 sm:w-[90%] lg:w-[150px]">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ImgDataOne;
