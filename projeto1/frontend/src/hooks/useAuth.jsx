import api from "../Utils/api.jsx";
export default function userAuth() {
  async function register(user) {
    try {
      const data = await api.post("/users/Register", user).then((response) => {
        return response.data;
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } //function
  return { register };
} //export
