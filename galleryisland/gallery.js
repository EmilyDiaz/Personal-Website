
        (function () {
            const museumImage = document.getElementById('museum-wall-image');
            const prevButton = document.getElementById('museum-prev');
            const nextButton = document.getElementById('museum-next');
            const wallImages = [
                {
                    src: '../Images/Museum Wall One.png',
                    alt: 'Museum Wall One display'
                },
                {
                    src: '../Images/Museum Wall Two.png',
                    alt: 'Museum Wall Two display'
                },
                {
                    src: '../Images/Museum Wall Three.png',
                    alt: 'Museum Wall Three display'
                }
            ];

            let currentIndex = 0;

            function updateArrowVisibility() {
                const isFirstImage = currentIndex === 0;
                const isLastImage = currentIndex === wallImages.length - 1;
                prevButton.style.display = isFirstImage ? 'none' : 'grid';
                nextButton.style.display = isLastImage ? 'none' : 'grid';
            }

            function updateMuseumImage(index) {
                museumImage.src = wallImages[index].src;
                museumImage.alt = wallImages[index].alt;
                updateArrowVisibility();
            }

            function showNextImage() {
                if (currentIndex >= wallImages.length - 1) {
                    return;
                }
                currentIndex += 1;
                updateMuseumImage(currentIndex);
            }

            function showPrevImage() {
                if (currentIndex <= 0) {
                    return;
                }
                currentIndex -= 1;
                updateMuseumImage(currentIndex);
            }

            nextButton.addEventListener('click', showNextImage);
            prevButton.addEventListener('click', showPrevImage);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'ArrowRight') {
                    showNextImage();
                }
                if (event.key === 'ArrowLeft') {
                    showPrevImage();
                }
            });

            updateMuseumImage(currentIndex);
        })();
