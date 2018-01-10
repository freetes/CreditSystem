window.onload = ()=>{
  $(".title").css("line-height", $(".mainLogo").css("height"));
  if(window.innerWidth<600){
    $(".daidaidongdong").css("display", "none");
  }
}

window.onresize = ()=>{
  $(".title").css("line-height", $(".mainLogo").css("height"));
  if(window.innerWidth<600){
    $(".daidaidongdong").css("display", "none");
  }
}
