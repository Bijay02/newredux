import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const [name , setName] = useState("");
  // const[nameList, setNameList] = useState([]);
  const dispatch = useDispatch();
  const globalnameList = useSelector((state)=>state?.nameList);

  const onAdd = () =>{
    setName('');
    // setNameList([...nameList, name]);
    dispatch({
      type: 'ADD',
      payload: name,
    })
  };

  const onDelete =() =>{
    dispatch({
      type: 'DELETE',
      payload: name,
    })
  }
  console.log(globalnameList);

  return (
    
    <div className="App">
      <div>
        <input type='text'
        value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <button onClick={onAdd}> add</button>
      </div>
      <div>
        {globalnameList.map((i)=>{
          return(
            <div>
              {i}
              <button onClick={onDelete}> delete</button>
            </div>

          )    
        })}
      </div>
    </div>

  );
}

export default App;
