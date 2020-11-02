var attempts = 0;
function main() {
    goby(); 
    fadeout(); 
    var indiv1 = document.querySelector(".sidebar #aboutme");
    var indiv2 = document.querySelector(".sidebar #projects");
    var indiv3 = document.querySelector(".sidebar #Resume");
    var contactmebut = document.getElementById('contactmebutton');
    var submitbut = document.querySelector(".content .buttoncontainer input");
    contactmebut.addEventListener("click", function() {
        var scrollto = document.querySelector(".content .contactme");
        scrollto.scrollIntoView(); 
    })
    indiv1.addEventListener("click", function() {
        var scrollto = document.querySelector(".content .aboutme");
        scrollto.scrollIntoView(); 
    });
    indiv2.addEventListener("click", function() {
        var scrollto = document.querySelector(".content .projects");
        scrollto.scrollIntoView(); 
    });
    indiv3.addEventListener("click", function() {
        var scrollto = document.querySelector(".content .resume");
        scrollto.scrollIntoView(); 
    });
    submitbut.addEventListener("click", function() {
        document.querySelector(".content .buttoncontainer p").style.color = "red";
        var message = document.querySelector(".content textarea").value; 
        var email = document.querySelector(".content #email").value;
        var whoru = document.querySelector(".content #whoru").value;
        var msg = document.querySelector(".content .buttoncontainer p");

        if (email == "" && message == "") {
            attempts++;
            if (attempts > 8) {
                msg.innerHTML = "Stop Spamming";
            } else if (attempts > 18) {
                msg.innerHTML = "Stop.. plz";
            } else {
                msg.innerHTML = "Email and Message Cannot be Empty";
            }
            return;
        } else if (email == "") {
            attempts++;
            if (attempts > 8) {
                msg.innerHTML = "Stop Spamming";
            } else if (attempts > 18) {
                msg.innerHTML = "Stop.. plz";
            } else {
                msg.innerHTML = "Email Cannot be Empty";
            }
            return;
        } else if (message == "") {
            attempts++;
            if (attempts > 8) {
                msg.innerHTML = "Stop Spamming";
            } else if (attempts > 18) {
                msg.innerHTML = "Stop.. plz";
            } else {
                msg.innerHTML = "Write a Message"
            }
            return;
        } else if (!validate(email)) {
            attempts++;
            if (attempts > 8) {
                msg.innerHTML = "Stop Spamming";
            } else if (attempts > 18) {
                msg.innerHTML = "Stop.. plz";
            } else {
                msg.innerHTML = "I need a valid email, or try breaking my regex"
            }
            return;
        }
        Email.send({
            Host: "smtp.elasticemail.com",
            Username : "s3kim2018@berkeley.edu",
            Password : "9DAF1CD38EF8E3CF0C710DB09FED88565B8D",
            To : 's3kim2018@berkeley.edu',
            From : "s3kim2018@berkeley.edu",
            Subject : "Message from Web, From: " + email,
            Body : message,
            });
        document.querySelector(".content .buttoncontainer p").style.color = "green";
        document.querySelector(".content .buttoncontainer p").innerHTML = "Sent!";
        document.querySelector(".content textarea").value = "";
        document.querySelector(".content #email").value = "";


    })

    checkdisplay(); 
}

async function fadeout() {
    await delay(2000);
    var element = document.querySelector(".loader-wrapper"); 
    element.style.opacity = 0; 
    // var op = 1;  // initial opacity
    // var timer = setInterval(function () {
    //     if (op <= 0.1){
    //         clearInterval(timer);
    //     }
    //     element.style.opacity = op;
    //     op -= 0.1;
    // }, 40);
    element.style.zIndex = -300; 
}

function checkdisplay() {
    var x = window.matchMedia("(max-width: 940px)")
    changedisplay(x); 
    setTimeout(checkdisplay, 1000);
}

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}

function changedisplay(x) {
    var sidebar = document.querySelector(".sidebar");
    var content = document.querySelector(".content");
    if (x.matches) { // If media query matches
        sidebar.style.cssFloat = "center"; 
        sidebar.style.width = "100%";
        sidebar.style.height = "110%";
        sidebar.style.position = "static";
        content.style.cssFloat = "center";
        content.style.width = "100%";
    } else {
        sidebar.style.cssFloat = "left"; 
        sidebar.style.width = "35%";
        sidebar.style.height = "100%";
        sidebar.style.position = "fixed";
        content.style.cssFloat = "right";
        content.style.width = "65%";
    }
}

async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

