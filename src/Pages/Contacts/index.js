import styles from "./index.module.css";
import react, {useContext,useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { FaFacebook, FaPinterest, FaEdit, FaUserAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {hoverHandler, hoverOut,openImgInput} from '../../utils/eventHandlers'
import { AuthContext } from "../../Context";
import Loader from '../../Components/Loader'
import getMyData from "../../Services/getUser";
const url = "https://api.cloudinary.com/v1_1/rggallery/image/upload";

const Contact = () => {
  const history=useHistory()
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;
  const isAuth = isAuthenticated;
  const [me, setMe] = useState({});
  const [update, setUpdate] = useState({});
  const [img, setImage] = useState({
    img: "",
  });

  const changeHandler=(e)=>{
      let data
      let name
      let surname
    if(e.target.id==="nameTitle"){
      data=e.target.value.split(' ')
    }
    if(data){
      name=data[0];
      surname=data[1];
    }

    setMe({
      [e.target.id!='nameTitle']:e.target.value,
      neme:name,
      surname:surname
    })
  }
  const uploadImage = async (e) => {
    let oldImg = me.img;
    const files = e.target.files;
    // let newImg = files[0].name;
    // setImage({ img: newImg });
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "rgArtGallery");

    const res = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    setImage(file.secure_url);
     await fetch("http://localhost:4500/updateUser", {
      method: "POST",
      body: JSON.stringify({ id: me._id, cover: file.secure_url }),
      headers: {
        "Content-Type": "application/json",
      },
    },);
  };
  useEffect(() => {
    getMyData()
      .then((data) => setMe({ ...data }))
      .catch((e) => {
        console.log("cv error:", e);
      });

  }, [uploadImage]);
  

  const clickHandler=(id, secondId)=>{
    document.getElementById(id).style.display='block';
    document.getElementById(secondId).style.display='none';
    document.getElementById('contactWrapper').style.height="930px";
    let name=document.getElementById('nameTitle');
    let fb=document.getElementById('fb');
    let insta=document.getElementById('insta');
    let pin=document.getElementById('pin');
    if(name && fb && insta && pin){
      name.value=`${me.name} ${me.surname}`
      fb.value=me.fb
      insta.value=me.insta
      pin.value=me.pin
    }
  }
  const submitHandler= async(e)=>{
    e.preventDefault();
    document.getElementById('contactInfo').style.display='block';
    document.getElementById('updateInfo').style.display='none';
    document.getElementById('contactWrapper').style.height="850px";
    
    const send = await fetch("http://localhost:4500/updateUser", {
      method: "POST",
      body: JSON.stringify({ id: me._id, ...update }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  useEffect(()=>{

  },[submitHandler])
  return (
      <div className={styles.wrapper} id="contactWrapper">
        <div className={styles.container}>
          <div className={styles.header} onMouseEnter={()=> isAuth ?hoverHandler('coverImg'):null} onMouseLeave={()=>hoverOut('coverImg')}>
           {me.cover? <img className={styles.img} src={me.cover} alt="header" />:<Loader/>}
            <span className={styles.span} id="coverImg" >
              <FaEdit onClick={() => { openImgInput("cover")}} />
            </span>
            <input className={styles.hidden} id="cover" type="file"  onChange={uploadImage}/>
          </div>
          <div className={styles.contactsWrapper} onMouseEnter={()=> isAuth ?hoverHandler('changeInfo'):null} onMouseLeave={()=>hoverOut('changeInfo')}>
          <div className={styles.contactInfo} id='contactInfo'>
            {me.name ?<h1 className={styles.author}>{me.name} {me.surname}</h1> :null}
            <span className={styles.name} id="changeInfo" onClick={()=>clickHandler('updateInfo','contactInfo')}>
              <FaEdit />
            </span>
           {me.fb ? <div className={styles.socialMedia}>
              <a
                href={me.fb}
                target="blank"
              >
                <FaFacebook className={styles.icons} />
              </a>
              <a
                href={me.insta}
                target="blank"
              >
                <RiInstagramFill className={styles.icons} />
              </a>
              <a
                href={me.pin}
                target="blank"
              >
                <FaPinterest className={styles.icons} />
              </a>
            </div>:null}
            </div>
            <form className={styles.updateForm} id="updateInfo" onSubmit={submitHandler}>
            <div className={styles.nameWrapper}>
            <FaUserAlt className={styles.icons} />
            <input
              className={styles.inputEdit}
              type="text"
              id="nameTitle"
               onChange={changeHandler}
            />
            </div>
            <div className={styles.editSocial}>
            <div className={styles.divWrapper}>
              <FaFacebook className={styles.icons} />
              <input className={styles.inputEdit} id="fb" type="text" onChange={changeHandler} />
            </div>
            <div className={styles.divWrapper}>
              <RiInstagramFill className={styles.icons} />
              <input className={styles.inputEdit} id="insta" type="text" onChange={changeHandler} />
            </div>
            <div className={styles.divWrapper}>
              <FaPinterest className={styles.icons} />
              <input className={styles.inputEdit} id="pin" type="text" onChange={changeHandler} />
            </div>
            </div>
            <button className={styles.button}>UPDATE</button>
            </form>
          </div>
         
          {me.email ?<div className={styles.formWrapper}>
            <h1 className={styles.title}>Say hello</h1>
            <form className={styles.form}>
              <input className={styles.input} type="text" placeholder="Name" />
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Subject"
              />
              <textarea
                className={styles.textarea}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className={styles.button}>Send</button>
            </form>
          </div>:null}
        </div> 
      </div>
  );
};

export default Contact;
