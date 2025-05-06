import GameState from "./GameState";

function Reset({gameState, onReset}) {
    if(gameState=== GameState.inProgress){
        return;
    }
    return ( 
    <button className="reset-button" onClick={onReset}>Play Again</button>
     );
}

export default Reset
