
window.setInterval(function(){
    rotateText();
  }, 1000);

  function rotateText(){
    var rotator = document.getElementsByClassName('rotator')[0];
    var labels = rotator.dataset.labels;
    var splitLabels= labels.split(',');

    var option = splitLabels[Math.floor(Math.random()*splitLabels.length)];
    rotator.innerHTML = option;
  }