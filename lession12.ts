let display=function(msg:string,...color:string[])
{
   for(let i in color)
   {
       console.log(color[i]);
   }
}
let mg="Xin chào";
let clr=['Red','Green','Blue'];
display(mg,...clr);
