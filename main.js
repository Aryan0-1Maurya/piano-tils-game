/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

"use strict";

var mp,block,x=0,width,height,currentSong="dance monkey",stars,lost=false;
var songs = {
    "dance monkey": ["https://docs.google.com/uc?export=open&amp;id=10ayhxJNPJQeb9YfphzxOfFZi4vnbJ_Pm",735,0],
    "demons": ["https://docs.google.com/uc?export=open&amp;id=1UYVeyiYBXkCDZXDFJXIcomJfGFnseIMp",618,0],
    "shape of you": ["https://docs.google.com/uc?export=open&amp;id=1NJfydDfvQ3_zy18RtVo4a13ghpkS63_P",969,0],
    "we dont talk anymore": ["https://docs.google.com/uc?export=open&amp;id=1CWdxSwe6h9qJhJ_4lz3yLfiFWdGyiDm0",762,0],
    "despacito": ["https://docs.google.com/uc?export=open&amp;id=1gGXrpeYotmTIbOWHrHzSmUPLioE7QgpY",813,0],
    "closer": ["https://docs.google.com/uc?export=open&amp;id=1IGt5shhTf0lO20UqwwfcL7wVxFbWIylH",864,0],
    "starboy": ["https://docs.google.com/uc?export=open&amp;id=1nYQuZYoj0puC4w9vw2Kxh9CcOuGI3gK4",915,0],
    "treat you better": ["https://media1.vocaroo.com/mp3/1ll5TBprSPB5",660,0],
    "on my way": ["https://media1.vocaroo.com/mp3/1nJiSW2MBsqJ",681,0],
    "cardigan": ["https://media1.vocaroo.com/mp3/1cOXpW6dKssz",840,0],
    "alag aasman": ["https://media1.vocaroo.com/mp3/18hGsmtjEyEb",795,0]
};
//var colors = ["red","green","purple","pink","yellow","cyan","blue"];
var colors = ["#EF3E5B","#F68FA0","#4B256D","#00B0B2","#52CCCE","#95D47A","#3F647E","#688FAD","#C9C9C9","#B3DAF1"]
var shadow = ["#CF1E3B","#D66F80","#2B054D","#009092","#32ACAE","#75B45A","#1F445E","#486F8D","#A9A9A9","#93BAD1"]
var score = -2,currentColor="white",untouched=[],t;
var songStars = [0,0,0,0,0,0,0,0,0,0,0];

window.ShowRules = ()=> {document.getElementById("rp").style.top="50px";}
window.HideRules = ()=> {document.getElementById("rp").style.top="100vh";}

function generateRand(n) {
    let l = [[Math.ceil(Math.random()*4)]];
    while (l.length<n) {
        let p = Math.ceil(Math.random()*30);
        if (p>=3 && p <= 24 && l[l.length-1].length==1) {
            if (l[l.length-1][0] >= 2 && l[l.length-1][0] <= 3) {
                l.push([l[l.length-1][0]+Math.floor(Math.random()*2)*2-1]);
            }
            else if (l[l.length-1][0]==1) {l.push([2]);}
            else {l.push([3]);}
        }
        else if (p<=2 && l.length>n/5 && l.length<4*n/5 && l[l.length-1].length==1) {
            let r = Math.ceil(Math.random()*5);
            for (let k = 0; k < r; k++) {
                if (l[l.length-1][0]==1 || l[l.length-1][0]==3) {l.push([2,4]);}
                else {l.push([1,3]);}
            }
        }
        else {
            var a = Math.ceil(Math.random()*4);
            while (a==l[l.length-1][0] || a==l[l.length-1][1]) {a = Math.ceil(Math.random()*4);}
            l.push([a]);
        }
    }
    return l
}

function changeColor() {
    var r = Math.floor(Math.random()*colors.length)
    var newColor = colors[r];
    while (newColor == currentColor) {
        r = Math.floor(Math.random()*colors.length)
        newColor = colors[r];
    }
    document.getElementById("score").style.textShadow = "4px 4px 6px "+shadow[r];
    let a = 0,bg = document.getElementsByClassName("bg");
    while (bg[a]) {
        bg[a].style.backgroundColor = newColor;
        bg[a].style.transform = "scale(1.1)";
        a++;
    }
    setTimeout(function() {
        let a = 0,bg = document.getElementsByClassName("bg");
        document.getElementById("main").style.backgroundColor = newColor;
        while (bg[a]) {
            bg[a].style.transform = "scale(0)";
            a++;
        }
        currentColor=newColor;
    },2000)
}

