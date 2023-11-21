import Header from "./header/Header";
import Carrousel from "./carousel/Carousel";
import images from './assets/';


// console.log(imageArray);
function App() {
  return (
    <div className="App">
        <Header/>
        <Carrousel images={images}/>
    </div>
  );
}

export default App;
