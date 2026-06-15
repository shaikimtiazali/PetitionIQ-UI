function CookieBar({ onAccept, onDecline }) {
  return (
    <div id="cookie-bar">
      <p>
        We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.
        <a href="#privacy"> Privacy Policy</a>
      </p>
      <div className="cookie-btns">
        <button className="c-btn c-decline" onClick={onDecline}>
          Decline
        </button>
        <button className="c-btn c-accept" onClick={onAccept}>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieBar
