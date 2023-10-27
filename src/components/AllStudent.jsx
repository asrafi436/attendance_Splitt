import React from 'react'
import { List } from './List'
import { Attend } from './Attend'
import { Absent } from './Absent'


export const AllStudent = (props) => {
  return (
    <div>
      <List
        names={props.names}
        setNames={props.setNames}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
      />
      <Attend names={props.names} setNames={props.setNames} />
      <Absent names={props.names} setNames={props.setNames} />
    </div>
  );
}
