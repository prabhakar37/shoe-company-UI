const sidebar = document.getElementById("sidebar")
const menuButton = document.getElementById("menu-btn");
const closeMenuButton = document.getElementById("close-menu-btn");
const wrapper = document.getElementById("wrapper")


//  Click on "menu"
menuButton.addEventListener("click", ()=>{
    menuButton.classList.add("hidden");
    sidebar.classList.remove("hidden");

    wrapper.classList.add("blur-sm");
    wrapper.classList.add("select-none");
    wrapper.classList.add("pointer-events-none");
    wrapper.classList.add("h-lvh")
    wrapper.classList.add("overflow-hidden")
})

// Function
const sideNavbarRemove = ()=>{
    sidebar.classList.add("hidden");
    menuButton.classList.remove("hidden");

    wrapper.classList.remove("blur-sm");
    wrapper.classList.remove("select-none");
    wrapper.classList.remove("pointer-events-none");
    wrapper.classList.remove("h-lvh")
    wrapper.classList.remove("overflow-hidden")
}

// click on "close-Menu"
closeMenuButton.addEventListener("click", ()=>{
    sideNavbarRemove()
})

// click on Nav sidebar links
const sidebarLinks = document.querySelectorAll(".sidebar-link");
sidebarLinks.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
    sideNavbarRemove()
    })
})




//🧠 by css method without using classList [in this we need to add sm:!hidden (!)important to remove menu buttion after screen increased from < small to >small || medium]  So, applying property by classList is best Coz it 

// menuButton.addEventListener("click", ()=>{
//     sidebar.style.display = "inline-block";
//     menuButton.style.display = "none";
// })

// closeMenuButton.addEventListener("click", ()=>{
//     sidebar.style.display = "none";
//     menuButton.style.display = "block";
// })






