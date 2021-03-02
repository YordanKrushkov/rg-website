import react, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import styles from "./index.module.css";
import { openImgInput } from "../../utils/eventHandlers";
const url = "https://api.cloudinary.com/v1_1/rggallery/image/upload";

const Add = () => {
  let history = useHistory();
  let images = [];
  const [imagUrl, setUploadImg] = useState(images);
  const [img, setImg] = useState(images);
  const [painting, setPainting] = useState({
    imgs: [],
    profile: '',
    title: "",
    material: "",
    mediums: "",
    subject: "",
    width: "",
    length: "",
    depth: "",
    description: "",
  });
  const uploadImage = async (e) => {
    const files = e.target.files;
    if (!files) {
      return
    }
    let newImg = files[0].name;
    setImg((img) => [...img, newImg]);


    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "rgArtGallery");
    const res = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    let fileurl = file.secure_url;
    setUploadImg((imagUrl) => [...imagUrl, fileurl]);
  };

  const onChangeHandler = (e) => {
    setPainting({
      ...painting,
      [e.target.id]: e.target.value,
      profile: imagUrl[0],
      imgs: imagUrl
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const send = await fetch("https://yordankrushkov.github.io/rgbackend/create", {
      method: "POST",
      body: JSON.stringify({ ...painting }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push('/')
  }
  useEffect(() => { }, [img]);


  return (
    <div className={ styles.wrapper }>
      <h1 className={ styles.title }>Add Painting</h1>

      <form className={ styles.form } onSubmit={ submitHandler }>
        <span id="addPhotos" className={ styles.addPhotos } onClick={ () => { openImgInput('fileInput') } }>
          Add Photos
        </span>
        <input className={ styles.addFile } id="fileInput" type="file" multiple="multiple" onChange={ uploadImage }/>
        <ul>{ img ? img.map((x) => <li key={ x }>{ x }</li>) : null }</ul>
        <input className={ styles.input } type="text" id="title" placeholder="Title" onChange={ onChangeHandler }/>
        <div className={ styles.selectWrapper }>
          <select name="material" className={ styles.select } id="material" onChange={ onChangeHandler }>
            <option value="">Material</option>
            <option value="canvas">Canvas</option>
            <option value="paper">Paper</option>
            <option value="canvas board">Canvas board</option>
          </select>
          <select name="mediums" className={ styles.select } id="mediums" onChange={ onChangeHandler }>
            <option value="">Mediums</option>
            <option value="acrylic">Acrylic</option>
            <option value="oil">Oil</option>
            <option value="watercolor">Watercolor</option>
            <option value="mixed media">Mixed Media</option>
          </select>
          <select name="subject" className={ styles.select } id="subject" onChange={ onChangeHandler }>
            <option value="">Subject</option>
            <option value="portrait">Portrait</option>
            <option value="abstract">Abstract</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>

        <div className={ styles.sizeWrapper }>
          <input className={ styles.size } id="width" type="text" placeholder="Width" onChange={ onChangeHandler }/>
          <input className={ styles.size } id="length" type="text" placeholder="Length" onChange={ onChangeHandler } />
          <input className={ styles.size } id="depth" type="text" placeholder="Depth" onChange={ onChangeHandler }/>
        </div>
        <textarea className={ styles.textarea } id="description" placeholder="Art Description" onChange={ onChangeHandler }/>
        <button className={ styles.button }>Submit</button>
      </form>
    </div>
  );
};

export default Add;
