// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// const Alert = ({ alerts }) =>
//   alerts.map((alert) => (
//     <div key={alert.id} className={`alert alert-${alert.alertType}`}>
//       {alert.msg}
//     </div>
//   ));

// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired
// };

// const mapStateToProps = (state) => ({
//   alerts: state.alert
// });

// export default connect(mapStateToProps)(Alert);


import React from "react";
import { useSelector } from "react-redux";
 
export default function Alert() {
  const alerts = useSelector((state) => state.alert);
 
  const alertMessage =
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
 
  return alertMessage;
}
