import { useEffect } from 'react';
import { resolveSitePath } from '../sitePaths'

export default function Footer() {
    useEffect(() => {
        const hexCanvas = document.getElementById("hexCanvas")
        if (hexCanvas) {
            hexCanvas.width = 100;
            hexCanvas.height = 100;
            const hexImage = new Image();
            hexImage.onload = () => {
                const hexCtx = hexCanvas.getContext("2d")
                hexCtx.imageSmoothingEnabled = false;
                hexCtx.drawImage(hexImage, 0, 0, 100, 100);
            }
            hexImage.src = resolveSitePath('Images/hexpixel.png')

            hexCanvas.addEventListener("mouseover", () => {
                hexImage.src = resolveSitePath('Images/hexpixel.gif')
            })
            hexCanvas.addEventListener("mouseleave", () => {
                hexImage.src = resolveSitePath('Images/hexpixel.png')
            })
        }

        const cashewCanvas = document.getElementById("cashewCanvas")
        if (cashewCanvas) {
            cashewCanvas.width = 100;
            cashewCanvas.height = 100;
            const cashewImage = new Image();
            cashewImage.onload = () => {
                const cashewCtx = cashewCanvas.getContext("2d")
                cashewCtx.imageSmoothingEnabled = false;
                cashewCtx.drawImage(cashewImage, 0, 10, 100, 100);
            }
            cashewImage.src = resolveSitePath('Images/cashewneutral.png')

            cashewCanvas.addEventListener("mouseover", () => {
                cashewImage.src = resolveSitePath('Images/cashewpet.png')
            })
            cashewCanvas.addEventListener("mouseleave", () => {
                cashewImage.src = resolveSitePath('Images/cashewneutral.png')
            })
        }
    }, [])

    return (
        <>
            <div id="graphicsLeft">
                <canvas id="hexCanvas"></canvas>
                <canvas id="cashewCanvas"></canvas>
            </div>
            <p >This website was designed & coded by Emily. Two gremlins named Hex and Cashew supervised,
                though.</p>
            <div id="graphicsRight">
                <a href="https://www.figma.com/@emilymdiaz" target="_blank" rel="noopener noreferrer"><img
                    src={resolveSitePath('Images/FigmaLogo.svg')} alt=""></img></a>
                <a href="https://www.linkedin.com/in/emily-diaz-fusco" target="_blank" rel="noopener noreferrer"><img
                    src={resolveSitePath('Images/LinkedIn.png')} alt=""></img></a>
            </div>
        </>
    )
}