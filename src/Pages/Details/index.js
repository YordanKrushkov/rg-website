import styles from "./index.module.css";
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import getOne from '../../Services/getOne';
import { AuthContext } from "../../Context";
import Edit from '../../Components/editDetails'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import DeleteConfirm from '../../Components/Delete'

const Details = () => {
  let i = 0;
  let getImg=''
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;
  const isAuth = isAuthenticated
  const [info, setInfo] = useState({});
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({
    backgroundImage: 'none',
    backgroundPosition: '0% 0%',
  })
  const history = useHistory();
  let id = history.location.pathname.split(':')[1];
  useEffect(() => {
    getOne(id)
      .then((data) => setInfo({ ...data }))
      .catch((e) => {
        console.log("cv error:", e);
      });
  }, [edit]);
  const clickHandler = (e) => {
    let parent = document.getElementById('mainProfile').firstChild;
    let child = parent.firstChild
    if (e.target.tagName === 'IMG') {
      let newChild = e.target.src;
      child.src = newChild;
    }
    setState({
      backgroundImage: `none`,
      backgroundPosition: ``
    })

  }

  const handleMouseOut = () => {
    setState({
      backgroundImage: `none`,
      backgroundPosition: ``
    })
  }
  const drop = async (e) => {
    e.preventDefault();

    var data = e.dataTransfer.getData("text");
    e.target.src = data;
    const send = await fetch("https://rg-gallerybackend.herokuapp.com/updateone", {
      method: "POST",
      body: JSON.stringify({ id: id, profile: data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const drageventHandler = (e) => {
    e.dataTransfer.setData("text", e.target.src);
  }
  const allowDrop = (e) => {
    e.preventDefault();
  }

  const editForm = (e) => {
    let information = document.querySelector('#infoWrapper');
    let editButton = document.getElementById('editPainting');
    let edit = document.getElementById('editWrapper');
    if (information.style.display !== 'none' || edit===true) {
      information.style.display = 'none';
      editButton.style.display = 'none';
      setEdit(true);
    } else {
      console.log('here');
      information.style.display = 'block';
      editButton.style.display = 'block'
      setEdit(false);
    }
    console.log(information.style.display);
    let title=document.querySelector("#title");
let length=document.querySelector("#length");
let width=document.querySelector("#width");
let depth=document.querySelector("#depth");
let description=document.querySelector("#description");
if (title){
    title.value=info.title
}
if(length && width && depth){
    length.value=info.length
    width.value=info.width
    depth.value=info.depth
}
if(description){
description.value=info.description
}

  }

  const handleMouseMove = (e) => {
    
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 75
    let url = e.target.src;
    
    setState({
      backgroundImage: `url(${url})`,
      backgroundPosition: `${x}% ${y}%`
    })
  }

  const deleteHandler=(e)=>{
    let confirm=document.getElementById('confirm')
    if(e.target.tagName==='path'){
      getImg=e.target.parentElement.parentElement.firstChild.src
    }
    if(e.target.tagName==='svg'){
     getImg=e.target.parentElement.firstChild.src;
    }

    let indx=info.imgs.indexOf(getImg);
    confirm.style.display='block'
    confirm.addEventListener('click', async(e)=>{
        if(e.target.tagName==="BUTTON" && e.target.innerHTML==='Yes'){
          if(indx>-1){
            let newArr=info.imgs.splice(indx,1)
            setInfo({
              ...info,
            })
            const send = await fetch("https://rg-gallerybackend.herokuapp.com/updateone", {
              method: "POST",
              body: JSON.stringify({ id: info._id, ...info,}),
              headers: {
                "Content-Type": "application/json",
              },
            });
          confirm.style.display='none';
          }
      
        }else if(e.target.tagName==="BUTTON" && e.target.innerHTML==='No'){
          confirm.style.display='none';

        }
    })
    
  }

  useEffect(() => { }, [clickHandler, handleMouseMove, drop])

  return (
    <div className={ styles.container }>
          <DeleteConfirm />
      <div className={ styles.headerWrapper }>
        <div className={ styles.mainPhotoWrapper } id="mainProfile">
          <div style={ state } className={ styles.profilePictureWrapper } onDrop={ isAuth ? drop : null } onDragOver={ isAuth ? allowDrop : null } onMouseMove={ window.innerWidth>650 ?handleMouseMove :null } onMouseLeave={window.innerWidth>650 ?handleMouseOut:null }>
            <img className={ styles.mainPhoto } src={ info.profile ? info.profile : '' } alt={ info.title } />
          </div>
          <div className={ styles.smallImagesWrapper } onClick={ clickHandler }>
            { info.imgs ? info.imgs.map(x => <div className={ styles.smallImage } key={ i++ }>
              <img className={ styles.smallImages } draggable="true" onDrag={ isAuth ? drageventHandler : null } src={ x } alt={ info.title } />
              { edit ? <AiOutlineCloseCircle className={ styles.close } onClick={deleteHandler} /> : null }
            </div>) : null }
          </div>
        </div>
         {Edit(info, edit, setEdit)}
        { edit ? <AiOutlineCloseCircle className={ styles.closeForm } onClick={ editForm } /> : null }
        {isAuth ?<FaEdit className={ styles.editButton } id="editPainting" onClick={ editForm } />:null}
        <div className={ styles.infoWrapper } id="infoWrapper">
          <h1 className={ styles.title }>{ info.title }</h1>
          <div className={ styles.details }>
            <div className={ styles.dWrapper }>
              <h5 className={ styles.detailsText }>Material: </h5>
              <span className={ styles.span }>{ info.material }</span>
            </div>
            <div className={ styles.dWrapper }>
              <h5 className={ styles.detailsText }>Mediums:</h5>
              <span className={ styles.span }>{ info.mediums }</span>
            </div>

            <div className={ styles.dWrapper }>
              <h5 className={ styles.detailsText }>Subject:</h5>
              <span className={ styles.span }>{ info.subject }</span>
            </div>
            <div className={ styles.dWrapper }>
              <h5 className={ styles.detailsText }>Size:</h5>{ " " }
              <span className={ styles.span }>{ info.length } cm x { info.width } cm x { info.depth } cm</span>
            </div>
          </div>
          <div className={ styles.description }>
            <h2 className={styles.h2}>Description</h2>
            <p className={ styles.p }>
              { info.description }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
