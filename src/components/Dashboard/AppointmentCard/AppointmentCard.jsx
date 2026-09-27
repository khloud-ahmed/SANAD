import "./AppointmentCard.css";
import { appointments as mockAppointments } from "../../../data/mockData";
import { APPOINTMENT_STATUS, VISIT_TYPE } from "../../../data/appointmentStatus";

const STATUS_DISPLAY = {
  [APPOINTMENT_STATUS.CONFIRMED]: { label: "Confirmed", color: "green" },
  [APPOINTMENT_STATUS.PENDING]: { label: "Pending", color: "yellow" },
  [APPOINTMENT_STATUS.RESCHEDULED]: { label: "Rescheduled", color: "blue" },
  [APPOINTMENT_STATUS.CANCELLED]: { label: "Cancelled", color: "red" },
  [APPOINTMENT_STATUS.COMPLETED]: { label: "Completed", color: "gray" }
};

// The action button depends on both status AND visit type, so it's
// kept as one small lookup function rather than duplicated JSX per case.
function renderActionButton(appointment) {
  if (
    appointment.status === APPOINTMENT_STATUS.CONFIRMED &&
    appointment.visitType === VISIT_TYPE.VIDEO
  ) {
    return <button className="action-btn action-btn-primary">Join Room</button>;
  }
  if (appointment.status === APPOINTMENT_STATUS.PENDING) {
    return <button className="action-btn action-btn-secondary">Review / Check-in</button>;
  }
  if (appointment.status === APPOINTMENT_STATUS.RESCHEDULED) {
    return <button className="action-btn action-btn-secondary">Confirm New Slot</button>;
  }
  return null; // Cancelled / Completed: no action needed
}

/**
 * Reusable appointment card, repeated once per appointment.
 * Pass `appointments` as a prop for real data; falls back to mock
 * data so it also renders standalone during development.
 */
function AppointmentCard({ appointments }) {
  const list = appointments || mockAppointments;

  return (
    <div className="appointment-card-list">
      {list.map((appt) => {
        const statusInfo =
          STATUS_DISPLAY[appt.status] || { label: appt.status, color: "gray" };
        const isVideo = appt.visitType === VISIT_TYPE.VIDEO;

        return (
          <div className="appointment-card" key={appt.id}>
            <div className="appointment-card-header">
              <span className="visit-type-icon" title={isVideo ? "Video consult" : "In-person"}>
                <i className={`fa-solid ${isVideo ? "fa-video" : "fa-hospital"}`}></i>
              </span>
              <span className={`status-badge status-${statusInfo.color}`}>
                {statusInfo.label}
              </span>
            </div>

            <h3 className="appointment-patient">{appt.patientName}</h3>
            <p className="appointment-datetime">
              {appt.date} · {appt.time}
            </p>
            <p className="appointment-doctor">
              {appt.doctorName} — {appt.specialty}
            </p>

            <div className="appointment-actions">{renderActionButton(appt)}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AppointmentCard;
