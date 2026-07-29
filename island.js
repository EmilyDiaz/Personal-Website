const islandUrls = ["portfolio/", "peaceisland/", "galleryisland/"]
const siteBase = window.location.pathname.includes("/Personal-Website/") ? "/Personal-Website/" : "/"
const currentPath = window.location.pathname.replace(/\/+$/, "")
const availableIslandPaths = islandUrls
  .map((path) => `${siteBase}${path.replace(/^\/+/, "")}`)
  .filter((path) => path.replace(/\/+$/, "") !== currentPath)

const randomIslandbttn = document.getElementById("randomIslandbttn")

if (randomIslandbttn) {
  randomIslandbttn.addEventListener("click", () => {
    const nextIsland = RandomIsland(availableIslandPaths, 0)
    window.location.assign(nextIsland)
  })
}

function RandomIsland(array, index) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array[index]
}