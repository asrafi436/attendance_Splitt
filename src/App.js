
import './App.css';
import { useState } from 'react';
import { AllStudent } from './components/AllStudent';
import { Form } from './components/Form';





function App() {
  const [names, setNames] = useState([{id: 1, name: "Tonmoy", isattend: true }, { id: 2, name: "Asrafi", isattend: false }]);
  const [name, setName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState(null);


 
  

  

  


  


  


  

  


  

  console.log(name);

  return (
    <div className="App">

      <Form
      name={name}
      setName={setName}
      names={names}
      setNames={setNames}
      editMode={editMode}
      setEditMode={setEditMode}
      update={update}
      setUpdate={setUpdate}
      />

      <AllStudent
        names={names}
        setNames={setNames}
        editMode={editMode}
        setEditMode={setEditMode}
      />


    </div>
  );
}

export default App;
