import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { openImgInput } from "../../utils/eventHandlers";
import styles from './index.module.css'
const url = "https://api.cloudinary.com/v1_1/rggallery/image/upload";

const Edit = (info, edit, setEdit, imgUrl) => {
  const history = useHistory()
  let images = []
  const [imagUrl, setUploadImg] = useState(images);
  const [img, setImg] = useState(images);
  const [painting, setPainting] = useState({
  });
  useEffect(() => {
    setPainting({
      imgs: info.imgs,
      title: info.title,
      material: info.material,
      mediums: info.mediums,
      subject: info.subject,
      width: info.width,
      length: info.length,
      depth: info.depth,
      description: info.description,
    })
  }, [])

  useEffect(() => {
    let wrapper = document.getElementsByClassName(styles.wrapper)[0];
    if (edit === false) {
      if (wrapper) {
        wrapper.style.display = 'none'
      }
    } else if (edit === true) {
      if (wrapper) {
        wrapper.style.display = 'block'
      }
    }
  }, [edit])

  const uploadImage = async (e) => {
    const files = e.target.files;
    if (!files) {
      return
    }
    let newImg = files[0].name;


    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "rgArtGallery");
    const res = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    let fileurl = await file.secure_url;
    if (fileurl) {
      setImg((img) => [...img, newImg])
    }
    await setUploadImg((imagUrl) => [...imagUrl, fileurl]);
    await setPainting({
      ...painting,
      imgs: [...info.imgs, ...imagUrl]
    });
  };

  const onChangeHandler = async (e) => {
    setPainting({
      ...painting,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const send = await fetch("https://rg-gallerybackend.herokuapp.com/updateone", {
      method: "POST",
      body: JSON.stringify({ id: info._id, ...painting, imgs: [...info.imgs, ...imagUrl] }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEdit(false)
    let information = document.querySelector('#infoWrapper');
    let editButton = document.getElementById('editPainting');

    information.style.display = "block"
    editButton.style.display = 'block'
    history.push(`/rg-website/details:${info._id}`)
    Array.from(document.getElementsByClassName(styles.h6)).map(x => x.remove())
  }
  useEffect(() => { }, [img, painting, submitHandler, uploadImage]);

  const deleteHandler = (e) => {
    let confirm = document.getElementById('confirm')

    confirm.style.display = 'block'
    confirm.addEventListener('click', async (e) => {
      if (e.target.tagName === "BUTTON" && e.target.innerHTML === 'Yes') {

        const send = await fetch("https://rg-gallerybackend.herokuapp.com/delete", {

          method: "DELETE",
          body: JSON.stringify({ id: info._id }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        confirm.style.display = 'none';
        history.push('/rg-website/')

      } else if (e.target.tagName === "BUTTON" && e.target.innerHTML === 'No') {
        confirm.style.display = 'none';

      }
    })

  }

  return (
    <div className={ styles.wrapper } id="editWrapper">
      <h2 className={ styles.h2 }>Edit painting</h2>
      <form className={ styles.form } onSubmit={ submitHandler }>
        <span id="addPhotos" className={ styles.addPhotos } onClick={ () => { openImgInput('fileInput') } }>
          Add Photos
        </span>
        <input className={ styles.addFile } id="fileInput" type="file" multiple="multiple" onChange={ uploadImage } />
        { img === [] ? <h6>'yes'</h6> : img.map(x => <h6 className={ styles.h6 } key={ x }>{ x }</h6>) }

        <input className={ styles.title } type="text" name="title" id="title" onChange={ onChangeHandler } />
        <div className={ styles.details }>
          <select name="material" className={ styles.select } id="material" onChange={ onChangeHandler } >
            <option className={ styles.option } value="">{ info.material }</option>
            <option className={ styles.option } value="canvas">Canvas</option>
            <option className={ styles.option } value="paper">Paper</option>
            <option className={ styles.option } value="canvas board">Canvas board</option>
          </select>
          <select name="mediums" className={ styles.select } id="mediums" onChange={ onChangeHandler }>
            <option className={ styles.option } value="">{ info.mediums }</option>
            <option className={ styles.option } value="acrylic">Acrylic</option>
            <option className={ styles.option } value="oil">Oil</option>
            <option className={ styles.option } value="watercolor">Watercolor</option>
            <option className={ styles.option } value="mixed media">Mixed Media</option>
          </select>
          <select name="subject" className={ styles.select } id="subject" onChange={ onChangeHandler }>
            <option className={ styles.option } value="">{ info.subject }</option>
            <option className={ styles.option } value="portrait">Portrait</option>
            <option className={ styles.option } value="abstract">Abstract</option>
            <option className={ styles.option } value="landscape">Landscape</option>
          </select>
        </div>
        <div className={ styles.sizeWrapper }>

          <input className={ styles.size } id="length" type="text" placeholder="Length" onChange={ onChangeHandler } />
          <input className={ styles.size } id="width" type="text" placeholder="Width" onChange={ onChangeHandler } />
          <input className={ styles.size } id="depth" type="text" placeholder="Depth" onChange={ onChangeHandler } />
        </div>
        <textarea className={ styles.textarea } id="description" placeholder="Art Description" onChange={ onChangeHandler } />
        <button type="submit" className={ styles.button }>Submit</button>
      </form>
      <button className={ `${styles.button} ${styles.delete}` } onClick={ deleteHandler }>Delete</button>
    </div>
  );
}

export default Edit;
