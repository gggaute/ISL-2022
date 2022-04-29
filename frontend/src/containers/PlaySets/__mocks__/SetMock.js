export const mockChat = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {
    id: 5,
    title: 'Hverdagsliv',
    comprehension1: 19,
    comprehension2: null,
    comprehension3: null,
    comprehension4: null,
    comprehension5: null,
    comprehension6: null,
    chat1: 22,
    chat2: null,
    chat3: null,
    chat4: null,
    chat5: null,
    chat6: null,
    sortSentence1: 11,
    sortSentence2: null,
    sortSentence3: null,
    sortSentence4: null,
    sortSentence5: null,
    sortSentence6: null,
    fillInWord1: 18,
    fillInWord2: null,
    fillInWord3: null,
    fillInWord4: null,
    fillInWord5: null,
    fillInWord6: null,
    unlock1: 14,
    unlock2: null,
    unlock3: null,
    unlock4: null,
    unlock5: null,
    unlock6: null,
  };
});  

export default mock