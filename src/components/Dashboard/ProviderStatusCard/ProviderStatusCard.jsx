import "./ProviderStatusCard.css";
import { providers as mockProviders } from "../../../data/mockData";

const STATUS_DISPLAY = {
  available: { label: "Available Now", color: "green" },
  "in-session": { label: "In Session", color: "yellow" },
  offline: { label: "Offline", color: "gray" }
};

function ProviderStatusCard({ providers }) {
  const list = providers || mockProviders;

  return (
    <div className="provider-status-list">
      {list.map((provider) => {
        const statusInfo =
          STATUS_DISPLAY[provider.status] || { label: provider.status, color: "gray" };

        return (
          <div className="provider-card" key={provider.id}>
            <div className="provider-avatar">{provider.avatarInitials}</div>

            <div className="provider-card-body">
              <div className="provider-name-row">
                <h3>{provider.name}</h3>
                {provider.verified && (
                  <span className="verified-badge" title="Verified provider">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                )}
              </div>

              <p className="provider-specialty">{provider.specialty}</p>

              <div className="provider-status-row">
                <span className={`status-dot status-${statusInfo.color}`}></span>
                <span className="status-label">{statusInfo.label}</span>
              </div>

              <p className="provider-appointments">
                {provider.todayAppointments} appt{provider.todayAppointments === 1 ? "" : "s"} today
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProviderStatusCard;
