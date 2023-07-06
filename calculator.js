const AC =document.getElementById('AC');
const DE =document.getElementById('DE');
const dot =document.getElementById('dot');
const divide =document.getElementById('divide');
const a7 =document.getElementById('a7');
const a8 =document.getElementById('a8');
const a9 =document.getElementById('a9');
const multiply =document.getElementById('multiply');
const a4 =document.getElementById('a4');
const a5 =document.getElementById('a5');
const a6 =document.getElementById('a6');
const subctract =document.getElementById('subctract');
const a1 =document.getElementById('a1');
const a2 =document.getElementById('a2');
const a3 =document.getElementById('a3');
const add =document.getElementById('add');
const a00 =document.getElementById('a00');
const a0 =document.getElementById('a0');
const equal =document.getElementById('equal');
const display1=document.getElementById('display1');

a1.addEventListener('click',function(){
    display1.value+='1';
});
a2.addEventListener('click',function(){
    display1.value+='2';
});
a3.addEventListener('click',function(){
    display1.value+='3';
});
a4.addEventListener('click',function(){
    display1.value+='4';
});
a5.addEventListener('click',function(){
    display1.value+='5';
});
a6.addEventListener('click',function(){
    display1.value+='6';
});
a7.addEventListener('click',function(){
    display1.value+='7';
});
a8.addEventListener('click',function(){
    display1.value+='8';
});
a9.addEventListener('click',function(){
    display1.value+='9';
});
a0.addEventListener('click',function(){
    display1.value+='0';
});
a00.addEventListener('click',function(){
    display1.value+='00';
});
dot.addEventListener('click',function(){
    display1.value+='.';
});
add.addEventListener('click',function(){
    display1.value+='+';
});
subctract.addEventListener('click',function(){
    display1.value+='-';
});
multiply.addEventListener('click',function(){
    display1.value+='*';
});
divide.addEventListener('click',function(){
    display1.value+='/';
});
equal.addEventListener('click',function(){
    display1.value=eval(display1.value);
});
AC.addEventListener('click',function(){
    display1.value='';
});
DE.addEventListener('click',function(){
    display1.value=display1.value.toString().slice(0,-1);
});


