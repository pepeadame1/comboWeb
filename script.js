
//codigo para ir a 60fps

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

//new controller
var bp = new BlitzPad();

var attackData;

function dragonPunchForward(data){
    console.log('dragon punch');
    attackData = "DP"+data;
    //Right, Down, DownRight
    checkCombo(attackData);
}

function dragonPunchBack(data){
    console.log('dragon punch back');
    attackData = "DPB"+data;
    //Left, Down, DownLeft
    checkCombo(attackData);
}

function quarterCircleForward(data){
    console.log('quarter circle forward');
    attackData = "QCF"+data;
    //Down, DownRight, Right
    checkCombo(attackData);
}

function quarterCircleBack(data){
    console.log('quarter circle back');
    attackData = "QCB"+data;
    //Down, DownLeft, Left
    checkCombo(attackData);
}

function halfCircleForward(data){
    console.log('half circle forward');
    attackData = "HCF"+data;
    //Left, DownLeft, Down, DownRight, Right
    checkCombo(attackData);
}

function halfCircleBack(data){
    console.log('half circle back');
    attackData = "HCB"+data;
    //Right, DownRight, Down, DownLeft, Left
    checkCombo(attackData);
}

function doubleQuarterCircleForward(data){
    console.log("double quarter circle forward");
    attackData = "DQCF"+data;
    //Down, DownRight, Right, Down, DownRight, Right
    checkCombo(attackData);
}

function doubleQuarterCircleBack(data){
    console.log("double quarter circle back");
    attackData = "DQCB"+data;
    //Down, DownLeft, Left, Down, DownLeft, Left
    checkCombo(attackData);
}

function lightPunch(data){
    console.log("light punch");
    //LowPunch
    checkCombo("LP");
}

function mediumPunch(data){
    console.log("medium punch");
    //MedPunch
    checkCombo("MP");
}

function heavyPunch(data){
    console.log("heavy punch");
    //HighPunch
    checkCombo("HP");
}

function lightKick(data){
    console.log("light kick");
    //LowKick
    checkCombo("LK");
}

function mediumKick(data){
    console.log("medium kick");
    //MedKick
    checkCombo("MK");
}

function heavyKick(data){
    console.log("heavy kick");
    //HighKick
    checkCombo("HK");
}

function downLightPunch(data){
    //Down, LowPunch
    checkCombo("2LP");
}

function downMediumPunch(data){
    //Down, MedPunch
    checkCombo("2MP");
}

function downHeavyPunch(data){
    //Down, HighPunch
    checkCombo("2HP");
}

function downLightKick(data){
    //Down, LowKick
    checkCombo("2LK");
}

function downMediumKick(data){
    //Down, MedKick
    checkCombo("2MK")
}

function downHeavyKick(data){
    //Down, HighKick
    checkCombo("2HK");
}

