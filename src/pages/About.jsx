import { Container, SectionHeading } from '../components/common'

const About = () => {
  return (
    <div className="about page">
      <Container>
        <SectionHeading
          as="h1"
          title="About OG's Pizza"
          subtitle="A family recipe, perfected over generations."
        />
      </Container>
    </div>
  )
}

export default About
