function scrollUpShowHeader () {
  let oldValue = 0;
  var element = document.getElementById("header");

  // element.classList.add("header-fixed");
  window.addEventListener('scroll', function (e) {

    // Get the new Value
    newValue = window.scrollY;
    // console.log(newValue);

    // Subtract the two and conclude
    if (oldValue - newValue < 0) {
      // console.log("Up");
      element.classList.add("show-header");
    } else if (oldValue - newValue > 0) {
      element.classList.remove("show-header");
      // console.log("Down");
    }

    if (newValue == 0) {
      return element.classList.remove("show-header");
    }

    // Update the old value
    oldValue = newValue;
  });
}