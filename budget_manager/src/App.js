import './App.css';
import React,{useState} from 'react'              //The useState hook is used to manage state within functional components.
import Parent from './components/Parent';

function App() {
  const [budget,setBudget]=useState()  //state variable budget, function setBudget
  const [page,setPage]=useState(true)
  const updateBudget=(e)=>{  //e=event object
    setBudget(e.target.value);
  }
  const saveBudget=()=>{
    setPage(!page)
  }

  return (
    <>
   
    <div className="App">
      {page? 
        <div className='createbudget'>
            <h1>Get started by creating a new budget</h1>
            <input onChange={updateBudget} type="number"/>   
            <button onClick={()=>{saveBudget()}}>Create</button>
        </div>
            :
      <Parent budget={budget}/>}
    </div>
   
    </>
  );
}

export default App;

//The onChange event handler calls the updateBudget function to update the budget state whenever the input value changes.