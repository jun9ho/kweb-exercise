// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
];

function createPost(post) {
 // 게시물을 감싸는 주요 div 요소 생성
 const postElement = document.createElement("div");
 postElement.classList.add("post");

 // 사용자 이름을 표시하는 div 요소 생성
 const userElement = document.createElement("div");
 userElement.classList.add("post-user");
 userElement.textContent = post.username;

 // 게시물 이미지를 표시하는 img 요소 생성
 const imageElement = document.createElement("img");
 imageElement.classList.add("post-image");
 imageElement.src = post.image;
 imageElement.alt = post.description;

 // 게시물 설명을 표시하는 div 요소 생성
 const descriptionElement = document.createElement("div");
 descriptionElement.classList.add("post-description");
 descriptionElement.textContent = post.description;

 // 좋아요 수를 표시하는 div 요소 생성
 const likesElement = document.createElement("div");
 likesElement.classList.add("post-likes");
 likesElement.textContent = "♥: " + post.likes;

 // 모든 요소들을 주요 게시물 div에 추가
 postElement.appendChild(userElement);
 postElement.appendChild(imageElement);
 postElement.appendChild(descriptionElement);
 postElement.appendChild(likesElement);

 return postElement;
}

// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");

  POSTS.forEach((post) => {
    const postElement = createPost(post);
    postsContainer.appendChild(postElement);
  });
}
function sortPostsByLikes() {
  const postsContainer = document.getElementById("posts");
  const sortedPosts = POSTS.slice().sort((a, b) => b.likes - a.likes);
  postsContainer.innerHTML = ""; 
  sortedPosts.forEach((post) => {
    const postElement = createPost(post);
    postsContainer.appendChild(postElement);
  });
}
const btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
  window.scrollTo({right:0, top:0,behavior:'smooth'})
})
main();
