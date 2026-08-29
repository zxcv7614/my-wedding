document.addEventListener(
    "DOMContentLoaded",
    function () {

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

    }
);