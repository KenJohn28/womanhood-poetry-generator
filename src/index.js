function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem is here",
    autoStart: true,
    delay: "natural",
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
