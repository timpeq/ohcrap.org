console.info(`
/**
 * crap.js is a recreational 'Vanilla JS' project by Tim Pequignot.
 * 
 * Did you know?  Before the late 19th century, vanilla was a rare, luxury flavor?
 * 
 */
`);

function mirrorPage(){
  document.getElementsByTagName("body")[0].style.transform = "rotateY(180deg)";
  document.title = document.title.split("").reverse().join("");
}

function normalPage(){
  document.getElementsByTagName("body")[0].style.transform = "";
  document.title = document.title.split("").reverse().join("");
}

if (window.location.pathname === "/parcho"){
  mirrorPage();
}

addEventListener("dblclick",()=>{
  if (window.location.pathname === "/"){
    history.pushState({},"OhCrap.org","/parcho")
    mirrorPage();
  }
  else {
    history.pushState({},"OhCrap.org","/")
    normalPage();
  }
});
