"use client";
import { NoRampCheckout } from "norampkit";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl w-full md:w-[481px] md:h-[560px] h-full drop-shadow flex flex-col items-center justify-center">
          <img src="/images/colors.png" className="h-52" alt="NoRamp Logo" />

          <h1 className="text-3xl font-bold text-center mt-5">
            Colors On Chain by NoRamp
          </h1>
          <p className="text-center mt-3">
            Chain: <span className="font-bold">Bera</span>
          </p>
          <p className="text-center px-5 mt-4">
            NoRamp Colors are randomized hex colors generated and stored on
            chain. All functionality is intentionally omitted for others to
            interpret. Feel free to use Colors in any way you want.
          </p>
          <div className="mt-12 ">
            <NoRampCheckout
              buttonTheme={"dark"}
              priceId="pi_2ybO0zNJHYc7wwU6n4rjQP"
              theme={"light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
