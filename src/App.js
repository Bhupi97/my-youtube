import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {

  return (
    <Provider store={store}>
    <div>
    <Header />
    <Body />
    </div>
    </Provider>
    
  )
}

export default App;

// Basic blueprint :-
  // Header
    
  // Body
      // SideItems
      //   MenuList
      // MainContainer
        // Category buttons
        // Video Cards