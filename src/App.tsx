import './App.css'
import makiBg from './assets/maki.jpg'

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${makiBg})` }}>
      <button className="center-btn">Install MAKi</button>
    </div>
  )
}

export default App
