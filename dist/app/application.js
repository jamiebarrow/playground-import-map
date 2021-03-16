import "jquery";
import "knockout";

import { ApplicationViewModel } from "./ApplicationViewModel.js";
import { consoleLogger } from "svc/LoggingService.js";

export function run() {
    const vm = new ApplicationViewModel();
    ko.applyBindings(vm, document.getElementById('demoApp'));
    $('body').append('<p>It works!</p>');
    consoleLogger.log('Running.');
}
