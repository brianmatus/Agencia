document.getElementById('leave-comment-btn').addEventListener('click', function() {
    document.getElementById('comment-form').classList.toggle('hidden');
});



function addReview(name, surname, comment, rating, date) {
    const commentSection = document.getElementById('comments-section');

    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    const commentTitle = document.createElement('h3');
    commentTitle.textContent = `${name} ${surname}`;
    newComment.appendChild(commentTitle);

    const commentText = document.createElement('p');
    commentText.textContent = comment;
    newComment.appendChild(commentText);

    const commentDate = document.createElement('p');
    commentDate.classList.add('date');
    commentDate.textContent = `Fecha: ${date}`;
    newComment.appendChild(commentDate);

    const commentRating = document.createElement('div');
    commentRating.classList.add('rating');
    commentRating.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    newComment.appendChild(commentRating);

    commentSection.appendChild(newComment);

    document.getElementById('new-comment-form').reset();
    document.getElementById('comment-form').classList.add('hidden');
};

$(document).ready(loadComments);

function loadComments() {
    console.log("Pagina ya cargo, ahora a obtener comentarios....");

    const miUsuario = localStorage.getItem("username");

    const data = {
        username: miUsuario
    }


    const stringParametros = Object.keys(data).map(key => {
        return encodeURI(key) + "=" + encodeURIComponent(data[key])
    }).join("&")

    const reviewURL = `${API_BASE_URL}/review/get_all_reviews?${stringParametros}`
    console.log(reviewURL);

    fetch(reviewURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then( data => {
            console.log("Comentarios obtenidos:");
            // console.log(data);

            for (const review of data.reviews) {
                console.log(review);
                const date = new Date(review.date);
                let day = date.getDate();
                day = day < 10 ? "0" + day : day;

                let month= date.getMonth() + 1;
                month = month < 10 ? "0" + month : month;
                addReview(review.name, review.surname, review.comment, review.rating, `${day}/${month}/${date.getFullYear()}`);
            }

        });
    })


}