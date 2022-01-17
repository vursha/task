import React from 'react';
import './index.css';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
    console.log('hi...');
  }
  componentDidMount() {
    console.log('hi123');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userData: json,
        });
      });
    console.log(this.state.userData);
  }
  render() {
    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{' '}
        {this.state.userData.map((item) => (
         <ol key={item.id}>
            <img src='./images/nature images/butterfly.jpg' alt=""/>
            <li> Name:{item.username}</li>
            <li> Email:{item.email}</li>
           
          </ol>
        ))}
      </div>
    );
  }
}
