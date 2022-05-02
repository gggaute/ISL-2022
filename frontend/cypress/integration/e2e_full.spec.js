/// <reference types="cypress" />

import { it, beforeEach, before } from 'mocha';

/**
 * @author Gaute
 * E2E test for application
 * Dependent on specific order related to specific content. If content changes, test will not work
 */

describe('App loop', () => {

    before(() => {
        cy.visit('http://localhost:8000');
    })

    // HOVEDSIDE
    it('renders basic page', () => {
        cy.contains('Hjem')
    })

    it('clicks to begin set', () => {
        cy.get('[data-cy=card]:first').click()
        //cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
        cy.contains('SPILL')
    })

    // SPILL
    it('clicks to play set', () => {
        cy.get('#spillBtn').click()
        //cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
        cy.contains(/JA|NEI/g)
    })

    // COMPREHENSION
    it('clicks JA or NEI', () => {
        cy.get('.css-1u1qx3m:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after answer', () => {
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO COMPREHENSION
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains(/JA|NEI/g)
    })

    // COMPREHENSION
    it('clicks JA or NEI', () => {
        cy.get('.css-1u1qx3m:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after answer', () => {
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO COMPREHENSION
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains(/JA|NEI/g)
    })

    // COMPREHENSION
    it('clicks JA or NEI', () => {
        cy.get('.css-1u1qx3m:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after answer', () => {
        cy.get('[data-cy=arrow-button]').click()
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
        cy.get('.jss99:first').click()
        
        //click a different word
        cy.get('.jss99:first').click()

        //check answer
        cy.get('.css-66wrza:first').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('[data-cy=arrow-button]').click()
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
        cy.get('.jss113:first').click()
        
        //click a different word
        cy.get('.jss113:first').click()

        //check answer
        cy.get('.css-66wrza:first').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Fullfør sett')
    })
    it('clicks on Fullfør sett', () => {
        cy.get('.css-1u1qx3m').click()
        cy.contains('Kapittel 1: Sett 1')
    })

    // set 1 done, tested fill in word and comprehension

    it('clicks to begin set', () => {
        cy.get('a:nth-child(2) > div:first').click()
        //cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
        cy.contains('SPILL')
    })

    // SPILL
    it('clicks to play set', () => {
        cy.get('#spillBtn').click()
        //cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
        cy.contains('Sjekk svar')
    })

    //SORT SENTENCE
    it('clicks on words in sortSentence', () => {
        // click all words in and 1 back out
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        cy.get('.jss2:first').click()
        
        // check answer
        cy.get('[data-cy=check]').click()
        cy.contains(/Riktig!|Feil!/g)

        // go next with arrow
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO UNLOCK
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains('Hva ser du på bildet? Skriv ordet!')
    })

    // UNLOCK
    it('clicks through unlock', () => {
        // clicks three letters
        cy.get('#numpadButton1').click()
        cy.get('#numpadButton2').click()
        cy.get('#numpadButton3').click()

        //backspace
        cy.get('#backArrow').click()
        
        //finishes word
        cy.get('#numpadButton3').click()
        cy.get('#numpadButton4').click()
        cy.get('#numpadButton5').click()
        cy.get('#numpadButton5').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO UNLOCK
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains('Hva ser du på bildet? Skriv ordet!')
    })

    // UNLOCK
    it('clicks through unlock', () => {
        // clicks three letters
        cy.get('#numpadButton1').click()
        cy.get('#numpadButton2').click()
        cy.get('#numpadButton3').click()

        //backspace
        cy.get('#backArrow').click()
        
        //finishes word
        cy.get('#numpadButton3').click()
        cy.get('#numpadButton4').click()
        cy.get('#numpadButton5').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Neste oppgave')
    })

    // INTERMEDIARY PAGE TO UNLOCK
    it('clicks on neste oppgave', () => {
        cy.get('button:first').click()
        cy.contains('Hva ser du på bildet? Skriv ordet!')
    })

    // UNLOCK
    it('clicks through unlock', () => {
        cy.get('#numpadButton4').click()
        cy.get('#numpadButton5').click()
        cy.get('#numpadButton5').click()
        cy.contains(/Riktig!|Feil!/g)

        //click arrow
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Fullfør sett')
    })

    // FULLFØR SETT
    it('Click fullfør sett', () => {
        cy.get('.css-1u1qx3m').click()
    })

// set 2 finished, tested all but chat


it('clicks to begin set', () => {
    cy.get('a:nth-child(3) > div:first').click()
    //cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
    cy.contains('SPILL')
})

// SPILL
it('clicks to play set', () => {
    cy.get('#spillBtn').click()
    //cy.contains('Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.')
    cy.contains('CHAT')
})
// CHAT

    // FIRST TASK
    it('clicks first answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after first answer', () => {
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Hvor kommer du fra?')
    })

    // SECOND TASK
    it('clicks second answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after second answer', () => {
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Snakker du engelsk?')
    })

    // THIRD TASK
    it('clicks third answer in chat', () => {
        cy.get('[data-cy=chat-answer-button]:first').click()
        cy.contains(/Riktig!|Feil!/g)
    })
    it('clicks on arrow after third answer', () => {
        cy.get('[data-cy=arrow-button]').click()
        cy.contains('Fullfør sett')
    })

    // FULLFØR SETT
    it('Click fullfør sett', () => {
        cy.get('.css-1u1qx3m').click()
    })


})