import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { ROUTES } from './utils/constants'
import Layout from './components/layout/Layout'
import RouteFallback from './components/layout/RouteFallback'
import Home from './pages/Home'
import './styles/App.css'

/* Home stays eager for the fastest first paint (it's the landing route and the
   LCP). Every other route is code-split into its own chunk, loaded on demand
   behind a Suspense fallback. */
const Menu = lazy(() => import('./pages/Menu'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  useLenis()

  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MENU} element={<Menu />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
