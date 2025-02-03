"use client";

import { DatePicker } from "antd";
import { CalendarIcon } from "lucide-react";

const TimePicker = () => {
  return (
    <div className="flex items-center gap-2">
      <DatePicker
        className="py-2 bg-white w-35 placeholder:text-black"
        placeholder="MM/DD/YYYY"
        suffixIcon={<CalendarIcon />}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
      <span className="text-black-4">To</span>
      <DatePicker
        className="py-2 bg-white w-35 placeholder:text-black"
        placeholder="MM/DD/YYYY"
        suffixIcon={<CalendarIcon />}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
    </div>
  );
};

export default TimePicker;
