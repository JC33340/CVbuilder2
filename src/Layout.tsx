import { Outlet } from "react-router"
import Header from './components/Header'
import { createContext, useEffect, useState} from "react"

//type for general type
type generalInfoType = {
    firstName:string,
    lastName:string,
    email:string,
    contactNumber:string,
    briefSummary:string,
    address:string
}

//type for education info
type educationInfoType = {
    institute?:string,
    subject?:string,
    currentlyStudying?:boolean,
    startDate?:string,
    endDate?:string,
    grade?:string,
    qualificationLevel?:string,
    additionalInformation?:string
}[]|[]

//type for experience
type experienceInfoType = {
    company?:string,
    location?:string,
    startDate?:string,
    endDate?:string,
    currentlyWorking?:boolean,
    responsibilities?:string,
}[]|[]

//type for skills
type skillsInfoType = string[]

type contextType = {
    generalInfo:{
        state:generalInfoType,
        setter:(obj:generalInfoType)=>void
    },
    educationInfo:{
        state:educationInfoType,
        setter:(obj:educationInfoType)=>void
    },
    experienceInfo:{
        state:experienceInfoType,
        setter:(obj:experienceInfoType)=>void
    },
    skillsInfo:{
        state:skillsInfoType,
        setter:(obj:skillsInfoType)=>void
    }
}

const userContext = createContext<contextType>({
    generalInfo:{
        state:{
            firstName:'',
            lastName:'',
            email:'',
            contactNumber:'',
            briefSummary:'',
            address:''
        }, 
        setter:(obj:generalInfoType)=>{}
    },
    educationInfo:{
        state:[],
        setter:(obj:educationInfoType)=>{}
    },
    experienceInfo:{
        state:[],
        setter:(obj:educationInfoType)=>{}
    },
    skillsInfo:{
        state:[],
        setter:(obj:skillsInfoType)=>{}
    }
});

const Layout = ()=>{

    //general info
    const [generalInfo,setGeneralInfo] = useState<generalInfoType>({
        firstName:'',
        lastName:'',
        email:'',
        contactNumber:'',
        briefSummary:'',
        address:''
    })

    const updateGeneralInfo = (obj:generalInfoType)=>{
        setGeneralInfo(obj)
    }

    //education info
    const [educationInfo,setEducationInfo] = useState<educationInfoType>([])

    const updateEducationInfo = (obj:educationInfoType)=>{
        setEducationInfo(obj)
    }

    //experience info
    const [experienceInfo,setExperienceInfo] = useState<experienceInfoType>([])

    const updateExperienceInfo = (obj:experienceInfoType)=>{
        setExperienceInfo(obj)
    }

    //skills info
    const [skillsInfo,setSkillsInfo] = useState<skillsInfoType>([])

    const updateSkillsInfo = (obj:skillsInfoType)=>{
        setSkillsInfo(obj)
    }
    return (
        <>
            <Header />
            <userContext.Provider value={{
                generalInfo:{
                    state:generalInfo,
                    setter:updateGeneralInfo
                },
                educationInfo:{
                    state:educationInfo,
                    setter:updateEducationInfo
                },
                experienceInfo:{
                    state:experienceInfo,
                    setter:updateExperienceInfo
                },
                skillsInfo:{
                    state:skillsInfo,
                    setter:updateSkillsInfo
                }
            }}>
                <Outlet />
            </userContext.Provider>
        </>

    )
}

export {Layout}
export {userContext}

export { type generalInfoType}
export { type educationInfoType}
export {type experienceInfoType}
export {type skillsInfoType}
