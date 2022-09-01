const createCampaign = async (event) => {
    event.preventDefault();

    const campaignName = document.querySelector("#campaignName").value.trim();

//if (username && password) {
//    const response = await fetch("/api/users/login", {
//        method: "POST",
//        body: JSON.stringify({ username, password }),
//        headers: { "Content-Type": "application/json" },
//    });
//
//    if (response.ok) {
//        document.location.replace("/");
//    } else {
//        alert(response.statusText);
//    }
//}
};

if (document.querySelector("#join-btn")) {
    document
        .querySelector("#join-btn")
        .addEventListener("click", joinHandler);
}