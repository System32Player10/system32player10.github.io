let TITLE_TEXT = document.getElementById("title-text");
let ARTIST_TEXT = document.getElementById("artist-text");

function setLyrics(order) {
    switch (order) {
        case 1:
            TITLE_TEXT.textContent = "Thats What I Like"; 
            ARTIST_TEXT.textContent = "Bruno Mars";
    }
}
