export const mockChat = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return {
      id: 19,
      chat: 'Ola har kjøpt middag, du trenger ikke handle.',
      question: 'Må du handle?',
      answer: 'false',
      explanation: 'Ola har allerede handlet',
    };
});

export default mock;
  