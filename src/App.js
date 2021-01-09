import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  state = {
    events: [

//       end: Tue Jan 12 2021 20:09:02 GMT+0200 (South Africa Standard Time) {}
// event: {start: Mon Jan 04 2021 20:09:02 GMT+0200 (South Africa Standard Time), end: Tue Jan 05 2021 20:09:02 GMT+0200 (South Africa Standard Time), title: "Some title"}
// isAllDay: undefined
// resourceId: undefined
// start: Mon Jan 11 2021 20:09:02 GMT+0200 (South Africa Standard Time) {}

      {
        title: "Media Campaigns",
        start: new Date("2021-01-25T08:00:00Z"),
        end: new Date("2021-01-25T12:00:00Z"),
        allDay: false
      },
      {
        title: "Commercial Campaigns Meeting",
        start: new Date("2021-01-25T08:00:00Z"),
        end: new Date("2021-01-25T12:00:00Z"),
        allDay: false
      },
      {
        title: "Commissioning Campaigns Meeting",
        start: new Date("2021-01-15T08:00:00Z"),
        end: new Date("2021-01-15T12:00:00Z"),
        allDay: false
      },
      {
        title: "Another Event",
        start: new Date("2021-01-25T08:00:00Z"),
        end: new Date("2021-01-25T12:00:00Z"),
        allDay: false
      },
      {
        title: "Morning Meetup",
        start: new Date("2021-01-25T015:00:00Z"),
        end: new Date("2021-01-25T16:00:00Z"),
        allDay: false
      },
      {
        title: "Monthly New Plan Meeting",
        start: new Date("2021-02-01T08:00:00Z"),
        end: new Date("2021-02-01T12:00:00Z"),
        allDay: false
      },
      
    ],
  };

  // onEventResize = (data) => {
  //   const { start, end } = data;

  //   this.setState((state) => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     return { events: [...state.events] };
  //   });
  // };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          // onEventResize={this.onEventResize}
          // resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
