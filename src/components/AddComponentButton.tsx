import { IoIosAdd } from "react-icons/io";

const AddComponentButton = ({placeholder,handleClick}:{
    placeholder:string,
    handleClick:()=>void
})=>{
    return(
        <button onClick={handleClick} className="flex gap-x-2 items-center text-[#1e2f97] font-bold bg-[#daf0ff] p-2 rounded-lg hover:bg-[#1e2f97] hover:text-[#daf0ff] transition-colors whitespace-nowrap"><IoIosAdd />{placeholder}</button>
    )
}

export default AddComponentButton
