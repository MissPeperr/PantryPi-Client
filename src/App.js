import './App.css';
import { FoodList } from './components/Food/FoodList';
import { FoodProvider } from './components/Food/FoodProvider';
import { FoodScanForm } from './components/Food/FoodScanForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pantry 👋</h1>
        <FoodProvider>
          <FoodScanForm/>
          <FoodList />
        </FoodProvider>
      </header>
    </div>
  );
}

export default App;
