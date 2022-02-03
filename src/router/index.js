import React from 'react';
import { Routes as Router, Route } from 'react-router';

import { Home } from '../pages/Home/index';
import { Interna } from '../pages/Interna/index';

export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/interna/:id" element={<Interna />} />
        </Router>
    );
}