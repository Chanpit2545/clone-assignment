import { FaRegCirclePlay } from "react-icons/fa6";

export function LandingBody() {
  return (
    <div className="space-y-8">
      <h1 className="container max-w-[840px] text-5xl font-normal leading-15 ">
        We design physical{" "}
        <span className="underline underline-offset-12">experiences</span> that
        create more happy in the world
      </h1>
      <p className="container max-w-[480px] font-[350] tracking-wide">
        We're a full-service interior design agency who specialise in simple,
        useful and beautiful solutions for any space.
      </p>
      <div className="flex gap-4 items-center">
        <a href="">
          <button className="border border-[#7F56D9] bg-white text-[#53389E] py-2.5 px-5 rounded-lg font-semibold hover:bg-zinc-100">
            <div className="flex gap-2 items-center">
              <FaRegCirclePlay />
              Showreel
            </div>
          </button>
        </a>
        <a href="">
          <button className="border border-[#7F56D9] bg-[#7F56D9] py-2.5 px-5 rounded-lg font-semibold hover:bg-[#7f56d99f]">
            Get in touch
          </button>
        </a>
      </div>
      <div>
        <img src="src/images/Image1.png" alt="Office image 1" />
      </div>
    </div>
  );
}
