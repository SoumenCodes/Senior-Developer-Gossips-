import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

// Define values.
const api_key = "j5wqbed8vpnd";
const api_secret =
  "cnp74j2f38puuphzwbfjwvun36jhv7qbgthzx8t3gz5dfp6dbhnw2tabzx3dnees";
const user_id = "user_2rq1zxZbucjUNCWEf5qX7axBsu7";

export async function GET() {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);

  console.log(token);

  return Response.json({ message: "Hello World" });
}

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token

  // console.log(token);
  const user = await request.json();
  console.log(user);
  const token = serverClient.createToken(user.data.id);
  console.log("A NEW USER HAVE BEEN CREATED", token);

  const client = await clerkClient();

  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  // GIVE ACCESE TO ALL USER
  const title = ["Next-JS", "React-JS", "JavaScript", "Python", "CSS", "PHP"];

  title.forEach(async (item) => {
    const channel = await serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: item + " " + "Discussion",
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  });
  return Response.json({ message: "Hello World" });
}

// export async function DELETE(request) {
//   const serverClient = StreamChat.getInstance(api_key, api_secret);

//   // List of channel IDs to delete
//   const channelIds = [
//     "Next-JS",
//     "Nextjs",
//     "JavaScript",
//     "2",
//     "1",
//     "custom_channel_id",
//     "CSS",
//     "Python",
//     "PHP",
//     "React-JS"
//   ];

//   // Delete each channel
//   for (const channelId of channelIds) {
//     const channel = serverClient.channel("messaging", channelId);
//     await channel.delete();
//   }

//   return Response.json({ message: "All channels deleted successfully" });
// }

// ============== all channel id -------------->
// export async function GET(request) {
//   const serverClient = StreamChat.getInstance(api_key, api_secret);

//   // Fetch all channels
//   const filter = {};
//   const sort = [{ last_message_at: -1 }];
//   const channels = await serverClient.queryChannels(filter, sort);

//   // Extract channel IDs
//   const channelIds = channels.map(channel => channel.id);

//   return Response.json({ channelIds });
// }
