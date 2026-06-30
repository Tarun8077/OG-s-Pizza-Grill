import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import ScrollProgress from './ScrollProgress'
import CustomCursor from './CustomCursor'
import RouteTransition from './RouteTransition'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="layout">
        <Header />
        <main id="main-content" tabIndex={-1}>
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
