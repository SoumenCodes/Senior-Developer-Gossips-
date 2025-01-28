import { StreamChat } from "stream-chat";

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
