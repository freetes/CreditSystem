function change(){
    if($("#find").val()=="学生学号" || $("#find").val()=="学生姓名"){
        $(".searchBox").show();
        $(".searchInput").attr('placeholder', $("#find").val());
        $(".selectBox").hide();
    }
    else{
        $(".searchBox").hide();
        $(".selectBox").show();
    }
}

change();

