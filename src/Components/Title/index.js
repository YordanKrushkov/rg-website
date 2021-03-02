import styles from './index.module.css'

const Title = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.between}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.name}>Ralitsa Georgieva</h1>
                <h6 className={styles.prof}>Artist</h6>
            </div>
            </div>
            <button className={styles.gallery}>Live gallery
            <div className={styles.ripple}><div className={styles.div}></div><div className={styles.div}></div></div>
            </button>
        </div>
     );
}
 
export default Title;