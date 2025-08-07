import { StreamChat } from "stream-chat";
import "dotenv/config.js";

const apikey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apikey || !apiSecret) {
  console.log("Stream API key or Secret is missing");
}

const streamClint = StreamChat.getInstance(apikey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClint.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.log("Error spserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userIdStr = userId.toString();
    return streamClint.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
