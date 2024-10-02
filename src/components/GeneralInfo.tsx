import Input from './Input'
import {useContext} from 'react'
import { userContext } from '../Layout'
import Textarea from './Textarea'


const GeneralInfo = ()=>{

    const context = useContext(userContext);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        context.generalInfo.setter(prev=>{
            return(
                {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            )
        })
    }

    const handleChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        context.generalInfo.setter(prev=>{
            return(
                {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            )
        })
    }

    //change context when input changes

    return(
        <div className='flex flex-col gap-y-2'>
            <Input placeholder='First Name' label='First Name:' handleChange={handleChange} name ='firstName' value={context.generalInfo.state.firstName}/>
            <Input placeholder='Last Name' label='Last Name:' handleChange={handleChange} name ='lastName' value={context.generalInfo.state.lastName}/>
            <Input placeholder='Email' label='Email:' handleChange={handleChange} name ='email' value={context.generalInfo.state.email}/>
            <Input placeholder='Contact Number' label='Contact Number:' handleChange={handleChange} name ='contactNumber' value={context.generalInfo.state.contactNumber}/>
            <Input placeholder='Address' label='Address:' handleChange={handleChange} name ='address' value={context.generalInfo.state.address}/>
            <Textarea maxLength={200} handleChange={handleChangeTextarea} label='Brief Summary:' placeholder='Brief Summary (200 characters max)' name="briefSummary" value={context.generalInfo.state.briefSummary}></Textarea>
        </div>
    )
}

export default GeneralInfo