window.onload = function() {
    mp = document.getElementById("music-page");
    stars = document.getElementById("stars");
    width = document.getElementsByTagName("body")[0].offsetWidth/4;
    height = document.getElementsByTagName("body")[0].offsetHeight;
    let m = Math.max(width*4,height);
    //console.log(Math.ceil(width*40/height));
    for (let i = 0; i < Math.ceil(width*40/height); i++) {
        for (let j = 0; j < 10; j++) {
            document.getElementById("main").innerHTML+=`<div class="bg" style="left:${i*m/10}px;top:${j*m/10}px;transition-delay:${j/10}s;"></div>`;
        }
    }
    document.getElementById("bg").addEventListener("click",function(e) {
        mp = document.getElementById("music-page");
        mp.style.top = mp.offsetTop+"px";
        lost = true;
        Lost();
        document.getElementById("new-page").style.display = "block";
        document.getElementById("red-div").style.top = e.clientY-90+"px";
        document.getElementById("red-div").style.left = Math.floor(e.clientX/width)*25+"vw";
    });
    var i = 0;
    while (document.getElementsByClassName("song")[i]) {
        //console.log(i);
        document.getElementsByClassName("song")[i].innerHTML += `            
            <div class = "liked">
                <div class = "small-heart sh-1"></div>
                <div class = "small-heart sh-2"></div>
                <div class = "small-heart sh-3"></div>
                <div class = "small-heart sh-4"></div>
                <div class = "small-heart sh-5"></div>
                <div class = "small-heart sh-6"></div>
            </div>`;
        i++;
    }
    setTimeout(function() {
        document.getElementById("loader").style.zIndex = "0";
        document.getElementById("menu").style.display = "block";
    },1000)
    //setTimeout(Won,2000);
}

window.StartGame = function(a) {
    document.getElementById("loader").style.zIndex = "100000";
    setTimeout(function() {
        document.getElementById("loader").style.zIndex = "0";
    },5000)
    currentSong = a;
    x=0;
    lost=false;
    songs[a][3] = generateRand(songs[a][1]);
    untouched = []
    document.getElementById("menu").style.display = "none";
    mp = document.getElementById("music-page");
    setTimeout(function() {
        mp.innerHTML=`<div class = "block" style = "top:40vh;left:${Math.floor(Math.random()*4)*25}vw;" onclick = "Touch(0);">START</div>`;
        for (let i in songs[a][3]) {
            for (let j of songs[a][3][i]) {
                x++;
                mp.innerHTML+=`<div class = "block" id="b${x}" style="top:${-500-180*i}px;left:${(j-1)*25}vw;"></div>`;
            }
        }
        untouched = document.getElementsByClassName("block");
        setTimeout(function() {
            for (let i=1; i <= x; i++) {
                try {
                    document.getElementById("b"+i).addEventListener("touchstart",function() {
                        Touch(i);
                    });
                } catch (e) {console.log("APOLOGY FOR THE ERROR! PLS TRY TO RUN THE CODE AGAIN");}
            }
        },100);
        t = setInterval(function() {
            mp = document.getElementById("music-page")
            for (let i = 0; i < untouched.length; i++) {
                if (untouched[i].style.opacity == "" && -untouched[i].offsetTop+height-240<mp.offsetTop) {
                    //console.log(i);
                    lost = true;
                    Lost();
                    mp.style.transition = "top 1s";
                    document.getElementById("new-page").style.display = "block";
                    document.getElementById("red-div").style.top = "-300px";
                    untouched[i].style.background = "linear-gradient(0deg, red 75%, transparent 75%)";
                    untouched[i].style.animation = "rdAnim 1s linear 0s infinite";
                    setTimeout(function() {mp.style.top = mp.offsetTop-120+"px";},200);
                    clearInterval(t);
                    break;
                }
                else if (-untouched[i].offsetTop+height+300<mp.offsetTop) {
                    untouched[i].style.display = "none";
                    //document.getElementsByClassName("block")[i].parentNode.removeChild(document.getElementsByClassName("block")[i]);
                }
            }
        },500)
    },100);
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

function ShowStars(a) {
    stars = document.getElementById("stars");
    songs[currentSong][2]++;
    stars.style.display = "block";
    stars.style.opacity = "1";
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName('star')[i].style.display = (a.includes(i) ? "block":"none");
    }
    setTimeout(function() {
        stars.style.top = stars.offsetTop-100+"px";
        stars.style.opacity = "0";
        setTimeout(function() {
            stars.style.top = "50px";
        }, 1000)
    },1000);
}

