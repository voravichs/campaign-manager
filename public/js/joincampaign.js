const joinHandler = async (event) => {
    event.preventDefault();

    const campaignID = document.location.href.split("/")[document.location.href.split("/").length - 1];
    const characterID = document.querySelector("#join-character").value;
    console.log(JSON.stringify({ "campaign_id": Number(campaignID) }));

    const response = await fetch("/api/characters/"+characterID, {
        method: "PUT",
        body: JSON.stringify({ "campaign_id": Number(campaignID) }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/profile/dm/"+campaignID);
    } else {
        alert(response.statusText);
    }
};

if (document.querySelector("#join-btn")) {
    document
        .querySelector("#join-btn")
        .addEventListener("click", joinHandler);
}

