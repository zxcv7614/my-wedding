document.addEventListener("DOMContentLoaded", function () {

    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close-button");

    galleryItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const image = item.querySelector("img");

            if (!image || !modal || !modalImage) {
                return;
            }

            modalImage.src = image.src;
            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        });
    });


    function closeModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");
        modalImage.src = "";

        document.body.style.overflow = "";
    }


    if (closeButton) {

        closeButton.addEventListener("click", function (event) {

            event.stopPropagation();

            closeModal();
        });
    }


    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                closeModal();
            }
        });
    }


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeModal();
        }
    });

});