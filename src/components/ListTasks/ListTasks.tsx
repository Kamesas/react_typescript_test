import * as React from "react";

export interface ListTasksProps {
  tasks: Array<any>;
  deleteNote: Function;
}

const ListTasks: React.FC<ListTasksProps> = (props: ListTasksProps) => {
  const removTask = (id: number) => props.deleteNote(id);

  return (
    <ul>
      {props.tasks.map((item, i) => (
        <li key={item.id}>
          {item.task}
          <button onClick={() => removTask(item.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default ListTasks;
