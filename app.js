const track = document.getElementById('image__track');

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;

}

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta/maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    console.log("before min and max : " + nextPercentage);
    Math.min(nextPercentage,0);
    Math.max(nextPercentage,100);
    console.log("after min and max : " + nextPercentage);
    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%,0%)`;
  }

