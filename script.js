function showList(){
    var myList = document.getElementById("main-list");
    
    myList.style.display = "block";
    myList.className = "main-list";
    
}
function reset(){
    var myList = document.getElementById("main-list");
    myList.className = "fade"; 

    setTimeout(()=> {myList.style.display = "none";}, 500); 
}