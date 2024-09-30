import {useState, useEffect,useContext} from 'react'
import { userContext } from '../../Layout';
import AddComponentButton from '../AddComponentButton';
import ExperienceItem from './ExperienceItem';
import  {type experienceInfoType } from '../../Layout';

const ExperienceInfo = ()=>{

    const [info,setInfo] = useState<experienceInfoType>([])
    const context = useContext(userContext);

    const handleClick = ()=>{
        setInfo((prev)=>{
            const newArr = [...prev]
            newArr.push({})
            return newArr
        })
    }

    useEffect(()=>{
        context.experienceInfo.setter(info)
    },[info])

    return(
        <div className="flex flex-col gap-y-2 items-center">
            <div className="flex flex-col gap-y-2 w-full">
                {info.map((item,i)=>{
                    return(
                        <ExperienceItem state={info} setter={setInfo} index={i} />
                    )
                })}
            </div>
            <AddComponentButton handleClick={handleClick} placeholder="Add new experience"></AddComponentButton>
        </div>
    )
}

export default ExperienceInfo
