const postListEl = document.querySelector(".post-list");

async function main() {
    const userid = localStorage.getItem("userId100");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
    const postsData = await posts.json();
    console.log(postsData);

    postListEl.innerHTML = postsData.map(post => `
     <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
    `).join("");      
    }
main();