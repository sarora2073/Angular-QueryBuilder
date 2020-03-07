import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
var QueryInputDirective = /** @class */ (function () {
    function QueryInputDirective(template) {
        this.template = template;
    }
    Object.defineProperty(QueryInputDirective.prototype, "queryInputType", {
        /** Unique name for query input type. */
        get: function () { return this._type; },
        set: function (value) {
            // If the directive is set without a type (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!value) {
                return;
            }
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    QueryInputDirective.ɵfac = function QueryInputDirective_Factory(t) { return new (t || QueryInputDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    QueryInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: QueryInputDirective, selectors: [["", "queryInput", ""]], inputs: { queryInputType: "queryInputType" } });
    return QueryInputDirective;
}());
export { QueryInputDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryInputDirective, [{
        type: Directive,
        args: [{ selector: '[queryInput]' }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { queryInputType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItcXVlcnktYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9xdWVyeS1idWlsZGVyL3F1ZXJ5LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlEO0lBYUUsNkJBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUcsQ0FBQztJQVZqRCxzQkFDSSwrQ0FBYztRQUZsQix3Q0FBd0M7YUFDeEMsY0FDK0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuRCxVQUFtQixLQUFhO1lBQzlCLDBGQUEwRjtZQUMxRix1RkFBdUY7WUFDdkYsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BTmtEOzBGQUh4QyxtQkFBbUI7NERBQW5CLG1CQUFtQjs4QkFIaEM7Q0FnQkMsQUFkRCxJQWNDO1NBYlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQzs7a0JBR2xDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbcXVlcnlJbnB1dF0nfSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5SW5wdXREaXJlY3RpdmUge1xyXG4gIC8qKiBVbmlxdWUgbmFtZSBmb3IgcXVlcnkgaW5wdXQgdHlwZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBxdWVyeUlucHV0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxyXG4gIHNldCBxdWVyeUlucHV0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAvLyBJZiB0aGUgZGlyZWN0aXZlIGlzIHNldCB3aXRob3V0IGEgdHlwZSAodXBkYXRlZCBwcm9ncmFtYXRpY2FsbHkpLCB0aGVuIHRoaXMgc2V0dGVyIHdpbGxcclxuICAgIC8vIHRyaWdnZXIgd2l0aCBhbiBlbXB0eSBzdHJpbmcgYW5kIHNob3VsZCBub3Qgb3ZlcndyaXRlIHRoZSBwcm9ncmFtYXRpY2FsbHkgc2V0IHZhbHVlLlxyXG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuIl19