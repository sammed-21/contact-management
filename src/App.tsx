 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ContactPage from './components/ContactPage';
import ChartsMapsPage from './components/ChartsMapsPage';
import SideBar from './components/SideBar';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
 

  return (
    <Provider store={store}>

    <Router>
      <QueryClientProvider client={queryClient}>
        
          <div className="min-h-[100vh] relative flex">
            <div className='relative'>

          <SideBar />
            </div>
          <div className="relative flex-1 p-8 overflow-x-hidden ">
            <Routes>
              <Route path="/" element={<ContactPage />} />
              <Route path="/charts-maps" element={<ChartsMapsPage />} />
            </Routes>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    </Router>
    </Provider>
  )
}

export default App
