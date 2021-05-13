import React, { useContext } from 'react';
// import PropTypes from 'prop-types'

import { AlertContext } from '../../AlertContext';

const Alert = () => {
    const { alerts } = useContext(AlertContext);
    const alertComponents =
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        ));
    return <div>{alertComponents}</div>;
};

export default Alert;
