import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
//import Form from "./components/Form";
//import Footer from "./components/Footer";

import { useLocalStorage } from "./hooks/useLocalStorage";

export const AuthContext = React.createContext();
const AuthProvider = (props) => {
  const [token, setToken] = useLocalStorage("accessToken", "");

  return (
    <AuthContext.Provider value={[token, setToken]}>
      {props.children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
