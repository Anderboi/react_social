import mainPageReducer from "./mainPageReducer";
import messageReducer from "./messagesReducer";

let store = {
  _data: {
    sidebar: {
      friends: [{ name: "Ivan" }, { name: "Anatoli" }, { name: "Jack" }],
    },
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
      newPostMessage: "",
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
      messages: [
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
      newPostMessage: "",
    },
  },
  _renderEntireTree() {},

  getData() {
    return this._data;
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  dispatch(action) {
    this._data.mainPage = mainPageReducer(this._data.mainPage, action);
    this._data.chatPage = messageReducer(this._data.chatPage, action);

    this._renderEntireTree(this);
  },

  getnewPostMessage() {
    return this._data.mainPage.newPostMessage;
  },
};

export default store;
