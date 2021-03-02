import { useState, useContext, useEffect } from "react";
import styles from "./index.module.css";
import { FaEdit } from "react-icons/fa";
import getMyData from "../../Services/getUser";
import { hoverHandler, hoverOut, openImgInput } from "../../utils/eventHandlers";
import { AuthContext } from "../../Context";
import uploadImage from '../../Services/uploadImg'
import Loader from '../../Components/Loader'
const About = () => {

  const [me, setMe] = useState({});
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;
  const isAuth = isAuthenticated;

  const [description, setDescription] = useState({
    description: "",
  });

  const clickHandler = (id, secondId) => {
    let elOne = document.getElementById(id);
    let elTwo = document.getElementById(secondId);
    if (elOne.style.display === "none" || elOne.style.display === "") {
      document.getElementById(id).style.display = "block";
      document.getElementById(secondId).style.display = "none";
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(secondId).style.display = "block";
    }
    document.getElementById("about").value = me.bio;
  };

  const onChangeHandler = (e) => {
    setDescription({
      description: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    document.getElementById("paragraph").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutForm").style.display = "none";
    const send = await fetch("http://localhost:4500/updateUser", {
      method: "POST",
      body: JSON.stringify({ id: me._id, bio: description.description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    getMyData()
      .then((data) => setMe({ ...data }))
      .catch((e) => {
        console.log("cv error:", e);
      });
  }, [uploadImage, submitHandler]);
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.body }>
        { me.img
          ? <div className={ styles.info } onMouseEnter={ () => (isAuth ? hoverHandler("editText") : null) } onMouseLeave={ () => hoverOut("editText") }>
            <div
              className={ styles.imgWrapper } onMouseEnter={ () => isAuth ? hoverHandler("editProfileImg") : null } onMouseLeave={ () => hoverOut("editProfileImg") }>
              <FaEdit className={ styles.iconOne } id="editProfileImg" onClick={ () => { openImgInput("profileImgInput") } } />
              <input className={ styles.addFile } id="profileImgInput" type="file" multiple="multiple" onChange={(e)=>{uploadImage(e,me,'img')}} />
              { me.img ? <img className={ styles.img } src={ me.img } alt="Ralitsa" /> : <Loader /> }
            </div>
            <div className={ styles.text }>
              <FaEdit className={ styles.icon } id="editText" onClick={ () => clickHandler("aboutForm", "paragraph") } />
              { me.bio ? <p className={ styles.p } id="paragraph">{ me.bio }</p> : <Loader /> }
              <form className={ styles.form } id="aboutForm" onSubmit={ submitHandler } >
                <textarea className={ styles.textArea } name="about" id="about" onChange={ onChangeHandler } />
                <button className={ styles.button } type="submit" id="textButton">
                  Submit
              </button>
              </form>
            </div>
          </div> : <Loader /> }
      </div>
    </div>
  );
};

export default About;
