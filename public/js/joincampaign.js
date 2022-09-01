const joinHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();

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

