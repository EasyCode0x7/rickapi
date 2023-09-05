import '../App.css';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const Character = (props) => {

    return (
        <div className='mb-10 grid grid-cols-2 dd rounded-xl'>
            <img className='h-52 rounded-l-xl' src={props.character.image} alt={props.character.name} />
            <div className='mx-2'>
                <h2 className='text-2xl	font-semibold text-white-400 mt-2 mb-10'>{props.character.name}</h2>
                <span className='text-gray-400'><span className='text-white'>From:</span> {props.character.origin.name}</span><br></br>
                <span className='text-gray-400'>
                <span className='text-white'>Status:</span>  {props.character.status === "Alive" ? <FcLike /> + props.character.status : <FcLikePlaceholder /> + props.character.status}
                </span><br></br>
                <span className='text-gray-400'><span className='text-white'>Gender:</span> {props.character.gender}</span>
            </div>
        </div>
    )
}

export default Character;


