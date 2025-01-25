export function Footer() {
  return (
    <footer className="flex justify-between">
      <p className="text-xs text-gray-500">
        © 2077 Untitled UI. All rights reserved.
      </p>
      <div className="flex text-xs text-gray-500 gap-6">
        <a href="">
          <p className="hover:underline">Terms</p>
        </a>
        <a href="">
          <p className="hover:underline">Privacy</p>
        </a>
        <a href="">
          <p className="hover:underline">Cookies</p>
        </a>
      </div>
    </footer>
  );
}
