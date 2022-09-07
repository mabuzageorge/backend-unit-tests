

export default function isWeekday(name) {
    switch (name) {
      case 'Monday':
      case 'Tuesday':
      case 'Wednesday': 
      case 'Thursday':
      case 'Friday':
        return true
        break;
        
      default: 
        return false;
        break;
        }
    };