document.getElementById("sign").addEventListener("click", function() {
      alert("Button clicked!");
    });

  var myImage=document.querySelector("#imageid");

  function FirstImage()
{
  myImage.src="images/setup1.jpg";
}

function SecondImage()
{
  myImage.src="images/setup3.avif";
}



const buttonRight = document.getElementById('slideR');
    const buttonLeft = document.getElementById('slideL');

    buttonRight.onclick = function () {
      document.getElementById('new').scrollLeft += 100;
    };
    buttonLeft.onclick = function () {
      document.getElementById('new').scrollLeft -= 100;
    };