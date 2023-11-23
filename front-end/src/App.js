import Header from "./header/Header";
import Carrousel from "./carousel/Carousel";
import images from './assets/';
import styled from "styled-components";
import Body from "./body/Body";
// console.log(imageArray);
const CenterCarousel = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
        <Header/>
        <Body></Body>
        <Carrousel images={images}/>
    </div>
  );
}

export default App;
