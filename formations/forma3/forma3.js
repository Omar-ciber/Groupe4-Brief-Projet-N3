    var formations = [
        {
        id: 0, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/KzXUH1LKqsc?si=iNtfevNgQInENcXs&amp;start=1",
        description: "Video2: C'est quoi HTML CSS",
        content: "Daaray Technologie",

    },
    {
        id: 1, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/0VRwVvgc3VE?si=O6OTjs53CXPc2rP3&amp;start=1",
        description: "Video3: Structure d'une Balise HTML",
        content: "Daaray Technologie ",

    },
    {
        id: 2, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/P5biY6vWN4k?si=eZtztD8pd-JlitIW&amp;start=1",
        description: "Video4: Telecharger VsCode",
        content: "Daaray Technologie",

    },
    {
        id: 3, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/0619cztrXz0?si=34eMTaqhgt5ATFZc&amp;start=1",
        description: "Video5: Structure d'une page HTML",
        content: "Daaray Technologie",
    },
    {
        id: 4, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/-QPyH5l5rRQ?si=Bmo3edVsfvS3CsFe&amp;start=1",
        description: "Video6: Les balises h1 à h6,br et pre",
        content: "Daaray Technologie",
    },
    {
        id: 4, 
        title: "Cours complet Html",
        video: "https://www.youtube.com/embed/S3jCnAGwWqk?si=nSDGyGOMWTelwDcE",
        description: "Video6: Les balises pour marquer l'importance  d'un texte",
        content: "Daaray Technologie",
    }
     ]  

 function generateformationscard()
{
    var formationCards= document.getElementById("playlist");

    formations.forEach(function(formation){
      var formationcard =document.createElement('div');
      formationcard.className='d-flex justify-content-between';
      formationcard.innerHTML=`
            <button class="vd-ifra mb-4">
                <iframe width="200" height="100" src="${formation.video}" class="iframe"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </button>
            <div class="desc">
                <span class="fw-bold">${formation.title}</span>
                <p class="">${formation.description}</p>
                <span class="fw-bold">Daaray Technologie</span>
                <p>${formation.content}</p>
            </div>
      `;
      
       formationCards.appendChild(formationcard);
       });

}


window.addEventListener('load', generateformationscard);


// const iframe=document.getElementsByClassName("vd-ifra");
// console.log(iframe);
// function loadVideo(){
//    console.log("bonjour");
// }

// iframe.addEventListener("click",(event)=>{
//     console.log("bonjour");
// });










///notes...
// let rating_star = document.getElementById("rating-star");
let stars = document.querySelectorAll("#star");

function starPosition(id) {
  let note={
    
  }
  stars.forEach((star) => {
    star.setAttribute("class", "bi bi-star");
  });
  // alert('etoile '+id+" cliquée");
  for (let i = 0; i < id; i++) {
    stars[i].setAttribute("class", "bi bi-star-fill");
  }

}



//commentaires







