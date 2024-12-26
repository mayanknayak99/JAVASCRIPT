const txt=document.getElementById("time");
function showtime()
{
  const curtime=new Date();
  const time=`${curtime.getHours()}:${curtime.getMinutes()}:${curtime.getSeconds()}`
  console.log(time);
  txt.innerText=time;
}
setInterval(showtime,1000);
showtime();