import makiBg from '../assets/maki.jpg'
import '../App.css'

function Home() {
  const isAndroid = /Android/i.test(navigator.userAgent)
  const storeUrl = isAndroid
    ? 'https://play.google.com/store/apps/details?id=ink.markhub.app'
    : 'https://apps.apple.com/kr/app/maki-by-markhub/id6746326048'

  return (
    <div className="app" style={{ backgroundImage: `url(${makiBg})` }}>
      <a href={storeUrl} className="center-btn">Install MAKi</a>
    </div>
  )
}

export default Home

