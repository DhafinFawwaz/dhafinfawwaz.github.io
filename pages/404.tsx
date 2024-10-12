import Link from "next/link";
import NavbarPage from "@/components/Navbar";

export default function Home() {
  return (<>
    <NavbarPage></NavbarPage>
    <main className="w-full flex justify-center h-svh items-center">
      <div className="px-2">
        <h2 className="text-9xl font-extrabold">404</h2>
        <h3 className="text-5xl font-extrabold">Not found</h3>
        <p className="font-semibold">It seems you have gone to the shadow realm</p>
        <div className="w-full flex justify-center">
          <Link href="/" className="text-indigo-500 hover:text-indigo-400 active:text-indigo-300 font-semibold">Go back ?</Link>
        </div>
      </div>
    </main>
  </>  
  );
}
