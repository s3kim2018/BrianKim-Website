function main() {
    goby(); 
    var indiv1 = document.querySelector(".sidebar #aboutme");
    var indiv2 = document.querySelector(".sidebar #projects");
    var indiv3 = document.querySelector(".sidebar #Resume");
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
    elem.style.transition = "all 400ms ease-in-out";
    elem.style.height = "221px";
    if (option == 1) {
        elem.innerHTML = "<br>Created my own website <br> Used HTML, CSS, Javascript <br> A serious swig of JS was used to animate this website. <br> <br> 1) Used Flexbox for alignment <br> 2) Used JS for hovering animations <br> 3) Used Media Queries to optimize my website for phones"
    } else if (option == 2) {
        elem.innerHTML = "<br>Made a program that mines data <br> from the web and finds the trend of <br> increasing/decreasing campaign contributions in the U.S. <br><br> 1) Used Beautiful Soup to mine data <br> from the web <br> 2) Used Python for the statistical analysis";
    } else if (option == 3) {
        elem.innerHTML = "<br>On the user's input, I built a program that can generate randomized derivative problems. The numbers <br> are randomized, and all the problems are solvable using the rules learned <br> at school <br><br> 1) Program was built in python <Br> 2) Recursive data structure was used <br> to generate the randomized problems "
    } else if (option == 4) {
        elem.innerHTML = "<br>Built a Chess engine that can play normal games against an opponent and also has a AI gamemode. The <br> AI can be a bit slow <br><br> 1) Chess game was implemented on JS <br> 2) AI uses game trees with pruning optimization";
    } else if (option == 5) {
        elem.innerHTML = "<br>Built a Dijkstra and A* visualizer <br> Each square represents a node connected to surrounding squares <br><br> 1) Driver was implemented on JS <br> 2) User has ability to draw walls"
    } else if (option == 6) {
        elem.innerHTML = "<br>Class: CS61A <br> Used Python to recreate the scheme language. For the backend, lots of linked list structures were used. There unfortunately wasn't really a front end gui for this project";
    } else if (option == 7) {
        elem.innerHTML = "<br>Class: CS61B <br> Used Java to recreate the German Enigma Machine. It implements <br> all the features by replicating rotors used in the German Army, Kriegsmarine, and Luftwaffe. It has <br> a plugboard too!";
    } else if (option == 8) {
        elem.innerHTML = "<br>Class: CS61B <br> Used Java to recreate create an ancient nordic game: Tablut. An ai was implemented too using game trees and alpha beta pruning. The AI is able to look forward 4 moves."; 
    } else if (option == 9) {
        elem.innerHTML = "<br>Class: CS61B <br> Used Java to recreate Git, we named it Gitlet. It has all the commands: init, add, commit, push, pull, checkout, merge... I also implemented the remote feature, allowing you to have a remote repository elsewhere. "
    }

}
function unhover(element, hov) {
    var hover = document.querySelector(hov);
    var elem = document.querySelector(element);
    console.log(element);
    elem.innerHTML = "";
    hover.alreadyHovered = false; 
    elem.style.transition = "all 400ms ease-in-out";
    elem.style.height = "0";

}

main(); 