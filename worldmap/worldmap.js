const islandinfo=document.querySelectorAll(".islands")
const islandDescEl=document.getElementById("island-description")
const islandinfoAlts=Array.from(islandinfo).map(island=>island.title)
let currentIndex=0
islandinfo.forEach((island,index) => {
    island.addEventListener("mouseover",()=>{
    IslandDesc(index)
    })
    island.addEventListener("mouseleave",()=>{
        islandDescEl.innerHTML=""
    })
});


function IslandDesc(index){
currentIndex=index
islandDescEl.innerHTML=islandinfoAlts[currentIndex]

}
