

function abc(i) {
  const imgArray = [
    'url("card2.jpg")',
    'url("card4.jpg")',
    'url("card5.jpg")',



  ]

  const htmlstyle = document.getElementById("htmlCode");
  const css = document.getElementById("cssCode");
  const js = document.getElementById("jsCode");

  const bg = imgArray[i];
  htmlstyle.style.backgroundImage = bg;
  css.style.backgroundImage = bg;
  js.style.backgroundImage = bg;








}
