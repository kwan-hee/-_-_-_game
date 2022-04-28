import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1. 박스 2개 (타이틀, 사진정보, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4, 결과를 가지고 누가 이겼는지 승패를 낸다.
//6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock:{
    name:"Rock",
    img:"https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8="
  },
  scissors:{
    name:"Scissors",
    img:"https://www.cchobby.com/media/catalog/product/cache/1951cbf4f719ca4f5ba028b4d0669068/1/1/11167_1_2.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result,setResult] = useState("");
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerchoice = randomChoice();
    setComputerSelect(computerchoice);
    setResult(judgement(choice[userChoice],computerchoice));
  };

  const judgement =(user,computer)=>{
    console.log("user:",user,"computer:",computer);

    // user == computer : tie
    // user == rock , computer == "scissors" : user Win
    // user == rock , computer == paper : user lost
    // user == scissors, computer == paper : user Win
    // user == scissors, computer == rock : user lost
    // user == paper , computer == rock : user Win
    // user == paper , computer == scissors : user lost

    if(user.name == computer.name){
      return "tie"
    } else if(user.name=="Rock") return computer.name == "Scissors"?"win":"lose"
      else if(user.name=="Scissors") return computer.name =="Paper"?"win":"lose"
      else if(user.name=="Paper") return computer.name =="Rock"?"win":"lose"

    
    // {
    //   if(computer.name=="Scissors"){
    //     return "Win"
    //   } else{
    //     return "lose"
    //   }
    


  };

  const randomChoice=()=>{
    let itemarray = Object.keys(choice);//Object.key() 객체에 키값만 뽑아서 array로 만들어주는 함수이다. 
    console.log("item array",itemarray);

    let randomItem = Math.floor(Math.random()*itemarray.length);
    let final = itemarray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
