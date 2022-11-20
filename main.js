let myF=document.querySelector("#font");
let myC=document.querySelector("#color");
let myS=document.querySelector("#size");
myF.addEventListener("change",(e)=>{
    window.localStorage.setItem("font",e.currentTarget.value);
    document.body.style.fontFamily=e.currentTarget.value;
});
myC.addEventListener("change",(e)=>{
    window.localStorage.setItem("color",e.currentTarget.value);
    document.body.style.color=e.currentTarget.value;
});
myS.addEventListener("change",(e)=>{
    window.localStorage.setItem("size",e.currentTarget.value);
    document.body.style.fontSize=e.currentTarget.value;
});
if(window.localStorage.font!==null){
    document.body.style.fontFamily=window.localStorage.getItem("font");
    font.value=window.localStorage.getItem("font")
    
};
if(window.localStorage.color!==null){
    document.body.style.color=window.localStorage.getItem("color");
    color.value=window.localStorage.getItem("color")
    
};
if(window.localStorage.stylesize!==null){
    document.body.style.fontSize=window.localStorage.getItem("size");
    size.value=window.localStorage.getItem("size")
};