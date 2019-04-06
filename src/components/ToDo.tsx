import * as React from "react";
import Header from "./Header/Header";
import stl from "./ToDo.module.sass";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import ListTasks from "./ListTasks/ListTasks";

interface IProps {
  countBy?: number;
}

interface IState {
  //Array<{ id: number, task: string }>
  //tasks: { id: number; task: string }[];
  tasks: Array<any>;
}

class Description extends React.Component<IProps, IState> {
  // public static defaultProps: Partial<IProps> = {
  //   countBy: 1
  // };

  public state: IState = {
    tasks: []
  };

  addNewTask = (newTask: string) => {
    this.setState({ tasks: [newTask, ...this.state.tasks] });
    console.log(newTask);
  };

  saveToLocalStorage = () => {
    const tasks = JSON.stringify(this.state.tasks);
    localStorage.setItem("tasks", tasks);
  };

  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "{}");
    if (savedTasks) {
      this.setState({
        tasks: savedTasks
      });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.tasks !== this.state.tasks) {
      this.saveToLocalStorage();
    }
  }

  deleteNote = (idNote: number) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== idNote)
    });
  };

  public render() {
    const { tasks } = this.state;
    console.log(this.state.tasks);

    return (
      <div className={stl.todo}>
        <Header />
        <AddTaskForm addNewTask={this.addNewTask} />
        <ListTasks tasks={tasks} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default Description;
