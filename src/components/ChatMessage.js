const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <div className="flex items-center gap-2">
          <div className="rounded-xl">
            <img
              className="rounded-xl"
              draggable="false"
              alt=""
              height="24"
              width="24"
              src="https://yt4.ggpht.com/E4dmrdPJUpl87-zygco6dEgbsTAobEBRkdTJoL1fPsn4GDMG6A1P2t4EInitnBZvIYGbeUQY-Q=s32-c-k-c0x00ffffff-no-rj"
            />
          </div>

          <span className="whitespace-nowrap font-bold">{name}</span>
        </div>
        <span className="px-8 text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
