import { FaStar } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export function InsiderWord() {
  return (
    <div className="pt-24">
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-3">
          <img src="src\images\Image3.png" alt="Worker Image" />
        </div>
        <div className="col-span-9 space-y-5">
          <div className="flex gap-1 text-amber-400 text-xs">
            {Array.from({ length: 5 }, (_) => (
              <div>
                <FaStar />
              </div>
            ))}
          </div>
          <h2 className="font-[500] text-2xl">
            Untitled really understood the paired-back aesthetic that we were
            looking for. We couldn’t be happier with our new offices.
          </h2>
          <div className="space-y-0.5 text-sm">
            <div className="flex gap-2 items-center font-semibold">
              <TfiLayoutLineSolid />
              Candice Wu
            </div>
            <p className="text-gray-500">Head of Design, Layers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
