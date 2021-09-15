import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Popular from './components/Popular'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)``