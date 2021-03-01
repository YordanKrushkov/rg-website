import styles from './index.module.css'
import img from '../../assets/cover.jpg'
const Background = () => {
    return ( 
        <div className={styles.wrapper}>
            <img className={styles.img} src={img} alt=""/>
         </div>
     );
}
 
export default Background;