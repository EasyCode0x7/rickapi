import './App.css';
import CharacterList from './components/characterList';


function App() {

  return (
    <div className="App">

      <head>
        <link href="./dist/output.css" rel="stylesheet" />
      </head>

      <h1 className='firstSlide md:text-center md:p-10 font-sans sm:text-2xl md:text-4xl mb-10'>Rick and Morty API</h1>

      <CharacterList />
      
    </div>
  );
}

export default App;


