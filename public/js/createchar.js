const charFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const charclass = document.querySelector("#class-select").value;
  const race = document.querySelector("#race-select").value;

  if (name && charclass && race) {
    const response = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify({ name, charclass,race }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile/player");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".character-creation")
  .addEventListener("submit", charFormHandler);