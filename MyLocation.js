import React from 'react';

let MyLocation = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  
  return (
    <p>My location is: </p>
  );
}
export default MyLocation
