import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import ChooseUser from "./components/ChoseUser"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/choose-user" element={<ChooseUser/>} />

      </Routes>
    </Router>
  )
}

export default App