async function goby() {
    var t_div = document.getElementById("specs");
    var text1 = "Computer Science and Economics Student";
    var text1s = "UC Berkeley Class of 2022";
    var text2 = "Software Engineer, Student, and Developer";
    var text3 = "Click on the Graph Nodes to get started!";

    var text1lst = text1.split("");
    var text1slst = text1s.split("");
    var text2lst = text2.split("");
    var text3lst = text3.split("");
    
    let current = ""
    for (let i = 0; i < text1lst.length; i++) {
        current += text1lst[i];
        t_div.innerHTML = current; 
        await delay(130);
    }
    await delay(500);
    current = "";
    for (let i = 0; i < text1slst.length; i++) {
        current += text1slst[i];
        t_div.innerHTML = current; 
        await delay(130);
    }
    await delay(500);
    current = "";
    for (let i = 0; i < text2lst.length; i++) {
        current += text2lst[i];
        t_div.innerHTML = current; 
        await delay(130);
    }
    await delay(500);
    current = "";
    for (let i = 0; i < text3lst.length; i++) {
        current += text3lst[i];
        t_div.innerHTML = current; 
        await delay(130);
    }
    setTimeout(goby, 1000);
}

var hover = async function(element, hov, option) {
    var elem = document.querySelector(element);
    var hover = document.querySelector(hov);
    if(hover.alreadyHovered == true) {
        return; 
    }
    hover.alreadyHovered = true; 
    console.log(element);
    elem.style.transition = "all 280ms ease-in-out";
    elem.style.height = "221px";
    await delay(100);
    if (option == 1) {
        elem.innerHTML = "<br>Created my own website <br> Used HTML, CSS, Javascript <br> A serious swig of JS was used to animate this website. <br> <br> 1) Used Flexbox for alignment <br> 2) Used JS for hovering animations <br> 3) Used Media Queries to optimize my website for phones"
    } else if (option == 2) {
        elem.innerHTML = "<br>Made a program that mines data <br> from the web and finds the trend of <br> increasing/decreasing campaign contributions in the U.S. <br><br> 1) Used Beautiful Soup to mine data <br> from the web <br> 2) Used Python for the statistical analysis";
    } else if (option == 3) {
        elem.innerHTML = "<br>On the user's input, I built a program that can generate randomized derivative problems. The numbers <br> are randomized, and teachers can choose which problems to focus on <br><br> 1) Program was built in python <Br> 2) Recursive data structure was used <br> to generate the randomized problems "
    } else if (option == 4) {
        elem.innerHTML = "<br>Built a Chess engine that can play normal games against an opponent and also has a AI gamemode. The <br> AI can be a bit slow <br><br> 1) Chess game was implemented on JS <br> 2) AI uses game trees with pruning optimization";
    } else if (option == 5) {
        elem.innerHTML = "<br>Built a Graph Traversal Visualizer <br> Each square represents a node connected to surrounding squares <br><br> 1) Driver was implemented on JS <br> 2) User has ability to draw walls and add weights <br> 3) DFS, BFS, Dijkstras, A*, and MST generation are supported"
    } else if (option == 6) {
        elem.innerHTML = "<br>Class: CS61A <br> Used Python to recreate the scheme language. For the backend, lots of linked list structures were used. There unfortunately wasn't really a front end gui for this project";
    } else if (option == 7) {
        elem.innerHTML = "<br>Class: CS61B <br> Used Java to recreate the German Enigma Machine. It implements <br> all the features by replicating rotors used in the German Army, Kriegsmarine, and Luftwaffe. It has <br> a plugboard too!";
    } else if (option == 8) {
        elem.innerHTML = "<br>Class: CS61B <br> Used Java to recreate create an ancient nordic game: Tablut. An ai was implemented too using game trees and alpha beta pruning. The AI is able to look forward 4 moves."; 
    } else if (option == 9) {
        elem.innerHTML = "<br>Class: CS61B <br> Used Java to recreate Git, we named it Gitlet. It has all the commands: init, add, commit, push, pull, checkout, merge... I also implemented the remote feature, allowing you to have a remote repository elsewhere. "
    } else if (option == 13) {
        elem.innerHTML = "<br>I Built a web/mobile app that converts professors’ live notes to audio for visually impaired students. I used a convolutional neural network trained on MNIST datasets to convert what the professor wrote to text. The Web Interface was built with Flask and the mobile interface was built with React Native. <br> <br> Won 2nd place prize on VandyHacks! ";
    } else if (option == 14){
        elem.innerHTML = "<br>I Built an IOS app that makes driving safer by providing navigation that considers safety in route-picking. Orthogonal Matching Persuit was used to lean from past accidents to determine the safest path a vehicle can take.";
    }

}
async function unhover(element, hov) {
    var hover = document.querySelector(hov);
    var elem = document.querySelector(element);
    console.log(element);
    hover.alreadyHovered = false; 
    elem.style.transition = "all 280ms ease-in-out";
    elem.style.height = "0";
    await delay(100);
    elem.innerHTML = "";
}

main(); 