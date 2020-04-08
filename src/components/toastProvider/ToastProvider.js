import React, { useState, useRef } from 'react';
import './ToastProvider.css';
import Toast from '../toast/Toast';
import { ToastContext } from '../contexts';

export default function ToastProvider({ children }) {
    let [toasts, setToasts] = useState([]);
    let toastsCount = useRef(0);

    const addToast = (message, type) => {
        const id = toastsCount.current++;
        const toast = { message, type, id };
        setToasts([...toasts, toast]);
    };

    const removeToast = (id) => setToasts(toasts.filter(toast => toast.id !== id));

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (<Toast toast={toast} key={toast.id} remove={() => removeToast(toast.id)} />))}
            </div>
        </ToastContext.Provider>
    );
}