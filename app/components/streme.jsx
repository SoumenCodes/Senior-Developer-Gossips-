"use client";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = "j5wqbed8vpnd";
const userId = "user_2rq1zxZbucjUNCWEf5qX7axBsu7";
const userName = "Soumen_Admin";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ycnExenhaYnVjalVOQ1dFZjVxWDdheEJzdTcifQ.OP_W40H5vkfb5N6ce2KVkiNF6hbzdAXLSk_XmThZvlE";

// const user = {
//   id: userId,
//   name: userName,
//   image: `https://getstream.io/random_png/?name=${userName}`,
// };

const StremeComponent = ({ id, clerkUser }) => {
  const [channel, setChannel] = useState();
  // const clerkUser = useUser();
  // console.log("USER => ", clerkUser);
  const token = clerkUser.token;
  console.log("TOKEN TOKEN", token);

  const user = {
    id: clerkUser?.id,
    name: clerkUser?.name,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", id, {
      image: "https://getstream.io/random_png/?name=react",
      name: `Talk about ${id}`,
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default StremeComponent;
