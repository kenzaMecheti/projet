import { useContext } from "react";
import { Appcontext } from "../App";
import { jwtDecode } from "jwt-decode";
const useAuth = () => {
  const { token } = useContext(Appcontext);

  if (token) {
    const decoded = jwtDecode(token);

    const { email, id } = decoded?.userInfo;
    
    return { email, id };
  }

  return { email: "", id: "" };
};
export default useAuth;
