
$(".quit").click(()=>{
  $.ajax({
    type: 'POST',
    url: '/',
    success: result=>{
      if(result)
        window.location.reload();
    }
  })
});