import './App.css'
import Header from './components/Header';
import MovieList from './components/MovieLisr';
import Footer from './components/Footer'


function App() {
  const title = "CinemaClub";
  const year = 2026;

  return (
    <main>
      <Header/>
      <MovieList/>
      <Footer/>

    </main>
  );
}

export default App;
