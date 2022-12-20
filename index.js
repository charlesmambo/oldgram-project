const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const vinImage = document.getElementById('vin-img').src = `${posts[0].avatar}`;
const name = document.getElementById('name').innerHTML = `${posts[0].name}`;
const place = document.getElementById('location').innerHTML = `${posts[0].location}`;
const drawing = document.getElementById('vin-drawing').src = `${posts[0].post}`;
const vinLikes = document.getElementById('vin-likes');
vinLikes.innerHTML = `${posts[0].likes},492 likes`
const vinUsername = document.getElementById('vin-username');
vinUsername.innerHTML = `${posts[0].username}`;
const vinComments = document.getElementById('vin-comment').innerHTML = `${posts[0].comment}`;

const vinDrawing = document.getElementById('vin-drawing')
vinDrawing.addEventListener('dblclick', function(){
    const vinIconheart = document.getElementById('vin-iconheart');
    vinIconheart.classList.add('hide-heart')
    const redHeart = document.getElementById('vin-redheart');
    redHeart.style.display = 'block';
})


const gustImage = document.getElementById('gust-img').src = `${posts[1].avatar}`;
const gustName = document.getElementById('gust-name').innerHTML = `${posts[1].name}`;
const gustLocation = document.getElementById('gust-location').innerHTML = `${posts[1].location}`;
const gustDrawing = document.getElementById('gust-drawing').src = `${posts[1].post}`;
const gustLikes = document.getElementById('gust-likes').innerHTML = `${posts[1].likes}, 238 likes`;
const gustUsername = document.getElementById('gust-username').innerHTML = `${posts[1].username}`;
const gustComments = document.getElementById('gust-comment').innerHTML = `${posts[1].comment}`

const gDrawing = document.getElementById('gust-drawing')
gDrawing.addEventListener('dblclick', function(){
    const vinIconheart = document.getElementById('gus-iconheart');
    vinIconheart.classList.add('hide-heart')
    const redHeart = document.getElementById('gus-redheart');
    redHeart.style.display = 'block';
})

const josephProfile = document.getElementById('joseph-img').src = `${posts[2].avatar}`;
const josephName = document.getElementById('joseph-name').innerHTML = `${posts[2].name}`;
const josephLocation = document.getElementById('joseph-location').innerHTML = `${posts[2].location}`;
const josephDrawing = document.getElementById('joseph-drawing').src = `${posts[2].post}`;
const josephLikes = document.getElementById('joseph-likes').innerHTML = `${posts[2].likes} likes`;
const josephUsername = document.getElementById('joseph-username').innerHTML = `${posts[2].username}`;
const josephComments = document.getElementById('joseph-comment').innerHTML = `${posts[2].comment}`;

const jDrawing = document.getElementById('joseph-drawing')
jDrawing.addEventListener('dblclick', function(){
    const josephIconheart = document.getElementById('jose-iconheart');
    josephIconheart.classList.add('hide-heart')
    const redHeart = document.getElementById('jose-redheart');
    redHeart.style.display = 'block';
})











