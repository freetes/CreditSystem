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

$(".searchBtn").click(()=>{
    if($("#find").val()=="学生学号"){
        let getNum = $(".searchInput").val();
        let allTr = $(".allTr").siblings();
        for(let i of allTr){
            if(i.id != getNum){
                i.style.display = "none";
            }
            else
                i.style.display = "block";
        }
    }
    else if($("#find").val()=="学生姓名"){

    }
    else {

    }
});

