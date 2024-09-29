import Input from './Input'
import {useState,useContext,useEffect} from 'react'
import { userContext } from '../Layout'
import Textarea from './Textarea'
import { type generalInfoType } from '../Layout'


const GeneralInfo = ()=>{

    const context = useContext(userContext);

    const [generalInfoState,setGeneralInfoState] = useState<generalInfoType>({
        firstName:'',
        lastName:'',
        email:'',
        contactNumber:'',
        briefSummary:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setGeneralInfoState(prev=>{
            return(
                {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            )
        })
    }

    const handleChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setGeneralInfoState(prev=>{
            return(
                {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            )
        })
    }

    //change context when input changes
    useEffect(()=>{
        context.generalInfo.setter(generalInfoState)
    },[generalInfoState])

    return(
        <div className='flex flex-col gap-y-2'>
            <Input placeholder='First Name' label='First Name:' handleChange={handleChange} name ='firstName' value={generalInfoState.firstName}/>
            <Input placeholder='Last Name' label='Last Name:' handleChange={handleChange} name ='lastName' value={generalInfoState.lastName}/>
            <Input placeholder='Email' label='Email:' handleChange={handleChange} name ='email' value={generalInfoState.email}/>
            <Input placeholder='Contact Number' label='Contact Number:' handleChange={handleChange} name ='contactNumber' value={generalInfoState.contactNumber}/>
            <Textarea maxLength={200} handleChange={handleChangeTextarea} label='Brief Summary:' placeholder='Brief Summary (200 characters max)' name="briefSummary" value={generalInfoState.briefSummary}></Textarea>
        </div>
    )
}

export default GeneralInfo