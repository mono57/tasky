import React, { Component } from "react";
import { StyleSheet, Text, View, Checkbox, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";

import tasks from "./data";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Tasky</Text>
    <Ionicons name="ios-add-circle" color="#FFF" size={32} />
  </View>
);

const Task = ({ name, completed, handleOnValueChange }) => (
  <View style={styles.task}>
    <CheckBox value={completed} onValueChange={handleOnValueChange} />
    <Text>{name}</Text>
  </View>
);

const EmptyScreenContainer = ({ onShowDialog }) => (
  <View style={styles.emptyContainer}>
    <Button title="Add new task" onPress={() => onShowDialog(true)} />
  </View>
);

const TaskGroup = ({ title, tasks, handleOnValueChange }) => {
  if (tasks.length >= 1) {
    return (
      <View style={styles.taskGroup}>
        <Text style={styles.taskGroupTitle}>{title}</Text>
        {tasks.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            completed={task.completed}
            handleOnValueChange={() => handleOnValueChange(task)}
          />
        ))}
      </View>
    );
  }
  return null;
};

class App extends Component {
  state = {
    tasks: tasks,
    isDialogVisible: false,
  };

  handleOnValueChange = (task) => {
    const { tasks } = this.state;
    if (task.completed) {
      task.completed = false;
    } else {
      task.completed = true;
    }
    const _task = tasks.filter((t) => t.id == task.id)[0];
    const index = tasks.indexOf(_task);
    tasks[index] = _task;
    this.setState({ tasks: tasks });
  };

  sendInput = (input) => {};

  showDialog = (state) => {
    this.setState({ isDialogVisible: state });
  };

  render() {
    const { tasks, isDialogVisible } = this.state;
    const completedTasks = tasks.filter((task) => task.completed == true);
    const incompletedTasks = tasks.filter((task) => task.completed == false);

    if (tasks.length >= 1) {
      return (
        <View style={styles.content}>
          <TaskGroup
            tasks={incompletedTasks}
            title={"All tasks"}
            handleOnValueChange={this.handleOnValueChange}
          />
          <View
            style={{
              padding: 10,
            }}
          />
          <TaskGroup
            title={"Completed tasks"}
            tasks={completedTasks}
            handleOnValueChange={this.handleOnValueChange}
          />
         
        </View>
      );
    }
    return (
      <View style={styles.container}>
        
        <EmptyScreenContainer onShowDialog={this.showDialog} />
      </View>
    );
  }
}

export default App;

// export default function App() {
//   console.log(tasks)
//   if (tasks) {
//     return (
//       <View style={styles.content}>
//         <TaskGroup tasks={tasks} title={"All tasks"} />
//         <View
//           style={{
//             padding: 10,
//           }}
//         />
//         <TaskGroup title={"Completed tasks"} tasks={tasks} />
//       </View>
//     );
//   }
//   return (
//     <View style={styles.container}>
//       <EmptyScreenContainer />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 25,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "8%",
  },
  header: {
    flex: 1 / 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5A61F6",
    paddingVertical: 15,
    paddingHorizontal: 25,
    // marginTop: 25
  },
  content: {
    flex: 5 / 6,
    padding: "10%",
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskGroup: {},
  taskGroupTitle: {
    margin: "2%",
  },
});
