function readMore(cont) {
  const abstract_text = document.getElementsByClassName(
    "education__degree__abstract"
  );
  const read_more = document.getElementsByClassName("read-more");
  if (abstract_text[cont].classList[1] === "expanded") {
    abstract_text[cont].classList.add("collapsed");
    abstract_text[cont].classList.remove("expanded");
    read_more[cont].innerHTML = "Read more &darr;";
  } else {
    abstract_text[cont].classList.remove("collapsed");
    abstract_text[cont].classList.add("expanded");
    read_more[cont].innerHTML = "Read less &uarr;";
  }
}
