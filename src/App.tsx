import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Origines from './pages/Origines'
import Sagesse from './pages/Sagesse'
import Niveaux from './pages/Niveaux'
import Techniques from './pages/Techniques'
import Photos from './pages/Photos'
import Cours from './pages/Cours'


function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="origines" element={<Origines />} />
          <Route path="cours" element={<Cours />} />
          <Route path="niveaux" element={<Niveaux />} />
          <Route path="sagesse" element={<Sagesse />} />
          <Route path="techniques" element={<Techniques />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
