// 🐨 you'll need to import React and ReactDOM up here
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
function handleRegisterClick(e) {}
const App = () => {
  return (
    <div>
      <Logo height={80} width={80} />
      <h1>Bookshelf</h1>
      <div>
        <button
          onClick={() => {
            alert('Login')
          }}
        >
          Login
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            alert('Registar')
          }}
        >
          Register
        </button>
      </div>
    </div>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
