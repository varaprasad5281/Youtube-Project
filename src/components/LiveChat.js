import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const userName = useSelector((store) => store?.user?.name);
  const inputMessage = useRef("");
  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(20) + "🚀",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: userName,
        message: inputMessage.current.value,
      })
    );
    inputMessage.current.value = "";
  };

  return (
    <div>
      <div className="ml-2 p-2 border border-slate-300 w-full h-[460px] rounded-t-lg overflow-scroll border-b-0 flex flex-col-reverse">
        {chatMessages.map((eachMessage, index) => {
          return (
            <ChatMessage
              key={index}
              name={eachMessage.name}
              message={eachMessage.message}
            />
          );
        })}
      </div>
      <form onSubmit={handleMessageSubmit} className="w-full ml-2">
        <input
          ref={inputMessage}
          className="w-full border border-slate-300 p-2"
          type="text"
          placeholder="comment here"
        ></input>
      </form>
    </div>
  );
};

export default LiveChat;
