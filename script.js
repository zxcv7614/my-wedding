function openPhoto(src) {

    const modal = document.getElementById("photoModal");
    const image = document.getElementById("modalImage");

    image.src = src;

    modal.classList.add("active");
}


function closePhoto() {

    const modal = document.getElementById("photoModal");

    modal.classList.remove("active");
}


function copyAccount() {

    const account = "0000 0000 0000";

    navigator.clipboard.writeText(account)
        .then(function () {

            alert("계좌번호가 복사되었습니다.");

        })
        .catch(function () {

            alert("계좌번호: " + account);

        });
}