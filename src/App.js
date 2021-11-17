import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Home from './components/Home';
import Header from './components/Header';
import Collection from './components/Collection';
import SelectedGame from './components/SelectedGame';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';

// cmd shift r -> rfce

function App() {
  return (
    <main style={styles.main} className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/SelectedGame/:gid" element={<SelectedGame />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>

        {/* <Search/> */}
        <Footer />
      </HashRouter>
    </main>
  );
}

export default App;

const styles={
  main:{
    backgroundColor: "#FFE6A7",
    // height: "100%"
  }
}
