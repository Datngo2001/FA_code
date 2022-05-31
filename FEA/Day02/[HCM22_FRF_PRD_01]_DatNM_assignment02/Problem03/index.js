"use strict";
const e = React.createElement;
function renderPage(users) {

  const App = users => {
    return e("div", {
      className: "container"
    }, e("ul", null, Object.values(users).map((user, uIndex) => {
      return e("li", {
        key: uIndex
      }, "[UserID ", user.id, "] ", user.name, " has ", user.posts.length || 0, " posts", e("ul", null, Object.values(user.posts).map((post, pIndex) => {
        return e("li", {
          key: pIndex
        }, e("div", null, "[PostId ", post.id, "] Title: ", post.title, e("ul", null, Object.values(post.comments).map((comment, cIndex) => {
          return e("li", {
            key: cIndex
          }, e("div", null, "[CommentId ", comment.id, "] Title:", " ", comment.name, " by ", comment.email));
        }))));
      })));
    })));
  };

  const domContainer = document.querySelector("#app");
  const root = ReactDOM.createRoot(domContainer);
  root.render(e(App, users));
}

// YOUR CODE HERE
let users = []
function getDataPromise(url) {
  return new Promise((resolve, reject) => {
    $.get(url)
      .done(res => resolve(res))
      .fail(err => reject(err))
  })
}

async function loadUserDataThenRender() {
  users = await getDataPromise("https://jsonplaceholder.typicode.com/users")
  users.forEach(async user => {
    const posts = await getDataPromise(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    user.posts = posts
    user.posts.forEach(async post => {
      const comment = await getDataPromise(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      post.comments = comment
      renderPage(users)
    })
  });
}

loadUserDataThenRender()


// MOCK DATA - uncomment these lines to see the result

// let users = [
//   {
//     id: 1,
//     posts: [
//       {
//         userId: 1,
//         id: 1,
//         title:
//           "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//         comments: [
//           {
//             postId: 1,
//             id: 1,
//             name: "id labore ex et quam laborum",
//             email: "Eliseo@gardner.biz",
//             body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//           },
//           {
//             postId: 1,
//             id: 2,
//             name: "quo vero reiciendis velit similique earum",
//             email: "Jayne_Kuhic@sydney.com",
//             body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//           },
//         ],
//       },
//     ],
//   },
// ];

// renderPage(users);

