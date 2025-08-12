import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';

const emergencyNumbers = [
  { name: '191 (ตำรวจ)', number: 'ABCD' },
  { name: '1669 (การแพทย์ฉุกเฉิน)', number: 'ABCD' },
  { name: '199 (ดับเพลิง)', number: 'ABCD' },
  { name: '1784 (ป้องกันภัย)', number: 'ABCD' }
];

const EmergencyCall = ({ makeEmergencyCall }) => {
  return (
    <div className="emergency-card">
      <h2 className="card-title">
        <Phone className="inline-block mr-2 text-green-500" />
        โทรฉุกเฉิน
      </h2>
      
      <div className="space-y-3">
        {emergencyNumbers.map(emergency => (
          <button
            key={emergency.number}
            onClick={() => makeEmergencyCall(emergency.number)}
            className="emergency-call-button"
          >
            <Phone className="mr-3" />
            {emergency.name}
          </button>
        ))}
      </div>

      <div className="warning-box">
        <p className="warning-text">
          <AlertTriangle className="inline-block mr-2 w-4 h-4" />
          ในกรณีฉุกเฉินจริง กรุณาโทรหาหมายเลขที่เหมาะสมทันที
        </p>
      </div>
    </div>
  );
};

export default EmergencyCall;