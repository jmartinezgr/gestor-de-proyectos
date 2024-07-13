import './App.css'
import Nav from './Components/NavIzquierdo/nav'
import NavSuperior from './Components/NavSuperior/NavSuperior'
import PanelInformacion from './Components/PanelInformacion/PanelInformacion'
import Board from './Components/Board/Board'

function App() {

  return (
    <>
      
      
      <div className="flex flex-col h-screen">
      <NavSuperior />

      <div className="flex flex-1">
        <Nav />
        
        <div className="flex-1 ">
          <PanelInformacion />
          <div className="flex-1 p-4 h-screen  overflow-x-auto whitespace-nowrap border border-gray-300 ">
              <Board />
            </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
