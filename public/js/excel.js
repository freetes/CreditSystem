$(".updateExcel").click(function(obj){
  console.log('上传点击');
  console.log(obj.files);
});

const handleFile = file=>{
  if(file.name.split('.').pop()!=='xlsx'&&file.name.split('.').pop()!=='xls'){
    console.log('文件格式不符合！');
    $("#excelInput").val('');

    return;
  }
  else{
    console.log('文件格式正确！');
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = function(e){
      const workBook = XLSX.read(e.target.result, {
        type: 'array'
      });

      const data = workBook.Sheets[workBook.SheetNames[0]];
      console.log(data['A2'].v);
    }

  }
};