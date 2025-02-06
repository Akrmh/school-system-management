import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import ChooseUser from "./components/ChoseUser"

import AdminSignin from "./components/AdminSignin"
import StudentSignin from "./components/StudentSignin"
import TeacherSignin from "./components/TeachersSignin"

import Announcement from "./pages/admin/Announcement"
import Assignment from "./pages/admin/Assignment"
import Attendance from "./pages/admin/Attendance"
import Classes from "./pages/admin/Classes"
import AdminDashboard from "./pages/admin/Dashboard"
import EventCalender from "./pages/admin/EventCalender"
import Exams from "./pages/admin/Exams"
import Libarary from "./pages/admin/Libarary"
import Performance from "./pages/admin/Performance"
import SettingProfile from "./pages/admin/SettingProfile"
import Sidebar from "./pages/admin/Sidebar"
import Students from "./pages/admin/Students"
import Teachers from "./pages/admin/Teachers"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/choose-user" element={<ChooseUser/>} />

        {/*All signin pages */}
        <Route path="/admin-signin" element={<AdminSignin/>} />
        <Route path="/student-signin" element={<StudentSignin/>} />
        <Route path="/teacher-signin" element={<TeacherSignin/>} />

        {/* All Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />

        {/* Admin section here */}
        <Route path="/admin/communication" element={<Announcement/>} />
        <Route path="/admin/assignments" element={<Assignment/>} />
        <Route path="/admin/attendance" element={<Attendance/>} />
        <Route path="/admin/classes" element={<Classes/>} />
        <Route path="/admin/eventCalender" element={<EventCalender/>} />
        <Route path="/admin/exams" element={<Exams/>} />
        <Route path="/admin/libarary" element={<Libarary/>} />
        <Route path="/admin/performance" element={<Performance/>} />
        <Route path="/admin/settings" element={<SettingProfile/>} />
        <Route path="/admin/sidebar" element={<Sidebar/>} />
        <Route path="/admin/students" element={<Students/>} />
        <Route path="/admin/teachers" element={<Teachers/>} />



      </Routes>
    </Router>
  )
}

export default App