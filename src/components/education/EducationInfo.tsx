import AddComponentButton from "../AddComponentButton";
import {useContext} from 'react';
import { userContext } from "../../Layout";
import EducationItem from "./EducationItem";


const EducationInfo = ()=>{

    const context = useContext(userContext);

    const handleClick = ()=>{
        context.educationInfo.setter((prev)=>{
            const newArr = [...prev]
            newArr.push({})
            return newArr
        })
    }

    return(
        <div className="flex flex-col gap-y-2 items-center">
            <div className="flex flex-col gap-y-2 w-full">
                {context.educationInfo.state.map((item,i)=>{
                    return(
                        <EducationItem setter={context.educationInfo.setter} index={i} state={context.educationInfo.state}/>
                    )
                })}
            </div>
            <AddComponentButton handleClick={handleClick} placeholder="Add new education"></AddComponentButton>
        </div>
    )
}

export default EducationInfo