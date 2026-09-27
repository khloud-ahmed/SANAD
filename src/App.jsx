import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import ProviderStatusCard from "./components/Dashboard/ProviderStatusCard/ProviderStatusCard";
import AppointmentCard from "./components/Dashboard/AppointmentCard/AppointmentCard";
import AppointmentsTable from "./components/Dashboard/AppointmentsTable/AppointmentsTable";
import RagAssistant from "./components/RagAssistant/RagAssistant";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="dashboard-main">
        <h1 className="dashboard-title">Clinical Appointments &amp; Operations</h1>

        <section className="dashboard-section">
          <h2>On-Duty Clinical Staff</h2>
          <ProviderStatusCard />
        </section>

        <section className="dashboard-section">
          <h2>Priority Consultations</h2>
          <AppointmentCard />
        </section>

        <section className="dashboard-section">
          <h2>All Scheduled Appointments</h2>
          <AppointmentsTable />
        </section>

        <section className="dashboard-section">
          <RagAssistant />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
