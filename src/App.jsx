import { Routes, Route, useLocation } from 'react-router-dom'
import SidePanel from './components/SidePanel.jsx'
import Home from './pages/Home.jsx'
import BmiForm from './pages/BmiForm.jsx'
import Result from './pages/Result.jsx'
import './App.css'

const STEP_BY_PATH = {
  '/': 0,
  '/bmi': 1,
  '/result': 2,
}

export default function App() {
  const location = useLocation()
  const activeStep = STEP_BY_PATH[location.pathname] ?? 0

  return (
    <div className="app-shell">
      <SidePanel activeStep={activeStep} />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BmiForm />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
