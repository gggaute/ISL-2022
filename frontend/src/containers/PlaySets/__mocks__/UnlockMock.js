export const mockChat = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return {
        id: 14,
        correctSolution:'egg',
        solutionImage:'http://localhost:8000/media/images/egg.png',
        letter1: 'e',
        letter2: 'p',
        letter3: 'g', 
        letter4: 't', 
        letter5: 'b', 
        letter6: 'o', 
        letter7: 'k', 
        letter8: 'u', 
        letter9: 'l',
    };
});
  
export default mock;