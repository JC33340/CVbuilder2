import { useContext } from "react";
import { userContext } from "../Layout";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../components/PDFDocument";

const Preview = ()=>{

    const height = window.innerHeight-76;
    const context = useContext(userContext);

    

    return(
        <div className="flex items-center flex-col gap-y-2">
            <PDFDownloadLink document={<PDFDocument context={context} />}><button className="p-2 text-[#808080] bg-[#dedede] rounded-lg text-md md:text-xl font-semibold hover:text-black transition-colors">Download PDF</button></PDFDownloadLink>
            <PDFViewer width={'100%'} height={height}>
                <PDFDocument context={context} />
            </PDFViewer>
        </div>
    )
}

export default Preview