import React from 'react'

export const Form = (props) => {

    const addHandler = (e) => {
      e.preventDefault();
      if (!props.name) {
        return alert("Please enter a name");
      }
      const newName = {
        id: props.names.length + 1,
        name: props.name,
        isattend: undefined,
      };
      props.setNames([...props.names, newName]);
      props.setName("");
    };


    const updateHandler = (e) => {
      e.preventDefault();
      if (!props.name.trim()) {
        return alert("No Changes");
      }

      const updatedName = props.names.map((nameN) => {
        if (nameN.id === update.id) {
          return { ...nameN, name: props.name };
        }
        return nameN;
      });

      props.setNames(updatedName);
      props.setName("");
      props.setEditMode(false);
      props.setUpdate(null);
    };
    
    
  return (
    <div>
      <form className="input-form">
        <input
          type="text"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        <button
          type="submit"
          onClick={props.editMode ? updateHandler : addHandler}
        >
          {props.editMode ? "Update" : "Add Name"}
        </button>
      </form>
    </div>
  );
}
