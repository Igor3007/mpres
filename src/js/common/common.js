document.addEventListener("DOMContentLoaded", function (event) {

    if (document.querySelector('[data-slider="gallery-main"]')) {

        document.querySelectorAll('.object-estate').forEach(item => {

            let main = new Splide(item.querySelector('[data-slider="gallery-main"]'), {
                pagination: false,
                arrows: false,
                cover: true,
                updateOnMove: true,
            });

            let thumbnails = new Splide(item.querySelector('[data-slider="gallery-thumb"]'), {

                isNavigation: true,
                updateOnMove: true,
                gap: 10,
                pagination: false,
                perPage: 4,
                perMove: 1,
                arrows: false,
                arrowPath: 'M10.3088 21.0138H27.8752L24.5842 24.3048C23.6389 25.2501 25.0568 26.668 26.0022 25.7227L28.9994 22.7208L31.0002 20.7169C31.388 20.3268 31.388 19.6968 31.0002 19.3067L26.0022 14.3028C25.812 14.1074 25.5503 13.9978 25.2775 14C24.3773 14.0001 23.9356 15.0966 24.5842 15.7208L27.883 19.0119H10.2571C8.87066 19.0807 8.97418 21.0828 10.3088 21.0138Z',
                breakpoints: {
                    760: {
                        gap: 5,
                    },
                },
            });

            main.sync(thumbnails);
            main.mount();
            thumbnails.mount();

        })


    }

    /* ==================================
    like/dislike
    ==================================*/

    if (document.querySelector('[data-vote]')) {

        document.querySelectorAll('[data-vote]').forEach(item => {



            item.addEventListener('click', e => {

                if (item.classList.contains('is-active')) {
                    item.classList.remove('is-active');
                } else {
                    item.parentNode.querySelectorAll('[data-vote]').forEach(el => {
                        !el.classList.contains('is-active') || el.classList.remove('is-active');
                    })

                    item.classList.add('is-active')
                }


            })
        })

    }

})