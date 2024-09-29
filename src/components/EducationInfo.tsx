import AddComponentButton from "./AddComponentButton";
import {useState,useEffect,useContext} from 'react';
import { userContext } from "../Layout";
import EducationItem from "./EducationItem";
import { type educationInfoType } from "../Layout";


const EducationInfo = ()=>{

    const [info,setInfo] = useState<educationInfoType>([])
    const context = useContext(userContext);

    const handleClick = ()=>{
        setInfo((prev)=>{
            const newArr = [...prev]
            newArr.push({})
            return newArr
        })
    }

    useEffect(()=>{
        context.educationInfo.setter(info)
        console.log(context)
    },[info])

    return(
        <div className="flex flex-col gap-y-2 items-center">
            <div className="flex flex-col gap-y-2 w-full">
                {info.map((item,i)=>{
                    return(
                        <EducationItem setter={setInfo} index={i} state={info}/>
                    )
                })}
            </div>
            <AddComponentButton handleClick={handleClick} placeholder="Add new education"></AddComponentButton>
        </div>
    )
}

export default EducationInfo

export {type educationInfoType}