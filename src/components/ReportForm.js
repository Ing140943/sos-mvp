import React from 'react';
import { MapPin, Send } from 'lucide-react';

const locations = [
  'สยามสแควร์',
  'MBK เซ็นเตอร์', 
  'เซ็นทรัลเวิลด์',
  'terminal 21',
  'จตุจักร',
  'สนามหลวง',
  'วัดพระแก้ว',
  'ถนนข้าวสาร',
  'ตลาดนัดรถไฟ',
  'สีลม'
];

const problemTypes = [
  'อุบัติเหตุรถชน',
  'ไฟไหม้',
  'น้ำท่วม',
  'แผ่นดินไหว',
  'เหตุร้าย',
  'ปัญหาสาธารณสุข',
  'อื่นๆ'
];

const ReportForm = ({ newReport, setNewReport, submitReport }) => {
  return (
    <div className="emergency-card">
      <h2 className="card-title">
        <MapPin className="inline-block mr-2 text-red-500" />
        รายงานเหตุฉุกเฉิน
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="form-label">
            สถานที่เกิดเหตุ
          </label>
          <select
            value={newReport.location}
            onChange={(e) => setNewReport({...newReport, location: e.target.value})}
            className="form-input"
            required
          >
            <option value="">เลือกสถานที่</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">
            ประเภทปัญหา
          </label>
          <select
            value={newReport.problem}
            onChange={(e) => setNewReport({...newReport, problem: e.target.value})}
            className="form-input"
            required
          >
            <option value="">เลือกประเภทปัญหา</option>
            {problemTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">
            รายละเอียดเพิ่มเติม
          </label>
          <textarea
            value={newReport.description}
            onChange={(e) => setNewReport({...newReport, description: e.target.value})}
            className="form-textarea"
            rows="3"
            placeholder="อธิบายสถานการณ์..."
          />
        </div>

        <button
          onClick={submitReport}
          className="report-button"
        >
          <Send className="mr-2" />
          ส่งรายงาน
        </button>
      </div>
    </div>
  );
};

export default ReportForm;