import React, { Component } from 'react';
import './App.scss';
import AppointmentForm from './AppointmentForm';

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
          category: '',
          id: null
        },
      appointments: [
        {
          title: 'Fix Interfiber-Calender bugs',
          location: 'Github',
          comments: 'Sign in to github',
          date: '2020-04-02 11:00:00',
          category: 'Dev',
          id: 0
        },
        {
          title: 'Take bike ride',
          location: 'Outside',
          comments: "",
          date: '2020-04-02 14:00:00',
          category: 'Sports',
          id: 1
      }]

    };
    this.formSubmitted = this.formSubmitted.bind(this);
  }
  formSubmitted(event){

    event.preventDefault();

    if(this.state.newAppointment.id == null) {
      this.state.newAppointment.id = this.state.appointments.length
      this.setState({
        appointments: [...this.state.appointments, this.state.newAppointment]
      });
    }

    this.setState({
      newAppointment: {
        title: '',
        location: '',
        comments: '',
        date: '',
        category: '',
        id: null
      }
    });
  }

deleteAppoint(id){
   var appointments = []
   this.state.appointments.forEach((appt, i) => {
      if(appt.id != id){

        appointments.push(appt)

      }
      this.setState({
        appointments: appointments


      });
   });


}
editAppoint(id){
   this.state.appointments.forEach((appt, i) => {
      if(appt.id == id){
        this.setState({
          newAppointment: appt


        });

      }

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
              <button className="DELETE" onClick={(event) => this.deleteAppoint(appointment.id)}>🚫</button>
              <button className="EDIT" onClick={(event) => this.editAppoint(appointment.id)}>✏️</button>
              <div className="time">Time: {appointment.date}</div>
              <div className="comments">
                Comments: {appointment.comments}
              </div>
            </div>
        })}
        <AppointmentForm formSubmitted={this.formSubmitted.bind(this)}
          newAppointmentChanged={this.newAppointmentChanged.bind(this)}
          appointment={this.state.newAppointment}

        />
      </div>
    );
  }
}

export default App;
