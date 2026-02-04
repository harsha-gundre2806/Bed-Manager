//for layout

import '../styles/Dashboard.css';

export default function DashboardLayout({
  title,
  sidebar,
  children,
  onBack,
  showBackButton = false,
}) {
  return (
    <div className="d-viewport">
      <div className="d-container">
        <aside className="d-sidebar">
          <h2 className="d-heading">{title}</h2>
          {sidebar}
        </aside>

        <main className="d-content">
          {showBackButton && (
            <button className="d-btn" onClick={onBack}>
              Back to Dashboard
            </button>
          )}

          <div className="d-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}






