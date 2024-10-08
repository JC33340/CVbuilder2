import {useContext} from 'react'
import { userContext } from '../../Layout';
import AddComponentButton from '../AddComponentButton';
import ExperienceItem from './ExperienceItem';

const ExperienceInfo = ()=>{

    const context = useContext(userContext);

    const handleClick = ()=>{
        context.experienceInfo.setter((prev)=>{
            const newArr = [...prev]
            newArr.push({})
            return newArr
        })
    }

    return(
        <div className="flex flex-col gap-y-2 items-center">
            <div className="flex flex-col gap-y-2 w-full">
                {context.experienceInfo.state.map((item,i)=>{
                    return(
                        <ExperienceItem key={i} state={context.experienceInfo.state} setter={context.experienceInfo.setter} index={i} />
                    )
                })}
            </div>
            <AddComponentButton handleClick={handleClick} placeholder="Add new experience"></AddComponentButton>
        </div>
    )
}

export default ExperienceInfo
