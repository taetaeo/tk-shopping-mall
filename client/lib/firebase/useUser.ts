import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import {
  initFirebase,
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
  mapUserData,
} from ".";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../recoil";

initFirebase();

type User = {
  id: any;
  email: any;
  token: any;
  name: any;
  profilePic: any;
};

const useUser = () => {
  const [_, setUserData] = useRecoilState(userDataAtom);
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const auth = getAuth();

  const logout = async () => {
    try {
      await auth.signOut();
      removeUserCookie();
      setUserData({ id: null, email: null, token: null, name: null });
      router.push("/auth");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user);
        setUserCookie(userData);
        setUser(userData);
        setUserData({
          id: userData.id,
          email: userData.email,
          name: userData.name,
          token: userData.token,
        });
      } else {
        removeUserCookie();
        // setUser(null);
      }
    });

    const userFromCookie = getUserFromCookie();

    if (userFromCookie && router.route === "/auth") {
      // 쿠키가 없을시에 리다이렉트
      router.push("/");
      return;
    }
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export { useUser };
