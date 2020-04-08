import React, { useState, useEffect, useRef } from 'react';
import './Toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Toast({ toast, remove }) {
    let [toastStyle, setToastStyle] = useState({
        title: 'Success',
        icon: faCheckCircle
    });
    let toastRemoveRef = useRef();
    toastRemoveRef.current = remove;

    useEffect(() => {
        switch(toast.type) {
            case 'success':
                setToastStyle({ title: 'Success', icon: faCheckCircle });
                break;
            case 'danger':
                setToastStyle({ title: 'Error', icon: faExclamationCircle });
                break;
            case 'warning':
                setToastStyle({ title: 'Warning', icon: faExclamationTriangle });
                break;
            default:
                setToastStyle({ title: 'Success', icon: faCheckCircle });
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