import { useContext } from "react";
import { userContext } from "../Layout";
import { PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "../components/PDFDocument";

const Preview = ()=>{

    const height = window.innerHeight-76;
    const context = useContext(userContext);

    

    return(
        <div>
            <PDFViewer width={'100%'} height={height}>
                <PDFDocument context={context} />
            </PDFViewer>
        </div>
    )
}

export default Preview