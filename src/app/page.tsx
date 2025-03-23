import TopSection from '@/components/ComponentsTailwind/TopSection'
import SkillsSection from '@/components/SkillsSection'
import ProyectSection from '@/components/ProyectsSection'
import AboutSection from '@/components/ComponentsTailwind/AboutSection'

export default function Home() {
  return (
    <main className=''>
      <section id='topsection' className='h-screen'>
        <TopSection></TopSection>
      </section>
      <section id='aboutsection' className='bg-gray-200 md:h-screen'>
        <AboutSection></AboutSection>
      </section>
      <section id='proyectsection' className='h-full'>
        <ProyectSection></ProyectSection>
      </section>
      <section id='skillsection' className='bg-gray-200 h-full md:h-screen'>
        <SkillsSection></SkillsSection>
      </section>
    </main>
  )
}

