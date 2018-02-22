import {NotificationManager} from 'react-notifications';
import * as NT from './noticationTags'

export function showNotification(type, message) {
      switch (type) {
        case 'info':
          NotificationManager.info(message);
          break;
        case NT.SUCCESS:
          NotificationManager.success(message);
          break;
        case NT.WARNING:
          NotificationManager.warning(message);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      
    };
}