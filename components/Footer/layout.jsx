import "./footer.css"
import { RiInstagramFill, RiDiscordFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
export default function Home() {
    return (
        <footer className="footer">
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/PerfectVisions/website">
      <FaGithub />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://discord.gg/mQgFvnUaUJ">
      <RiDiscordFill />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/perfectvisions_oficial/">
      <RiInstagramFill />
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="https://status.perfectvisions.website/">Status</a></li>
      <li className="menu__item"><a className="menu__link" href="/projects">Projects</a></li>
      <li className="menu__item"><a className="menu__link" href="/team">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="mailto: jujubasuporte@gmail.com">Contact</a></li>

    </ul>
    <p>&copy;2021 Perfect Visions | All Rights Reserved</p>
  </footer>
    )
}