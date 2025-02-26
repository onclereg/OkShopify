import Hero from "@/components/Hero";
import Image from "next/image";
import Newest from "./Newest/page";

export default function Home() {
  return (
    <div className="w-full h-full" >
     <Hero/>
     <Newest/>
    </div>
  );
}
