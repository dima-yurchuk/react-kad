import Header from './components/Header/Header'
import Input from "./components/Input/Input";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
