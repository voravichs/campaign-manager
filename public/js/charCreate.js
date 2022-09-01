const charFormHandler = async (event) => {
    event.preventDefault();
  
    const charName = document.querySelector("#name").value.trim();
    const className = document.querySelector("#class-select").value.trim();
    const raceName = "human"
  
    if (charName && className) {
        console.log(charName);
        console.log(className);
      const response = await fetch("/api/characters", {
        method: "POST",
        // body: JSON.stringify({ charName, className, raceName}),
        // headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (response.ok) {
        response.status(200).json(response);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector("#charSubmitBtn")
    .addEventListener("click", charFormHandler);