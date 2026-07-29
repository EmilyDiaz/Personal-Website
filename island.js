const islandUrl = ["/portfolio/", "/peaceisland/", "/galleryisland/"]
const currentUrl = window.location.pathname
const match = islandUrl.filter((url) => !url.includes(currentUrl))
const randomIslandbttn = document.getElementById("randomIslandbttn")
randomIslandbttn.addEventListener("click", () => {
  location.replace(`${RandomIsland(match,0)}`)
})

function RandomIsland(array,index) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  console.log(array[0])
  return array[index]

}