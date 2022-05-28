function fun1(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)+parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun2(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)-parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun3(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)*parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun4(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)/parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun5(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)**parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun6(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)%parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun7(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    console.log(a);
    console.log(b);
    var n;
    n=parseInt(a)/parseInt(b);
    m=n.toFixed(0);
    c.value=m;
}
function fun8(){
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2"). value;
    var c=document.getElementById("output");
    var s=1;
    for(var n=1;n<=parseInt(a);n++){
        s*=n;
    }
    m=s.toFixed(0);
    c.value=m;
}