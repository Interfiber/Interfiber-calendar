import React from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const AppointmentForm = (props) => {
  return(
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newAppointment">Title</label>
      <input type="text" value={props.appointment.title} onChange={(event) => props.newAppointmentChanged(event, "title")} id="newAppointment" name="newAppointment"/>

      <label htmlFor="newTime">Time</label>
      <DateTimePicker
        value={props.appointment.date}
        onChange={(date) => props.setDate(date)}
        />
      <label htmlFor="newTime">Comments</label>
      <input value={props.appointment.comments} onChange={(event) => props.newAppointmentChanged(event, "comments")} id="newComment" name="newComment"/>
      <button type="submit">{props.appointment.id == null ? 'Add Appointment' : 'Done'}</button>
    </form>

  )
}
export default AppointmentForm;
