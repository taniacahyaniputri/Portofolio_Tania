/* =========================================================
   TANIA CAHYANI PUTRI
   JAVASCRIPT
========================================================= */


/* =========================================================
   DOM LOADED
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       HAMBURGER MENU
    ===================================================== */

    const hamburger =
        document.querySelector(".hamburger");


    const navMenu =
        document.querySelector(".nav-menu");


    if (hamburger && navMenu) {


        hamburger.addEventListener(
            "click",
            function () {


                navMenu.classList.toggle("active");


                const icon =
                    hamburger.querySelector("i");


                if (
                    navMenu.classList.contains("active")
                ) {


                    if (icon) {

                        icon.classList.remove(
                            "fa-bars"
                        );

                        icon.classList.add(
                            "fa-times"
                        );

                    }

                } else {


                    if (icon) {

                        icon.classList.remove(
                            "fa-times"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }
        );

    }



    /* =====================================================
       TUTUP MENU SAAT LINK DIKLIK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    navLinks.forEach(
        function (link) {


            link.addEventListener(
                "click",
                function () {


                    if (navMenu) {

                        navMenu.classList.remove(
                            "active"
                        );

                    }


                    const icon =
                        hamburger
                            ? hamburger.querySelector("i")
                            : null;


                    if (icon) {

                        icon.classList.remove(
                            "fa-times"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }
            );

        }
    );



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    navLinks.forEach(
        function (link) {


            const linkPage =
                link.getAttribute("href");


            if (!linkPage) {
                return;
            }


            if (
                currentPage !== "" &&
                currentPage !== "index.html" &&
                linkPage.endsWith(currentPage)
            ) {

                link.classList.add("active");

            }

        }
    );



    /* =====================================================
       KLIK DI LUAR MENU MOBILE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {


            if (
                !navMenu ||
                !hamburger
            ) {

                return;

            }


            const clickedInsideMenu =
                navMenu.contains(
                    event.target
                );


            const clickedHamburger =
                hamburger.contains(
                    event.target
                );


            if (
                navMenu.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedHamburger
            ) {


                navMenu.classList.remove(
                    "active"
                );


                const icon =
                    hamburger.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-times"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );

});


/* =========================================================
   OPEN TRANSCRIPT MODAL
========================================================= */

function openTranscriptModal() {


    const modal =
        document.getElementById(
            "transcriptModal"
        );


    if (!modal) {
        return;
    }


    modal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE TRANSCRIPT MODAL
========================================================= */

function closeTranscriptModal() {


    const modal =
        document.getElementById(
            "transcriptModal"
        );


    if (!modal) {
        return;
    }


    modal.style.display =
        "none";


    document.body.style.overflow =
        "";

}


/* =========================================================
   CLOSE MODAL DENGAN KLIK DI LUAR
========================================================= */

window.addEventListener(
    "click",
    function (event) {


        const modal =
            document.getElementById(
                "transcriptModal"
            );


        if (!modal) {
            return;
        }


        if (
            event.target === modal
        ) {

            closeTranscriptModal();

        }

    }
);


/* =========================================================
   CLOSE MODAL DENGAN ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape"
        ) {

            closeTranscriptModal();

        }

    }
);