import React, { Component } from 'react';

class ShowUsers extends Component {
    constructor(props){
        super(props);

    }
    printTable(){
        return (
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Actions</td>
                </tr>
                {
                    this.props.users.map(user => 
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                            <button>x</button>
                    </td>
                </tr>)
                }
            </table>)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.age}
                </div>
                <button onClick={()=>{
                    this.props.incrementAge();
                }}>+Age</button>
                <div>
                {this.printTable()}
                </div>
            </div>
        )
    }
}

export default ShowUsers;