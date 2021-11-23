
//codigo para ir a 60fps

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

//new controller
var bp = new BlitzPad();

var attackData;

var imgArray = [];
var imgArray2 = [];
var imgCount = 0;
var imgCount2 = 0;
var maxArray = 11;

function checkArray(num){
    if((imgCount+num)>maxArray){
        imgArray = imgArray.slice(num);
        imgCount -= num;
    }
}

function addPunch(data){
    imgArray[imgCount] = new Image();

    if(data == "LP"){
        imgArray[imgCount].src = 'Icons/LowPunch.png';
    }else if(data == "MP"){
        imgArray[imgCount].src = 'Icons/MedPunch.png';
    }else if(data == "HP"){
        imgArray[imgCount].src = 'Icons/HighPunch.png';
    }else if(data == "LK"){
        imgArray[imgCount].src = 'Icons/LowKick.png';
    }else if (data == "MK"){
        imgArray[imgCount].src = 'Icons/MedKick.png';
    }else if (data == "HK"){
        imgArray[imgCount].src = 'Icons/HighKick.png';
    }
    imgCount++;
}


function dragonPunchForward(data){
    console.log('dragon punch');
    attackData = "DP"+data;
    //Right, Down, DownRight
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Right.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownRight.png';
    imgCount++;

    addPunch(data);

    //checkArray(4);

    displayCombo();

    checkCombo(attackData);
}

function dragonPunchBack(data){
    console.log('dragon punch back');
    attackData = "DPB"+data;
    //Left, Down, DownLeft
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Left.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownLeft.png';
    imgCount++;

    addPunch(data);

    displayCombo();

    checkCombo(attackData);
}

function quarterCircleForward(data){
    console.log('quarter circle forward');
    attackData = "QCF"+data;
    //Down, DownRight, Right
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownRight.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Right.png';
    imgCount++;

    addPunch(data);
    displayCombo();

    checkCombo(attackData);
}

function quarterCircleBack(data){
    console.log('quarter circle back');
    attackData = "QCB"+data;
    //Down, DownLeft, Left
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownLeft.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Left.png';
    imgCount++;

    addPunch(data);

    displayCombo();

    checkCombo(attackData);
}

function halfCircleForward(data){
    console.log('half circle forward');
    attackData = "HCF"+data;
    //Left, DownLeft, Down, DownRight, Right
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Left.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownLeft.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownRight.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Right.png';
    imgCount++;

    addPunch(data);

    displayCombo();

    checkCombo(attackData);
}

function halfCircleBack(data){
    console.log('half circle back');
    attackData = "HCB"+data;
    //Right, DownRight, Down, DownLeft, Left
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Right.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownRight.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownLeft.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Left.png';
    imgCount++;

    addPunch(data);

    displayCombo();
    checkCombo(attackData);
}

function doubleQuarterCircleForward(data){
    console.log("double quarter circle forward");
    attackData = "DQCF"+data;
    //Down, DownRight, Right, Down, DownRight, Right
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownRight.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Right.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownRight.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Right.png';
    imgCount++;

    addPunch(data);

    displayCombo();

    checkCombo(attackData);
}

function doubleQuarterCircleBack(data){
    console.log("double quarter circle back");
    attackData = "DQCB"+data;
    //Down, DownLeft, Left, Down, DownLeft, Left
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownLeft.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Left.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/DownLeft.png';
    imgCount++;

    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Left.png';
    imgCount++;


    addPunch(data);
    displayCombo();

    checkCombo(attackData);
}

function lightPunch(data){
    console.log("light punch");

    if(isDown){
        imgArray[imgCount] = new Image();
        imgArray[imgCount].src = 'Icons/Down.png';
        imgCount++;
        checkCombo("2LP");
    }else{
        checkCombo("LP");
    }

    addPunch(data);

    displayCombo();


}

function mediumPunch(data){
    console.log("medium punch");
    if(isDown){
        imgArray[imgCount] = new Image();
        imgArray[imgCount].src = 'Icons/Down.png';
        imgCount++;
        checkCombo("2MP");
    }else{
        checkCombo("MP");
    }
    addPunch(data);

    displayCombo();
}

function heavyPunch(data){
    console.log("heavy punch");

    if(isDown){
        imgArray[imgCount] = new Image();
        imgArray[imgCount].src = 'Icons/Down.png';
        imgCount++;
        checkCombo("2HP");
    }else{
        checkCombo("HP");
    }

    addPunch(data);

    displayCombo();

}

function lightKick(data){
    console.log("light kick");

    if(isDown){
        imgArray[imgCount] = new Image();
        imgArray[imgCount].src = 'Icons/Down.png';
        imgCount++;
        checkCombo("2LK");
    }else{
        checkCombo("LK");
    }

    addPunch(data);

    displayCombo();
}

function mediumKick(data){
    console.log("medium kick");

    if(isDown){
        imgArray[imgCount] = new Image();
        imgArray[imgCount].src = 'Icons/Down.png';
        imgCount++;
        checkCombo("2MK");
    }else{
        checkCombo("MK");
    }

    addPunch(data);

    displayCombo();

}

function heavyKick(data){
    console.log("heavy kick");

    if(isDown){
        imgArray[imgCount] = new Image();
        imgArray[imgCount].src = 'Icons/Down.png';
        imgCount++;
        checkCombo("2HK");
    }else{
        checkCombo("HK");
    }

    addPunch(data);
    displayCombo();
}

