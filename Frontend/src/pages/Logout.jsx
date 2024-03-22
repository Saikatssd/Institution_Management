import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Actions/userAction';
const Logout = (role) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout(role));
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    // Define styles
    const styles = {
        logoutContainer: {
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#85769f66',
            color: 'black',
        },
        logoutMessage: {
            marginBottom: '20px',
            fontSize: '16px',
            textAlign: 'center',
        },
        logoutButton: {
            padding: '10px 20px',
            marginTop: '10px',
            borderRadius: '5px',
            fontSize: '16px',
            color: '#fff',
            cursor: 'pointer',
        },
        logoutButtonLogout: {
            backgroundColor: '#ea0606',
        },
        logoutButtonCancel: {
            backgroundColor: 'rgb(99, 60, 99)',
        }
    };

    return (
        <div style={styles.logoutContainer}>
            <p style={styles.logoutMessage}>Are you sure you want to log out?</p>
            <button style={{ ...styles.logoutButton, ...styles.logoutButtonLogout }} onClick={handleLogout}>Log Out</button>
            <button style={{ ...styles.logoutButton, ...styles.logoutButtonCancel }} onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default Logout;
