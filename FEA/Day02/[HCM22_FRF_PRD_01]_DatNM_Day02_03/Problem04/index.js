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

function* loadAndRenderAsync() {
  let users = yield getDataPromise("https://jsonplaceholder.typicode.com/users")

  for (let i = 0; i < users.length; i++) {
    users[i].posts = yield getDataPromise(`https://jsonplaceholder.typicode.com/posts?userId=${users[i].id}`)
    for (let j = 0; j < users[i].posts.length; j++) {
      users[i].posts[j].comments = yield getDataPromise(`https://jsonplaceholder.typicode.com/comments?postId=${users[i].posts[j].id}`)
    }
  }

  console.log(users)
  renderPage(users)
}

function asyncRunner(func) {
  let gen = func()
  function _next(data) {
    let yielded = gen.next(data)
    if (!yielded.done) {
      yielded.value.then(data => _next(data))
    }
  }

  _next()
}

asyncRunner(loadAndRenderAsync)
