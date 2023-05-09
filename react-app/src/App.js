import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import { useContext, useState } from "react"
import { ThemeContext } from './Context/ThemeContext';
import Footer from "./Components/Footer"
import Login from './AllPages/Login';

function App() {

  const {theme} = useContext(ThemeContext);
  const  [check,setCheck] = useState(false);



  const handleCheck = (e)=>{
    setCheck(e)
  }

  if(check){
    return <div className="App" style={
          theme ? {color:"white",backgroundColor:"rgb(0,89,80)",position:"fixed"} : {color:"rgb(0, 89, 80)",position:"fixed"}
      }>
        <Login handleCheck={handleCheck}/>
          <Navbar handleCheck={handleCheck}/>
            <div style={{
              marginTop:"43px",
            }}>
              <AllRoutes/>
            </div>
          <Footer/>
      </div>
  }
  
  return (
    <div className="App" style={
        theme ? {color:"white",backgroundColor:"rgb(0,89,80)"} : {color:"rgb(0, 89, 80)"}
    }>
        <Navbar handleCheck={handleCheck}/>
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