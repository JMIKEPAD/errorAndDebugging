class ParseStringToArrayofNumber{
    constructor(string){
        this.string = string;
        this.array = [];

    }


    static splitForSemicolon(string) {
        const splittedString = string.split(";");
        return splittedString;
    }



    static replaceCommaAtDot(string) {
        const replaced = string.replace(/,/g, ".");
        return replaced;
    }




    static removeBlanckSpace(string) {
        const replaced = string.replace(/ /g, "");
        return replaced;
    }

    static parseArrayToFloat(array){
        let tempArray=[];
        for (let i = 0; i < array.length; i++) {
            const string = array[i];
            const parsed= parseFloat(string);
            if (!isNaN(parsed)) {
                tempArray.push(parsed);
            }
            
        }
        return tempArray;
    }

    static splitForNewLine(string){
        const splittedStringOnNewLine = string.split("\n");
        return splittedStringOnNewLine;
    }
}