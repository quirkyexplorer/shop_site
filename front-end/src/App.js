import Header from "./header/Header";
import Carrousel from "./carousel/Carousel";
import images from './assets/';
import styled from "styled-components";

// console.log(imageArray);
const CenterCarousel = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
        <Header/>
        <CenterCarousel>
          <Carrousel images={images}/>
        </CenterCarousel>
        
    </div>
  );
}

export default App;
