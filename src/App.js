import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import { Provider } from "react-redux";
import store from "./utils/store";


const appRouter = createBrowserRouter([{
  path: "/",
  element: (
            <>
            <Header />
            <Body />
            </>
            ),
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "results",
      element: <SearchResults />
    },
   ]
  }]);

const App = () => {

  return (
    <Provider store={store}>
    <div>
    <RouterProvider router={appRouter} />
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