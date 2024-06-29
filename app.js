
const track = document.getElementById('image__track');

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;

}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta/maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    if(nextPercentage <-100)
    nextPercentage = -100;
  else if(nextPercentage >0)
    nextPercentage = 0;

  track.dataset.percentage = nextPercentage;


   track.animate({transform:`translate(${nextPercentage}%, 0%)`},{duration: 1200, fill: "forwards"});

  for(const image of track.getElementsByClassName("image")) {
  image.animate({objectPosition: `${nextPercentage + 100}%  50%`},{duration: 1200, fill: "forwards"});
   }


  }

  window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  }

 const wth = document.getElementsByClassName("test");
 wth.addEventListener('submit',function f(event){
  event.preventDefault();
  let valueBruh = document.getElementsByClassName("test2").value;
  console.log(valueBruh);
 })


