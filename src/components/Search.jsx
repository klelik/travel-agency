import "./Search.css";
import "./Popover.css";
import { MdDateRange, MdPerson, MdOutlineSearch } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { MdLocationPin } from "react-icons/md";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

function Modal({ setActiveDestination }) {
  return (
    <div className="menu shown" id="Menu">
      <form className="form">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <ul>
        {[
          { title: "Destination1", id: 1 },
          { title: "Destination2", id: 2 },
          { title: "Destination3", id: 3 },
          { title: "Destination4", id: 4 },
          { title: "Destination5", id: 5 },
        ].map((destination) => (
          <li
            key={destination.id}
            onClick={() => {
              setActiveDestination(destination.title);
            }}
          >
            <MdLocationPin className="icon" />
            {destination.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Search() {
  const [active, setActive] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeDates, setActiveDates] = useState("");
  const [modal, setModal] = useState(false);

  const [activeDestination, setActiveDestination] = useState(
    "eg. Travel destination"
  );

  const toggleModal = () => {
    setModal(!modal);
  };

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

  const toggleActive = (name) => {
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
                  active === "popover"
                    ? toggleActive("")
                    : toggleActive("popover")
                }
              >
                <span>{activeDestination}</span>
              </div>
              {active === "popover" && (
                <Modal setActiveDestination={setActiveDestination} />
              )}
              <div className="pick">
                <div className="divider divider1"></div>
                <div
                  className="date-pick picker"
                  onClick={() =>
                    active === "datePicker"
                      ? toggleActive("")
                      : toggleActive("datePicker")
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
            <div className="button-wrapper" onClick={toggleModal}>
              <button>
                <MdOutlineSearch className="icon" /> Search{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div className="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
