import React from 'react';
import { AlertTriangle } from 'lucide-react';

const EmergencyHeader = () => {
  return (
    <div className="emergency-header">
      <h1 className="emergency-title">
        <AlertTriangle className="inline-block mr-3" />
        ระบบรายงานเหตุฉุกเฉิน
      </h1>
      <p className="emergency-subtitle">รายงานเหตุฉุกเฉินและขอความช่วยเหลืออย่างรวดเร็ว</p>
    </div>
  );
};

export default EmergencyHeader;