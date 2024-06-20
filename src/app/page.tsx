import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs/Jobs";
import { getUser } from "@workos-inc/authkit-nextjs";

export default async function Home() {
  const { user } = await getUser()
  console.log(user);

  return (
    <>
      <Hero />
      <Jobs />
    </>
  );
}
