import { FaChevronDown } from "react-icons/fa6";

export function NavBar() {
  return (
    <header className="flex justify-between items-center font-semibold">
      <div className="flex gap-8 items-center text-base ">
        <div className="flex gap-2 items-center text-lg">
          <a href="">
            <img src="/logo.png" alt="Logo" />
          </a>
          <a href="">
            <p className="hover:underline">Untitled UI</p>
          </a>
        </div>
        <a href="">
          <p className="hover:underline">Home</p>
        </a>
        <a href="">
          <div className="flex gap-1 items-center">
            <p className="hover:underline">Products</p>
            <FaChevronDown />
          </div>
        </a>
        <a href="">
          <div className="flex gap-1 items-center">
            <p className="hover:underline">Resources</p> <FaChevronDown />
          </div>
        </a>
        <a href="">
          <p className="hover:underline">Pricing</p>
        </a>
      </div>
      <div className="flex justify-end items-center gap-8">
        <a href="">
          <p className="hover:underline">Log in</p>
        </a>
        <a href="">
          <button className="bg-[#7F56D9] py-1.5 px-4 rounded-lg hover:bg-[#7f56d99f]">
            Sign up
          </button>
        </a>
      </div>
    </header>
  );
}
