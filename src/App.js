import Header from './components/Header/Header'
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
        <Header/>
        <Input title={'Title'} placeholder={'placeholder'}/>
    </div>
  );
}

export default App;
