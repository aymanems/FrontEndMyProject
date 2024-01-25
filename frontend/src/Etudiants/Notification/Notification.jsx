import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './notification.css'

function Notification(props) {
  localStorage.removeItem('messageArrived')
  props.setMessageArrived(false)
  const [notifications,setNotifications]=useState([])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des notifications', error);
      }
    };

    fetchNotifications();
  }, []);



  const markAsRead = async (notificationId) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/notifications/${notificationId}`);
      console.log(response.data.message);
  
      // Mettre à jour l'état local des notifications après la mise à jour réussie
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId ? { ...notification, read: true } : notification
        )
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la notification', error);
    }
  }


  return (
    <div > 
    <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
            <strong>{notification.title}</strong>
            <p>{notification.content}</p>
            {!notification.read && (
              <div className="notification-actions">
                <button onClick={() => markAsRead(notification.id)}>
                  Marquer comme lu
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notification