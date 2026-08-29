/* ========================================
   PHOTO GALLERY
======================================== */


function openPhoto(src) {

    const modal =
        document.getElementById("photoModal");

    const image =
        document.getElementById("modalImage");


    if (!modal || !image) {
        return;
    }


    image.src = src;

    modal.classList.add("active");

    /*
     * 확대 사진이 열려 있을 때
     * 뒤쪽 페이지가 스크롤되지 않도록 합니다.
     */
    document.body.style.overflow = "hidden";
}


function closePhoto() {

    const modal =
        document.getElementById("photoModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/*
 * ESC 키를 누르면 사진 닫기
 */
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});


/* ========================================
   ACCOUNT
======================================== */


function copyAccount() {

    const account =
        "0000 0000 0000";


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(account)
            .then(function() {

                alert(
                    "계좌번호가 복사되었습니다."
                );

            })
            .catch(function() {

                alert(
                    "계좌번호: " + account
                );

            });

    } else {

        alert(
            "계좌번호: " + account
        );

    }

}