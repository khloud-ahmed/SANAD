# Week 2 — Dashboard Components (SANAD)

## Task

Implement reusable appointment/provider status cards and one
dashboard table using supplied mock data.

## Current Phase

Implementation and Testing — Complete (mock data), API integration pending

## Planned Technologies

- React
- Vite
- JavaScript
- CSS
- Font Awesome (icons)

## Scope

Required deliverable (per the task):

- `ProviderStatusCard` — reusable, repeated once per provider
- `AppointmentCard` — reusable, repeated once per appointment
- `AppointmentsTable` — single instance, lists all appointments

**Added beyond the required scope:** `Navbar` and `Footer` shell
components, and a `RagAssistant` placeholder box. These were a
deliberate choice to build the full page shown in the reference
design, not an oversight of the task's scope. They are called out
explicitly here so the required deliverable (the 3 components above)
stays clearly separable from the additions — see "Out-of-scope
additions" below.

Full role-based access (patients, doctors, clinic staff, admins) from
the SANAD product itself is out of scope for this task; the dashboard
here is a static/mock view for a single clinical-staff perspective.

## Implementation

### Data Layer

- `data/providerStatus.js` — `PROVIDER_STATUS` constants
  (`AVAILABLE`, `IN_SESSION`, `OFFLINE`).
- `data/appointmentStatus.js` — `APPOINTMENT_STATUS` constants
  (`CONFIRMED`, `PENDING`, `RESCHEDULED`, `CANCELLED`, `COMPLETED`) and
  `VISIT_TYPE` constants (`VIDEO`, `IN_PERSON`).
- `data/mockData.js` — synthetic providers and appointments.
  Patient names are intentionally generic (`Patient A`, `Patient B`...)
  rather than realistic-looking names. This follows the SANAD project's
  own data-handling rule that development/staging environments must
  use synthetic or de-identified data, never real-looking patient
  records, even as placeholders.

Constants are used instead of raw strings for the same reason as the
Week 1 shell's `ROLES`: a typo in a status value (e.g. `"Available"`
instead of `"available"`) fails as a visible missing lookup instead of
silently not matching anywhere.

### Component Design: props with a mock-data fallback

Each of the three required components accepts its data as a prop
(`providers` / `appointments`) so it can later receive real API data
without any changes to the component itself. If no prop is passed, the
component falls back to the local mock data in `data/mockData.js`, so
it also renders correctly on its own during development or in a demo.

```jsx
function ProviderStatusCard({ providers }) {
  const list = providers || mockProviders;
  // ...
}
```

This was chosen over two more extreme alternatives — a component that
only accepts props (harder to demo standalone) or a component that only
reads its own mock data internally (not reusable with real data at
all) — as a middle ground that satisfies both the task's explicit
"reusable" requirement and the practical need to see it working
immediately.

### ProviderStatusCard

- Avatar (initials), name, a verified checkmark shown only when
  `provider.verified === true` (conditional rendering, not always shown).
- Specialty, a colored status dot + label from a `STATUS_DISPLAY` map,
  and today's appointment count.

### AppointmentCard

- Patient name, date/time, doctor + specialty, a visit-type icon
  (video vs. in-person), and a colored status badge.
- The action button is status- and visit-type-aware, handled by one
  `renderActionButton()` lookup function rather than duplicated JSX
  per case:
  - Confirmed + video → "Join Room"
  - Pending → "Review / Check-in"
  - Rescheduled → "Confirm New Slot"
  - Cancelled / Completed → no button

### AppointmentsTable

- Columns: Patient, Doctor, Specialty, Date, Time, Visit Type, Status,
  Actions.
- Status shown with the same colored-badge convention as the
  appointment card, for visual consistency across components.
- Pagination was intentionally left out — it was not part of the
  required scope for this task, and the reference design's page count
  (48 appointments) is not reflected in the current mock data set.

### API integration point (placeholder, not implemented)

`data/apiConfig.js` defines `fetchProviders()` and
`fetchAppointments()` against a `VITE_API_BASE_URL` environment
variable. Nothing calls them yet. The intended integration path is:

1. Call them from `App.jsx` (e.g. in a `useEffect`) once the backend
   exists.
2. Pass the results down as `providers` / `appointments` props to the
   three components above.
3. No changes are needed inside the components themselves, since they
   already read data through props — only the mock-data fallback stops
   being used.

This was added ahead of time .
### RAG assistant box (placeholder, not implemented)

`components/RagAssistant/RagAssistant.jsx` is a UI-only stand-in for a
"ask a question about this data, get a grounded answer + chart" feature
requested in the same round of reviewer feedback (originally discussed
for the Audex Finance page, added here as a visible placeholder since
 the real integration ).

Important: it does **not** call any AI/RAG service. Submitting a
question shows a static placeholder answer and an empty chart box, so
nothing on screen is presented as if it were a real, grounded response.
The component's file header documents the intended request/response
shape for whoever wires up the real service later.


## Testing

| Check | Result |
|---|---|
| `ProviderStatusCard` renders all mock providers with correct status colors | ✅ |
| Verified badge only shows when `verified === true` | ✅ |
| `AppointmentCard` shows the correct action button per status/visit-type combination | ✅ |
| `AppointmentsTable` renders all mock appointments with matching status badges | ✅ |
| All three components render correctly with no `providers`/`appointments` prop passed (mock fallback) | ✅ |
| `npm run build` completes with no errors | ✅ |
| Layout is responsive: cards wrap/stack and the table scrolls horizontally on narrow viewports | ✅ |

## Evidence

-  [](Screenshots/01_image.png).

- [](Screenshots/02_image.png).

- [](Screenshots/03_image.png).

.

## Notes and Assumptions

- All data is mock/synthetic; no real patient or provider information
  is used anywhere in this codebase.
- The design reference used was a Stitch-generated mockup based on a
  prompt describing the three required components plus the SANAD
  project's actual functional requirements (provider verification,
  specialty-based matching, visit types).
- Real API integration and the real RAG service are both explicitly
  out of scope for this task and are documented above only as
  placeholders/integration points for future work.
