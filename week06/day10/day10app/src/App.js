import {Provider} from 'react-redux'
import About from './pages/about/About';
import {rumahKita} from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={rumahKita}>
        <About/>
      </Provider>
    </div>
  );
}

export default App;
