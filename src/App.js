import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Billings from "./Components/Billings/Billings";
import Header from "./Components/Header/Header";
import RequireAuth from "./Components/RequireAuth";
function App() {
  const [user, setUser] = useState('')
  useEffect(() => {
    setUser(localStorage.getItem('user'))
  },[user])
  return (
    <div >
      <Header />
      <Routes>

        <Route path="/" element={<RequireAuth  users={user}>
          <Billings/>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login  />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
