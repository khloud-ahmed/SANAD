import { PROVIDER_STATUS } from "./providerStatus";
import { APPOINTMENT_STATUS, VISIT_TYPE } from "./appointmentStatus";

// NOTE: This is synthetic development data only — no real patient or
// provider information. Patient names are intentionally generic
// ("Patient A", "Patient B"...) per the project's data-handling rule
// that dev/staging environments must never use real-looking records.

export const providers = [
  {
    id: 1,
    name: "Dr. David Al-Mansoor",
    specialty: "Cardiology",
    verified: true,
    avatarInitials: "DA",
    status: PROVIDER_STATUS.AVAILABLE,
    todayAppointments: 6
  },
  {
    id: 2,
    name: "Dr. Elena Morales",
    specialty: "Endocrinology",
    verified: true,
    avatarInitials: "EM",
    status: PROVIDER_STATUS.IN_SESSION,
    todayAppointments: 3
  },
  {
    id: 3,
    name: "Dr. Raymond Kim",
    specialty: "Neurology",
    verified: true,
    avatarInitials: "RK",
    status: PROVIDER_STATUS.AVAILABLE,
    todayAppointments: 3
  },
  {
    id: 4,
    name: "Dr. Leila Chen",
    specialty: "Internal Medicine",
    verified: true,
    avatarInitials: "LC",
    status: PROVIDER_STATUS.OFFLINE,
    todayAppointments: 0
  }
];

export const appointments = [
  {
    id: 1,
    patientName: "Patient A",
    date: "Today, Oct 24",
    time: "10:15 AM",
    doctorName: "Dr. David Al-Mansoor",
    specialty: "Cardiology",
    visitType: VISIT_TYPE.VIDEO,
    status: APPOINTMENT_STATUS.CONFIRMED
  },
  {
    id: 2,
    patientName: "Patient B",
    date: "Today, Oct 24",
    time: "11:30 AM",
    doctorName: "Dr. Elena Morales",
    specialty: "Endocrinology",
    visitType: VISIT_TYPE.IN_PERSON,
    status: APPOINTMENT_STATUS.PENDING
  },
  {
    id: 3,
    patientName: "Patient C",
    date: "Today, Oct 24",
    time: "02:00 PM",
    doctorName: "Dr. Raymond Kim",
    specialty: "Neurology",
    visitType: VISIT_TYPE.IN_PERSON,
    status: APPOINTMENT_STATUS.RESCHEDULED
  },
  {
    id: 4,
    patientName: "Patient D",
    date: "Today, Oct 24",
    time: "09:45 AM",
    doctorName: "Dr. Leila Chen",
    specialty: "Internal Medicine",
    visitType: VISIT_TYPE.VIDEO,
    status: APPOINTMENT_STATUS.CANCELLED
  },
  {
    id: 5,
    patientName: "Patient E",
    date: "Today, Oct 24",
    time: "09:00 AM",
    doctorName: "Dr. David Al-Mansoor",
    specialty: "Cardiology",
    visitType: VISIT_TYPE.IN_PERSON,
    status: APPOINTMENT_STATUS.COMPLETED
  },
  {
    id: 6,
    patientName: "Patient F",
    date: "Today, Oct 24",
    time: "04:00 PM",
    doctorName: "Dr. Raymond Kim",
    specialty: "Neurology",
    visitType: VISIT_TYPE.IN_PERSON,
    status: APPOINTMENT_STATUS.CONFIRMED
  }
];
