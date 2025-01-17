import { Footer } from "./containers/Footer";
import { MainContainer } from "./containers/MainContainer";
import { NavBar } from "./containers/NavBar"; 
import "../src/styles/styles.scss";

function App() {
  return <>
      <NavBar />
      <MainContainer />
      <Footer />
    </>
}

export default App;
