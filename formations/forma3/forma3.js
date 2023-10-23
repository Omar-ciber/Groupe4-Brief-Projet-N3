const formations = [
    {
        id: 1, 
        title: "Cours complet Html 1",
        video: "https://www.youtube.com/embed/0VRwVvgc3VE",
        description: "Structure d'une Balise HTML",
        content: "Daaray Technologie",
    },
    {
    id: 2, 
    title: "Cours complet Html 2",
    video: "https://www.youtube.com/embed/KzXUH1LKqsc",
    description: "C'est quoi HTML CSS",
    content: "Daaray Technologie",

    },
    {
        id: 3, 
        title: "Cours complet Html 3",
        video: "https://www.youtube.com/embed/0VRwVvgc3VE",
        description: "Structure d'une Balise HTML",
        content: "Daaray Technologie ",

    },
    {
        id: 4, 
        title: "Cours complet Html 4",
        video: "https://www.youtube.com/embed/P5biY6vWN4k",
        description: "Telecharger VsCode",
        content: "Daaray Technologie",

    },
    {
        id: 5, 
        title: "Cours complet Html 5",
        video: "https://www.youtube.com/embed/0619cztrXz0",
        description: "Structure d'une page HTML",
        content: "Daaray Technologie",
    },
    {
        id: 6, 
        title: "Cours complet Html 6",
        video: "https://www.youtube.com/embed/-QPyH5l5rRQ",
        description: "Les balises h1 à h6,br et pre",
        content: "Daaray Technologie",
    },
    {
        id: 7, 
        title: "Cours complet Html 7",
        video: "https://www.youtube.com/embed/S3jCnAGwWqk",
        description: "Les balises pour marquer l'importance  d'un texte",
        content: "Daaray Technologie",
    }
] 

const commentList = [
    {
        text: 'Facile à comprendre.Merci beaucoup',
        date: 'Aujourd\hui'
    },
    {
        text: 'Mauvais site',
        date: 'Il y\a 2h'
    }
]


window.onload = function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const formationCards = document.getElementById("playlist");

    function loadVideo(formation) {
        videoPlayer.innerHTML = `<iframe width="800" height="415" src="${formation.video}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>`;
    }

    loadVideo(formations[0]);

    formations.forEach(formation => {
        const formationCard = document.createElement('div');
        formationCard.className='d-flex justify-content-between';
        formationCard.innerHTML=`
              <div class="vd-ifra mb-4">
                 <img src="https://i.ytimg.com/vi/P5biY6vWN4k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBykMukxtjWXC3E8YNxGjXyyj8egg">
              </div
              <div class="desc d-flex justify-content-center">
                  <div class="><span class="fw-bold">${formation.title}</span></div>
                  <div class="><p class="">${formation.description}</p></div>
                  <div><span class="fw-bold">Daaray Technologie</span></div>
                  <div><p>${formation.content}</p></div>
              </div>
        `;
      
        formationCard.addEventListener('click', () => {

            loadVideo(formation);
          
        });
        
        formationCards.appendChild(formationCard);

    });

    const comments = document.getElementById('commentList');

    commentList.forEach(comment => {
        const commentEl = document.createElement('li');
        commentEl.className = 'comment'
        commentEl.innerHTML = `
        <div class="detailComent d-flex bg-secondary-subtle p-2">
            <div class="persComent"><img src="image_forma3/P1.png" alt=""></div>
            <div class="textComent d-flex">
              <div class="text-left">
                <p id="commentText">
                  ${comment.text}
                </p>
            </div>
              <div class="text-right d-flex">
                <div class="like ms-5 ps-5">
                  <i class="fa-regular fa-thumbs-up"></i>
                  <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
                </div>
                <p class="fw-bold ms-5 ps-5">Repondre</p>
              </div>
            </div>   
        </div>
        
        <hr>
        <div class="commenter mb-3" id="commentDate">
           ${comment.date}
        </div>
        `
        comments.appendChild(commentEl);
       
    });

    const formComment = document.getElementById('form-comment');

    formComment.addEventListener('submit', (event) => {
        event.preventDefault();

        const message = document.getElementById('message-text').value;
        console.info('message: ', message);
        commentList.push({text: message, date: Date.now()});

        console.info('comments' , commentList);

        const newComment = document.createElement('li');
        newComment.className = 'comment'
        newComment.innerHTML = `
        
        <div class="detailComent d-flex bg-secondary-subtle p-2">
        <div class="persComent"><img src="image_forma3/P1.png" alt=""></div>
        <div class="textComent d-flex">
          <div class="text-left">
            <p id="commentText">
              ${message}
            </p>
        </div>
          <div class="text-right d-flex">
            <div class="like ms-5 ps-5">
              <i class="fa-regular fa-thumbs-up"></i>
              <i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i>
            </div>
            <p class="fw-bold ms-5 ps-5">Repondre</p>
          </div>
        </div>   
    </div>
    
    <hr>
    <div class="commenter mb-3" id="commentDate">
       ${new Date()}
    </div>
        
        `
        comments.appendChild(newComment);
    })
};
