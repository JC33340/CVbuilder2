import { Outlet } from "react-router"
import Header from './components/Header'
import { createContext, useState} from "react"

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
        setter:(React.Dispatch<React.SetStateAction<generalInfoType>>|(()=>void))
    },
    educationInfo:{
        state:educationInfoType,
        setter:(React.Dispatch<React.SetStateAction<educationInfoType>>|(()=>void))
    },
    experienceInfo:{
        state:experienceInfoType,
        setter:(React.Dispatch<React.SetStateAction<experienceInfoType>>|(()=>void))
    },
    skillsInfo:{
        state:skillsInfoType,
        setter:(React.Dispatch<React.SetStateAction<skillsInfoType>>|(()=>void))
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
        setter:()=>{}
    },
    educationInfo:{
        state:[],
        setter:()=>{}
    },
    experienceInfo:{
        state:[],
        setter:()=>{}
    },
    skillsInfo:{
        state:[],
        setter:()=>{}
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

    //education info
    const [educationInfo,setEducationInfo] = useState<educationInfoType>([])

    //experience info
    const [experienceInfo,setExperienceInfo] = useState<experienceInfoType>([])

    //skills info
    const [skillsInfo,setSkillsInfo] = useState<skillsInfoType>([])

    return (
        <>
            <Header />
            <userContext.Provider value={{
                generalInfo:{
                    state:generalInfo,
                    setter:setGeneralInfo
                },
                educationInfo:{
                    state:educationInfo,
                    setter:setEducationInfo
                },
                experienceInfo:{
                    state:experienceInfo,
                    setter:setExperienceInfo
                },
                skillsInfo:{
                    state:skillsInfo,
                    setter:setSkillsInfo
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
