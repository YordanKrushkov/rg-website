import styles from "./index.module.css";
import react, {useContext} from 'react'
import { Link,Redirect } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from '../../Context';
const Header = () => {
  const context=useContext(AuthContext);
  const {isAuthenticated}=context
  const isAuth=isAuthenticated;

  const clickHandler = (e) => {
      
    let nav = document.getElementById("mobileNav");
    let wrapper = document.getElementById("wrapper");
    if (nav.style.display === "none" ||nav.style.display === "" ) {
      wrapper.style.height = "265px";
      nav.style.display = "block";
    } else {
      wrapper.style.height = "0px";
      nav.style.display = "none";
    }
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={`${styles.li} ${styles.border}`}>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={`${styles.li} ${styles.border}`}>
            <Link to="/portraits" className={styles.link}>
              Portraits
            </Link>
          </li>
          <li className={`${styles.li} ${styles.border}`}>
            <Link to="/abstracts" className={styles.link}>
              Abstracts
            </Link>
          </li>
          <li className={`${styles.li} ${styles.border}`}>
            <Link to="/landscapes" className={styles.link}>
              Landscapes
            </Link>
          </li>
          <li className={`${styles.li} ${styles.border}`}>
            <Link to="/contacts" className={styles.link}>
              Contacts
            </Link>
          </li>
          {isAuth?  <li className={`${styles.li} ${styles.border}`}>
            <Link to="/add" className={styles.link}>
              Add
            </Link>
          </li>
          : null }
        
        </ul>
      </nav>
      <GiHamburgerMenu className={styles.mobileMenu} onClick={clickHandler} />
      <nav className={styles.mobile} id="mobileNav">
        <ul className={styles.mobileUl}>
          <li className={styles.mobileLi}>
            <Link to="/" className={styles.mobileLink}>
              Home
            </Link>
          </li>
          <li className={`${styles.mobileLi}`}>
            <Link to="/about" className={styles.mobileLink}>
              About
            </Link>
          </li>
          <li className={`${styles.mobileLi}`}>
            <Link to="/portraits" className={styles.mobileLink}>
              Portraits
            </Link>
          </li>
          <li className={`${styles.mobileLi}`}>
            <Link to="/abstracts" className={styles.mobileLink}>
              Abstracts
            </Link>
          </li>
          <li className={`${styles.mobileLi}`}>
            <Link to="/landscapes" className={styles.mobileLink}>
              Landscapes
            </Link>
          </li>
          <li className={`${styles.mobileLi}`}>
            <Link to="/contacts" className={styles.mobileLink}>
              Contacts
            </Link>
          </li> 
          {isAuth ?  <li className={`${styles.mobileLi}`}>
            <Link to="/add" className={styles.mobileLink}>
              Add
            </Link>
          </li>: null}
         
        </ul>
      </nav>
    </div>
  );
};
export default Header;
