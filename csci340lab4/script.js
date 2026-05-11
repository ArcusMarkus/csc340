document.getElementById("animebtn").addEventListener("click", () =>{

    const anime = document.getElementById("animeInput").value;

    fetch (`https://api.jikan.moe/v4/anime?q=${anime}&limit=1`)
    .then(response => response.json())
    .then(data => {

        const animeInfo = data.data[0];

        document.getElementById("animeData").innerHTML = `
            <h3>${animeInfo.title}</h3>
            
            <img src="${animeInfo.images.jpg.image_url}" width="250">

            <p><strong>Score:</strong> ${animeInfo.score}</p>

            <p><strong>Episodes:</strong> ${animeInfo.episodes}</p>

            <p>${animeInfo.synopsis.substring(0, 300)}...</p>

            `;
    });
});
