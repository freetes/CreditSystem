$(".updateExcel").click(function(obj){
  console.log('上传点击');
  console.log(obj.files);
});

const handleFile = file=>{
  //文件格式不符合
  if(file.name.split('.').pop()!=='xlsx'&&file.name.split('.').pop()!=='xls'){
    console.log('文件格式不符合！');
    $("#excelInput").val('');
    return;
  }

  console.log('文件格式正确！');
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = function(e){
    const workBook = XLSX.read(e.target.result, {type: 'array'});
    const data = workBook.Sheets[workBook.SheetNames[0]];

    let items = [];
    let item = [];

    for(let i=2; i<=data["!ref"].split(':')[1].slice(1); i++){
      item = [];
      for(let j='A'; j<=data["!ref"].split(':')[1].slice(0, 1); j = String.fromCharCode((j.charCodeAt())+1)){
        item.push(data[''+j+i].v);
      }
      items.push(item);
    }
    console.log(items);

    
  }
};

const saveData = data=>{
  $.ajax({
    
  })
};