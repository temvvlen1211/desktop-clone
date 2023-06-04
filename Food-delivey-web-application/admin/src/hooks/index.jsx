import { useContext } from "react";
import { CurrentUserContext } from "../contexts";

const useCurrentUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  return { currentUser, setCurrentUser };
};
export default useCurrentUser;
