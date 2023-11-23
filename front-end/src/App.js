import Header from "./header/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Carrousel from "./carousel/Carousel";
import images from './assets/';
import Body from "./body/Body";
import EditPage from "./pages/EditPage";

// console.log(imageArray);


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/edit" component={EditPage} />
        </Switch>
      </Router>
        {/* <Header/>
        <Body/>
        <Carrousel images={images}/> */}
    </div>
  );
}

export default App;
