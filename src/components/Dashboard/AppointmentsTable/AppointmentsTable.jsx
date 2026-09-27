import "./AppointmentsTable.css";
import { appointments as mockAppointments } from "../../../data/mockData";

const STATUS_COLOR = {
  confirmed: "green",
  pending: "yellow",
  rescheduled: "blue",
  cancelled: "red",
  completed: "gray"
};

/**
 * Single dashboard table instance listing all appointments.
 * Pass `appointments` as a prop for real data; falls back to mock
 * data so it also renders standalone during development.
 *
 * NOTE: pagination was intentionally left out of this table for now
 * — it wasn't part of the required scope for this task (see
 * docs/week-2-notes.md, "Scope").
 */
function AppointmentsTable({ appointments }) {
  const list = appointments || mockAppointments;

  return (
    <div className="appointments-table-wrapper">
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Specialty</th>
            <th>Date</th>
            <th>Time</th>
            <th>Visit Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((appt) => {
            const color = STATUS_COLOR[appt.status] || "gray";
            return (
              <tr key={appt.id}>
                <td>{appt.patientName}</td>
                <td>{appt.doctorName}</td>
                <td>{appt.specialty}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td className="capitalize">{appt.visitType.replace("-", " ")}</td>
                <td>
                  <span className={`status-badge status-${color}`}>{appt.status}</span>
                </td>
                <td>
                  <button className="table-action-btn">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;
