import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const [list, setList] = React.useState([])
  const [todo, setTodo] = React.useState('')

  function handleDelete(index){
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  return (
    <div className="App">
      <div>
      <input value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button onClick={e=>setList([...list, todo])}>
        create
      </button>
      </div>
      <div className='list-container'>
      {list.map((entry, idx) => <ListEntry key={idx} todo={entry} index={idx} delete={index => handleDelete(index)}/>)}
      </div>
    </div>
  );
}

function ListEntry(props){
  const {todo, index} = props
  return(
    <div className='list' key={index}>
      {todo}
      <button onClick={e=>props.delete(index)}>
        delete
      </button>
    </div>
  )
}

export default App;
