
var check=0;
var a=document.querySelector("h5");
document.getElementById("add").addEventListener("click",function(){
    if(check==0){  
         a.innerHTML="Friends";
         a.style.color="green";
         document.getElementById("add").innerHTML="Remove Friend";
          check=1;
       
        }
    else{
        a.innerHTML="Stranger";
        a.style.color="Red";
        document.getElementById("add").innerHTML="Add Friend";
        check=0;
       
    }
 
})