//dragon punch forward
bp.addOnListItem("623LP","LP",dragonPunchForward);//dragon punch forward light punch
bp.addOnListItem("623MP","MP",dragonPunchForward);//dragon Punch forward medium punch
bp.addOnListItem("623HP","HP",dragonPunchForward);//dragon punch forward heavy punch
bp.addOnListItem("623LK","LK",dragonPunchForward);//dragon punch forward light kick
bp.addOnListItem("623MK","MK",dragonPunchForward);//dragon punch forward medium kick
bp.addOnListItem("623HK","HK",dragonPunchForward);//dragon punch forward Heavy kick
//dragon punch back
bp.addOnListItem("421LP","LP",dragonPunchBack); //dragon punch back
bp.addOnListItem("421MP","MP",dragonPunchBack); //dragon punch back
bp.addOnListItem("421HP","HP",dragonPunchBack); //dragon punch back
bp.addOnListItem("421LK","LK",dragonPunchBack); //dragon punch back
bp.addOnListItem("421MK","MK",dragonPunchBack); //dragon punch back
bp.addOnListItem("421HK","HK",dragonPunchBack); //dragon punch back
//quarter circle forward
bp.addOnListItem("236LP","LP",quarterCircleForward);//quarter circle forward
bp.addOnListItem("236MP","MP",quarterCircleForward);//quarter circle forward
bp.addOnListItem("236HP","HP",quarterCircleForward);//quarter circle forward
bp.addOnListItem("236LK","LK",quarterCircleForward);//quarter circle forward
bp.addOnListItem("236MK","MK",quarterCircleForward);//quarter circle forward
bp.addOnListItem("236HK","HK",quarterCircleForward);//quarter circle forward
//quarter circle back
bp.addOnListItem("214LP","LP",quarterCircleBack);//quarter circle back
bp.addOnListItem("214MP","MP",quarterCircleBack);//quarter circle back
bp.addOnListItem("214HP","HP",quarterCircleBack);//quarter circle back
bp.addOnListItem("214LK","LK",quarterCircleBack);//quarter circle back
bp.addOnListItem("214MK","MK",quarterCircleBack);//quarter circle back
bp.addOnListItem("214HK","HK",quarterCircleBack);//quarter circle back
//half circle forward
bp.addOnListItem("41236LP","LP",halfCircleForward);//half circle forward
bp.addOnListItem("41236MP","MP",halfCircleForward);//half circle forward
bp.addOnListItem("41236HP","HP",halfCircleForward);//half circle forward
bp.addOnListItem("41236LK","LK",halfCircleForward);//half circle forward
bp.addOnListItem("41236MK","MK",halfCircleForward);//half circle forward
bp.addOnListItem("41236HK","HK",halfCircleForward);//half circle forward
//half circle back
bp.addOnListItem("63214LP","LP",halfCircleBack);//half circle back
bp.addOnListItem("63214MP","MP",halfCircleBack);//half circle back
bp.addOnListItem("63214HP","HP",halfCircleBack);//half circle back
bp.addOnListItem("63214LK","LK",halfCircleBack);//half circle back
bp.addOnListItem("63214MK","MK",halfCircleBack);//half circle back
bp.addOnListItem("63214HK","HK",halfCircleBack);//half circle back
//double quarter circle forward
bp.addOnListItem("236236LP","LP",doubleQuarterCircleForward);//double quarter circle forward
bp.addOnListItem("236236MP","MP",doubleQuarterCircleForward);//double quarter circle forward
bp.addOnListItem("236236HP","HP",doubleQuarterCircleForward);//double quarter circle forward
bp.addOnListItem("236236LK","LK",doubleQuarterCircleForward);//double quarter circle forward
bp.addOnListItem("236236MK","MK",doubleQuarterCircleForward);//double quarter circle forward
bp.addOnListItem("236236HK","HK",doubleQuarterCircleForward);//double quarter circle forward
//double quarter circle back
bp.addOnListItem("214214LP","LP",doubleQuarterCircleBack);//double quarter circle back
bp.addOnListItem("214214MP","MP",doubleQuarterCircleBack);//double quarter circle back
bp.addOnListItem("214214HP","HP",doubleQuarterCircleBack);//double quarter circle back
bp.addOnListItem("214214LK","LK",doubleQuarterCircleBack);//double quarter circle back
bp.addOnListItem("214214MK","MK",doubleQuarterCircleBack);//double quarter circle back
bp.addOnListItem("214214HK","HK",doubleQuarterCircleBack);//double quarter circle back
//simple buttons
bp.addOnListItem("LP","LP",lightPunch);//Light Punch
bp.addOnListItem("MP","MP",mediumPunch);//Medium Punch
bp.addOnListItem("HP","HP",heavyPunch);//heavy Punch
bp.addOnListItem("LK","LK",lightKick);//Light Kick
bp.addOnListItem("MK","MK",mediumKick);//Medium Kick
bp.addOnListItem("HK","HK",heavyKick);//Heavy Kick
//down attacks
bp.addOnListItem("2LP","LP",downLightPunch)//down light punch
bp.addOnListItem("2MP","MP",downMediumPunch)//down medium punch
bp.addOnListItem("2HP","HP",downHeavyPunch)//down heavy punch
bp.addOnListItem("2LP","LK",downLightKick)//down light kick
bp.addOnListItem("2MP","MK",downMediumKick)//down medium kick
bp.addOnListItem("2HP","HK",downHeavyKick)//down heavy kick

$(document).ready(function(){
    bp.setEventListeners();
});

startAnimating(60);

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

var frames = 0;

function animate(){
    requestAnimationFrame(animate);

    now = Date.now();
    elapsed = now-then;

    //use this to poll the gamepad in Google Chrome.
    bp.pollChromePad();

    //check if we even have a gamepad.
    if(bp.gamepad || bp.chromepad){
        //PROTIP: Use isButtonDown to check if button is down without changing the lastBtnValues of the button.
        if(!bp.isButtonDown(4)){
            if (bp.buttonDown(12)) {
                //move up
                //console.log("up");
            }
            
            if (bp.buttonDown(13)) {
                //move down
                //console.log("down");
            }
            
            if (bp.buttonDown(14)) {
                //move left
                //console.log("left");
            }
            
            if (bp.buttonDown(15)) {
                //move right
                //console.log("right");
            }
        }
	
	//reset commandStr after 30 frames without input.
	bp.commandInputPoll(30);

    //motion inputs
    bp.commandEndPressPoll(2,"LP");
    bp.commandEndPressPoll(3,"MP");
    bp.commandEndPressPoll(5,"HP");
    bp.commandEndPressPoll(4,"SP");
    bp.commandEndPressPoll(0,"LK");
    bp.commandEndPressPoll(1,"MK");
    bp.commandEndPressPoll(7,"HK");
    bp.commandEndPressPoll(6,"SK");

    }
}

var comboString;
var bufferString = "";
function checkCombo(s){
    bufferString += s;
    console.log(bufferString);
    if(bufferString.endsWith(comboString)){
        console.log("COMBO MADE!!!");
    }
}

function newCombo(){
    combo = document.getElementById("comboInput").value;
    console.log(combo);
    comboString = combo;
}