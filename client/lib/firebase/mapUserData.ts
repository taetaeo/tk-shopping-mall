export const mapUserData = (user) => {
  /**
   * uid : 각 아이디가 가지고 있는 고유의 uid
   * xa : 토큰
   */
  const { uid, email, xa, displayName, photoUrl } = user;
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photoUrl,
  };
};
