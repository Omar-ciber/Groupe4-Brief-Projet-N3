document.getElementById('first').addEventListener('click', function() {
    changeImage('https://img.freepik.com/photos-gratuite/coup-moyen-homme-portant-lunettes-vr_23-2149126949.jpg?w=996&t=st=1697690002~exp=1697690602~hmac=afb18cfdf25e05a50c8b21f461ad5d9384683795cf814c28063876d3587c779e');
  });

  document.getElementById('third').addEventListener('click', function() {
    changeImage('https://img.freepik.com/photos-gratuite/vue-poste-travail-informatique-au-look-retro_23-2150805100.jpg?w=1380&t=st=1697705515~exp=1697706115~hmac=037265cfc9facad3da3b9e8e122d1bc0f1b6753097e34fa0e97b311c58483d1b');
  });

  document.getElementById('third').addEventListener('click', function() {
    changeImage('https://img.freepik.com/photos-premium/affichage-graphique-point-doigt-humain-rendu-3d_493806-7331.jpg?w=900');
  });

// fermer le premier modal
document.getElementById('comment-btn').addEventListener('click', function() {
    // Fermer le premier modal
    $('#staticBackdrop').modal('hide');
    console.log("Fermer")
  });

  $('#comment-modal').on('hidden.bs.modal', function () {
    // Supprimer la classe du fond noir après la fermeture du deuxième modal
    $('.modal-backdrop').remove();
  });

  document.getElementById('send-button').addEventListener('click', addComment);

function changeImage(newSrc) {
    if (newSrc) {
      document.getElementById('modalImage').src = newSrc;
    }
  }

  function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentList = document.getElementById('commentList');

     var commentText = commentInput.value;

     var commentCard = document.createElement('div');
     commentCard.className = 'card mb-3';
     commentCard.innerHTML = `
         <div class="row g-0">
             <div class="col-md-4">
                 <img src="https://img.freepik.com/photos-premium/portrait-belle-jeune-femme-aux-cheveux-boucles_847439-4471.jpg?w=740" class="img-fluid rounded-start h-25" alt="...">
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                     <h5 class="card-title">Prenom Nom</h5>
                     <p class="card-text">${commentText}</p>
                     <p class="card-text"><small class="text-body-secondary">Il y'a 3mn</small></p>
                 </div>
             </div>
         </div>
     `;

     commentList.appendChild(commentCard);

     saveCommentToLocalStorage(commentText);

     commentInput.value = '';

}

// fonction pour sauvegarder  les données dans le local storage
function saveCommentToLocalStorage(comment) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// fonction pour charger les données du localstorage dans div commentList 
function loadCommentsFromLocalStorage() {
    var commentList = document.getElementById('commentList');
    var comments = JSON.parse(localStorage.getItem('comments')) || [];

    console.log(comments)

    // Créer et afficher les cartes de commentaires
    comments.forEach(function(commentText) {
        var commentCard = document.createElement('div');
        commentCard.className = 'card mb-3 h-25';
        commentCard.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://img.freepik.com/photos-premium/portrait-belle-jeune-femme-aux-cheveux-boucles_847439-4471.jpg?w=740" class="img-fluid rounded-start h-25" class="img-fluid rounded-start h-50" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Prenom Nom</h5>
                        <p class="card-text">${commentText}</p>
                        <p class="card-text"><small class="text-body-secondary">Il y'a 3mn</small></p>
                    </div>
                </div>
            </div>
        `;

        commentList.appendChild(commentCard);
    });
}

document.getElementById('send-button').addEventListener('click', addComment);

// Charger les commentaires depuis le local storage au chargement de la page
window.addEventListener('load', loadCommentsFromLocalStorage);

