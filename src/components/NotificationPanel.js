import React from 'react';
import { Bell } from 'lucide-react';

const NotificationPanel = ({ notifications }) => {
  return (
    <div className="notification-panel">
      <h3 className="notification-title">
        <Bell className="inline-block mr-2" />
        การแจ้งเตือนล่าสุด
      </h3>
      <div className="space-y-2">
        {notifications.map(notif => (
          <div key={notif.id} className="notification-item">
            <strong>{notif.title}</strong> - {notif.body}
            <div className="notification-time">
              {new Date(notif.timestamp).toLocaleString('th-TH')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;