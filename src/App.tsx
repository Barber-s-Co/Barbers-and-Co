import { Header } from "./components/Header";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router/>
      <Header rote='' linkName={'test'} src=""/>
    </>
  );
}

export default App;
