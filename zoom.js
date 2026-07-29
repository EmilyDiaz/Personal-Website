 document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.process-imgs img').forEach(function (img) {
                const wrapper = document.createElement('div');
                wrapper.classList.add('zoom-wrapper');
                if (img.classList.contains('modalImg')) wrapper.classList.add('is-modal-img');
                if (img.classList.contains('designtokens')) wrapper.classList.add('is-designtokens');
                if (img.classList.contains('atomicdesign')) wrapper.classList.add('is-atomicdesign');
                img.parentNode.insertBefore(wrapper, img);
                wrapper.appendChild(img);

                wrapper.addEventListener('mousemove', function (e) {
                    const rect = wrapper.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    img.style.transformOrigin = x + '% ' + y + '%';
                });

                wrapper.addEventListener('mouseleave', function () {
                    img.style.transformOrigin = '0 0';
                });
            });
        });