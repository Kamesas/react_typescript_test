import * as React from "react";
import stl from "./AddTaskForm.module.sass";

export interface AddTaskFormProps {
  addNewTask: Function;
}

export interface AddTaskFormState {
  task: string;
}

class AddTaskForm extends React.Component<AddTaskFormProps, AddTaskFormState> {
  state = { task: "" };

  onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ task: e.target.value.trim() });
  };

  onSubmitForm = (e: any) => {
    e.preventDefault();

    const newTask: { id: number; task: string } = {
      id: Date.now(),
      task: this.state.task
    };
    //const newTask: string = this.state.task;

    if (this.state.task !== "") {
      this.props.addNewTask(newTask);
      this.setState({ task: "" });
    }
  };

  render() {
    const { task } = this.state;

    return (
      <div className={stl.addTaskForm}>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            name="task"
            onChange={this.onChangeForm}
            value={task}
          />
          <button>Add task</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
