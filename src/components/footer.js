// Instagram, Twitter, and Facebook
export default function Footer() {
    return (
      <nav id='footer' className="navbar navbar-expand-lg navbar-light justify-content-center mt-2">
        <div className="m-2">
          <a href="https://www.instagram.com/FightOpera/"><img src={process.env.PUBLIC_URL + "/images/instagram.svg"} alt="Instagram"></img></a>
        </div>
        <div className="m-2">
          <a href="https://twitter.com/FightOpera"><img src={process.env.PUBLIC_URL + "/images/twitter.svg"} alt="Twitter"></img></a>
        </div>
        <div className="m-2">
          <a href="https://www.facebook.com/profile.php?id=100084837019977"><img src={process.env.PUBLIC_URL + "/images/facebook.svg"} alt="Facebook"></img></a>
        </div>
      </nav>
    )
  }