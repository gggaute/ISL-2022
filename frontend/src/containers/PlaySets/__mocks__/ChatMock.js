export const mockChat = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {
    id: 22,
    sendericon: '',
    receivericon: '',
    answer11: 'Halv åtte',
    answer12: 'I morgen',
    correctanswer1: 'Torsdag',
    chatquestion1: 'Hvilken dag er det i dag?',
    explanation1: 'Spørsmålet handler om hvilken ukedag det er',
    answer21: '',
    answer22: '',
    correctanswer2: '',
    chatquestion2: '',
    explanation2: '',
    answer31: '',
    answer32: '',
    correctanswer3: '',
    chatquestion3: '',
    explanation3: '',
    answer41: '' ,
    answer42: '',
    correctanswer4: '',
    chatquestion4: '',
    explanation4:'',
    answer51:'',
    answer52:'',
    correctanswer5:'',
    chatquestion5:'',
    explanation5:'',
  };
});

export default mock;