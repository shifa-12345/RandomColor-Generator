const getColor =()=>{

const rnumber=Math.floor( Math.random()*16777215); //to get random no which is hexadcimal.

const rcode="#"+rnumber.toString(16);

document.body.style.backgroundColor=rcode;
document.getElementById("color-code").innerHTML=rcode;

}
//event call while clicking
document.getElementById("btn").addEventListener( "click",getColor)

//initial call
getColor();