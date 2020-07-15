import React from 'react';
import Routes from './components/Routes'
import SessionStatus from './components/SessionStatus'


class App extends React.Component {
  
  
  render () {
  return (
    <div className="App">
      <SessionStatus />
    </div>
  )};
}

export default App;
