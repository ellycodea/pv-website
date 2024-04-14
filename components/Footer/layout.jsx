import "./footer.css"
import { RiInstagramFill, RiDiscordFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
export default function Home() {
    return (
        <footer class="footer">
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/PerfectVisions/website">
      <FaGithub />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://discord.gg/mQgFvnUaUJ">
      <RiDiscordFill />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/perfectvisions_oficial/">
      <RiInstagramFill />
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="https://status.perfectvisions.website/">Status</a></li>
      <li class="menu__item"><a class="menu__link" href="/projects">Projects</a></li>
      <li class="menu__item"><a class="menu__link" href="/team">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="mailto: jujubasuporte@gmail.com">Contact</a></li>

    </ul>
    <p>&copy;2021 Perfect Visions | All Rights Reserved</p>
  </footer>
    )
}