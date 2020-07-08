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
    
  }
  
  render () {
  return (
    <div className="App">
      <Login 
        handleFormChange={this.handleFormChange}
        handleSubmit={this.handleSubmit}
        email={this.state.login.email}
        password={this.state.login.password}/>
    </div>
  )};
}

export default App;
