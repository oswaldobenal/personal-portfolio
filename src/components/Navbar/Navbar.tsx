import LogoJulian from "../../assets/LogoJulian.svg";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={style.hero}>
      <nav className={`${style.nav} ${style.container}`}>
        <div className={style.logo}>
          <img src={LogoJulian} alt="Logo Julian" />
        </div>
        <ul>
          <li>
            <Link to={"#home"} className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <li>
              <Link to={"#about"} className={style.link}>
                AboutMe
              </Link>
            </li>
          </li>
          <li>
            <li>
              <Link to={"#resume"} className={style.link}>
                Resume
              </Link>
            </li>
          </li>
          <li>
            <li>
              <Link to={"#contact"} className={style.link}>
                ContactMe
              </Link>
            </li>
          </li>
          <BiMenuAltRight className={style.menu} />
        </ul>
        <div>
          <img src="" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
