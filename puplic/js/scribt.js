function openCloseSidebar() {
    let sidebar = document.getElementById("sidebar")
    let sidebarSpans = document.querySelectorAll(".contact span")
    let openIcon = document.getElementById("openIcon")
    
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarSpans.forEach((ele) => {
            ele.style.display = "none";
        })
        if (openIcon.classList.contains("fa-circle-xmark")) {
            openIcon.classList.remove("fa-circle-xmark")
            openIcon.classList.add("fa-circle-left")
        }
    } else {
        sidebar.classList.add("active")
        sidebarSpans.forEach((ele) => {
            ele.style.display = "block";
        })
        openIcon.classList.add("fa-circle-xmark")
        openIcon.classList.remove("fa-circle-left")
    }
}
