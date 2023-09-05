import { useEffect, useState } from "react";
import Character from "./character";
import '../App.css';


function NavPage(props) {

  return (
    <div className="mt-10 mb-12 flex justify-between min-w-min min-w-max	min-w-fit">
      
      <button 
        onClick={() => {
          if(props.page === 1){
            alert("No more pages back.");
            return
          } else {
            props.setPage(props.page-1);
          }
        }}
        className="bg-transparent hover:bg-blue-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-400 hover:border-transparent rounded">
        Back
      </button>
      <p className="font-semibold text-lg">Page: {props.page}</p>
      <button 
        onClick={() => {
          props.setPage(props.page + 1);
          
        }}
        className="bg-transparent hover:bg-blue-500 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-400 hover:border-transparent rounded">
        Next
      </button>
    </div>
  )
}


const CharacterList = (props) => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then( (response) => response.json())
        .then( (res) => {
          setCharacters(res.results);
        });
        setLoading(false);
    }, [page])

    if (loading) {
      return (
        <div className="text-2xl">
          Loading
        </div>
      )
    }

  return (
    <div className="box-1 m-auto w-4/6">

      <NavPage page={page} setPage={setPage} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          characters.map((character) => {
            return (
              <div className="" key={character.id}>
                <Character  character={character} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CharacterList;


