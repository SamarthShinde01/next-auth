import SignInSignUpButtons from "@/components/SignInSignUpButtons";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
	const session = await getServerSession(authOptions);

	return <>{session ? <UserInfo /> : <SignInSignUpButtons />}</>;
}
