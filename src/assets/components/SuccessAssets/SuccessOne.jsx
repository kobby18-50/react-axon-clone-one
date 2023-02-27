import SuccessOnePic from "../../../assets/photos/successOne.png";
import Ghana from "../../../assets/photos/ghana.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const SuccessOne = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-10">
        <div>
          <h1 className="font-bold text-2xl">
            Global Pet Security - Custom Mobile App for Dog Owners
          </h1>

          <div className="flex mt-3 space-x-5">
            <figure className="border rounded-full p-1 bg-slate-200">
              <img src={Ghana} alt="gh" className="h-6 w-6" />
            </figure>
            <span className="border rounded-md p-1 bg-slate-200 font-semibold">
              GPS tracking
            </span>
            <span className="border rounded-md p-1 bg-slate-200 font-semibold">
              IoT
            </span>
          </div>

          <p className="pt-3">
            Modern technology can help owners care for their dogs and keep them
            safe. GPS tracks and saves dogs’ history for their whole life,
            easily transfers it to new owners and ensures the security and
            detectability of the animal.
          </p>

         <Link>
         <p className="flex space-x-3 text-base mt-5">
            <span>Read case</span>
            <span className="pt-1.5 text-[18px]">
              <BsArrowRight />
            </span>
          </p>
         </Link>
        </div>

        <div>
          <figure>
            <img src={SuccessOnePic} alt="successOne" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SuccessOne;
