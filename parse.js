class Parse{
    
    /**
     * * Given a string, it returns an array of floats
     * @param string - The string to be parsed.
     * @returns The array of float numbers
     */
    static parseCSVLine(string){
        if (string.length === 0 ) {
            throw new EmptyStringError("Stringa inserita vuota");
        }
        
        const strinWithoutComma = Parse.replaceCommaAtDot(string);
        
        const stringWithoutSpaces = Parse.removeBlanckSpace(strinWithoutComma);
        
        const arrayOfStringWithoutNewLine = Parse.splitForNewLine(stringWithoutSpaces);
        console.log(arrayOfStringWithoutNewLine);
        const arrayOfStrings = Parse.splitForSemicolon(arrayOfStringWithoutNewLine);
        console.log(arrayOfStrings);
        const arrayOfFloat = Parse.parseArrayToFloat(arrayOfStrings);
        console.log(arrayOfFloat);
        if (arrayOfFloat === 0) {
            throw new InvalidStringError("stringa completamente Invalida");
        }
        if (arrayOfFloat.length < arrayOfStrings.length) {
            throw new PartialStringError("stringa parzialmente invalida, la parte della stringa valida " + arrayOfFloat);
            
        }
        return arrayOfFloat;

    }





   /**
    * Split a string into an array of strings using a semicolon as the delimiter
    * @param string - The string to be split.
    * @returns an array of strings.
    */
   static splitForSemicolon(array) {
        const splittedString = JSON.stringify(array).split(";");
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