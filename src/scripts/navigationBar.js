/*
* Add two divs to the top of you document body.
* First: Add a div width the id-"headerDiv"
* Second: Add a div width the id-"navBarDiv"
* Remember to add the script in the head of your html file.
* You also nead a onload function called from your body.
* The body tag should rund the function navigationStartup() onload
*   Example:
*           <body onload="navigationStartup()">
*               ...
*           </body>
*
* Remember to also add the stylesheet navigationBar.css.
* */


var navigationBar = null;
var offSet = null;
var h = null;

function navigationStartup(){
    addHeader()
    addNavBar()
    const navBar = document.getElementById("navBarDiv");
    navBar.addEventListener("mouseover",function(){
        let element = document.getElementsByClassName("navigationBarListLink");
        for (i in element){
            if (element[i].style == undefined){
                break;
            }
           element[i].style.display = "block";
        }
    });
    navBar.addEventListener("mouseout",function(){
        if (window.innerWidth > 960){
            return null;
        }
        let element = document.getElementsByClassName("navigationBarListLink");
        for (i in element){
            if (element[i].style == undefined){
                break;
            }
            if (element[i].innerHTML != "Home"){
                element[i].style.display = "none";
            }
        }
        console.log("På");
    });
    navigationBar = document.getElementById("navigationBar");
    offSet = navigationBar.offsetTop;
    h = String(document.getElementById("navigationBarDiv").offsetHeight)+"px";
    document.getElementById("navigationPlaceholder").style.height = h;
    
    window.onscroll = function () {navigationPosition(); };
    
}

function navigationPosition(){
    if (String(document.getElementById("navigationBar").offsetHeight)+"px" != h){
        h = String(document.getElementById("navigationBar").offsetHeight)+"px";
        document.getElementById("navigationPlaceholder").style.height = h;
    }
    if (navigationBar != null){
        if (window.pageYOffset > offSet){
            navigationBar.style = "position:fixed; top:0;";
        } else{
            navigationBar.style = "position:absolute; top:auto;";
        }
    }
}

//Adds the header element to the element witdh ID-headerDiv


navbarElements = {
    home: {
        name:"Home",
        children: null,
        linkClass: "navigationBarListLink",
        extraLink: "navBarHome",
        pageLink: "index.html",
    },
    hotels: {
        name:"Hotels",
        children: null,
        linkClass: "navigationBarListLink",
        extraLink: null,
        pageLink: "index.html",
    },
    resturants: {
        name: "Resturants",
        children: null,
        linkClass: "navigationBarListLink",
        extraLink: null,
        pageLink: "index.html",
    },
    activities: {
        name: "Activities",
        children: {
            sailing:{
                name:"Sailing",
                children: null,
                linkClass: "dropDownLink",
                extraLink: null,
                pageLink: "index.html",
            },
            biking:{
                name:"Biking",
                children: null,
                linkClass: "dropDownLink",
                extraLink: null,
                pageLink: "index.html",
            },
            culture:{
                name:"Culture",
                children: null,
                linkClass: "dropDownLink",
                extraLink: null,
                pageLink: "index.html",
            },
            nature:{
                name:"Nature",
                children: null,
                linkClass: "dropDownLink",
                extraLink: null,
                pageLink: "index.html",
            },
        },
        linkClass: "navigationBarListLink",
        extraLink: null,
        pageLink: "index.html",
    },
    sardinia: {
        name: "About Sardinia",
        children: null,
        linkClass: "navigationBarListLink",
        extraLink: null,
        pageLink: "index.html",
    },
    us: {
        name: "About us",
        children: null,
        linkClass: "navigationBarListLink",
        extraLink: null,
        pageLink: "index.html",
    },
}


function addNewElementNavbar(element, liElement) {
    //Creates a link object and sets its atributes
    const link = document.createElement("a");
    link.classList.add(element.linkClass);
    if (element.extraLink != null){
        link.classList.add(element.extraLink);
    }
    link.appendChild(document.createTextNode(element.name));
    link.href = element.pageLink;
    let dropDownDiv = null;
    //Tests if the atribut children of element is null. If not it will add these
    //to a div and append them to the dropDown div
    if (element.children != null){
        dropDownDiv = document.createElement("div");
        dropDownDiv.classList.add("navDropdown");
        link.classList.add("dropdownMainLink")
        //Iterates through the elements of child and ads them by calling this methode recursivly
        for (let e in element.children){
            dropDownDiv.appendChild(addNewElementNavbar(element.children[e],false));
        }
    }
    //Tests if the parameter liElement is true
    //If os, it adds a list element and appends the link to this before it returns the list element
    if (liElement == true) {
        const list = document.createElement("li");
        list.classList.add("navigationBarLi");
        list.appendChild(link);
        if (dropDownDiv != null) {
            list.setAttribute("id", "DropdownLink");
            list.appendChild(dropDownDiv);
        }
        return list;
    }

    return link;
}

//Ads an header to the document
/*
* Add a div with the id "headerDiv" at the top of the document
* (The top of the body tag) and this code wil insert the header auto-magically
* */
function addHeader(){
    const header = document.getElementById("headerDiv");
    const titleBar = document.createElement("div")
    titleBar.classList.add("titleBar");
    const image = document.createElement("img");
    image.alt = "header image";
    image.src = "img/logo.PNG";
    image.classList.add("headerImg");
    titleBar.appendChild(image)
    header.appendChild(titleBar);
}

//Adds the navigation bar to the page
/*
* Add this code and a div with the id "navBarDiv" at the top of the document
* (Below the header) and this code will insert the navigation bar auto-magically
* */
function addNavBar() {
    //Finds the navBarDiv where the navigation bar will be inserted
    const navBarDiv = document.getElementById("navBarDiv");
    //Creates a div with class navigationBarWrapper
    const navigationBarWrapper = document.createElement("div");
    navigationBarWrapper.classList.add("navigationBarWrapper");
    navigationBarWrapper.setAttribute("id", "navigationBar");
    //Creates a div with class navigationBarDiv and appends it to the div created over
    const navigationBarDiv = document.createElement("div");
    navigationBarDiv.classList.add("navigationBarDiv");
    navigationBarDiv.setAttribute("id", "navigationBarDiv");
    navigationBarWrapper.appendChild(navigationBarDiv);
    //Creates an unsorted list and appends it to the div created above
    const navigationBarList = document.createElement("ul");
    navigationBarList.classList.add("navigationBarList");
    navigationBarDiv.appendChild(navigationBarList);
    //A for lop iterating through the elements in the object navbarElements created with Json at the start of this document
    for (let e in navbarElements) {
        navigationBarList.appendChild(addNewElementNavbar(navbarElements[e], true));

    }
    //Creates a new div and gives it an ID
    const navigationPlaceholder = document.createElement("div");
    navigationPlaceholder.setAttribute("id", "navigationPlaceholder");
    //Appends the div two divs navigationBarWrapper and navigatonPlaceholder to the navBarDiv element
    navBarDiv.appendChild(navigationBarWrapper);
    navBarDiv.appendChild(navigationPlaceholder);
}
