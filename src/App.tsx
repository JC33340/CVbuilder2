import Section from "./components/Section"
import GeneralInfo from "./components/GeneralInfo"
import EducationInfo from "./components/education/EducationInfo"
import ExperienceInfo from "./components/experience/ExperienceInfo"
import SkillsInfo from "./components/skills/SkillsInfo"


function App() {

  return (
    <div className="p-6 flex flex-col gap-y-4">
      <Section header="General Info">
        <GeneralInfo />
      </Section>
      <Section header='Education'>
        <EducationInfo />
      </Section>
      <Section header='Experience'>
        <ExperienceInfo />
      </Section>
      <Section header='Skills'>
        <SkillsInfo />
      </Section>
    </div>
  )
}

export default App
