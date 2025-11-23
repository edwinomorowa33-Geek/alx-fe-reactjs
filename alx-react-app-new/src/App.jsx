import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import custom components
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Welcome Message */}
      <WelcomeMessage />

      {/* Header */}
      <Header />

      {/* Logos */}
      <div className="logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* User Profile */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography"
      />

      {/* Main Content */}
      <MainContent />

      {/* Counter Section */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Counter Component */}
      <Counter />

      {/* Footer */}
      <Footer />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
