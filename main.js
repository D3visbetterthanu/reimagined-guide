var mouseevent="empty";
var last_pos_of_x, last_pos_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="cyan";
width_of_line=2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseUP";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    cur_pos_MouseX=e.clientX-canvas.offsetLeft;
    cur_pos_MouseY=e.clientY-canvas.offsetTop;
    if (mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(cur_pos_MouseX,cur_pos_MouseY,20,0,2*Math.PI);
   
        ctx.stroke();
    }
}