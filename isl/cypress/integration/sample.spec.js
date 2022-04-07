/// <reference types="cypress" />

import { it, beforeEach } from 'mocha';

describe('App loop', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8000');
    })

    it('renders basic page', () => {
        cy.contains('Hjem')
    })
})