import { useSeo } from '../hooks/useSeo'
import { ROUTES } from '../utils/constants'
import { HOME_SEO } from '../data/home'
import {
  Hero,
  StoryPreview,
  SignatureDishes,
  Experience,
  GalleryPreview,
  ReservationCTA,
  InstagramPreview,
} from '../components/sections'

const Home = () => {
  useSeo({ ...HOME_SEO, path: ROUTES.HOME })

  return (
    <div className="home">
      <Hero />
      <StoryPreview />
      <SignatureDishes />
      <Experience />
      <GalleryPreview />
      <ReservationCTA />
      <InstagramPreview />
    </div>
  )
}

export default Home
