import { Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { ROUTES } from './utils/constants'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {
  useLenis()

  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MENU} element={<Menu />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
