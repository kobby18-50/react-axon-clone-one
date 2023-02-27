import Badges from "../assets/components/Badges";
import OurServices from "../assets/components/OurServices";
import SuccessStories from "../assets/components/SuccessStories";

const Body = () => {
    return ( 
        <div className="pt-[550px]">
            <div>
            <Badges/>
            </div>

            <div>
                <OurServices/>
                <SuccessStories/>
            </div>

            
        </div>
     );
}
 
export default Body;