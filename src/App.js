import Header from './components/Header/Header'
import Input from "./components/Input/Input";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route/>
            </Routes>
        </BrowserRouter>
        <Header/>
        <Input title={'Title'} placeholder={'placeholder'}/>
    </div>
  );
}

export default App;
