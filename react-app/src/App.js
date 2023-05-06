import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import { useContext } from "react"
import { ThemeContext } from './Context/ThemeContext';
import Footer from "./Components/Footer"

function App() {

  const {theme} = useContext(ThemeContext);
  return (
    <div className="App" style={
        theme ? {color:"white",backgroundColor:"rgb(0,89,80)"} : {color:"rgb(0, 89, 80)"}
    }>
        <Navbar/>
        <div style={{
          marginTop:"43px",
        }}>
          <AllRoutes/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
