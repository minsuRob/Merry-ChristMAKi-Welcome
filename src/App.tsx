import './App.css'
import makiBg from './assets/maki.jpg'

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${makiBg})` }}>
      <a href="https://apps.apple.com/kr/app/maki-by-markhub/id6746326048" className="center-btn">Install MAKi</a>
    </div>
  )
}

export default App
