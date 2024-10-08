import useIsMount from "./useIsMount"
import {useEffect} from 'react'

const useSetStorage = (name:string,state:{})=>{

    const isMount = useIsMount();

    useEffect(()=>{
        if(isMount){
            localStorage.setItem(name,JSON.stringify(state));
        }
    },[state])
}

export default useSetStorage