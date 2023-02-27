import { useState } from "react";
import { NavLink } from "react-router-dom";
import SuccessOne from "./SuccessAssets/SuccessOne";
import SuccessTwo from "./SuccessAssets/SuccessTwo";
import SuccessThree from "./SuccessAssets/SuccessThree";
import SuccessFour from "./SuccessAssets/SuccessFour";

const SuccessStories = () => {

    const [filter,setFilter] = useState('successOne')

    const activeNav = 'border-b-8 border-blue-400 duration-300'
    return ( 
        <div className="mx-[100px]">
            <div className="border-b border-black">
               <ul className="flex justify-between text-2xl">
               <NavLink onClick={()=>setFilter('successOne')} className={`cursor-pointer ${filter === 'successOne' ? activeNav : ""}`}>Global Pet Security</NavLink>
                <NavLink onClick={()=>setFilter('successTwo')} className={`cursor-pointer ${filter === 'successTwo' ? activeNav : ""}`}>AD</NavLink>
                <NavLink onClick={()=>setFilter('successThree')} className={`cursor-pointer ${filter === 'successThree' ? activeNav : ""}`}>zemp</NavLink>
                <NavLink onClick={()=>setFilter('successFour')} className={`cursor-pointer ${filter === 'successFour' ? activeNav : ""}`}>kanarhealth</NavLink>
               </ul>
            </div>

            {filter === 'successOne' && <SuccessOne/>}
            {filter === 'successTwo' && <SuccessTwo/>}
            {filter === 'successThree' && <SuccessThree/>}
            {filter === 'successFour' && <SuccessFour/>}
        </div>
     );
}
 
export default SuccessStories;