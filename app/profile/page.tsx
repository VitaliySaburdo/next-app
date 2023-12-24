import { getServerSession } from "next-auth";
import { authConfig } from "../configs/auth.";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <>
      <h2 className="title">Profile of {session?.user?.name}</h2>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </>
  );
}
