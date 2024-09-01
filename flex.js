

setInterval (()=>{
    let e=new Date()
    tim .innerHTML=e.toDateString();},1000);

setInterval (()=>{
    let a=new Date()
let b=a.getHours();
let c=a.getMinutes();
let d=a.getSeconds();

if (b.toString().length==1)
hr .innerHTML="0"+b+"  :";
else
hr .innerHTML=b+"  :";

if (c.toString().length==1)
min .innerHTML="0"+c+"  :";
else
min .innerHTML=c+"  :";

if (d.toString().length==1)
sec .innerHTML="0"+d;
else
sec .innerHTML=d;

if(b>=12)
    am.innerHTML="PM";
else
    am.innerHTML="AM";
  },1000);
