import Alvin from "./foto/Alvin.jpeg"
import tlp from "./foto/tlp.png"
import email from "./foto/email.png"
import address from "./foto/address.png"
import './App.css';

function App() {
  return (
    <div className="container1">
      
      <div>
        <img src={Alvin} className="photo" alt="Alvin"></img>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      
      <div className="nama">
        <h1>Alvin<br></br> Nabil Ramadhan</h1>
      </div>

      <div className="skill">
        <h2>Software Engineering Major</h2>
      </div>

      <div className="profile">
        <h3>Profile</h3>
      </div>

      <div className="school">
        <p>I am still studying at SMK Negeri 1 Denpasar<br></br> Department of Engineering computer Software<br></br> Engineering, able to work in a team and can<br></br> communicate well.</p>
      </div>

      <div className="education">
        <h4>Education</h4>
      </div>

      <div className="note">
        <p>•     SMK Negeri 1 Denpasar (2021 - 2024)<br></br>•     Software Engineering Major</p>
      </div>

      <div className="experience">
        <h5>Experience</h5>
      </div>

      <div className="note2">
        <p>Build an English-language work program for<br></br> students to understand more broadly in English.</p>
      </div>

      <div className="languange">
        <h6>Languange<br></br>-------------</h6>
      </div>

      <div className="l1">
        <p>~Indonesia~<br></br>~English~</p>
      </div>

      <div className="contact1">
        <p>Contact<br></br>-----------</p>
        <a href="https://wa.me/6289605192929"><img src={tlp} className="tlp1" alt="tlp"></img></a>
      </div>

      <div className="notlp">
        <p>+62 896-0519-2929</p>
      </div>

      <div className="mail">
        <p>Email<br></br>--------</p>
        <a href="mailto:4lvinramadhan01@gmail.com"><img src={email} className="email" alt="email"></img></a>
      </div>

      <div className="accmail">
        <p>4lvinramadhan01@gmail.com</p>
        <div className="line3"></div>
      </div>

      <div className="almt">
        <p>Address<br></br>------------</p>
        <a href="https://goo.gl/maps/nrehzrYMWfgTCVGR8"><img src={address} className="almt1" alt="almt1"></img></a>
      </div>

      <div className="jalan">
        <p>Jl. Gn. Kalimutu XXI No.15, Pemecutan Klod, Kec. Denpasar Barat.</p>
      </div>

      <div className="skill1">
        <p>Skill<br></br>------</p>
      </div>

      <div className="skill2">
        <p>HTML<br></br>CSS<br></br>JAVASCRIPT<br></br>Figma<br></br>Canva<br></br>Microsoft Office (Word, Power Point, Excel)<br></br>WordPress</p>
      </div>
    
    </div>
  );
}

export default App;
