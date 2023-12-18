
import './App.css';
import { Provider } from 'react-redux';
import Layout from './Components/Layout/Layout';
import store from "./redux/store.jsx"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
