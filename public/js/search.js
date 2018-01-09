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
        let getInfo = $(".searchInput").val();  
        let allTr = $(".allTr").siblings();
        for(let i of allTr){
            if(i.id != getInfo){
                i.style.display = "none";
            }
            else
                i.style.display = "table-row";
        }
    }
    else if($("#find").val()=="学生姓名"){
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
    else {
        for(let i of $(".stuKind")){
            if(i.textContent==$("#searchKind").val()){
                i.parentNode.style.display = "table-row";
            }
            else{
                i.parentNode.style.display = "none";
            }
        }

    }
});

$(".cleanBtn").click(()=>{
    if($("#find").val()=="学生学号"||$("#find").val()=="学生姓名")
        $("#searchInput").val("");
    else
        $(".firstOption").attr("selected", "selected")
    
    for(let i of $(".allTr").siblings())
        i.style.display = "table-row";
});

$(".sortBtn").click(()=>{
    let pn = document.getElementsByClassName('allTr')[0].parentNode;
    for(let i=1; i<pn.childNodes.length; i++){
        for(let j=i+1; j<pn.childNodes.length; j++){
            let time1 = pn.childNodes[i].childNodes[3].textContent,
                time2 = pn.childNodes[j].childNodes[3].textContent;
            let t1 = {
                year: time1.split(' ')[0].split('-')[0],
                month: time1.split(' ')[0].split('-')[1],
                date: time1.split(' ')[0].split('-')[2],
                hour: time1.split(' ')[1].split(':')[0],
                minute: time1.split(' ')[1].split(':')[1],
            },
                t2 = {
                year: time2.split(' ')[0].split('-')[0],
                month: time2.split(' ')[0].split('-')[1],
                date: time2.split(' ')[0].split('-')[2],
                hour: time2.split(' ')[1].split(':')[0],
                minute: time2.split(' ')[1].split(':')[1],
            };
            if(t1.year<t2.year||(t1.year==t2.year&&t1.month<t2.month)||(t1.year==t2.year&&t1.month==t2.month&&t1.date<t2.date)||(t1.year==t2&&t1.month==t2.month&&t1.date==t2.date&&t1.hour<t2.hour)||(t1.year==t2.year&&t1.month==t2.month&&t1.date==t2.date&&t1.hour==t2.hour&&t1.minute<t2.minute)){
                changeSide(pn.childNodes[i], pn.childNodes[j]);
            }
        }
    }
});

// 交换tr
function changeSide(tr1, tr2){
    for(let i=0; i< tr1.childNodes.length; i++){
        let x = tr1.childNodes[i].textContent;
        tr1.childNodes[i].textContent = tr2.childNodes[i].textContent
        tr2.childNodes[i].textContent = x;
    }        
}