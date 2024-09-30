import { SetStateAction } from "react"
import type { skillsInfoType } from "../../Layout";
import { IoTrashBinOutline } from "react-icons/io5";

const SkillItem = ({skill,setter,index}:{
    skill:string,
    setter:React.Dispatch<SetStateAction<skillsInfoType>>,
    index:number
})=>{

    const handleClick=()=>{
        setter(prev=>{
            const newArr = [...prev];
            newArr.splice(index,1)
            return newArr
        })
    }
    
    return(
        <div onClick={handleClick} className="group relative flex items-center justify-center text-black bg-[#d3d3d3] w-fit h-fit p-2 rounded-lg font-bold transition-colors hover:bg-[#fee5e3]">
            <div className="hidden absolute group-hover:block text-[#ee1e06] font-bold"><IoTrashBinOutline /></div>
            <span className="group-hover:invisible">{skill}</span>
        </div>
    )
}

export default SkillItem