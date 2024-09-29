import { Outlet } from "react-router"
import Header from './components/Header'
import { createContext, useState} from "react"

//type for general type
type generalInfoType = {
    firstName:string,
    lastName:string,
    email:string,
    contactNumber:string,
    briefSummary:string
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

type contextType = {
    generalInfo:{
        state:generalInfoType,
        setter:(obj:generalInfoType)=>void
    },
    educationInfo:{
        state:educationInfoType,
        setter:(obj:educationInfoType)=>void
    }
}

const userContext = createContext<contextType>({
    generalInfo:{
        state:{
            firstName:'',
            lastName:'',
            email:'',
            contactNumber:'',
            briefSummary:''
        }, 
        setter:(obj:generalInfoType)=>{}
    },
    educationInfo:{
        state:[],
        setter:(obj:educationInfoType)=>{}
    }
});

const Layout = ()=>{

    //general info
    const [generalInfo,setGeneralInfo] = useState<generalInfoType>({
        firstName:'',
        lastName:'',
        email:'',
        contactNumber:'',
        briefSummary:''
    })

    const updateGeneralInfo = (obj:generalInfoType)=>{
        setGeneralInfo(obj)
    }

    //education info
    const [educationInfo,setEducationInfo] = useState<educationInfoType>([])

    const updateEducationlInfo = (obj:educationInfoType)=>{
        setEducationInfo(obj)
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
                    setter:updateEducationlInfo
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
