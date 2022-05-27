let _renderEntireTree = () => {};

let store = {
  data: {
    sidebar: {},
    newPostMessage: "",

    mainPage: {
      posts: [
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos minus vitae maxime omnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
          id: "01",
        },
        {
          text: "us et alias deserunt est illo sequi aut enim ratione!",
          id: "02",
        },
        {
          text: "mnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
          id: "03",
        },
      ],
    },

    chatPage: {
      users: [
        {
          name: "Ivan",
          id: "01",
          icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
        },
        {
          name: "Andrei",
          id: "02",
          icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
        },
        {
          name: "Petr",
          id: "03",
          icon: "https://cdn-icons-png.flaticon.com/512/4139/4139970.png",
        },
        {
          name: "Pavel",
          id: "04",
          icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
        },
      ],
      messeges: [
        {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, modi, ipsam nemo doloribus earum voluptatem blanditiis",
          id: "01",
          isOwn: true,
        },
        {
          text: "Ipsam nemo doloribus earum voluptatem blanditiis",
          id: "02",
          isOwn: false,
        },
        {
          text: "Repudiandae dolore corrupti doloremque voluptate eaque incidunt nostrum quibusdam amet quae aperiam sint sed.",
          id: "03",
          isOwn: true,
        },
      ],
    },
  },

  getnewPostMessage() {
    return this.data.newPostMessage;
  },

  addPost() {
    const post = {
      text: this.data.newPostMessage,
      id: Math.random() * 10,
    };
    if (this.data.newPostMessage.length > 0) {
      this.data.mainPage.posts.unshift(post);
      _renderEntireTree();
      this.data.newPostMessage = "";
    }
  },

  addMessage() {
    const message = {
      text: this.data.newPostMessage,
      id: Math.random() * 10,
      isOwn: true,
    };
    if (this.data.newPostMessage.length > 0) {
      this.data.chatPage.messeges.push(message);
      _renderEntireTree();
      this.data.newPostMessage = "";
    }
  },

  updateInput(text) {
    this.data.newPostMessage = text;
    _renderEntireTree();
  },

  subscribe(observer) {
    _renderEntireTree = observer;
  },
};

export default store;
