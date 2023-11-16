import Header from "./header/Header";
import SliderComponent from './slider/SliderComponent'
import images from './assets';

const imageArray = images;

// console.log(imageArray);
function App() {
  return (
    <div className="App">
        <Header/>
        <SliderComponent images={imageArray}/>
    </div>
  );
}

export default App;
