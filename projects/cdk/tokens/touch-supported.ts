import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

export const TUI_TOUCH_SUPPORTED = tuiCreateTokenFromFactory(
    () => inject(WINDOW).matchMedia(`(any-pointer: coarse)`).matches,
);
