/*
* Add one div to the bottom of the page (body tag) width the ID-"footer"
* Link this script at the top of the page.
* Remember to call the function addFooter() at startup (onload) width the parameter false
*   Example:
*       <body onload="addFooter(false)" onresize="footerWidthResize()">
*           ...
*       </body>
* Remember to also add the stylesheet at the top of the page
*
* The entire page must be wrapped in an div width id="mainPageBody"
* */


images = {
    contactInf:{
        phone:{
            alt:"phoneIcon",
            src:"img/phoneicon.png",
            class:"footerImages",
            text:"   +35 678 86 253",
        },
        mail:{
            alt:"mailIcon",
            src:"img/mailicon.jpg",
            class:"footerImages",
            text:"   contact@visitasardegna.com",
        },
    },
    sosialmedia:{
        twitter:{
            alt:"twitterIcon",
            src:"img/twitter-icon.svg",
            class:"footerImages",
            text:null,
        },
        facebook:{
            alt:"facebookIcon",
            src:"img/facebook-icon.svg",
            class:"footerImages",
            text:null,
        },
        instagram:{
            alt:"instagramIcon",
            src:"img/instagram-icon.svg",
            class:"footerImages",
            text:null,
        },
    },
}

links_Footer = {
    home:{
        text:"Home",
        href:"index.html",
    },
    hotels:{
        text:"Hotels",
        href:"Hotels.html",
    },
    resturants:{
        text:"Resturants",
        href:"index.html",
    },
    activities:{
        text:"Activities",
        href:"activities.html",
    },
    about_Sardinia:{
        text:"About Sardinia",
        href:"About_Sardinia.html",
    },
    about_us:{
        text:"About us",
        href:"index.html",
    },
}


function createImg(element, isindex){
    const img = document.createElement("img");
    img.alt = element.alt;
    let src = "";
    if (isindex != true){
        src += "../"
    }
    src += element.src
    img.src = src;
    img.classList.add(element.class);
    return img;
}

function addFooter(isindex) {
    const footer = document.getElementById("footer");

    const left_footer = document.createElement("div");
    left_footer.setAttribute("id","left_footer");
    left_footer.classList.add("footerPart");
    const right_footer = document.createElement("div");
    right_footer.setAttribute("id","right_footer");
    right_footer.classList.add("footerPart");

    //Left footer
    const contactInf = document.createElement("div");
    contactInf.setAttribute("id","contactInf");
    for (let e in images.contactInf){
        contactInf.appendChild(createImg(images.contactInf[e],isindex));
        if (images.contactInf[e].text != null){
            //console.log(images.contactInf[e].text);
            const t = document.createTextNode(images.contactInf[e].text)
            contactInf.appendChild(t);
            contactInf.appendChild(document.createElement("br"));
        }
    }

    const sosialmedia = document.createElement("div");
    sosialmedia.setAttribute("id","socialMedia");
    sosialmedia.appendChild(document.createTextNode("Sosial"));
    sosialmedia.appendChild(document.createElement("br"));
    for (let e in images.sosialmedia){
        sosialmedia.appendChild(createImg(images.sosialmedia[e],isindex));
    }


    //Right footer
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("Quick links"));
    p.classList.add("footerLinkListHeader");
    right_footer.appendChild(p);

    const footerLinkList = document.createElement("div");
    footerLinkList.classList.add("footerLinkList");
    right_footer.appendChild(footerLinkList);

    const footerLinks = document.createElement("ul");
    footerLinks.classList.add("footerLinks");
    footerLinkList.appendChild(footerLinks);
    for (let e in links_Footer){
        const listElement = document.createElement("li");
        const linkElement = document.createElement("a");
        let href = "";
        if (links_Footer[e].href == "index.html" && isindex == false){
            href += "../";
        } else if(links_Footer[e].href !== "index.html" && isindex === true){
            href += "WebPages/";
        }
        href += links_Footer[e].href;
        linkElement.href = href;
        linkElement.appendChild(document.createTextNode(links_Footer[e].text));
        listElement.appendChild(linkElement);
        footerLinks.appendChild(listElement);
    }


    left_footer.appendChild(contactInf);
    left_footer.appendChild(sosialmedia);

    footer.appendChild(left_footer);
    footer.appendChild(right_footer);
    footerWidthResize();
}

function footerWidthResize() {
    //console.log(document.getElementById("mainBodyDiv").offsetHeight);
    //console.log(document.documentElement.clientHeight);
    const height = document.documentElement.clientHeight;
    const heightFooter = document.getElementById("footer").offsetHeight;
    //console.log(document.getElementById("mainBodyDiv").offsetHeight, "Offset");
    //console.log(height, "Height", heightFooter);
    if (document.getElementById("mainPageBody").offsetHeight >= height - heightFooter || document.getElementById("mainBodyDiv").offsetWidth < 710){
        document.getElementById("footer").style.position = "relative";
        //console.log("Relative")
    } else{
        document.getElementById("footer").style.position = "fixed";
        //console.log("Fixed")
    }
}