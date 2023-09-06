import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import "./App.css"
import Home from './pages/Home'
import CheckinDetail from './components/CheckinDetail'
import RoomLists from './pages/RoomLists'
import Chat from './components/Chat'
import Chating from './components/Chating'
import CheckInSuccess from './components/CheckInSuccess'
import TenantCheckIn from './components/TenantCheckIn'
import TenantPage from './pages/TenantPage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/checkin' element={<CheckinDetail />}/>
        <Route path='/roomlist' element={<RoomLists />}/>
        <Route path='/roomlist/:id' element={<TenantCheckIn />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/chat/:id' element={<Chating />}/>
        <Route path='/success' element={<CheckInSuccess />}/>
        <Route path='/tenant' element={<TenantPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
