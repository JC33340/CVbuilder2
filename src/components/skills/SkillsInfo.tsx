import {useState,useEffect,useContext} from 'react';
import { userContext } from '../../Layout';
import AddComponentButton from '../AddComponentButton';
import Input from '../Input';
import SkillItem from './SkillItem';
import type { skillsInfoType } from '../../Layout';


const SkillsInfo = ()=>{

    const [info,setInfo] = useState<skillsInfoType>([])
    const [input,setInput] = useState<string>('')
    const context = useContext(userContext);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }

    const addSkill = ()=>{
        setInfo(prev=>{
            const newArr = [...prev]
            newArr.push(input)
            setInput('')
            return newArr
        })
    }

    const handleKeyUp = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            addSkill()
        }
    }

    useEffect(()=>{
        context.skillsInfo.setter(info)
    },[info])

    useEffect(()=>{
        console.log(context)
    },[context])

    return(
        <div className='flex flex-col gap-y-2'>
            <div className='flex flex-wrap gap-x-2 gap-y-2'>
                {info.map((item,i)=>{
                    return(
                        <SkillItem setter={setInfo} skill={item} index={i}/>
                    )
                })}
            </div>
            <div className='flex items-end gap-x-4 '>
                <Input onKeyUp={handleKeyUp} placeholder='Skill' label='Skill:' name='skill' handleChange={handleInputChange} value={input} />
                <AddComponentButton handleClick={addSkill} placeholder='Add skill' />
            </div>

        </div>
    )
}

export default SkillsInfo