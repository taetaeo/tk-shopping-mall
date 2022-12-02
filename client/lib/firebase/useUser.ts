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

initFirebase();

type User = {
  id: any;
  email: any;
  token: any;
  name: any;
  profilePic: any;
};
const useUser = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const auth = getAuth();

  const logout = async () => {
    try {
      await auth.signOut();
      removeUserCookie();
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
      } else {
        removeUserCookie();
        // setUser(null);
      }
    });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
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
