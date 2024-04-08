import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
       <main className="flex h-screen overflow-hidden flex-col justify-center items-center">
        <div className="w-[1200px] h-full flex flex-col items-center justify-center relative">
          <nav className=" absolute z-40 top-0 left-0  w-[1200px] flex items-center justify-between p-3 rounded-2xl backdrop-blur-md bg-[#0e12174e] mt-3">
            <Image src={'/daily-dev-logo.svg'} alt="logo" priority={true} width={150} height={150} />
             <Link href={'/login'}>
              <button 
              className="
               border-white 
               border-2 
               flex 
               rounded-xl 
               items-center 
               justify-between 
               py-3 px-5 
               text-white 
               font-semibold 
               gap-2 
               hover:bg-white/10
               "
               >Start Reading  <span className=" text-neutral-300 "> - Free Forever</span></button>
             </Link>
          </nav>

          <div className="flex w-full h-full flex-col items-center justify-center z-20 relative p-5">
            <h3 className="text-[40px] text-white leading-tight">Where engineers</h3>
            <h1 className="text-[80px] text-transparent font-black bg-clip-text bg-gradient-to-r from-pink-300 to-rose-400 leading-tight">suffer together</h1>
            <p className=" text-white text-xl w-[570px] font-normal text-center mt-7">We know how hard it is to be an engineer. It doesn’t have to be. Personalized news feed, tech communities and search, much better than what’s out there. Maybe ;)</p>
            <Link href={'/login'} className="mt-5">
              <button 
              className="
               border-white 
               border-2 
               flex 
               rounded-xl 
               items-center 
               justify-between 
               py-3 px-5 
               text-black 
               gap-2 
               text-lg
               bg-white
               font-semibold
               "
               > 
               <div className="flex">
                <Image src={'edge.svg'} alt="edge" width={30} height={30} className=" scale-[1.2]" />
                <Image src={'firefox.svg'} alt="firefox" width={30} height={30} className="-ml-3 scale-[1.2]" />
                <Image src={'chrome.svg'} alt="chrome" width={30} height={30} className="-ml-3 scale-[1.2]" />
               </div>
               Start Reading  <span className=" text-neutral-500 "> - Free Forever</span></button>
             </Link>
          </div>
          <Image src={'/bg.svg'} alt="bg" width={1920} height={1080} className=" absolute top-[50%] w-full h-full" />
          <Image src={'/space.svg'} alt="bg" width={1920} height={1080} className=" absolute top-[40%] z-10 w-full h-full" />
        </div>
       </main>
  );
}
