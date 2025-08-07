import { axiosinstance } from "./axios.js";

export const signup = async (signupData) => {
  const response = await axiosinstance.post("/auth/signup", signupData);
  return response.data;
};
export const login = async (loginData) => {
  const response = await axiosinstance.post("/auth/login", loginData);
  return response.data;
};
export const logout = async () => {
  const response = await axiosinstance.post("/auth/logout", logout);
  return response.data;
};

export const getAuthuser = async () => {
  try {
    const res = await axiosinstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthuser", error);
    return null;
  }
};

export const completeOnboarding = async (userData) => {
  const response = await axiosinstance.post("/auth/onboarding", userData);
  return response.data;
};

export async function getUserFriends() {
  const response = await axiosinstance.get("/users/friends");
  return response.data;
}
export async function getRecommendedUsers() {
  const response = await axiosinstance.get("/users");
  return response.data;
}

export async function getOutgoingFriendReqs() {
  const response = await axiosinstance.get("/users/outgoing-friend-request");
  return response.data;
}
export async function sendFriendRequest(userId) {
  const response = await axiosinstance.post(`/users/friend-request/${userId}`);
  return response.data;
}
export async function getFriendRequests() {
  const response = await axiosinstance.get("/users/friend-requests");
  return response.data;
}

export async function acceptFriendRequest(requestId) {
  const response = await axiosinstance.put(
    `/users/friend-request/${requestId}/accept`
  );
  return response.data;
}

export async function getStreamToken() {
  const response = await axiosinstance.get("/chat/token");
  return response.data;
}
