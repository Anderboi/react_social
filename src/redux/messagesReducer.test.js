import messageReducer, { addMessage } from "./messagesReducer";

let initState = {
  
  messages: [
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, modi, ipsam nemo doloribus earum voluptatem blanditiis",
      id: "01",
    },
    {
      text: "Ipsam nemo doloribus earum voluptatem blanditiis",
      id: "02",
    },
    {
      text: "Repudiandae dolore corrupti doloremque voluptate eaque incidunt nostrum quibusdam amet quae aperiam sint sed.",
      id: "03",
    },
  ],
};


it("message added", () => {

  let newMessage = addMessage("New Post");

  let newState = messageReducer(initState, newMessage)

  expect(newState.messages.length).toBe(4);
});
