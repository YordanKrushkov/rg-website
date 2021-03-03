const url = "https://api.cloudinary.com/v1_1/rggallery/image/upload";

const uploadImage = async (e, me, where) => {
    const files = e.target.files;
    
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "rgArtGallery");

    const res = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();

     await fetch("https://rg-gallerybackend.herokuapp.com/updateUser", {
      method: "POST",
      body: JSON.stringify({ id: me._id, [where]: file.secure_url }),
      headers: {
        "Content-Type": "application/json",
      },
    },);
  };
  export default uploadImage