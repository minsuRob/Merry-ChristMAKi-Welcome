import tabletBg from '../assets/tablet.jpg'
import qrCode from '../assets/qr.png'
import '../App.css'

function QRTablet() {
  return (
    <div className="app" style={{ backgroundImage: `url(${tabletBg})`, alignItems: 'center', paddingBottom: 0 }}>
      <img src={qrCode} alt="QR Code" style={{ maxWidth: '300px', maxHeight: '300px' }} />
    </div>
  )
}

export default QRTablet

