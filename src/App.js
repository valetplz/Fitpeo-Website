import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import reportWebVitals from "./reportWebVitals"

function App() {
  return (
    <div className='App'>
      <Routes />
    </div>
  )
}
reportWebVitals(App)
export default App
