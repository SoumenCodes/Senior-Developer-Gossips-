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

const StremeComponent = ({ id, clerkUser }) => {
  const [channel, setChannel] = useState();
  const { user: userObj, isLoaded } = useUser();
  const token = clerkUser.token;

  // Create user object with the correct image URL
  const user = {
    id: clerkUser?.id,
    name: clerkUser?.name || clerkUser?.fullName,
    image: userObj?.imageUrl, // Using the image URL from Clerk
  };

  // Initialize the chat client
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: user,
  });

  // Create/connect to the channel once client is ready
  useEffect(() => {
    if (!client || !isLoaded) return;

    const channel = client.channel("messaging", id, {
      image: "https://getstream.io/random_png/?name=react",
      name: `Talk about ${id}`,
      members: [userId],
    });

    setChannel(channel);
  }, [client, isLoaded, id]);

  // Update user data whenever the image URL changes
  useEffect(() => {
    if (!client || !isLoaded || !userObj?.imageUrl) return;

    // Update the user with the current image URL
    client.upsertUser({
      id: clerkUser?.id,
      name: clerkUser?.name || clerkUser?.fullName,
      image: userObj.imageUrl,
    });
  }, [client, userObj?.imageUrl, isLoaded, clerkUser]);

  if (!client || !isLoaded) return <div>Setting up client & connection...</div>;

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
