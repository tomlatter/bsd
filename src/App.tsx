import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Histoire from './pages/Histoire'
import Sagesse from './pages/Sagesse'
import Niveaux from './pages/Niveaux'
import Techniques from './pages/Techniques'
import Archives from './pages/Archives'
import Approches from './pages/Approches'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="origines" element={<Histoire />} />
          <Route path="approches" element={<Approches />} />
          <Route path="niveaux" element={<Niveaux />} />
          <Route path="sagesse" element={<Sagesse />} />
          <Route path="techniques" element={<Techniques />} />
          <Route path="archives" element={<Archives />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
