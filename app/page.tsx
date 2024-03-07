import { TopCards } from "@/components/Lander/TopCards";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl w-full md:w-[481px] md:h-[560px] drop-shadow">
          <TopCards />
        </div>
      </div>
    </div>
  );
}
