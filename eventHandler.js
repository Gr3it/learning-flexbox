function clicked(e, property, position = 2) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var box = target.parentElement.parentElement.parentElement.lastElementChild;

  if (target.classList.contains("active")) return;

  box.classList.replace(box.classList.item(position), property);
  for (var i = 0; i < target.parentElement.children.length; i++) {
    target.parentElement.children[i].classList.remove("active");
  }
  target.classList.add("active");
}
