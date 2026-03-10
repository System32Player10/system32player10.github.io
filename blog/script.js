document.addEventListener("DOMContentLoaded", () => {
    const PANEL_0 = document.getElementById("0");
    const PANEL_1 = document.getElementById("1");
    const PANEL_2 = document.getElementById("2");
    const BTN_0 = document.getElementById("btn0");
    const BTN_1 = document.getElementById("btn1");
    const BTN_2 = document.getElementById("btn2");
    const BTN_3 = document.getElementById("btn3");
    const BTN_4 = document.getElementById("btn4");
    const IMG_1 = document.getElementById("changable1");
    const IMG_2 = document.getElementById("changable2");
    const IMG_3 = document.getElementById("changable3");

    BTN_0.addEventListener("click", function(event) {
        event.preventDefault();
        BTN_0.classList.add("toggled");
        BTN_1.classList.remove("toggled");
        BTN_2.classList.remove("toggled");
        PANEL_0.hidden = false;
        PANEL_1.hidden = true;
        PANEL_2.hidden = true;
        IMG_1.hidden = false;
        IMG_2.hidden = true;
        IMG_3.hidden = true;
    });

    document.getElementById("btn1").addEventListener("click", function(event) {
        event.preventDefault();
        BTN_0.classList.remove("toggled");
        BTN_1.classList.add("toggled");
        BTN_2.classList.remove("toggled");
        PANEL_0.hidden = true;
        PANEL_1.hidden = false;
        PANEL_2.hidden = true;
        IMG_1.hidden = true;
        IMG_2.hidden = false;
        IMG_3.hidden = true;
    });

    document.getElementById("btn3").addEventListener("click", function(event) {
        event.preventDefault();
        BTN_0.classList.remove("toggled");
        BTN_1.classList.add("toggled");
        BTN_2.classList.remove("toggled");
        PANEL_0.hidden = true;
        PANEL_1.hidden = false;
        PANEL_2.hidden = true;
        IMG_1.hidden = true;
        IMG_2.hidden = false;
        IMG_3.hidden = true;
    });

    document.getElementById("btn2").addEventListener("click", function(event) {
        event.preventDefault();
        BTN_0.classList.remove("toggled");
        BTN_1.classList.remove("toggled");
        BTN_2.classList.add("toggled");
        PANEL_0.hidden = true;
        PANEL_1.hidden = true;
        PANEL_2.hidden = false;
        IMG_1.hidden = true;
        IMG_2.hidden = true;
        IMG_3.hidden = false;
    });

    document.getElementById("btn4").addEventListener("click", function(event) {
        event.preventDefault();
        BTN_0.classList.remove("toggled");
        BTN_1.classList.remove("toggled");
        BTN_2.classList.add("toggled");
        PANEL_0.hidden = true;
        PANEL_1.hidden = true;
        PANEL_2.hidden = false;
        IMG_1.hidden = true;
        IMG_2.hidden = true;
        IMG_3.hidden = false;
    });
});