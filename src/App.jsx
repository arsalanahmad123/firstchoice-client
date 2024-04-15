import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './Layout/ProtectedRoutes'
import Dashboard from './Screens/Dashboard'
import Login from './Screens/Login'
import Orders from './Screens/Orders'
import Employees from './Screens/Employees'
import InvoiceForm from './Components/InvoiceForm'
import InvoiceSlip from './Components/InvoiceSlip'
import logo from './assets/logo.png'
import { Toaster } from 'react-hot-toast'
function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster />
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/employees' element={<Employees />} />
                        <Route path='/invoiceform' element={<InvoiceForm />} />
                        <Route
                            path='/invoiceSlip'
                            element={
                                <InvoiceSlip
                                    logo={logo}
                                    invoiceNumber='A3423'
                                    billTo='Soriic'
                                    issueDate='23/2/2003'
                                    dueDate='23/03/2003'
                                />
                            }
                        />
                    </Route>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
