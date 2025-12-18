import './App.css'
import makiBg from './assets/maki.jpg'

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${makiBg})` }}>
      <button className="center-btn">Enter</button>
    </div>
  )
}

export default App
