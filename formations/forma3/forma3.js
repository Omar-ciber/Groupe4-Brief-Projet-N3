    var formations = [
        {
        id: 0, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/b6thG9lq2C0?si=63_MiPtA908YNh9o&amp;start=1",
        description: "C'est quoi HTML CSS",
        content: "206 Vues  il y a 6 mois ",

    },
    {
        id: 1, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/b6thG9lq2C0?si=63_MiPtA908YNh9o&amp;start=1",
        description: "C'est quoi HTML CSS",
        content: "206 Vues  il y a 6 mois ",

    },
    {
        id: 2, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/b6thG9lq2C0?si=63_MiPtA908YNh9o&amp;start=1",
        description: "C'est quoi HTML CSS",
        content: "206 Vues  il y a 6 mois ",

    },
    {
        id: 3, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/b6thG9lq2C0?si=63_MiPtA908YNh9o&amp;start=1",
        description: "C'est quoi HTML CSS",
        content: "206 Vues  il y a 6 mois ",
    },
    {
        id: 4, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/b6thG9lq2C0?si=63_MiPtA908YNh9o&amp;start=1",
        description: "C'est quoi HTML CSS",
        content: "206 Vues  il y a 6 mois ",
    }
     ]  

 function generateformationscard()
{
    var formationCards= document.getElementById("playlist");

    formations.forEach(function(formation){
      var formationcard =document.createElement('div');
      formationcard.className='d-flex justify-content-between';
      formationcard.innerHTML=`
            <div class="vd-ifra mb-4 me-2">
                <iframe width="200" height="100" src="${formation.video}"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="desc">
                <span class="fw-bold">${formation.title}</span>
                <p class="">Vidéo 2:C"est quoi HTML CSS</p>
                <span class="fw-bold">Daaray Technologie</span>
                <p>${formation.content}</p>
            </div>
      `;
      
      formationCards.appendChild(formationcard);
       });

}

      
window.addEventListener('load', generateformationscard);

