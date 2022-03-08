import Header from './components/Header/Header'
import Input from "./components/Input/Input";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App" >
        <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/menu'} element={<MainLayout/>}/>
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
