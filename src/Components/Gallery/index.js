import styles from "./index.module.css";
import react,{useState,useEffect} from "react";
import{useHistory} from "react-router-dom";
import getPaintings from '../../Services/getPaintings'
import Loader from '../Loader'

const Gallery = (category) => {

  const [paint, setPaind] = useState({});
  const [loading, setLoading]=useState(true);
  const history=useHistory();
  let filter=history.location.pathname.split('/')[1].slice(0,-1);
  useEffect(()=>{
    getPaintings(filter)
    .then((data) => {setPaind({ ...data })
    setLoading(false)
  })
    .catch((e) => {
      console.log("cv error:", e);
    });
  },[])
  const clickHandler=(e)=>{
    if(e.target.tagName==='IMG'){
      history.push(`/details:${e.target.id}`)
    }
  }
  if(paint.imgs===false){
    console.log('yes');
  }
  console.log(Object.values(paint));
  return (
      <div className={styles.container}>
    <div className={styles.wrapper} onClick={clickHandler}>
    {loading? <Loader/>: 
      Object.values(paint).map(x=>{
     return (<div key={x._id} className={styles.imgWrapper}>
       <img id={x._id} className={styles.img} src={x.profile} alt={x.title} />
      </div>)
     })  
    }
    </div>
    </div>
  );
};

export default Gallery;
