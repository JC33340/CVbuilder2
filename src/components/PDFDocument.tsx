import { Document, Page, Text, View, StyleSheet,Font } from '@react-pdf/renderer';
import type { contextType } from '../Layout';
import Roboto from './fonts/roboto-v32-latin-regular.ttf'
import Roboto700 from './fonts/roboto-v32-latin-700.ttf'

//Font register
Font.register({
    family:'Roboto',
    fonts:[
        {src:Roboto},
        {src:Roboto700, fontWeight:'bold'}
    ]
})

//styling
const styles = StyleSheet.create({
    page: {
        padding:'15px',
        fontFamily:'Roboto',
        display:'flex',
        rowGap:'10px'
    },
    heading:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headingRight:{
        display:'flex',
        alignItems:'flex-end',
        rowGap:'3px'
    },
    headingLeft:{
        display:'flex',
        fontSize:'40px',
    },
    boldText:{
        fontWeight:'bold'
    },
    smallText:{
        fontSize:'12px'
    },
    section:{
        display:'flex',
        rowGap:'4px',
        textAlign:'justify'
    },
    sectionContentWrapper:{
        display:'flex',
        rowGap:'10px'
    },
    sectionContent:{
        display:'flex',
        rowGap:'3px',
        textAlign:'justify'
    },
    skillsSection:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        rowGap:'4px'
    },
    skillsItem:{
        flexBasis:'25%'
    }
})

const PDFDocument = ({context}:{
    context:contextType
})=>{
    //function for dates
    const dateString = (startDate:string='',endDate:string='',current?:boolean)=>{
        const startYear = startDate.substring(0,4)
        const endYear = endDate.substring(0,4)

        if(startYear===''||endYear===''){
            return ''
        }

        if(current){
            return `(${startYear} - Present)`
        }else if(startYear === endYear){
            return `(${startYear})`
        }else{
            return `(${startYear} - ${endYear})`
        }
    }

    return (
    <Document>
        <Page size={'A4'} style={styles.page}>
            {/* heading */}
            <View style={styles.heading}>
                <View style={styles.headingLeft}>
                    <Text style={styles.boldText}>{context.generalInfo.state.firstName} {context.generalInfo.state.lastName}</Text>
                </View>
                <View style={[styles.headingRight,styles.smallText]}>
                    <Text>{context.generalInfo.state.contactNumber}</Text>
                    <Text>{context.generalInfo.state.email}</Text>
                    <Text>{context.generalInfo.state.address}</Text>
                </View>
            </View>
            
            {/* About section */}
            {context.generalInfo.state.briefSummary && <View style={styles.section}>
                <Text style={styles.boldText}>About</Text>
                <Text style={[styles.smallText]}>{context.generalInfo.state.briefSummary}</Text>
            </View>}

            {/* Education section */}
            {context.educationInfo.state.length>0 && <View style={styles.section}>
                <Text style={styles.boldText}>Education</Text>
                <View style={styles.sectionContentWrapper}>
                {context.educationInfo.state.map(item=>{
                    return(
                        <View style={[styles.smallText,styles.sectionContent]}>
                            <Text><Text style={styles.boldText}>{item.qualificationLevel && `${item.qualificationLevel} \u00b7`} {item.subject && `${item.subject} \u00b7`} {item.institute} </Text>{dateString(item.startDate,item.endDate,item.currentlyStudying)}</Text>
                            {item.grade && <Text>Achieved: {item.grade}</Text>}
                            <Text>{item.additionalInformation}</Text>
                        </View>
                    )
                })}
                </View>
            </View>}

            {/* Experience section */}
            {context.experienceInfo.state.length>0 && <View style={styles.section}>
                <Text style={styles.boldText}>Experience</Text>
                <View style={styles.sectionContentWrapper}>
                    {
                        context.experienceInfo.state.map(item=>{
                            return(
                            <View style={[styles.smallText,styles.sectionContent]}>
                                <Text><Text style={styles.boldText}>{item.role && `${item.role} \u00b7`} {item.company} </Text>{dateString(item.startDate,item.endDate,item.currentlyWorking)}</Text>
                                {item.location!='' && <Text>{item.location}</Text>}
                                <Text>{item.responsibilities}</Text>
                            </View>
                            )
                        })
                    }
                </View>
            </View>}

            {/* Skills info */}
            {context.skillsInfo.state.length>0 && <View style={styles.section}>
                <Text style={styles.boldText}>Skills</Text>
                <View style={styles.skillsSection}>
                    {
                        context.skillsInfo.state.map(item=>{
                            return(
                            <View style={[styles.smallText,styles.skillsItem]}>
                                <Text>&#8226; {item}</Text>
                            </View>
                            )
                        })
                    }
                </View>
            </View>}
        </Page>
    </Document>
)};

export default PDFDocument