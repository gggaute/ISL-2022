/// <reference types="cypress" />

import { it, beforeEach, before } from 'mocha';

describe('App loop', () => {

    before(() => {
        cy.visit('http://localhost:8000');
    })

    // HOVEDSIDE
    it('renders basic page', () => {
        cy.contains('Hjem')
    })

    it('clicks to begin set', () => {
        cy.get('.jss16:first').click()
        cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
    })


    // CHAT

    // FIRST TASK
    it('clicks first answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after first answer', () => {
        cy.get('.jss43:first').click()
        cy.contains('svar2')
    })

    // SECOND TASK
    it('clicks second answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after second answer', () => {
        cy.get('.jss43:first').click()
        cy.contains('svar3')
    })

    // THIRD TASK
    it('clicks third answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after third answer', () => {
        cy.get('.jss43:first').click()
        cy.contains('svar4')
    })

    // FOURTH TASK
    it('clicks fourth answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after fourth answer', () => {
        cy.get('.jss43:first').click()
        cy.contains('svar5')
    })

    // FIFTH TASK
    it('clicks fifth answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after fifth answer', () => {
        cy.get('.jss43:first').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO COMPREHENSION
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains(/JA|NEI/g)
    })


    // COMPREHENSION
    it('clicks JA or NEI', () => {
        cy.get('.MuiButton-root:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after answer', () => {
        cy.get('.jss43:first').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO SORT SENTENCE
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains('Sjekk svar')
    })

    //SORT SENTENCE
    it('clicks on words in sortSentence', () => {
        // click all words in and 1 back out
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        
        // check answer
        cy.get('[data-cy=check]').click()
        cy.contains(/Riktig!|Feil!/g)

        // go next with arrow
        cy.get('.jss43:first').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO UNLOCK
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains('Hva ser du på bildet? Stav ordet!')
    })
    it('clicks neste oppgave correctly', () => {
        cy.contains('Hva ser du på bildet? Stav ordet!')
    })

    // UNLOCK
    it('clicks through unlock', () => {
        // clicks three letters
        cy.get('#numpadButton1').click()
        cy.get('#numpadButton2').click()
        cy.get('#numpadButton3').click()

        //backspace
        cy.get('button:first').click()
        
        //finishes word
        cy.get('#numpadButton3').click()
        cy.get('#numpadButton4').click()
        cy.get('#numpadButton5').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('.jss43:first').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO FILL IN WORD
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains('Sjekk svar')
    })

    // FILL IN WORD

    it('clicks through fillInWord', () => {
        //click a word
        cy.get('button:first').click()
        
        //click a different word
        cy.get('button:first').click()

        //check answer
        cy.get('.checkAnswerBtn').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('.jss43:first').click()
        cy.contains('Fullfør sett')
    })

    // FINISH END TO END RUNTHROUGH
    it('clicks on Fullfør sett', () => {
        cy.get('button:first').click()
        cy.contains('runthrough')
    })
})