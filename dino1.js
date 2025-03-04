document.getElementById("scroll-btn").addEventListener("click", function () {
    document.getElementById("restaurant-list").scrollBy({
        top: 200,
        behavior: "smooth",
    });
});

document.querySelectorAll(".visit-btn").forEach(button => {
    button.addEventListener("click", function () {
        alert(`Welcome to ${this.parentElement.id} Restaurant!`);
    });
});
