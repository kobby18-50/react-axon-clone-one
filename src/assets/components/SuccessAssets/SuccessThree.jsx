import SuccessThreePic from "../../../assets/photos/successThree.png";
import Ghana from "../../../assets/photos/ghana.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const SuccessThree = () => {
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
              Booking App
            </span>
            <span className="border rounded-md p-1 bg-slate-200 font-semibold">
              Retail
            </span>
          </div>

          <p className="pt-3">
            Android and iOS native application that allows the use of drones for
            entertainment purposes and offers a bunch of options such as drone
            booking, location tracking, convenient payment system, chats, and
            profiles for two user roles.
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
            <img src={SuccessThreePic} alt="successOne" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SuccessThree;
