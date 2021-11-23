class imageManager{
   
    constructor(){
        this.imgArray = [];
        this.imgCount = 0;
    }

    addPunch(data){
        this.imgArray[this.imgCount] = new Image();

        if(data == "LP"){
            this.imgArray[this.imgCount].src = 'Icons/LowPunch.png';
        }else if(data == "MP"){
            this.imgArray[this.imgCount].src = 'Icons/MedPunch.png';
        }else if(data == "HP"){
            this.imgArray[this.imgCount].src = 'Icons/HighPunch.png';
        }else if(data == "LK"){
            this.imgArray[this.imgCount].src = 'Icons/LowKick.png';
        }else if (data == "MK"){
            this.imgArray[this.imgCount].src = 'Icons/MedKick.png';
        }else if (data == "HK"){
            this.imgArray[this.imgCount].src = 'Icons/HighKick.png';
        }
        this.imgCount++;
    }

    dpf(data){
        //Right, Down, DownRight
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Right.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownRight.png';
        this.imgCount++;

        this.addPunch(data);
    }

    dpb(data){
        //Left, Down, DownLeft
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Left.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownLeft.png';
        this.imgCount++;

        this.addPunch(data);
    }

    qcf(data){
            //Down, DownRight, Right
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownRight.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Right.png';
        this.imgCount++;

        this.addPunch(data);
    }

    qcb(data){
        //Down, DownLeft, Left
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownLeft.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Left.png';
        this.imgCount++;

        this.addPunch(data);
    }

    hcf(data){
        //Left, DownLeft, Down, DownRight, Right
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Left.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownLeft.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownRight.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Right.png';
        this.imgCount++;

        this.addPunch(data);
    }

    hcb(data){
        //Right, DownRight, Down, DownLeft, Left
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Right.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownRight.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownLeft.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Left.png';
        this.imgCount++;

        this.addPunch(data);
    }

    dqcf(data){
        //Down, DownRight, Right, Down, DownRight, Right
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownRight.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Right.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownRight.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Right.png';
        this.imgCount++;

        this.addPunch(data);
    }

    dqcb(data){
        //Down, DownLeft, Left, Down, DownLeft, Left
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownLeft.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Left.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/DownLeft.png';
        this.imgCount++;

        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Left.png';
        this.imgCount++;


        this.addPunch(data);
    }

    lp(isDown){
        if(isDown){
            this.imgArray[this.imgCount] = new Image();
            this.imgArray[this.imgCount].src = 'Icons/Down.png';
            this.imgCount++;
        }

        this.addPunch("LP");

    }

    mp(isDown){
        if(isDown){
            this.imgArray[this.imgCount] = new Image();
            this.imgArray[this.imgCount].src = 'Icons/Down.png';
            this.imgCount++;
        }
        this.addPunch("MP");
    }

    hp(isDown){
        if(isDown){
            this.imgArray[this.imgCount] = new Image();
            this.imgArray[this.imgCount].src = 'Icons/Down.png';
            this.imgCount++;
        }
        this.addPunch("HP");
    }

    lk(isDown){
        if(isDown){
            this.imgArray[this.imgCount] = new Image();
            this.imgArray[this.imgCount].src = 'Icons/Down.png';
            this.imgCount++;
        }
        this.addPunch("LK");
    }

    mk(isDown){
        if(isDown){
            this.imgArray[this.imgCount] = new Image();
            this.imgArray[this.imgCount].src = 'Icons/Down.png';
            this.imgCount++;
        }
        this.addPunch("MK");
    }

    hk(isDown){
        if(isDown){
            this.imgArray[this.imgCount] = new Image();
            this.imgArray[this.imgCount].src = 'Icons/Down.png';
            this.imgCount++;
        }
        this.addPunch("HK");
    }

    getArray(){
        return this.imgArray;
    }

    getCount(){
        return this.imgCount;
    }

    down(data){
        this.imgArray[this.imgCount] = new Image();
        this.imgArray[this.imgCount].src = 'Icons/Down.png';
        this.imgCount++;
        this.addPunch(data)
    }
    
    cleanCombo(){
        this.imgArray = [];
        this.imgCount = 0;
    }
}