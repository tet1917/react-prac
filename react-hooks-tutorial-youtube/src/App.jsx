import { useEffect, useState ,useContext,useRef, useReducer} from 'react'
import './App.css'
import ShinCodeContext from './main';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
function App() {
  const[count , setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0)
  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Hello Hooks");
  },[count]);

  const handleRef = () => {
    console.log(ref.current.offsetHeight);
  }
  //useMemo

  return (
    <>
    <h1>useState , useEffect</h1>
    <button onClick={handleClick}>➕</button>
    <p>{count}</p>

    <hr/>
    <h1>useContext</h1>
    <p>{shincodeInfo.name}</p>
    <p>{shincodeInfo.age}</p>

    <hr/>
    <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>

    <hr/>
    <h1>useReducer</h1>
    <p>カウント:{state}</p>
    <button onClick={()=>dispatch({type:"increment"})}>➕</button>
    <button onClick={()=>dispatch({type:"decrement"})}>➖</button>
    </>
    
  )
}

export default App
