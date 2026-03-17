import { useState } from 'react'
import Login from './component/Login'
import './App.css'
import Dashboard from './Layout/Dashboard'
import Cards from './component/Cards';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Overview from './Pages/Overview';
import Users from "./Pages/Users";
import Booking from "./Pages/Booking";
import Reports from "./Pages/Reports";
import AuditLog from './Pages/AuditLog';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <Router>

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard/>}>
               <Route index element={<Overview />} />
               <Route path="users" element={<Users />} />
                <Route path="booking" element={<Booking />} />
                 <Route path="reports" element={<Reports />} />
               <Route path="audit-log" element={<AuditLog />} />

          </Route>
      </Routes>
    </Router>
   
      
   
    </>
  )
}

export default App
