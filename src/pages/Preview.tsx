import { useContext } from "react";
import { userContext } from "../Layout";

const Preview = ()=>{

    const context = useContext(userContext);

    return(
        <>{context.generalInfo.state.firstName}</>
    )
}

export default Preview