import React from "react";
import ShowUsers from "./app/views/ShowUsers";

class App extends React.Component {
  state = {
    users: [
      { id: 1, name: "Gosho" },
      { id: 2, name: "Pesho" },
      { id: 3, name: "Tosho" },
    ],
    age: 25,
  };

  incrementAge() {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  }

  render() {
    return (
      <div>
        <ShowUsers
          users={this.state.users}
          age={this.state.age}
          incrementAge={this.incrementAge.bind(this)}
        />
      </div>
    );
  }
}

export default App;
