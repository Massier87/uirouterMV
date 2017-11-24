import {Injector} from "@angular/core";
import {UIRouter} from "@uirouter/angular";

import {helloState, aboutState} from "../app.states";

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'hello' });

}