window.Touch = function(n) {
    var block = document.getElementsByClassName("block");
    var mp = document.getElementById("music-page");
    stars = document.getElementById("stars");
    if (block[n].style.opacity != "0.3") {
        block[n].style.opacity = "0.3";
        score+=2;
        document.getElementById("completed-progress").style.width = score/(x*2)*100+"%";
        if (score*50/x >= 33.3 && songs[currentSong][2]==0) {
            ShowStars([1]);
        }
        else if (score*50/x >= 66.6 && songs[currentSong][2]==1) {
            ShowStars([3,4]);
        }
        else if (score==x*2 && songs[currentSong][2]==2) {
            ShowStars([0,1,2]);
            document.getElementById("win-code").innerHTML = document.getElementById("win-code").innerHTML.replace("#AnuvIsTheBest", "#AnuvIsLove");
            Won();
        }
        document.getElementById("score").innerHTML = score;
        if (score%150==50) {
            changeColor();
        }
        if (n==0) {
            document.getElementById("audio"+Object.keys(songs).indexOf(currentSong)).play();
            mp.style.top = mp.offsetTop+200000+"px";
        }
    }
}

window.Liked = function(x) {
    if (document.getElementsByClassName("heart")[x].style.backgroundImage == 'url("https://imgur.com/12gZibr.jpg")') {
        document.getElementsByClassName("heart")[x].style.backgroundImage = 'url("https://imgur.com/qkZsuL2.jpg")';
        //document.getElementById("liked").style.top = document.getElementsByClassName("song")[x].offsetTop+document.getElementsByClassName("heart")[x].offsetTop-20+"px";
        document.getElementsByClassName("liked")[x].style.opacity = "1";
        setTimeout(function() {
            document.getElementsByClassName("liked")[x].style.opacity = "0";
        },1500);
    }
    else {
        document.getElementsByClassName("heart")[x].style.backgroundImage = 'url("https://imgur.com/12gZibr.jpg")';
    }
}

function Lost() {
    setTimeout(function() {
        document.getElementById("yl-stars").innerHTML = "STARS EARNED: "+songs[currentSong][2];
        document.getElementById("you-lost").style.display = "block";
        document.getElementById("audio"+Object.keys(songs).indexOf(currentSong)).pause();
        document.getElementById("audio"+Object.keys(songs).indexOf(currentSong)).currentTime = 0;
        setTimeout(function() {
            document.getElementById("you-lost").style.opacity = "1";
        },100);
    },1000);
}

window.Close = function() {
    document.getElementById("you-lost").style.opacity = "0";
    document.getElementById("you-lost").style.display="none";
    document.getElementById("menu").style.display="block";
    document.getElementById("yl-watch-ad").innerHTML="WATCH AD TO CONTINUE";
    document.getElementById("new-page").style.display = "none";
    document.getElementById("music-page").style.transition = "none";
    document.getElementById("music-page").innerHTML = "";
    document.getElementById("new-page").style.display = "none";
    setTimeout(function() {document.getElementById("music-page").style.top = "0px";},100);
    setTimeout(function() {document.getElementById("music-page").style.transition = "top 300s linear";},200);
    score = -2;
    document.getElementById("score").innerHTML = "";
    document.getElementById("completed-progress").style.width = "0px";
    FillStars(Math.max(songs[currentSong][2], songStars[Object.keys(songs).indexOf(currentSong)]), Object.keys(songs).indexOf(currentSong))
    songs[currentSong][2]=0;
    lost = false;
    clearInterval(t);
}

function FillStars(a,b) {
    for (let i = 1; i <= 3; i++) {
        if (a>=i) {
            document.getElementsByClassName("s-"+i)[b].classList.add("complete-star");
            document.getElementsByClassName("s-"+i)[b].classList.remove("empty-star");
        }
    }
}

function Won() {
    document.getElementById("won-page").style.display = "block";
    setTimeout(function() {
        document.getElementById("won-div").style.top = "calc(50vh - 150px)";
        setTimeout(function() {
            document.getElementById("won-page").addEventListener("click", function() {
                document.getElementById("won-div").style.top = "-100vh";
                setTimeout(function() {
                    document.getElementById("won-page").style.display = "none";
                    document.getElementById("menu").style.display = "block";
                    FillStars(3, Object.keys(songs).indexOf(currentSong));
                    songs[currentSong][2]=0;
                    clearInterval(t);
                },2000);
            });
        },4000);
    },500);
}




/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/