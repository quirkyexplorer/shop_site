import Header from "./header/Header";
import Carrousel from "./carousel/Carousel";
import images from './assets/';
import Body from "./body/Body";

// console.log(imageArray);


function App() {
  return (
    <div className="App">
        <Header/>
        <Body/>
         <Carrousel images={images}/>
    </div>
  );
}

export default App;
