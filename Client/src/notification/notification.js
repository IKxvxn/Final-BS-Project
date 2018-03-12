import {NotificationManager} from 'react-notifications';
import * as NT from './noticationTags'

export function showNotification(type, message) {
      switch (type) {
        case NT.SUCCESS:
          NotificationManager.success(message);
          break;
        case NT.WARNING:
          NotificationManager.warning(message);
          break;
        case NT.ERROR:
          NotificationManager.error(message);
          break;
      
    };
}