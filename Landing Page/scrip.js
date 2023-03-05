changeState = () => {
    let state = document.getElementById("state");
    if (state.innerHTML == "☼") {
        state.innerHTML = "&#9790;"
            // alert("Change")
        document.body.style.background = "black";
        let navbar = document.getElementById("navbar");
        navbar.style.background = "black";
        document.body.style.color = "#46c7c7";

    } else {
        state.innerHTML = "☼";
        document.body.style.background = "white";
        navbar.style.background = "white"
        document.body.style.color = "black";
    }
    // alert(state.innerHTML)
}