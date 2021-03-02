import styles from './index.module.css'
const keyPressHandle=(e)=>{
    console.log('here');
}
const fullscreen=(e)=>{
    let el=document.getElementsByClassName('fullscreen')[0];
    console.log(e.target);
}
const Live = () => {
    return ( 

        <div className={styles.wrapper} onClick={fullscreen} onKeyDown={()=>{keyPressHandle()}}>
            <h1 className={styles.instruction}>Press "Click" to start and double "ESC" for exit</h1>
            <iframe  className={styles.iframe} src="https://yordankrushkov.github.io/livegallery/" frameborder="0" allowFullScreen></iframe>
        
        </div>
     );
}
 
export default Live;