const deleteIt = obj=>{
  $.ajax({
    url: '/delete',
    type: 'POST',
    data:{
      id: $(obj).val()
    },
    dataType: 'json',
    success: result=>{
      if(result)
        window.location.reload();
    }
  })
}