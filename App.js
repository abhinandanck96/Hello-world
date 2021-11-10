import logo from './logo.svg';
import './App.css';
import Homecategories from './Home';
import Categories from './Categories';
import Menufun from './Menu.js';
import Class from './Class.js';

function App() {

  const clickEventTriggered = (clickData) =>{
    console.log("what is clicked",clickData)
  }
  return (
    <div className="hello">
      <Homecategories test="testing home page"/>
      <Categories/>
      <Menufun testdata="props drilling" />
      <Class/>
      <header className="App-header">
   <div>
     
   <button className="click "onClick={handClick}>
       click me</button>
     
     <button className="reset">
       reset
     </button>
      </div>
      </header>
    </div>
  );
}

export default App;
