// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
    const userPostsPromises = users.map(user => 
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(res => res.json())
            .then(posts => ({ ...user, posts }))
    );

    const usersWithPosts = await Promise.all(userPostsPromises);
    console.log(usersWithPosts);
}

main();