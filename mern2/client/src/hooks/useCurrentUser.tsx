import { currentUserState } from "@client/atoms/atoms";
import { useRecoilState } from "recoil";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  return { currentUser, setCurrentUser };
};
