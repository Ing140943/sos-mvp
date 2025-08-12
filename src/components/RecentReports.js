import React from "react";
import { MapPin, Trash2 } from "lucide-react"; // ใช้ไอคอนถังขยะ
import "../styles/RecentReport.css";

const RecentReports = ({ reports, onDelete }) => {
  return (
    <div className="mt-8 emergency-card">
      <h2 className="card-title">รายงานล่าสุด</h2>
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="report-item">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="report-problem">{report.problem}</h3>
                <p className="report-location">
                  <MapPin className="inline-block mr-1 w-4 h-4" />
                  {report.location}
                </p>
              </div>
              <div className="status-delete-container">
                <span
                  className={`status-badge ${
                    report.status === "รอการช่วยเหลือ"
                      ? "status-pending"
                      : report.status === "กำลังดำเนินการ"
                      ? "status-processing"
                      : "status-resolved"
                  }`}
                >
                  {report.status}
                </span>
                <button
                  onClick={() => onDelete(report.id)}
                  className="delete-button"
                  aria-label="ลบรายงาน"
                  title="ลบรายงาน"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>
            <p className="report-time">
              รายงานเมื่อ: {new Date(report.timestamp).toLocaleString("th-TH")}
            </p>
            {report.description && (
              <p className="report-description">{report.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReports;
