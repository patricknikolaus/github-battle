import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Patrick!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)