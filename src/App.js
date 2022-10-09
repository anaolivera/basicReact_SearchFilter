
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react'



function App() {

  const [searchTearm, setSearchTearm] = useState('')

  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={event=>{
        setSearchTearm(event.target.value)
        }}></input>

      {JSONDATA.filter((val)=>{
        if (searchTearm==""){
          return val
        } else if(val.first_name.toLowerCase().includes(searchTearm.toLowerCase())){
          return val
        }
      }).map((val,key)=>{
        return(
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        )})}

    </div>
  );
}

export default App;
