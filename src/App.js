import React from 'react';
import Login from './components/Login'

class App extends React.Component {
  state = {
    currentUser: null,
    login: {
      email: "",
      password: ""
    }
  }

  handleFormChange = event => {
    const {name, value} = event.target
    this.setState({
      login: {
        ...this.state.login,
        [name]: value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const userInfo = this.state.login;
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch("http://localhost:3001/api/v1/login", headers)
    .then(response => response.json())
    .then(userJSON => {
      if (userJSON.error){
        alert("Invalid credentials")
      } else {
        this.setState({
          currentUser: userJSON
        })
      }
    })
    .catch(error => console.log(error))
  }
  
  render () {
  return (
    <div className="App">
      <h2>Welcome{this.state.currentUser ? ", " + this.state.currentUser.name : "!"}</h2>
      <Login 
        handleFormChange={this.handleFormChange}
        handleSubmit={this.handleSubmit}
        email={this.state.login.email}
        password={this.state.login.password}/>
    </div>
  )};
}

export default App;