function downLightPunch(data){//////DELETE
    //Down, LowPunch
    imgArray[imgCount] = new Image();
    imgArray[imgCount].src = 'Icons/Down.png';
    imgCount++;

    addPunch(data);

    displayCombo();

    checkCombo("2LP");
}



function displayCombo() {
    for(var i = 0; i < imgCount; i++){
        document.getElementById('comboDisplay').appendChild(imgArray[i]);
    }
    //document.getElementById('comboDisplay').appendChild(imgArray);
}

function displayCombo2() {
    for(var i = 0; i < imgCount2; i++){
        document.getElementById('comboDisplay2').appendChild(imgArray2[i]);
    }
    //document.getElementById('comboDisplay').appendChild(imgArray);
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
var isDown = false;

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
                isDown = true;
            }else{
                isDown = false;
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
var currentComboLenght = 0;
var comboLenght;
function checkCombo(s){
    bufferString += s;
    currentComboLenght++;
    console.log(bufferString);
    if(currentComboLenght<=comboLenght){
        if(bufferString.endsWith(comboString) && currentComboLenght == comboLenght){
            console.log("COMBO MADE!!!");
            var audio = new Audio('activate.wav');
            audio.play();
            $("#result").text("Correct!");
            $('#comboDisplay').html("");
            currentComboLenght = 0;

            imgArray = [];
            imgCount = 0;
        }
    }else{
        if(hasComboTarget){
            console.log("COMBO FAILED");
            $('#result').text("Failed");
            var audio = new Audio('warning.wav');
            audio.play();
            currentComboLenght = 0;
        }
        
    }
    //document.getElementById("cLenghtActual").value = currentComboLenght;
    $("#cLenghtActual").text(currentComboLenght);
}

var hasComboTarget = false;

function newCombo(){
    combo = document.getElementById("comboInput").value;
    console.log(combo);
    $('#comboDisplay2').html('');
    currentComboLenght = 0;
    $("#cLenghtActual").text(currentComboLenght);
    comboLenght = countCombo(combo);
    comboString = combo;
    hasComboTarget = true;
    $('#cLenght').text(comboLenght);
}

function punch2(data){
    imgArray2[imgCount2] = new Image();

    if(data == "LP"){
        imgArray2[imgCount2].src = 'Icons/LowPunch.png';
    }else if(data == "MP"){
        imgArray2[imgCount2].src = 'Icons/MedPunch.png';
    }else if(data == "HP"){
        imgArray2[imgCount2].src = 'Icons/HighPunch.png';
    }else if(data == "LK"){
        imgArray2[imgCount2].src = 'Icons/LowKick.png';
    }else if (data == "MK"){
        imgArray2[imgCount2].src = 'Icons/MedKick.png';
    }else if (data == "HK"){
        imgArray2[imgCount2].src = 'Icons/HighKick.png';
    }
    imgCount2++;
}

function countCombo(data){
    auxString = data;
    var punchString;
    counter = 0;
    imgArray2 = [];
    imgCount2 = 0;
    exitBool = false
    while(auxString != "" && exitBool==false){
        if(auxString.startsWith("DPB")){
            counter++;
            auxString = auxString.slice(3);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Left.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownLeft.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("DP")){
            counter++;
            auxString = auxString.slice(2);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Right.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownRight.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("QCF")){
            counter++;
            auxString = auxString.slice(3)
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownRight.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Right.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("QCB")){
            counter++;
            auxString = auxString.slice(3);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownLeft.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Left.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("HCF")){
            counter++;
            auxString = auxString.slice(3);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Left.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownLeft.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownRight.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Right.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("HCB")){
            counter++;
            auxString = auxString.slice(3);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Right.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownRight.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownLeft.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Left.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("DQCF")){
            counter++;
            auxString = auxString.slice(4);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownRight.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Right.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownRight.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Right.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("DQCB")){
            counter++;
            auxString = auxString.slice(4);
            punchString = auxString.substring(0,2);

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownLeft.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Left.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/DownLeft.png';
            imgCount2++;

            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Left.png';
            imgCount2++;

            punch2(punchString);
            auxString = auxString.slice(2);
        }else if(auxString.startsWith("LP")){
            counter++;
            auxString = auxString.slice(2);
            punch2("LP");
        }else if(auxString.startsWith("MP")){
            counter++;
            auxString = auxString.slice(2);
            punch2("MP");
        }else if(auxString.startsWith("HP")){
            counter++;
            auxString = auxString.slice(2);
            punch2("HP");
        }else if(auxString.startsWith("LK")){
            counter++;
            auxString = auxString.slice(2);
            punch2("LK");
        }else if(auxString.startsWith("MK")){
            counter++;
            auxString = auxString.slice(2);
            punch2("MK");
        }else if(auxString.startsWith("HK")){
            counter++;
            auxString = auxString.slice(2);
            punch2("HK");
        }else if(auxString.startsWith("2")){
            imgArray2[imgCount2] = new Image();
            imgArray2[imgCount2].src = 'Icons/Down.png';
            imgCount2++;
            counter++;
            auxString = auxString.slice(1);
            punchString = auxString.substring(0,2);
            punch2(punchString);
            auxString = auxString.slice(2);
        }else{
            console.log("wrong input");
            exitBool = true;
        }
        console.log(auxString);
    }

    displayCombo2();
    imgArray = [];
    imgCount = 0;

    if(exitBool){
        return 0;
        
    }else{
        return counter;
    }
}