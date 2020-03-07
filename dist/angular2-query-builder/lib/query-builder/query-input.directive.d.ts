import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class QueryInputDirective {
    template: TemplateRef<any>;
    /** Unique name for query input type. */
    get queryInputType(): string;
    set queryInputType(value: string);
    private _type;
    constructor(template: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDef<QueryInputDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<QueryInputDirective, "[queryInput]", never, { "queryInputType": "queryInputType"; }, {}, never>;
}
