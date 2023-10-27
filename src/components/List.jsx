import React from 'react'

export const List = (props) => {

    const deleteHandler = (id) => {
      const newNames = props.names.filter((name) => name.id !== id);
      props.setNames(newNames);
    };

    const editHandler = (name) => {
      props.setEditMode(true);
      props.setName(name.name);
      props.setUpdate(name);
    };

    const attendHandler = (name) => {
      if (name.isattend == true || name.isattend == false) {
        return alert("Already in list");
      }

      const attend = props.names.map((nameN) => {
        if (nameN.id == name.id) {
          return { ...nameN, isattend: true };
        }
        return nameN;
      });
      props.setNames(attend);
    };

    const absentHandler = (name) => {
      if (name.isattend == true || name.isattend == false) {
        return alert("Already in list");
      }
      const absent = props.names.map((nameN) => {
        if (nameN.id == name.id) {
          return { ...nameN, isattend: false };
        }
        return nameN;
      });
      props.setNames(absent);
    };


  return (
    <div>
      <div className="all-student-list">
        <h2>All Name List</h2>

        <ul className="name-list">
          {props.names.map((name) => (
            <li key={name.id}>
              <span>{name.name}</span>
              <button onClick={() => deleteHandler(name.id)}>
                Delete
              </button>
              <button onClick={() => editHandler(name)}>Edit</button>
              <button onClick={() => attendHandler(name)}>Attend</button>
              <button onClick={() => absentHandler(name)}>Absent</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
