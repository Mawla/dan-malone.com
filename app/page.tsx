import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[hsl(45,9%,91%)]">
      <div className="max-w-7xl mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="border border-[#111011] rounded-full px-4 py-1">
            <span className="badge">Fractional CTO</span>
          </div>

          <div className="text-center flex flex-col items-center gap-6">
            <h1 className="heading-1">
              Simplifying
              <br />
              technology and
              <br />
              driving real results
            </h1>

            <div className="flex flex-col items-center gap-6">
              <p className="body-20 max-w-[600px] text-center">
                I'm here to help you navigate the tech world without the hassle
                — so you can focus on growing your business and making a real
                impact.
              </p>
              <div className="w-20 h-[1px] bg-[#111011]" />
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href="#"
              className="body-18 bg-[#111011] text-white px-8 py-4 rounded-full hover:bg-[#333333] transition-colors"
            >
              Let's Talk
            </a>
            <a
              href="#"
              className="body-18 bg-white px-8 py-4 rounded-full hover:bg-[#f5f5f5] transition-colors"
            >
              Review My Work
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
