document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* ========================================
           GALLERY PHOTO MODAL
        ======================================== */

        const galleryItems =
            document.querySelectorAll(
                ".gallery-item"
            );

        const modal =
            document.getElementById(
                "photoModal"
            );

        const modalImage =
            document.getElementById(
                "modalImage"
            );

        const closeButton =
            document.querySelector(
                ".close-button"
            );


        /*
         * OPEN PHOTO
         */

        galleryItems.forEach(
            function (item) {

                item.addEventListener(
                    "click",
                    function () {

                        const photo =
                            item.querySelector(
                                "img"
                            );

                        if (
                            !photo ||
                            !modal ||
                            !modalImage
                        ) {
                            return;
                        }

                        modalImage.src =
                            photo.src;

                        modal.classList.add(
                            "active"
                        );

                        modal.setAttribute(
                            "aria-hidden",
                            "false"
                        );

                        document.body.style.overflow =
                            "hidden";
                    }
                );
            }
        );


        /*
         * CLOSE PHOTO
         */

        function closePhoto() {

            if (!modal) {
                return;
            }

            modal.classList.remove(
                "active"
            );

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

            if (modalImage) {
                modalImage.src = "";
            }

            document.body.style.overflow =
                "";
        }


        /*
         * X BUTTON
         */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    closePhoto();
                }
            );
        }


        /*
         * CLICK BACKGROUND
         */

        if (modal) {

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target === modal
                    ) {
                        closePhoto();
                    }
                }
            );
        }


        /*
         * ESC KEY
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    modal &&
                    modal.classList.contains(
                        "active"
                    )
                ) {
                    closePhoto();
                }
            }
        );


        /* ========================================
           WEDDING COUNTDOWN
        ======================================== */

        const weddingDate =
            new Date(
                2027,
                1,
                13
            );

        const today =
            new Date();


        /* 시간 제거하고 날짜만 비교 */

        today.setHours(
            0,
            0,
            0,
            0
        );

        weddingDate.setHours(
            0,
            0,
            0,
            0
        );


        const difference =
            weddingDate.getTime() -
            today.getTime();


        const daysLeft =
            Math.ceil(
                difference /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        const weddingDays =
            document.getElementById(
                "weddingDays"
            );


        if (weddingDays) {

            if (daysLeft > 0) {

                weddingDays.textContent =
                    daysLeft;

            } else if (daysLeft === 0) {

                weddingDays.textContent =
                    "오늘";

            } else {

                weddingDays.textContent =
                    Math.abs(daysLeft);

            }
        }

    }
);