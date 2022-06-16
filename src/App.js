import './App.css';
import Search from './pages/Search';
import Home from './pages/Home';
import { useState, useEffect } from 'react'
import { auth } from './services/firebase'

function App() {
  const [ user, setUser ] = setUser(null)
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
    return () => {
      unsubscribe()
    }
  }, [])
  
  return (
    <div className="App">
      BingeList App
      <Search/>
      <Home />
    </div>
  );
}

export default App;
