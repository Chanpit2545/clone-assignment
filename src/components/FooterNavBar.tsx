export function FooterNavBar() {
  return (
    <div className="grid grid-cols-12 pt-16">
      <div className="col-span-8 space-y-4">
        <div className="flex gap-2 items-center text-base font-semibold">
          <a href="">
            <img src="/logo.png" alt="Logo" />
          </a>
          <a href="">
            <p className="hover:underline">Untitled UI</p>
          </a>
        </div>
        <div className="flex flex-row gap-8 text-sm font-medium">
          <a href="">
            <p className="hover:underline">Overview</p>
          </a>
          <a href="">
            <p className="hover:underline">Features</p>
          </a>
          <a href="">
            <p className="hover:underline">Pricing</p>
          </a>
          <a href="">
            <p className="hover:underline">Careers</p>
          </a>
          <a href="">
            <p className="hover:underline">Help</p>
          </a>
          <a href="">
            <p className="hover:underline">Privacy</p>
          </a>
        </div>
      </div>
      <div className="col-span-4 space-y-3">
        <h4 className="text-sm font-semibold">Stay up to date</h4>
        <div className="grid grid-cols-12 gap-1 text-sm items-center">
          <div className="col-span-7">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-3 py-1"
            />
          </div>
          <div className="col-span-5">
            <a href="">
              <button
                type="submit"
                className="bg-[#7F56D9] border border-[#7F56D9] text-white font-semibold px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Subscribe
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
