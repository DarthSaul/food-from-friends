import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AlertContext = React.createContext();

function AlertProvider({ children }) {
    const [alerts, updateAlerts] = useState([]);

    function setAlert(msg, type) {
        updateAlerts(prevAlerts => [
            ...prevAlerts,
            {
                id: uuidv4(),
                msg,
                type
            }
        ]);
    }

    function removeAlert(id) {
        updateAlerts(prevAlerts => prevAlerts.filter(obj => obj.id !== id));
    }

    return (
        <AlertContext.Provider value={{ alerts, setAlert, removeAlert }}>
            {children}
        </AlertContext.Provider>
    );
}

export { AlertProvider, AlertContext };
