var b=document.getElementsByTagName("p");
var count=0;
b[0].addEventListener("click",random);
b[1].addEventListener("click",random);
b[2].addEventListener("click",random);
function random(){
    count=count+1;
    if(count%2==1){
        var a=Math.floor(Math.random()*3);
        if(a==0){
        this.innerHTML="yes!";
        }
        else if(a==1){
            this.innerHTML="no!";
        }
        else{
            this.innerHTML="Maybe!";
        }
    } 
    else{
        this.innerHTML="Will you come with me?";
    }
}