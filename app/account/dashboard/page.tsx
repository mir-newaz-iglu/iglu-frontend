import LogoutButton from "@/components/login/LogoutButton";
import { auth } from "../../../auth";
//import Image from "next/image";

export default async function Dashboard() {
  const session = await auth();
  return (
    <div>
      <div>Dashboard</div>
      <div>{session?.user?.name}</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
