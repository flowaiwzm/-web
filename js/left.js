var li=document.getElementsByClassName("two");
// li[0].style.backgroundColor="red";
console.log(li);
var ul=document.getElementsByClassName("one");
var btn=document.getElementsByClassName("F");
console.log(btn);
for(i=0;i<ul.length;i++){
ul[i].style.display="none";
}
btn[0].addEventListener("click", fn1);
function fn1(){
    ul[0].style.display="block";
}
btn[1].addEventListener("click", fn2);
function fn2(){
    ul[1].style.display="block";
}
btn[2].addEventListener("click", fn3);
function fn3(){
    ul[2].style.display="block";
}
btn[3].addEventListener("click", fn4);
function fn4(){
    ul[3].style.display="block";
}
btn[4].addEventListener("click", fn5);
function fn5(){
    ul[4].style.display="block";
}
// for(i=0;i<btn.length;i++)
// {
//     btn[i].addEventListener("click",fn(i))
//     function fn(i){()=>{
//         ul[i].style.display="block"
//     }}
// }