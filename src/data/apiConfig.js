// ============================================================
// PLACEHOLDER — real API integration point 
// ============================================================
// Right now every Dashboard component falls back to the mock data in
// ./mockData.js when it isn't given data via props (see each
// component's default-prop pattern).
//
// To switch to real data once the backend is ready:
//   1. Set VITE_API_BASE_URL in a .env file at the project root.
//   2. Call fetchProviders() / fetchAppointments() below (e.g. inside
//      a useEffect in App.jsx) and pass the result down as props:
//        <ProviderStatusCard providers={liveProviders} />
//        <AppointmentCard appointments={liveAppointments} />
//        <AppointmentsTable appointments={liveAppointments} />
//   3. No changes are needed inside the card/table components
//      themselves — they already accept real data through props;
//      the mock import is only a fallback for local development.
//
// This keeps the swap to one file instead of editing every component.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export async function fetchProviders() {
  const res = await fetch(`${API_BASE_URL}/providers`);
  if (!res.ok) {
    throw new Error(`Failed to fetch providers: ${res.status}`);
  }
  return res.json();
}

export async function fetchAppointments() {
  const res = await fetch(`${API_BASE_URL}/appointments`);
  if (!res.ok) {
    throw new Error(`Failed to fetch appointments: ${res.status}`);
  }
  return res.json();
}
