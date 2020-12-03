function showList(id){
    var arrow = id + '-arrow';
    var myList = document.getElementById(id);
    var myArrow = document.getElementById(arrow);
    
    myList.className = "main-list";

    myArrow.className = "fas fa-angle-up";
}
function reset(id){
    var arrow = id + '-arrow';
    var myList = document.getElementById(id);
    var myArrow = document.getElementById(arrow);

    myList.className = "fade"; 

    myArrow.className = "fas fa-angle-down";
}
