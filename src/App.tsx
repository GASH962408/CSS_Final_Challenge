import './App.css'
import InfoPanel from './features/infoPanel/infoPanel'
import MainContent from './features/mainContent/mainContent'
import SideBar from './features/sideBar/sideBar'

function App() {

  return (
    <div className='app-container'>
      <SideBar/>
      <MainContent/>
      <InfoPanel/> 
    </div>
  )
}

export default App
