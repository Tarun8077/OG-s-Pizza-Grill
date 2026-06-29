import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/constants'
import { Container, SectionHeading, Button } from '../components/common'

const NotFound = () => {
  return (
    <div className="not-found page">
      <Container>
        <SectionHeading
          as="h1"
          title="404"
          subtitle="This slice doesn't exist. Let's get you back home."
        />
        <div className="page__actions">
          <Button as={Link} to={ROUTES.HOME} variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
