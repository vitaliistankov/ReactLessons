import React from "react";
import Form from './app/views/Form';
import PrintArray from "./app/views/PrintArray";

class App extends React.Component 
{
  state = {
    isOpenFormTab: false
  }
  
  render() {
    return (<div>
      <div>
        <button onClick={()=>{
          let ioft = !this.state.isOpenFormTab;
          this.setState({isOpenFormTab: ioft});
        }} >
          {this.state.isOpenFormTab === true ? 'Close' : 'Open'}
        </button>
      </div>
      {this.state.isOpenFormTab && <Form />}
      <PrintArray />
    </div>)
  }
}

export default App;
