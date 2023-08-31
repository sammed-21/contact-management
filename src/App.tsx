import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./components/ContactPage";
import ChartsMapsPage from "./components/ChartsMapsPage";
import SideBar from "./components/SideBar";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <div className=" relative flex h-[100vh] overflow-y-hidden">
            <div className="">

            <div className="relative left-0  h-[10vh]">
              <SideBar />
            </div>
            </div>
            <div className="relative flex-1 p-8 overflow-y-auto">
              <Routes>
                <Route path="/" element={<ContactPage />} />
                <Route path="/charts-maps" element={<ChartsMapsPage />} />
              </Routes>
            </div>
          </div>
          {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
        </QueryClientProvider>
      </Router>
    </Provider>
  );
}

export default App;
