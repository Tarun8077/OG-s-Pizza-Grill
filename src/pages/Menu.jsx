import { Container, SectionHeading } from '../components/common'

const Menu = () => {
  return (
    <div className="menu page">
      <Container>
        <SectionHeading
          as="h1"
          title="Our Menu"
          subtitle="Hand-tossed, wood-fired, and made fresh to order."
        />
      </Container>
    </div>
  )
}

export default Menu
