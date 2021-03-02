import styles from "./index.module.css";
import {useContext,useState,useEffect} from 'react';
import { FaFacebook, FaPinterest, FaEdit, FaUserAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {hoverHandler, hoverOut,openImgInput} from '../../utils/eventHandlers'
import { AuthContext } from "../../Context";
import Loader from '../../Components/Loader'
import getMyData from "../../Services/getUser";
import uploadImage from '../../Services/uploadImg'
import emailjs from 'emailjs-com';
const Contact = () => {
  const context = useContext(AuthContext);
  const { isAuthenticated} = context;
  const isAuth = isAuthenticated;
  const [me, setMe] = useState({});
  const [update, setUpdate] = useState({});

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

    setUpdate({
      [e.target.id!='nameTitle']:e.target.value,
      name:name,
      surname:surname
    })
  }
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
    document.getElementById('contactWrapper').style.height="800px";
    
    const send = await fetch("https://yordankrushkov.github.io/rgbackend/updateUser", {
      method: "POST",
      body: JSON.stringify({ id: me._id, ...update }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  useEffect(()=>{

  },[submitHandler])

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_fe5eeh2', 'template_phwyfc2', e.target, 'user_guUortiRQj9e60clgIKdI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
      <div className={styles.wrapper} id="contactWrapper">
        <div className={styles.container}>
          <div className={styles.header} onMouseEnter={()=> isAuth ?hoverHandler('coverImg'):null} onMouseLeave={()=>hoverOut('coverImg')}>
           {me.cover? <img className={styles.img} src={me.cover} alt="header" />:<Loader/>}
            <span className={styles.span} id="coverImg" >
              <FaEdit onClick={() => { openImgInput("cover")}} />
            </span>
            <input className={styles.hidden} id="cover" type="file"  onChange={(e)=>{uploadImage(e,me,'cover')}}/>
          </div>
          <div className={styles.contactsWrapper} onMouseEnter={()=> isAuth ?hoverHandler('changeInfo'):null} onMouseLeave={()=>hoverOut('changeInfo')}>
          <div className={styles.contactInfo} id='contactInfo'>
            {me.name ?<h1 className={styles.author}>{me.name} {me.surname}</h1> :null}
            <span className={styles.name} id="changeInfo" onClick={()=>clickHandler('updateInfo','contactInfo')}>
              <FaEdit />
            </span>
           {me.fb ? <div className={styles.socialMedia}>
              <a href={me.fb} target="blank">
                <FaFacebook className={styles.icons} />
              </a>
              <a href={me.insta} target="blank">
                <RiInstagramFill className={styles.icons} />
              </a>
              <a href={me.pin} target="blank">
                <FaPinterest className={styles.icons} />
              </a>
            </div>:null}
            </div>
            <form className={styles.updateForm} id="updateInfo" onSubmit={submitHandler}>
            <div className={styles.nameWrapper}>
            <FaUserAlt className={styles.icons} />
            <input className={styles.inputEdit} type="text" id="nameTitle" onChange={changeHandler}/>
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
            <form className={styles.form} onSubmit={sendEmail}>
              <input className={styles.input} type="text" id="name" name="name" placeholder="Name" />
              <input className={styles.input} type="email" id="email" name="email" placeholder="Email"/>
              <input className={styles.input}type="text" id="subject" placeholder="Subject"name="subject"/>
              <textarea className={styles.textarea} name="message" id="message" cols="30" rows="10"placeholder="Message" />
              <button className={styles.button}>Send</button>
            </form>
          </div>:null}
        </div> 
      </div>
  );
};

export default Contact;
