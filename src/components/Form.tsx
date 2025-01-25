export function Form() {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="col-span-1">
        <img src="\Image4.png" alt="Office Image 3" />
      </div>
      <div className="col-span-1 space-y-4">
        <h2 className="text-2xl font-semibold">Let's start your project</h2>
        <p className="text-gray-500">
          Our friendly team would love to hear from you.
        </p>
        <div className="grid grid-cols-2 pt-4 gap-4">
          <div className="col-span-1 space-y-1">
            <div className="text-sm font-semibold">First name</div>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-md px-3 py-1.5"
            />
          </div>
          <div className="col-span-1 space-y-1">
            <div className="text-sm font-semibold">Last name</div>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-md px-3 py-1.5"
            />
          </div>
        </div>
        <div className="space-y-1 pt-2">
          <div className="text-sm font-semibold">Email</div>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-gray-300 rounded-md px-3 py-1.5"
          />
        </div>
        <div className="space-y-1 pt-2">
          <div className="text-sm font-semibold">Phone number</div>
          <div className="flex gap-2 border border-gray-300 rounded-md">
            <select className="px-1.5 py-1.5 text-sm">
              <option>US</option>
            </select>
            <input
              type="text"
              placeholder="+1 (555) 000-0000"
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-1 pt-2">
          <div className="text-sm font-semibold">Message</div>
          <textarea
            placeholder="Leave us a message..."
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-1.5"
          ></textarea>
        </div>
        <div className="flex items-center space-x-2 pt-2 pb-4 text-sm text-gray-500">
          <input type="checkbox" className="rounded-md h-3.5 w-3.5" />
          <p className="text-sm text-gray-500">You agree to our friendly</p>
          <a href="">
            <span className="underline">privacy policy.</span>
          </a>
        </div>
        <button className="bg-[#7F56D9] py-2.5 rounded-lg w-full text-sm font-semibold text-white hover:bg-purple-700">
          Send message
        </button>
      </div>
    </div>
  );
}
