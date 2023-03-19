import "./Search.css";
import "./Popover.css";
import { MdDateRange, MdPerson, MdOutlineSearch } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { MdLocationPin } from "react-icons/md";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

function Search() {
  const [active, setActive] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeDates, setActiveDates] = useState("");
  const [activeDestination, setActiveDestination] = useState(
    "eg. Travel destination"
  );

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setActiveDates(
      `${format(new Date(start), "dd/MM/yyyy")} ${
        end ? `to ${format(new Date(end), "dd/MM/yyyy")}` : ""
      }`
    );
  };

  const toggle = (name) => {
    setActive(name);
  };

  return (
    <>
      <div className="show">
        <div className="header">
          <button>Flight</button>
          <button>Hotel</button>
          <button>Cruise</button>
        </div>
        <div className="search">
          <div className="pack">
            <div className="search-container">
              <div
                className="search-bar picker"
                onClick={() =>
                  active === "popover" ? toggle("") : toggle("popover")
                }
              >
                <span>{activeDestination}</span>
              </div>
              {active === "popover" && (
                <div className="menu shown" id="Menu">
                  {/* more content here */}
                  <form className="form">
                    <input
                      type="text"
                      placeholder="Search.."
                      name="search"
                    />
                    <button type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                  <ul>
                    {[
                      "Destination1",
                      "Destination2",
                      "Destination3",
                      "Destination4",
                      "Destination5",
                    ].map((destination) => (
                      <li
                        onClick={() => {
                          setActiveDestination(destination);
                          setActive("");
                        }}
                      >
                        <MdLocationPin className="icon" />
                        {destination}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* {active === "popover" && <Popover />} */}
              <div className="pick">
                <div className="divider divider1"></div>
                <div
                  className="date-pick picker"
                  onClick={() =>
                    active == "datePicker" ? toggle("") : toggle("datePicker")
                  }
                >
                  <MdDateRange className="icon" />
                  <span>{!activeDates ? "Pick Date" : activeDates}</span>
                </div>
                {active === "datePicker" && (
                  <div className="date-wrapper">
                    <DatePicker
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />
                  </div>
                )}
                <div className="divider"></div>
                <div className="airport-pick picker">
                  <FaPlaneDeparture className="icon" />
                  <span>All</span>
                </div>
                <div className="divider"></div>
                <div className="people-picker picker">
                  <MdPerson className="icon" />
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <button>
                <MdOutlineSearch className="icon" /> Search{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
