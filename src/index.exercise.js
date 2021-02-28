// 🐨 you'll need to import React and ReactDOM up here
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
import VisuallyHidden from '@reach/visually-hidden'

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
const App = () => {
  const openLoginDialog = () => setShowLoginDialog(true)
  const closeLoginDialog = () => setShowLoginDialog(false)

  const openRegisterDialog = () => setShowRegisterDialog(true)
  const closeRegisterDialog = () => setShowRegisterDialog(false)

  const [showLoginDialog, setShowLoginDialog] = React.useState(false)
  const [showRegisterDialog, setShowRegisterDialog] = React.useState(false)

  return (
    <div>
      <Logo height={80} width={80} />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={openLoginDialog}>Login</button>
      </div>
      <div>
        <button onClick={openRegisterDialog}>Register</button>
      </div>
      <Dialog isOpen={showLoginDialog} onDismiss={closeLoginDialog}>
        <button onClick={closeLoginDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <p>Login Here!</p>
      </Dialog>
      <Dialog isOpen={showRegisterDialog} onDismiss={closeRegisterDialog}>
        <button onClick={closeRegisterDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <p>Register Here!</p>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
