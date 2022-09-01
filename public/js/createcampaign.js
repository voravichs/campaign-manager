const createCampaignHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#campaign-name").value.trim();

  if (name) {
    const response = await fetch("api/campaigns", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/profile/dm');
    } else {
      alert('Failed to create campaign');
    }  
  }
  
};

document
  .querySelector('.create-campaign')
  .addEventListener('submit', createCampaignHandler);