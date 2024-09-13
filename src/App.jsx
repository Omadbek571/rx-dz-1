import logo from "./Logo.svg"
import sms from "./sms.svg"
import card from "./img1.png"
import znak from "./znak.svg"



import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav id='navbar'>
            <div>
            <img src={logo} alt="" />
            </div>

            <ul id="ul-item">
              <li id="li-item">
                <a href="#" id="link">Home</a>
              </li>
              <li id="li-item">
                <a href="#" id="link">About Us</a>
              </li>
              <li id="li-item">
                <a href="#" id="link">Services</a>
              </li>
              <li id="li-item">
                <a href="#" id="link">Projects</a>
              </li>
              <li id="li-item">
                <a href="#" id="link">Blog</a>
              </li>
            </ul>

            <div id="nav-sms">
               <img src={sms} alt="" />
               <div>
                <p id="nedd">Need help?</p>
                <a href="#" id="link-number">(307) 555-0133</a>
               </div>
            </div>

          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div id="title">Journey with Confidence Migrate with Us</div>
          <div id="orov">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet</p>
            <p>rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          </div>
          <div id="btn">Learn More</div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div id="obshi">
            <div><img src={card} alt="" /></div>
            <div>
              <p id="about">About Us</p>
              <h1>Unknown Wanderlust Your Journey into</h1>
              <p id="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
              <div id="divv">
                <div id="div1">
                  <h3>Safety Guides</h3>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                </div>
                <div id="div2">
                  <h3>Passport Assistance</h3>
                  <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                </div>
              </div>
              <div id="btn1">Read More</div>
            </div>
          </div>
        </div>
      </footer>

      
    </>
  )
}

export default App
