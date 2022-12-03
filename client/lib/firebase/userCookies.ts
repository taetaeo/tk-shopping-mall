import cookies from "js-cookie";

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");

  if (!cookie) {
    return;
  }

  return JSON.parse(JSON.stringify(cookie));
};

export const setUserCookie = (user) => {
  cookies.set("auth", user, {
    // firebase id tokens이 1시간 뒤 만료가 일치하도록 쿠키만료를 설정
    expires: 1 / 24,
  });
};

export const removeUserCookie = () => cookies.remove("auth");
