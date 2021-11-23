class comboParser{
    constructor(im){
        this.im = im;
    }

    count(data){
        var auxString = data;
        var punchString;
        var counter = 0;
        this.im.cleanCombo();
        var exitBool = false;
        while(auxString != "" && exitBool==false){
            if(auxString.startsWith("DPB")){
                counter++;
                auxString = auxString.slice(3);
                punchString = auxString.substring(0,2);
                this.im.dpb(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("DPF")){
                counter++;
                auxString = auxString.slice(3);
                punchString = auxString.substring(0,2);
    
                this.im.dpf(punchString);
    
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("QCF")){
                counter++;
                auxString = auxString.slice(3)
                punchString = auxString.substring(0,2);
    
                this.im.qcf(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("QCB")){
                counter++;
                auxString = auxString.slice(3);
                punchString = auxString.substring(0,2);
    
                this.im.qcb(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("HCF")){
                counter++;
                auxString = auxString.slice(3);
                punchString = auxString.substring(0,2);
    
                this.im.hcf(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("HCB")){
                counter++;
                auxString = auxString.slice(3);
                punchString = auxString.substring(0,2);
    
                this.im.hcb(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("DQCF")){
                counter++;
                auxString = auxString.slice(4);
                punchString = auxString.substring(0,2);
    
                this.im.dqcf(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("DQCB")){
                counter++;
                auxString = auxString.slice(4);
                punchString = auxString.substring(0,2);
    
                this.im.dqcb(punchString);
                auxString = auxString.slice(2);
            }else if(auxString.startsWith("LP")){
                counter++;
                auxString = auxString.slice(2);
                this.im.addPunch("LP");
            }else if(auxString.startsWith("MP")){
                counter++;
                auxString = auxString.slice(2);
                this.im.addPunch("MP");
            }else if(auxString.startsWith("HP")){
                counter++;
                auxString = auxString.slice(2);
                this.im.addPunch("HP");
            }else if(auxString.startsWith("LK")){
                counter++;
                auxString = auxString.slice(2);
                this.im.addPunch("LK");
            }else if(auxString.startsWith("MK")){
                counter++;
                auxString = auxString.slice(2);
                this.im.addPunch("MK");
            }else if(auxString.startsWith("HK")){
                counter++;
                auxString = auxString.slice(2);
                this.im.addPunch("HK");
            }else if(auxString.startsWith("2")){
                counter++;
                auxString = auxString.slice(1);
                punchString = auxString.substring(0,2);
                this.im.down(punchString);
                auxString = auxString.slice(2);
            }else{
                console.log("wrong input");
                exitBool = true;
            }
        }
    
        
    
        if(exitBool){
            return 0;
            
        }else{
            return counter;
        }
    }

    getIm(){
        return this.im;
    }
}