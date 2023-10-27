import React from "react";

export const Attend = (props) => {
  const attendList = props.names.filter((name) => name.isattend === true);
  const toggleHandler = (name) => {
    console.log(name);
    const toggle = props.names.map((nameN) => {
      if (nameN.id == name.id) {
        if (name.isattend == true) {
          return { ...nameN, isattend: false };
        } else {
          return { ...nameN, isattend: true };
        }
      }
      return nameN;
    });

    props.setNames(toggle);
  };
  return (
    <div>
      <div className="attend-student-list">
        <h2>Attend Name List</h2>
        <ul className="name-list">
          {attendList.map((name) => (
            <li key={name.id}>
              <span>{name.name}</span>
              <button onClick={() => toggleHandler(name)}>Make Absent</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
