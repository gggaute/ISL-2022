export const mockChat = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return {
        id: 18,
        correctSolutionIndex: 1,
        sentenceWord1: 'Hvilket',
        sentenceWord2: 'ord',
        sentenceWord3: 'mangler',
        sentenceWord4: 'her?',
        sentenceWord5: '',
        sentenceWord6: '',
        sentenceWord7: '',
        sentenceWord8: '',
        sentenceWord9: '',
        sentenceWord10: '',
        sentenceWord11: '',
        sentenceWord12: '',
        sentenceWord13: '',
        sentenceWord14: '',
        sentenceWord15: '',
        answerWord1:'ord',
        answerWord2:'ost',
        answerWord3:'mamma',
        answerWord4:'Yusef',
        answerWord5:'sykle',
        answerWord6:'nabo',
    };
});
  
export default mock;