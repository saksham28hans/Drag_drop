
const leftBox = document.getElementsByClassName('left');

const rightBox = document.getElementsByClassName('right');

const img1 = document.getElementsByClassName('imgBox');
const text1 = document.getElementsByClassName('textBox');

const img2 = document.getElementsByClassName('imgBox1');
const text2 = document.getElementsByClassName('textBox1');

const reset = document.getElementsByClassName('reset');

let dragged;


function tempAlert(msg,duration)
{
 let el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:0%;left:20%;background-color:green; width:50%; height:30px;text-align:center;color:white");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

img2[0].addEventListener('dragstart', (e)=>{
    dragged = img2[0];
    e.target.className = 'hold_imgBox1'
  
})

img1[0].addEventListener('dragstart', (e)=>{
    dragged = img1[0];
    e.target.className = 'hold_imgBox'
})

text1[0].addEventListener('dragstart', (e)=>{
    dragged = text1[0];
    e.target.className = 'hold_textBox'
    
})

text2[0].addEventListener('dragstart', (e)=>{
    dragged = text2[0];
    e.target.className = 'hold_textBox'
   
})

img2[0].addEventListener('dragend', (e)=>{
    e.target.className = 'imgBox1'
})

img1[0].addEventListener('dragend', (e)=>{
    e.target.className = 'imgBox'
})

text1[0].addEventListener('dragend', (e)=>{
    e.target.className = 'textBox'
})

text2[0].addEventListener('dragend', (e)=>{
    e.target.className = 'textBox1'
})


rightBox[0].addEventListener('dragover',(e)=>{
    e.preventDefault();
    
})

rightBox[0].addEventListener('drop',(e)=>{
    e.target.append(dragged)
    tempAlert("Image/Text has been successfully dropped",2000)
})

reset[0].addEventListener('click',()=>{
    window.location.reload();
})