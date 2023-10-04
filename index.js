function run(){
    setTimeout(play,1000)
    function play(){
        document.getElementById(`mega`).style.display='flex';
        document.getElementById(`firstlogo`).style.display='none';
    console.log("hdhdhdh")
    }
}
function store(){
    let link1 = `<div class="show">
    <ul id="s1"> 
    <li style="color:grey;"><a href="#"></a>shop</li>
    <li><a href="#"></a>Shop the Latest</li>
        <li><a href="#"></a>mac</li>
        <li><a href="#"></a>ipad</li>
        <li><a href="#"></a>iphone</li>
        <li><a href="#"></a> Apple watch</li>
        <li><a href="#"></a>accessories</li>
        </ul>
    </div>`
    document.getElementById(`finaloutput`).innerHTML=link1;
    }
    
    function hiddennav(){
    document.getElementById(`finaloutput`).style.display="none";
    }
    function tophide(){
    let clienth = window.event.clientY;
    if(clienth<20)
    {
        document.getElementById(`finaloutput`).innerHTML="";
    }
    }