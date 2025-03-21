import TopSection from '@/components/ComponentsTailwind/TopSection'
import SkillsSection from '@/components/SkillsSection'
import ProyectSection from '@/components/ProyectsSection'

export default function Home() {
  return (
    <main className=''>
      <section id='topsection'>
        <TopSection></TopSection>
      </section>
      
      <section id='proyectsection'>
        <ProyectSection></ProyectSection>
      </section>
      <section id='skillsection'>
        <SkillsSection></SkillsSection>
      </section>
    </main>
  )
}

