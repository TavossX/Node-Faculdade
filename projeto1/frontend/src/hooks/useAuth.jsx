import api from "../Utils/api.jsx";
import UseFlashMessage from "../hooks/useFlashMessage.jsx";
export default function userAuth() {
  const { setFlashMessage } = UseFlashMessage();
  async function register(user) {
    let msgText = "Cadastro Realizado com Sucesso!";
    let msgType = "success";
    try {
      const data = await api.post("/users/Register", user).then((response) => {
        return response.data;
      });
      console.log(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }
    setFlashMessage(msgText, msgType);
  } //function
  return { register };
} //export
