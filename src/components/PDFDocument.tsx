import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

//styling
const styles = StyleSheet.create({
    page: {padding:'15px'}
})

const PDFDocument = ({context}:{
    context:any
})=>{

    console.log(context,'pdf doc')
    return (
    <Document>
        <Page size={'A4'} style={styles.page}>
            <View>
                <Text>{context.generalInfo.state.firstName}</Text>
                <Text>Hello</Text>
            </View>
        </Page>
    </Document>
)};

export default PDFDocument