let score = 0;
const score_span = document.getElementById("score");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissors");
const paper = document.getElementById("paper");
const container_options = document.getElementById("options-container");
const results_options = document.getElementById("options-result");
const result_texto = document.getElementById('result-text');
const user_move = document.getElementById('user');
const comp_move = document.getElementById('comp');
const user_image = document.getElementById('user-image');
const comp_image = document.getElementById('comp-image');
const button_again = document.getElementById('button-again');
let user_color;
let comp_color;


function compMove() {
  const options = ["r", "s", "p"];
  const random = Math.floor(Math.random() * 3);
  const moveComp = options[random];
  return moveComp;
}

function win(moveUser,moveComp) {
    score++;
    score_span.innerHTML = score;
    result_texto.innerHTML  = "YOU WIN";
    
    user_move.classList.add(moveUser);
    comp_move.classList.add(moveComp); 

    user_image.src = `assets/${moveUser}.svg`;
    comp_image.src = `assets/${moveComp}.svg`;

    user_color = moveUser;
    comp_color = moveComp;

}

function lose(moveUser,moveComp) {
    result_texto.innerHTML  = "LOSE";
    
    user_move.classList.add(moveUser);
    comp_move.classList.add(moveComp);

    user_image.src = `assets/${moveUser}.svg`;
    comp_image.src = `assets/${moveComp}.svg`;

    user_color = moveUser;
    comp_color = moveComp;

}

function draw(moveUser,moveComp) {
    result_texto.innerHTML  = "DRAW";
   
    user_move.classList.add(moveUser);
    comp_move.classList.add(moveComp);

    user_image.src = `assets/${moveUser}.svg`;
    comp_image.src = `assets/${moveComp}.svg`;

    user_color = moveUser;
    comp_color = moveComp;
}
function game(option) {
  const moveComp = compMove();
  const moveUser = option;

  switch (moveUser + moveComp) {
    case "rs":
    case "pr":
    case "sp":
        win(moveUser,moveComp);
    break;
    case "rp":
    case "ps":
    case "sr":
        lose(moveUser,moveComp);
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(moveUser,moveComp);
    break;
    default:
      break;
  }
  container_options.style.display = "none";
  results_options.style.display = "block";
  
     console.log(`user: ${moveUser}, comp: ${moveComp}`)
}
function main() {
  rock.addEventListener("click", () => game("r"));
  scissor.addEventListener("click", () => game("s"));
  paper.addEventListener("click", () => game("p"));
  button_again.addEventListener("click", () => {
    container_options.style.display = "block";
    results_options.style.display = "none";
    user_move.classList.remove(user_color);
    comp_move.classList.remove(comp_color); 
  })
}

main();
