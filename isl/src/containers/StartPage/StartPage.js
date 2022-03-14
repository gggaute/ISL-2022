import React from 'react';
import tree from '../../assets/images/tree.png';
import forest from '../../assets/images/forest.png';
/**
 * The StartPage is the first page the user sees before logging in.
 * @author Phajsi
 * @returns The StartPage with links to the login and signup pages,
 * in addition to the DiPickle logo and the searchbar component.
 */
const StartPage = () => {
  return (
    <div>
      <img src={forest} alt="forest"/>
      <img src={tree} alt="tree" />
    </div>
  );
};

export default StartPage;
