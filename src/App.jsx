import React from 'react';
import styled from 'styled-components';


const Section1 = styled.div`
  display: block;
`;
const Test0 = styled.div`
display: flex;
justify-content : space-around;

`;

const Test = styled.div`
  background: white;
  display: flex;
  margin-left : 5rem;
  flex-direction : column;
  text-align : left;
  

`;
const Test1 = styled.div`

display: block;
text-align: left;
margin: 5rem;
width: 90%;
`;

const Test2 = styled.div`

display: block;
text-align: center;
flex-direction : column;
font-weight: bold;
color: purple;
width : 90%;
margin-left: 5rem;
justify-content: space-around;

`;
const Test4 = styled.div`

display: block;
text-align: center;
`;

const Test3 = styled.div`
display: flex;
justify-content : space-around;
border-radius : 1rem;
margin : 5rem;
`;

const StyledComponents = () => (

  <>
 
  <Test0>
  <img src="https://imgsrc.cineserie.com/2016/07/jean-claude-van-damme-photo-563ce47b0a441.jpg?ver=1" alt="Grapefruit slice atop a pile of other slices" />
  </Test0>  
  <Test>
      <h1>JCVD 2 le retour</h1>
      <h2>Description</h2>
  </Test>    
    <Test1>
      <p>Dans "JCVD 2 : LE RETOUR", Jean-Claude Van Damme incarne un ancien agent secret maladivement phobique des chiens, 
         Jean-Pierre Pooch, contraint de relever le défi ultime : sauver la ville des griffes malicieuses de petits toutous surdoués. 
         Cette comédie d'action délirante combine des cascades explosives avec l'humour irrésistible de JCVD, alors qu'il tente de maîtriser ses 
         craintes canines, d'apprivoiser des tout-petits aux supers pouvoirs intellectuels, 
         et de déjouer les plans machiavéliques de scientifiques félons. Préparez-vous à un festival de rires et d'action, 
         le tout en compagnie de l'homme au cœur tendre qui se bat pour les amis à quatre pattes !</p>
      </Test1>
  <Test2>
    <h2>subtitle</h2>
  </Test2>
  <Test4>
    <hr></hr>
  </Test4>
  <Test3>
    <button>Dothraki</button>
    <button>Klingon</button>
    <button>Sindarin</button>
    <button>Al Bhed</button>
  </Test3>
  
  </>
);

export default StyledComponents;