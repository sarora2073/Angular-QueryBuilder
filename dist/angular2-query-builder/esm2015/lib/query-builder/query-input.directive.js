import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class QueryInputDirective {
    constructor(template) {
        this.template = template;
    }
    /** Unique name for query input type. */
    get queryInputType() { return this._type; }
    set queryInputType(value) {
        // If the directive is set without a type (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (!value) {
            return;
        }
        this._type = value;
    }
}
QueryInputDirective.ɵfac = function QueryInputDirective_Factory(t) { return new (t || QueryInputDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
QueryInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: QueryInputDirective, selectors: [["", "queryInput", ""]], inputs: { queryInputType: "queryInputType" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryInputDirective, [{
        type: Directive,
        args: [{ selector: '[queryInput]' }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { queryInputType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItcXVlcnktYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9xdWVyeS1idWlsZGVyL3F1ZXJ5LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzlELE1BQU0sT0FBTyxtQkFBbUI7SUFZOUIsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDO0lBWGpELHdDQUF3QztJQUN4QyxJQUNJLGNBQWMsS0FBYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksY0FBYyxDQUFDLEtBQWE7UUFDOUIsMEZBQTBGO1FBQzFGLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7O3NGQVRVLG1CQUFtQjt3REFBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQzs7a0JBR2xDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbcXVlcnlJbnB1dF0nfSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5SW5wdXREaXJlY3RpdmUge1xyXG4gIC8qKiBVbmlxdWUgbmFtZSBmb3IgcXVlcnkgaW5wdXQgdHlwZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBxdWVyeUlucHV0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxyXG4gIHNldCBxdWVyeUlucHV0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAvLyBJZiB0aGUgZGlyZWN0aXZlIGlzIHNldCB3aXRob3V0IGEgdHlwZSAodXBkYXRlZCBwcm9ncmFtYXRpY2FsbHkpLCB0aGVuIHRoaXMgc2V0dGVyIHdpbGxcclxuICAgIC8vIHRyaWdnZXIgd2l0aCBhbiBlbXB0eSBzdHJpbmcgYW5kIHNob3VsZCBub3Qgb3ZlcndyaXRlIHRoZSBwcm9ncmFtYXRpY2FsbHkgc2V0IHZhbHVlLlxyXG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuIl19