// importamos CotizadorProvider porque es la fuente de los datos
import { CotizadorProvider } from "./context/CotizadorProvider"

import AppSeguro from "./components/AppSeguro"

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
    
  )
}

export default App
