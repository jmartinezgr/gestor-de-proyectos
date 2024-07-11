import './App.css'
import Nav from './Components/NavIzquierdo/nav'
import NavSuperior from './Components/NavSuperior/NavSuperior'
import PanelInformacion from './Components/PanelInformacion/PanelInformacion'

function App() {

  return (
    <>
      
      
      <div className="flex flex-col h-screen">
      <NavSuperior />

      <div className="flex flex-1">
        <Nav />
        
        <div className="flex-1">
          <PanelInformacion />
        </div>
      </div>
    </div>


    </>
  )
}

export default App
