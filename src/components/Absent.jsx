import React from "react";

export const Absent = (props) => {
  const absentList = props.names.filter((name) => name.isattend === false);
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
      <div className="absent-student-list">
        <h2>Absent Name List</h2>

        <ul className="name-list">
          {absentList.map((name) => (
            <li key={name.id}>
              <span>{name.name}</span>
              <button onClick={() => toggleHandler(name)}>Make Attend</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
