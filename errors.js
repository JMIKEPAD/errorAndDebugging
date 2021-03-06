class EmptyStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class InvalidStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class PartialStringError extends Error {
    constructor(message, partialResult){
        super(message);
        this.partialResult = partialResult;
    }
}