import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './compunent/header/Header'
import Footer from './compunent/Footer'

function App() {

  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Header />
      <div className="min-h-[450px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
