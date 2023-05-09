import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [name,setName] = useState("");

  const logIn = () => {
    setIsAuth(true);
  };
  const logOut = () =>{
    setIsAuth(false);
  }
  const handleName = (e)=>{
    setName(e)
  }

  return (
    <AuthContext.Provider value={{ isAuth , logIn , logOut , handleName , name  }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
