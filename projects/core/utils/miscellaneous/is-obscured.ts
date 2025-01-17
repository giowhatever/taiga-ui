import {tuiGetElementObscures} from '@taiga-ui/cdk';

/**
 * @internal
 */
export function tuiIsObscured(
    el: HTMLElement,
    exceptSelector = `tui-hints-host`,
): boolean {
    return !!tuiGetElementObscures(el)?.some(el => !el.closest(exceptSelector));
}
