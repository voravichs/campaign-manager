const createCampaignHandler = async (event) => {
    event.preventDefault();

    const campaignName = document.querySelector("#campaignName").value.trim();

    const response = await  fetch(`api/campaign`, {
        method: 'POST',
        body: JSON.stringify({campaignName})
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create campaign');
      }
};

document
    .querySelector('#createCampaignBtn')
    .addEventListener( 'submit', createCampaignHandler);