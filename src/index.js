function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bfa4e3a0ac7o3a4bt6f40d35c51eab14";
  let context =
    "Act as an expert on womanhood who enjoys crafting short poems. Your task is to generate a five-line poem using basic HTML (trim html tags but keep structure); adhering to the user's instructions. Sign the poem with 'SheCodes AI' inside a <strong> element. Add a title at the beginning of the poem.";
  let prompt = `User instructions: Generate a poem about womanhood focusing on ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElemnet = document.querySelector("#poem");
  poemElemnet.classList.remove("hidden");
  poemElemnet.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
