import { Outlet } from "react-router"
import Header from './components/Header'
import { createContext, useState} from "react"

type generalInfoStateType = {
    firstName:string,
    lastName:string,
    email:string,
    contactNumber:string,
    briefSummary:string
}

type contextType = {
    generalInfo:{
        state:generalInfoStateType,
        setter:(obj:generalInfoStateType)=>void
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
        setter:(obj:generalInfoStateType)=>{}
    }
});

const Layout = ()=>{

    //general info
    const [generalInfo,setGeneralInfo] = useState<generalInfoStateType>({
        firstName:'',
        lastName:'',
        email:'',
        contactNumber:'',
        briefSummary:''
    })

    const updateGeneralInfo = (obj:generalInfoStateType)=>{
        setGeneralInfo(obj)
    }


    return (
        <>
            <Header />
            <userContext.Provider value={{
                generalInfo:{
                    state:generalInfo,
                    setter:updateGeneralInfo
                }
            }}>
                <Outlet />
            </userContext.Provider>
        </>

    )
}

export {Layout}
export {userContext}

export { type generalInfoStateType}
