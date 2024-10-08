import { SetStateAction } from "react"
import Input from "../Input"
import Textarea from "../Textarea"

import type { educationInfoType } from "../../Layout"

const EducationItem = ({index,setter,state}:{
    index:number,
    setter:React.Dispatch<SetStateAction<educationInfoType>>,
    state:educationInfoType
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
            <Input placeholder="Institute" label="Institute:" name='institute' value={state[index].institute?state[index].institute:''} handleChange={handleChange} />
            <Input placeholder="Subject" label="Subject:" name='subject' value={state[index].subject?state[index].subject:''} handleChange={handleChange} />
            <Input placeholder="Qualification level" label="Qualification level:" name='qualificationLevel' value={state[index].qualificationLevel?state[index].qualificationLevel:''} handleChange={handleChange} />
            <Input placeholder="Grades" label="Grades:" name='grade' value={state[index].grade?state[index].grade:''} handleChange={handleChange} />
            <div className="flex gap-x-10 gap-y-2  flex-col md:flex-row">
                <Input placeholder="" label="Currently studying here? :" name='currentlyStudying' checked={state[index].currentlyStudying} handleChange={handleChange} type='checkbox'/>
                <Input placeholder="" label="Start date:" name='startDate' value={state[index].startDate?state[index].startDate:''} handleChange={handleChange} type='date'/>
                {state[index].currentlyStudying!=true?
                <Input placeholder="" label="End Date:" name='endDate' value={state[index].endDate?state[index].endDate:''} handleChange={handleChange} type='date'/>
                    :<></>
                }
            </div>
            <Textarea label='Additional information:' placeholder="Additional information (max 200 characters)" handleChange={handleChangeTextarea} value={state[index].additionalInformation?state[index].additionalInformation:''} name='additionalInformation' maxLength={200}></Textarea>
        </div>
    )
}

export default EducationItem

