//codigo para ir a 60fps

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

//new controller
var bp = new BlitzPad();

var attackData;

var img1 = new imageManager();
var img2 = new imageManager();

function dragonPunchForward(data){
    attackData = "DPF"+data;
    img1.dpf(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function dragonPunchBack(data){
    attackData = "DPB"+data;
    img1.dpb(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function quarterCircleForward(data){
    attackData = "QCF"+data;
    img1.qcf(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function quarterCircleBack(data){
    attackData = "QCB"+data;
    img1.qcb(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function halfCircleForward(data){
    attackData = "HCF"+data;
    img1.hcf(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function halfCircleBack(data){
    attackData = "HCB"+data;
    img1.hcb(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function doubleQuarterCircleForward(data){
    attackData = "DQCF"+data;
    img1.dqcf(data);
    displayCombo('comboDisplay',img1);

    checkCombo(attackData);
}

function doubleQuarterCircleBack(data){
    attackData = "DQCB"+data;
    img1.dqcb(data);
    displayCombo('comboDisplay',img1);
    checkCombo(attackData);
}

function lightPunch(data){
    if(isDown){
        checkCombo("2LP");
    }else{
        checkCombo("LP");
    }
    img1.lp(isDown);
    displayCombo('comboDisplay',img1);


}

function mediumPunch(data){
    if(isDown){
        
        checkCombo("2MP");
    }else{
        checkCombo("MP");
    }
    img1.mp(isDown);
    displayCombo('comboDisplay',img1);
}

function heavyPunch(data){
    if(isDown){
        checkCombo("2HP");
    }else{
        checkCombo("HP");
    }
    img1.hp(isDown);
    displayCombo('comboDisplay',img1);

}

function lightKick(data){
    if(isDown){
        checkCombo("2LK");
    }else{
        checkCombo("LK");
    }
    img1.lk(isDown);
    displayCombo('comboDisplay',img1);
}

function mediumKick(data){
    if(isDown){
        checkCombo("2MK");
    }else{
        checkCombo("MK");
    }
    img1.mk(isDown);
    displayCombo('comboDisplay',img1);

}

function heavyKick(data){
    if(isDown){
        checkCombo("2HK");
    }else{
        checkCombo("HK");
    }
    img1.hk(isDown);
    displayCombo('comboDisplay',img1);
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

    //inputs
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
    if(currentComboLenght<=comboLenght){
        if(bufferString.endsWith(comboString) && currentComboLenght == comboLenght){
            var audio = new Audio('activate.wav');
            audio.play();
            $("#result").text("Correct!");
            $('#comboDisplay').html("");
            currentComboLenght = 0;

            img1.cleanCombo();
        }
    }else{
        if(hasComboTarget){
            $('#result').text("Failed");
            var audio = new Audio('warning.wav');
            audio.play();
            currentComboLenght = 0;
        }
        
    }
    //document.getElementById("cLenghtActual").value = currentComboLenght;
    $("#cLenghtActual").text(currentComboLenght);
}

function displayCombo(target,source) {
    var imgArray = source.getArray();
    for(var i = 0; i < source.getCount(); i++){
        document.getElementById(target).appendChild(imgArray[i]);
    }
    //document.getElementById('comboDisplay').appendChild(this.imgArray);
}

var hasComboTarget = false;

function newCombo(){
    combo = document.getElementById("comboInput").value;
    $('#comboDisplay2').html('');
    $("#result").text("");
    currentComboLenght = 0;
    $("#cLenghtActual").text(currentComboLenght);
    comboLenght = countCombo(combo);
    comboString = combo;
    hasComboTarget = true;
    $('#cLenght').text(comboLenght);
}

function countCombo(data){
    var parser = new comboParser(img2);
    var count = parser.count(data);
    var im = parser.getIm();
    displayCombo("comboDisplay2",im);
    img1.cleanCombo();
    return count;
}