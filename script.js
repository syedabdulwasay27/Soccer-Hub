function showMessage() {

    document.getElementById("message").innerHTML =
        "⚽ Welcome to Football Hub! Fixtures, results, teams and player stats coming soon.";

}
function searchTeam() {

    let team = document.getElementById("teamInput").value
        .trim()
        .toLowerCase();

    let result = document.getElementById("teamResult");

    if (team === "") {

        result.innerHTML = "⚠️ Please enter a team name.";

    } else if (team === "real madrid") {

        result.innerHTML =
            "⚪ Real Madrid — Spain 🇪🇸";

    } else if (team === "barcelona") {

        result.innerHTML =
            "🔵🔴 Barcelona — Spain 🇪🇸";

    } else if (team === "manchester city" || team === "man city") {

        result.innerHTML =
            "🔵 Manchester City — England 🏴";

    } else if (team === "liverpool") {

        result.innerHTML =
            "🔴 Liverpool — England 🏴";

    } else if (team === "arsenal") {

        result.innerHTML =
            "🔴 Arsenal — England 🏴";

    } else if (team === "psg" || team === "paris saint-germain") {

        result.innerHTML =
            "🔵 PSG — France 🇫🇷";

    } else {

        result.innerHTML =
            "❌ Team not found. Try Real Madrid, Barcelona, Man City, Liverpool, Arsenal or PSG.";

    }
}
function showTeam(teamName) {
    document.getElementById("selectedTeam").innerHTML =
        "⚽ You selected: " + teamName;
}
function showPlayer(playerName) {
    document.getElementById("selectedPlayer").innerHTML =
        "⭐ You selected: " + playerName;
}
function readNews(newsTitle) {
    document.getElementById("newsMessage").innerHTML =
        "📰 You selected: " + newsTitle;
}
function subscribeFan() {

    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("subscribeMessage");

    if (email === "") {

        message.innerHTML = "⚠️ Please enter your email.";

    } else if (!email.includes("@")) {

        message.innerHTML = "⚠️ Please enter a valid email.";

    } else {

        message.innerHTML =
            "✅ Thanks for joining Football Hub!";

    }
}
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {

        button.innerHTML = "☀️ Light Mode";

    } else {

        button.innerHTML = "🌙 Dark Mode";
    }
}
function searchPlayer() {

    let player = document.getElementById("playerInput").value
        .trim()
        .toLowerCase();

    let result = document.getElementById("playerResult");

    if (player === "") {

        result.innerHTML = "⚠️ Please enter a player name.";

    } else if (player === "mbappe" || player === "kylian mbappe") {

        result.innerHTML =
            "⭐ Kylian Mbappé — Forward — France 🇫🇷";

    } else if (player === "vinicius" || player === "vinicius junior") {

        result.innerHTML =
            "⭐ Vinícius Júnior — Forward — Brazil 🇧🇷";

    } else if (player === "bellingham" || player === "jude bellingham") {

        result.innerHTML =
            "⭐ Jude Bellingham — Midfielder — England 🏴";

    } else if (player === "haaland" || player === "erling haaland") {

        result.innerHTML =
            "⭐ Erling Haaland — Forward — Norway 🇳🇴";

    } else {

        result.innerHTML =
            "❌ Player not found. Try Mbappe, Vinicius, Bellingham or Haaland.";

    }
}
function openPlayer(name, position, country, goals, assists, rating, image) {
    document.getElementById("popupName").innerHTML = name;
    document.getElementById("popupPosition").innerHTML = position;
    document.getElementById("popupCountry").innerHTML = country;
    document.getElementById("popupGoals").innerHTML = goals;
    document.getElementById("popupAssists").innerHTML = assists;
    document.getElementById("popupRating").innerHTML = rating;

    document.getElementById("popupImage").src = image;

    document.getElementById("playerPopup").style.display = "flex";
}

function closePlayer() {
    document.getElementById("playerPopup").style.display = "none";
}
function closePlayer() {
    document.getElementById("playerPopup").style.display = "none";
}
// Teams Page Functions

function searchTeamPage() {
    let team = document.getElementById("teamPageInput").value
        .trim()
        .toLowerCase();

    let result = document.getElementById("teamPageResult");

    if (team === "") {
        result.innerHTML = "⚠️ Please enter a team name.";
    } 
    else if (team === "real madrid") {
        result.innerHTML = "⚪ Real Madrid — La Liga 🇪🇸";
    } 
    else if (team === "barcelona") {
        result.innerHTML = "🔵🔴 Barcelona — La Liga 🇪🇸";
    } 
    else if (team === "manchester city" || team === "man city") {
        result.innerHTML = "🔵 Manchester City — Premier League 🏴";
    } 
    else if (team === "liverpool") {
        result.innerHTML = "🔴 Liverpool — Premier League 🏴";
    } 
    else if (team === "arsenal") {
        result.innerHTML = "🔴 Arsenal — Premier League 🏴";
    } 
    else if (team === "psg" || team === "paris saint-germain") {
        result.innerHTML = "🔵🔴 PSG — Ligue 1 🇫🇷";
    } 
    else {
        result.innerHTML =
            "❌ Team not found. Try Real Madrid, Barcelona, Man City, Liverpool, Arsenal or PSG.";
    }
}


function showTeamPage(teamName) {
    document.getElementById("selectedTeamPage").innerHTML =
        "⚽ You selected: " + teamName;
}