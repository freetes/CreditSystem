// 查询框变化
$("#findBox").click(function(){
    if($(this).val()=="学生学号" || $(this).val()=="学生姓名"){
        $(".searchBox").show();
        $(".searchInput").attr('placeholder', "请输入" + $(this).val());
        $(".selectBox").hide();
    }
    else{
        $(".searchBox").hide();
        $(".selectBox").show();
    }
})

// 查询按钮点击
$(".searchBtn").click(()=>{ 
    // 学号查询
    if($("#findBox").val()=="学生学号"){  
        let getInfo = $(".searchInput").val();
        for(let i of $(".stuId")){
            if(i.textContent==getInfo){
                
                i.parentNode.style.display = "table-row";
            }
            else{
                i.parentNode.style.display = "none";
            }
        } 
    }
    // 姓名查询
    else if($("#findBox").val()=="学生姓名"){
        let getInfo = $(".searchInput").val();
        for(let i of $(".stuName")){
            if(i.textContent==getInfo){
                i.parentNode.style.display = "table-row";
            }
            else{
                i.parentNode.style.display = "none";
            }
        } 
    }
    // 项目类别查询
    else {
        for(let i of $(".proKind")){
            if(i.textContent==$("#searchKind").val()){
                i.parentNode.style.display = "table-row";
            }
            else{
                i.parentNode.style.display = "none";
            }
        }

    }
});

// 重置查询条件按钮点击
$(".cleanBtn").click(()=>{
    if($("#findBox").val()=="学生学号"||$("#findBox").val()=="学生姓名")
        $("#searchInput").val("");
    else
        $(".firstOption").attr("selected", "selected")
    
    for(let i of $(".allTr").siblings())
        i.style.display = "table-row";
});

// 排序相关
{
    const begining = $(".projectsTable").html();

    // 按学号排序
    $(".sortByIdBtn").click(()=>{
        let pn = document.getElementsByClassName('allTr')[0].parentNode;
        for(let i=1; i<pn.childNodes.length; i++){
            for(let j=i+1; j<pn.childNodes.length; j++){
                let id1 = pn.childNodes[i].childNodes[0].textContent,
                    id2 = pn.childNodes[j].childNodes[0].textContent;
                
                if(id1>id2){
                    changeSide(pn.childNodes[i], pn.childNodes[j]);
                }
            }
        }
    });

    // 按录入时间排序
    $(".sortByTimeBtn").click(()=>{
        let pn = document.getElementsByClassName('allTr')[0].parentNode;
        for(let i=1; i<pn.childNodes.length; i++){
            for(let j=i+1; j<pn.childNodes.length; j++){
                let time1 = new Date(pn.childNodes[i].childNodes[4].textContent.replace('-', '/')),
                    time2 = new Date(pn.childNodes[j].childNodes[4].textContent.replace('-', '/'));
                if(time1<time2)
                    changeSide(pn.childNodes[i], pn.childNodes[j]);                
            }
        }
    });

    // 重置排序按钮点击
    $(".resetSort").click(()=>{
        $(".projectsTable").html(begining);
    });

    // 交换tr
    function changeSide(tr1, tr2){      
        let x = tr1.innerHTML;
        tr1.innerHTML = tr2.innerHTML;
        tr2.innerHTML = x;
    }
}
