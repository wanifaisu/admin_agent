import { PencilLine, Trash2 } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="flex gap-4 w-fit rounded-full bg-[#f5eee6] p-1">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-10 h-5 bg-slate-300 peer-checked:bg-green-500 rounded-full transition-all"></div>
        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
      </label>
      <PencilLine />
      <Trash2 className="text-rose-600" />
    </div>
  );
};

export default StatusBar;
