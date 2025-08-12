import React, { useState, useEffect } from 'react';
import '../styles/EmergencyReportingSystem.css';
import EmergencyHeader from './EmergencyHeader';
import NotificationPanel from './NotificationPanel';
import ReportForm from './ReportForm';
import EmergencyCall from './EmergencyCall';
import RecentReports from './RecentReports';

const EmergencyReportingSystem = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      location: 'สยามสแควร์',
      problem: 'อุบัติเหตุรถชน',
      timestamp: new Date().toISOString(),
      status: 'รอการช่วยเหลือ'
    },
    {
      id: 2,
      location: 'MBK เซ็นเตอร์',
      problem: 'ไฟไหม้',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      status: 'กำลังดำเนินการ'
    }
  ]);
  
  const [newReport, setNewReport] = useState({
    location: '',
    problem: '',
    description: ''
  });

    const handleDeleteReport = (id) => {
    setReports(prev => prev.filter(report => report.id !== id));
  };
  
  const [notifications, setNotifications] = useState([]);

  // Request notification permission
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = (title, body) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/emergency-icon.png'
      });
    }
    
    // Add to internal notifications
    const newNotification = {
      id: Date.now(),
      title,
      body,
      timestamp: new Date().toISOString()
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
  };

  const submitReport = () => {
    if (newReport.location && newReport.problem) {
      const report = {
        id: Date.now(),
        location: newReport.location,
        problem: newReport.problem,
        description: newReport.description,
        timestamp: new Date().toISOString(),
        status: 'รอการช่วยเหลือ'
      };
      
      setReports(prev => [report, ...prev]);
      showNotification(
        'รายงานเหตุฉุกเฉินใหม่!',
        `${newReport.problem} ที่ ${newReport.location}`
      );
      
      setNewReport({ location: '', problem: '', description: '' });
    }
  };

  const makeEmergencyCall = (number) => {
    if (window.confirm(`โทรหา ${number} หรือไม่?`)) {
      showNotification('กำลังเชื่อมต่อ', `โทรหาหมายเลขฉุกเฉิน ${number}`);
    }
  };

  return (
    <div className="emergency-container">
      <div className="emergency-content">
        <EmergencyHeader />
        
        {notifications.length > 0 && (
          <NotificationPanel notifications={notifications} />
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <ReportForm 
            newReport={newReport}
            setNewReport={setNewReport}
            submitReport={submitReport}
          />
          
          <EmergencyCall makeEmergencyCall={makeEmergencyCall} />
        </div>

        <RecentReports reports={reports}  onDelete={handleDeleteReport} />
      </div>
    </div>
  );
};

export default EmergencyReportingSystem;