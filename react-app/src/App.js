import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import { useContext, useEffect } from "react"
import { ThemeContext } from './Context/ThemeContext';

function App() {

  const {theme} = useContext(ThemeContext);
  return (
    <div className="App" style={
      theme ? 
      {
        color:"white",
        backgroundColor:"white"
      } 
      : 
      {
        color:"rgb(0, 89, 80)",
        backgroundColor:"white"
      }}>
        <Navbar/>
        <div style={{
          marginTop:"43px",
        }}>
          <AllRoutes/>
        </div>
    </div>
  );
}

export default App;
