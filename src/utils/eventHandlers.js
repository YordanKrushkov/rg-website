const hoverHandler = (id) => {
  document.getElementById(id).style.display = "flex";
};
const hoverOut = (id) => {
  document.getElementById(id).style.display = "none";
};
const openImgInput = (id) => {
  document.getElementById(id).click();
};


export { hoverHandler, hoverOut, openImgInput };
