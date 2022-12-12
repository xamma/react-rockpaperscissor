import React from 'react'
import styled from 'styled-components';
import { FaHandRock, FaHandPaper, FaHandScissors, FaSkull, FaRobot, FaUser } from "react-icons/fa"

const Button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 5px;
cursor: pointer;
`;

const icons = {
  rock: FaHandRock,
  paper: FaHandPaper,
  scissors: FaHandScissors,
  skull: FaSkull,
  robot: FaRobot,
  user: FaUser
};

const Play = () => {

  const [isChosen, setIsChosen] = React.useState(false)
  const [userChoice, setUserChoice] = React.useState("")
  const [computerChoice, setComputerChoice] = React.useState("")
  const [result, setResult] = React.useState("")
  const choices = ["ROCK", "PAPER", "SCISSORS"]
  // console.log(userChoice, computerChoice, result)

  function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  function getUserChoiceRock() {
    setUserChoice("ROCK")
    getComputerChoice()
    setIsChosen(true)
  }

  function getUserChoicePaper() {
    setUserChoice("PAPER")
    getComputerChoice()
    setIsChosen(true)
  }

  function getUserChoiceScissors() {
    setUserChoice("SCISSORS")
    getComputerChoice()
    setIsChosen(true)
  }

  function playAgain() {
    setIsChosen(false)
    setUserChoice("")
    setComputerChoice("")
    setResult("")
  }

  React.useEffect(() => {
    const evaluation = userChoice + computerChoice

    switch (evaluation) {
      case "ROCKROCK":
        setResult("Tie! Noone wins, try again.")
        break;
      case "PAPERPAPER":
        setResult("Tie! Noone wins, try again.")
        break;
      case "SCISSORSSCISSORS":
        setResult("Tie! Noone wins, try again.")
        break;
      case "ROCKPAPER":
        setResult("You lose!")
        break;
      case "PAPERROCK":
        setResult("You won! Congratulations.")
        break;
      case "ROCKSCISSORS":
        setResult("You won! Congratulations.")
        break;
      case "PAPERSCISSORS":
        setResult("You lose!")
        break;
      case "SCISSORSROCK":
        setResult("You lose!")
        break;
      case "SCISSORSPAPER":
        setResult("You won! Congratulations.")
        break;
      default:
        setResult("Good luck!")
    }
    
  }, [computerChoice, userChoice])

  
  return (
    <div className='user--interface'>
      <h1 className='interface--greeting'>Welcome to Rock-Paper-Scissors! Time to play.</h1>
      
      { !isChosen ? <div className='user--choices'>
      <h3>Please make your choice: </h3>
        <Button onClick={getUserChoiceRock}>
          ROCK
        </Button>
        <Button onClick={getUserChoicePaper}>
          PAPER
        </Button>
        <Button onClick={getUserChoiceScissors}>
          SCISSORS
        </Button>
      </div> : "" }
      { isChosen ? <div className='player--choices'>
        <div className='player--screen'>
          <h2><icons.user className='user--icon'/> chose: </h2>
          { userChoice === "ROCK" ? <icons.rock /> : "" } 
          { userChoice === "PAPER" ? <icons.paper /> : "" } 
          { userChoice === "SCISSORS" ? <icons.scissors /> : "" } 
        </div>
        <div className='computer--screen'>
          <h2><icons.robot className='computer--icon'/> chose: </h2>
          { computerChoice === "ROCK" ? <icons.rock /> : "" } 
          { computerChoice === "PAPER" ? <icons.paper /> : "" } 
          { computerChoice === "SCISSORS" ? <icons.scissors /> : "" } 
        </div>
      </div> : "" }
      <div className='match--evaluation'>{result}</div>
      { isChosen ? <div className='play--again'>
        <Button onClick={playAgain}>
          Play again
        </Button>
      </div> : "" }
    </div>
  )
}

export default Play