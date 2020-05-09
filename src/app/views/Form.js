import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: 'Pesho',
        counter: 0
    }
    
      handleLikeBtnClick(){
      //let counter = this.state.counter;
      let {counter} = this.state;
      this.setState({counter: counter + 1})
    }

    render() {
        return(<div>
            <div>
            <h3>{this.state.name}</h3>
                <input 
                type="text" 
                value = {this.state.name}
                onChange={(e)=>{
                this.setState({name: e.target.value})
                }}
                />
              </div>
              <div>
              <h3>Likes: {this.state.counter}</h3>
              <button onClick={this.handleLikeBtnClick.bind(this)}>Like!</button>
              </div></div>)
    }
}

export default Form;