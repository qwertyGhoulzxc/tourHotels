import {Route, Routes} from "react-router-dom";
import Main from './components/main-page/Main'
import Registration from './components/registration/Registration'
import {Container} from './global-styles/conatiner-style'
import Nav from "./components/navigation/Nav";
function App() {
  return (<Container>
      <Nav/>
    <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path={'/registration'} element={<Registration/>}/>
    </Routes>
      </Container>
  );
}

export default App;
