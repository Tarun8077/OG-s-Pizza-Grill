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
