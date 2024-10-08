import {useState,useContext} from 'react';
import { userContext } from '../../Layout';
import AddComponentButton from '../AddComponentButton';
import Input from '../Input';
import SkillItem from './SkillItem';


const SkillsInfo = ()=>{

    const [input,setInput] = useState<string>('')
    const context = useContext(userContext);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }

    const addSkill = ()=>{
        context.skillsInfo.setter(prev=>{
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

    return(
        <div className='flex flex-col gap-y-2'>
            <div className='flex flex-wrap gap-x-2 gap-y-2'>
                {context.skillsInfo.state.map((item,i)=>{
                    return(
                        <SkillItem key={i} setter={context.skillsInfo.setter} skill={item} index={i}/>
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