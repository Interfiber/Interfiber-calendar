import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: "Hunter is soooo attarctive!",
      newAppointment:
        {
          title: '',
          location: '',
          comments: '',
          date: '',
          category: ''
        },
      appointments: [
        {
          title: 'Fart up a storm',
          location: 'Your House',
          comments: 'Your face is really handsome',
          date: '2020-04-02 11:00:00',
          category: 'Random Activities'
        },
        {
          title: 'Drop the kids off at the pool',
          location: 'Upstairs Bathroom',
          comments: "You're going to want some air freshener",
          date: '2020-04-02 14:00:00',
          category: 'Bodily Functions'
      }]

    };
    this.formSubmitted = this.formSubmitted.bind(this);
  }
  formSubmitted(event){

  console.log(event);
  event.preventDefault();
  this.setState({
  appointments: [...this.state.appointments, this.state.newAppointment]



  });


}
newAppointmentChanged(event, field){

var appt = this.state.newAppointment;
appt[field] = event.target.value;

this.setState({
newAppointment: appt



});


}
  render() {
    return (
      <div className="App">
        <h1>Interfibers amazing Calendar APP!</h1>


        {this.state.appointments.map(appointment => {

          return <div className="appointmentDisplay" key={appointment.title}>
              <div className="title">
                Title: {appointment.title}
              </div>
              <div className="time">Time: {appointment.date}</div>
              <div className="comments">
                Comments: {appointment.comments}
              </div>
            </div>
        })}
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newAppointment">Title</label>
          <input onChange={(event) => this.newAppointmentChanged(event, "title")} id="newAppointment" name="newAppointment"/>

          <label htmlFor="newTime">Time</label>
          <input onChange={(event) => this.newAppointmentChanged(event, "date")} id="newTime" name="newTime"/>
          <label htmlFor="newTime">Comments</label>
          <input onChange={(event) => this.newAppointmentChanged(event, "comments")} id="newComment" name="newComment"/>
          <button type="submit">Add Appointment</button>
        </form>
      </div>
    );
  }
}

export default App;
