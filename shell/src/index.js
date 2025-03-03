import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
    import('mfe_header/Header')
        .then((HeaderModule) => {
            const Header = HeaderModule.Header;
            const root = document.getElementById('root');
            if (root) {
                ReactDOM.createRoot(root).render(<Header />);
            } else {
                console.error('Element #root not found!');
            }
        })
        .catch((err) => console.error('Error loading MFE:', err));
});
