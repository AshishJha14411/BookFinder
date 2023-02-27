import './App.css';
import Home from './components/Home';
import { BookPageProvider } from './context/BookPageContext';

function App() {
  return (
    <BookPageProvider>
      <Home />
    </BookPageProvider>


  );
}

export default App;
