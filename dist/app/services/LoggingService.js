class LoggingService {
    log(msg) {
        console.log(msg);
    }
}

export class ElementLoggingService {
    constructor(parentEl) {
        this.parentEl = parentEl;
        if (!parentEl) {
            this.parentEl = document.getElementById('log');
        }
        if (!this.parentEl) {
            throw new Error('ElementLoggingService requires a parent element, please ensure either an element with "id"="log" is present in the DOM or provide an element to the constructor.');
        }
    }
    log(msg) {
        const logNode = document.createElement('div');
        logNode.className = 'log-entry';
        logNode.innerText = msg;
        this.parentEl.appendChild(logNode);
    }
}

export const consoleLogger = new LoggingService();

export const elementLogger = new ElementLoggingService();