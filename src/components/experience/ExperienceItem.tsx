import { SetStateAction } from "react"
import Input from "../Input"
import Textarea from "../Textarea"
import type { experienceInfoType } from "../../Layout"

const ExperienceItem = ({index,setter,state}:{
    index:number,
    setter:React.Dispatch<SetStateAction<experienceInfoType>>,
    state:experienceInfoType
})=>{
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setter(prev=>{
            const newArr = [...prev]
            var value;
            const type = e.target.type;
            if (type==='checkbox'){
                value = e.target.checked
            }else{
                value=e.target.value
            }

            newArr[index] = {
                ...newArr[index],
                [e.target.name]:value
            }

            return newArr
        })
    }
    const handleChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setter(prev=>{
            const newArr = [...prev]
            newArr[index] = {
                ...newArr[index],
                [e.target.name]:e.target.value
            }

            return newArr
        })
    }

    const removeItem = ()=>{
        setter(prev=>{
            const newArr = [...prev];
            newArr.splice(index,1);
            return newArr
        })
    }

    return(
        <div className="flex flex-col gap-y-2 border-2 border-[#767676] rounded-lg p-4">
            <div className="w-full flex justify-end ">
                <button onClick={removeItem} className="text-[#ee1e06] font-bold bg-[#fee5e3] p-2 rounded-md hover:text-[#fee5e3] hover:bg-[#ee1e06] transition-colors">Remove item</button>
            </div>
            <Input placeholder="Role" label="Role:" name='role' value={state[index].role?state[index].role:''} handleChange={handleChange} />
            <Input placeholder="Company" label="Company:" name='company' value={state[index].company?state[index].company:''} handleChange={handleChange} />
            <Input placeholder="Location" label="Location:" name='location' value={state[index].location?state[index].location:''} handleChange={handleChange} />
            <div className="flex gap-x-10">
                <Input placeholder="" label="Currently working here? :" name='currentlyWorking' checked={state[index].currentlyWorking} handleChange={handleChange} type='checkbox'/>
                <Input placeholder="" label="Start date:" name='startDate' value={state[index].startDate?state[index].startDate:''} handleChange={handleChange} type='date'/>
                {state[index].currentlyWorking!=true?
                <Input placeholder="" label="End Date:" name='endDate' value={state[index].endDate?state[index].endDate:''} handleChange={handleChange} type='date'/>
                    :<></>
                }
            </div>
            <Textarea label='Responsibilities:' placeholder="Responsibilities (max 200 characters)" handleChange={handleChangeTextarea} value={state[index].responsibilities?state[index].responsibilities:''} name='responsibilities' maxLength={200}></Textarea>
        </div>
    )
}

export default ExperienceItem