import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Home from './components/Home';
import Header from './components/Header';
import Collection from './components/Collection';
import SelectedGame from './components/SelectedGame';

// cmd shift r -> rfce

function App() {
  return (
    <main style={styles.main} className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/SelectedGame/:gid" element={<SelectedGame />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>

        {/* <Search/> */}
      </BrowserRouter>
    </main>
  );
}

export default App;

const styles={
  main:{
    backgroundColor: "#FFE6A7",
    height: "100vh"
  }
}
