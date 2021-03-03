import styles from "./index.module.css";
import { useContext } from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from '../../Context';

const Header = () => {
  const context = useContext(AuthContext);
  const { isAuthenticated } = context
  const isAuth = isAuthenticated;

  let nav = document.getElementById("mobileNav");
  let wrapper = document.getElementById("wrapper");
  const clickHandler = (e) => {
    if (nav.style.display === "none" || nav.style.display === "") {
      show(nav, wrapper)
    } else {
      hide(nav, wrapper)
    }

  };
  const navClick = (e) => {
    if (e.target.tagName === 'A') {
      hide(nav, wrapper)
    }
  }
  const show = (nav, wrapper) => {
    wrapper.style.height = "265px";
    nav.style.display = "block";
  }
  const hide = (nav, wrapper) => {
    nav.style.display = 'none'
    wrapper.style.height = "0px";
  }
  return (
    <div className={ styles.wrapper } id="wrapper">
      <nav className={ styles.nav }>
        <ul className={ styles.ul }>
          <li className={ styles.li }>
            <Link to="/rg-website/" className={ styles.link }>
              Home
            </Link>
          </li>
          <li className={ `${styles.li} ${styles.border}` }>
            <Link to="/rg-website/about" className={ styles.link }>
              About
            </Link>
          </li>
          <li className={ `${styles.li} ${styles.border}` }>
            <Link to="/rg-website/portraits" className={ styles.link }>
              Portraits
            </Link>
          </li>
          <li className={ `${styles.li} ${styles.border}` }>
            <Link to="/rg-website/abstracts" className={ styles.link }>
              Abstracts
            </Link>
          </li>
          <li className={ `${styles.li} ${styles.border}` }>
            <Link to="/rg-website/landscapes" className={ styles.link }>
              Landscapes
            </Link>
          </li>
          <li className={ `${styles.li} ${styles.border}` }>
            <Link to="/rg-website/contacts" className={ styles.link }>
              Contacts
            </Link>
          </li>
          { isAuth ? <li className={ `${styles.li} ${styles.border}` }>
            <Link to="/rg-website/add" className={ styles.link }>
              Add
            </Link>
          </li>
            : null }

        </ul>
      </nav>
      <GiHamburgerMenu className={ styles.mobileMenu } onClick={ clickHandler } />
      <nav className={ styles.mobile } id="mobileNav" onClick={ navClick }>
        <ul className={ styles.mobileUl }>
          <li className={ styles.mobileLi }>
            <Link to="/rg-website/" className={ styles.mobileLink }>
              Home
            </Link>
          </li>
          <li className={ `${styles.mobileLi}` }>
            <Link to="/rg-website/about" className={ styles.mobileLink }>
              About
            </Link>
          </li>
          <li className={ `${styles.mobileLi}` }>
            <Link to="/rg-website/portraits" className={ styles.mobileLink }>
              Portraits
            </Link>
          </li>
          <li className={ `${styles.mobileLi}` }>
            <Link to="/rg-website/abstracts" className={ styles.mobileLink }>
              Abstracts
            </Link>
          </li>
          <li className={ `${styles.mobileLi}` }>
            <Link to="/rg-website/landscapes" className={ styles.mobileLink }>
              Landscapes
            </Link>
          </li>
          <li className={ `${styles.mobileLi}` }>
            <Link to="/rg-website/contacts" className={ styles.mobileLink }>
              Contacts
            </Link>
          </li>
          { isAuth ? <li className={ `${styles.mobileLi}` }>
            <Link to="/rg-website/add" className={ styles.mobileLink }>
              Add
            </Link>
          </li> : null }

        </ul>
      </nav>
    </div>
  );
};
export default Header;
