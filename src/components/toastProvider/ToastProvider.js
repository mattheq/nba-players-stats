import React, { useState, useRef } from 'react';
import './ToastProvider.css';
import Toast from '../toast/Toast';
import { ToastContext } from '../contexts';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
            <TransitionGroup className="toast-container">
                {toasts.map((toast) =>
                    <CSSTransition key={toast.id} timeout={500} classNames="toast">
                        <Toast toast={toast} remove={() => removeToast(toast.id)} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </ToastContext.Provider>
    );
}