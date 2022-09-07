
export default function yearsAgo(param1) {
    var date = new Date ();
    var thisYear = date.getFullYear();
    
    return thisYear - param1;
  }