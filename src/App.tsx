import Section from "./components/Section"
import GeneralInfo from "./components/GeneralInfo"
import EducationInfo from "./components/EducationInfo"


function App() {

  return (
    <div className="p-6 flex flex-col gap-y-4">
      <Section header="General Info">
        <GeneralInfo />
      </Section>
      <Section header='Education Info'>
        <EducationInfo />
      </Section>
    </div>
  )
}

export default App
