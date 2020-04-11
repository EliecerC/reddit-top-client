/**
 * 
 * @param {number} timestamp
 * @returns {string} 
 */
export function displayDate(timestamp) {
  let difference = ''; 
  const currentTimestamp = new Date().getTime();
  const diff = currentTimestamp - (timestamp * 1000);
  const hours = Number(diff / 3.6e+6).toFixed(0);
  
  if (hours >= 24) {
    const days = Math.round(hours / 24);
    difference = days > 1 ? `${days} days` : 'a day';
  } else if (hours >= 1) {
    difference = hours > 1 ? `${hours} hours`: `an hour`;
  } else {
    const minutes = diff / 60000;
    difference = minutes > 1 ? `${minutes} minutes`: `a minute`;
  }

  return `${difference} ago`;
}
