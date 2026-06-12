import { useEffect } from 'react';

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
            hexImage.src = "/Images/hexpixel.png"

            hexCanvas.addEventListener("mouseover", () => {
                hexImage.src = "/Images/hexpixel.gif"
            })
            hexCanvas.addEventListener("mouseleave", () => {
                hexImage.src = "/Images/hexpixel.png"
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
            cashewImage.src = "/Images/cashewneutral.png"

            cashewCanvas.addEventListener("mouseover", () => {
                cashewImage.src = "/Images/cashewpet.png"
            })
            cashewCanvas.addEventListener("mouseleave", () => {
                cashewImage.src = "/Images/cashewneutral.png"
            })
        }
    }, [])

    return (
        <>
            <div id="graphicsLeft">
                <canvas id="hexCanvas" tabIndex="0"></canvas>
                <canvas id="cashewCanvas" tabIndex="0"></canvas>
            </div>
            <p tabIndex="0">This website was designed & coded by Emily. Two gremlins named Hex and Cashew supervised,
                though.</p>
            <div id="graphicsRight">
                <a href="https://github.com/EmilyDiaz" target="_blank" rel="noopener noreferrer"><img
                    src="Images/Github.svg" alt=""></img></a>
                <a href="https://www.linkedin.com/in/emily-diaz-b5b696203" target="_blank" rel="noopener noreferrer"><img
                    src="Images/LinkedIn.png" alt=""></img></a>
            </div>
        </>
    )
}