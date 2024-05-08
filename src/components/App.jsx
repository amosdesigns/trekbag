import ItemsContextProvider from "../context/ItemsContextProvider";
import BackgroundHeading from "./BackgroundHeading";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BackgroundHeading />
      <ItemsContextProvider>
        <Main />
      </ItemsContextProvider>
      <Footer />
    </>
  );
}

export default App;
