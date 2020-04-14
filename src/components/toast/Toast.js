import React, { useState, useEffect, useRef } from 'react';
import './Toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

const TYPE = {
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning'
};

const TOAST = {
    SUCCESS: { title: 'Success', icon: faCheckCircle },
    DANGER: { title: 'Error', icon: faExclamationCircle },
    WARNING: { title: 'Warning', icon: faExclamationTriangle },
};

export default function Toast({ toast, remove }) {
    let [toastStyle, setToastStyle] = useState(TOAST.SUCCESS);
    let toastRemoveRef = useRef();
    toastRemoveRef.current = remove;

    useEffect(() => {
        switch(toast.type) {
            case TYPE.SUCCESS:
                setToastStyle(TOAST.SUCCESS);
                break;
            case TYPE.DANGER:
                setToastStyle(TOAST.DANGER);
                break;
            case TYPE.WARNING:
                setToastStyle(TOAST.WARNING);
                break;
            default:
                setToastStyle(TOAST.SUCCESS);
        }
    }, [toast.type]);

    useEffect(() => {
        const timeoutId = setTimeout(() => toastRemoveRef.current(), 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`toast toast-${toast.type}`}>
            <FontAwesomeIcon className={`toast-icon icon-${toast.type}`} icon={toastStyle.icon} />
            <div className="toast-content">
                <p className="toast-title">{toastStyle.title}</p>
                <p className="toast-message">{toast.message}</p>
            </div>
            <FontAwesomeIcon className="toast-icon icon-close" icon={faTimes} onClick={remove} />
        </div>
    );
}