import "knockout";

import { elementLogger } from "svc/LoggingService.js";

export class ApplicationViewModel {
    constructor() {
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');

        this.fullName = ko.computed(() => `${this.firstName()} ${this.lastName()}`.trim());

        this.canRegister = ko.computed(() => this.fullName().length > 0);
    }

    register() {
        elementLogger.log(`register() called for "${this.fullName()}"`);
    }
}