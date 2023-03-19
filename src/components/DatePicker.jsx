import { useEffect, useRef, useState } from "react";
import format from "date-fns/format";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  console.log(format(startDate), "dd/MM/yyyy");
  console.log(format(endDate), "dd/MM/yyyy");
  return (
    <div style={{ marginTop: 350, position: "absolute" }}>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  );
};

export default DatePickerWrapper;
