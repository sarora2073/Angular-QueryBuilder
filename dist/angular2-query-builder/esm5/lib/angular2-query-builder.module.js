import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { QueryArrowIconDirective } from './query-builder/query-arrow-icon.directive';
import { QueryFieldDirective } from './query-builder/query-field.directive';
import { QueryInputDirective } from './query-builder/query-input.directive';
import { QueryEntityDirective } from './query-builder/query-entity.directive';
import { QueryOperatorDirective } from './query-builder/query-operator.directive';
import { QueryButtonGroupDirective } from './query-builder/query-button-group.directive';
import { QuerySwitchGroupDirective } from './query-builder/query-switch-group.directive';
import { QueryRemoveButtonDirective } from './query-builder/query-remove-button.directive';
import { QueryEmptyWarningDirective } from './query-builder/query-empty-warning.directive';
import * as i0 from "@angular/core";
var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    QueryBuilderModule.ɵmod = i0.ɵɵdefineNgModule({ type: QueryBuilderModule });
    QueryBuilderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function QueryBuilderModule_Factory(t) { return new (t || QueryBuilderModule)(); }, imports: [[
                CommonModule,
                FormsModule
            ]] });
    return QueryBuilderModule;
}());
export { QueryBuilderModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(QueryBuilderModule, { declarations: [QueryBuilderComponent,
        QueryInputDirective,
        QueryOperatorDirective,
        QueryFieldDirective,
        QueryEntityDirective,
        QueryButtonGroupDirective,
        QuerySwitchGroupDirective,
        QueryRemoveButtonDirective,
        QueryEmptyWarningDirective,
        QueryArrowIconDirective], imports: [CommonModule,
        FormsModule], exports: [QueryBuilderComponent,
        QueryInputDirective,
        QueryOperatorDirective,
        QueryFieldDirective,
        QueryEntityDirective,
        QueryButtonGroupDirective,
        QuerySwitchGroupDirective,
        QueryRemoveButtonDirective,
        QueryEmptyWarningDirective,
        QueryArrowIconDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryBuilderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    QueryBuilderComponent,
                    QueryInputDirective,
                    QueryOperatorDirective,
                    QueryFieldDirective,
                    QueryEntityDirective,
                    QueryButtonGroupDirective,
                    QuerySwitchGroupDirective,
                    QueryRemoveButtonDirective,
                    QueryEmptyWarningDirective,
                    QueryArrowIconDirective
                ],
                exports: [
                    QueryBuilderComponent,
                    QueryInputDirective,
                    QueryOperatorDirective,
                    QueryFieldDirective,
                    QueryEntityDirective,
                    QueryButtonGroupDirective,
                    QuerySwitchGroupDirective,
                    QueryRemoveButtonDirective,
                    QueryEmptyWarningDirective,
                    QueryArrowIconDirective
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItcXVlcnktYnVpbGRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1xdWVyeS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXIyLXF1ZXJ5LWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFM0Y7SUFBQTtLQThCbUM7MERBQXRCLGtCQUFrQjt1SEFBbEIsa0JBQWtCLGtCQTdCcEI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2FBQ1o7NkJBcEJIO0NBOENtQyxBQTlCbkMsSUE4Qm1DO1NBQXRCLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQXhCM0IscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsdUJBQXVCLGFBYnZCLFlBQVk7UUFDWixXQUFXLGFBZVgscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsdUJBQXVCO2tEQUdkLGtCQUFrQjtjQTlCOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsMEJBQTBCO29CQUMxQiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsMEJBQTBCO29CQUMxQiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vcXVlcnktYnVpbGRlci9xdWVyeS1idWlsZGVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYnVpbGRlci9xdWVyeS1hcnJvdy1pY29uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LWJ1aWxkZXIvcXVlcnktZmllbGQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUXVlcnlJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYnVpbGRlci9xdWVyeS1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUVudGl0eURpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYnVpbGRlci9xdWVyeS1lbnRpdHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUXVlcnlPcGVyYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYnVpbGRlci9xdWVyeS1vcGVyYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUJ1dHRvbkdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyL3F1ZXJ5LWJ1dHRvbi1ncm91cC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeVN3aXRjaEdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyL3F1ZXJ5LXN3aXRjaC1ncm91cC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYnVpbGRlci9xdWVyeS1yZW1vdmUtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5RW1wdHlXYXJuaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyL3F1ZXJ5LWVtcHR5LXdhcm5pbmcuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUXVlcnlCdWlsZGVyQ29tcG9uZW50LFxyXG4gICAgUXVlcnlJbnB1dERpcmVjdGl2ZSxcclxuICAgIFF1ZXJ5T3BlcmF0b3JEaXJlY3RpdmUsXHJcbiAgICBRdWVyeUZpZWxkRGlyZWN0aXZlLFxyXG4gICAgUXVlcnlFbnRpdHlEaXJlY3RpdmUsXHJcbiAgICBRdWVyeUJ1dHRvbkdyb3VwRGlyZWN0aXZlLFxyXG4gICAgUXVlcnlTd2l0Y2hHcm91cERpcmVjdGl2ZSxcclxuICAgIFF1ZXJ5UmVtb3ZlQnV0dG9uRGlyZWN0aXZlLFxyXG4gICAgUXVlcnlFbXB0eVdhcm5pbmdEaXJlY3RpdmUsXHJcbiAgICBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUXVlcnlCdWlsZGVyQ29tcG9uZW50LFxyXG4gICAgUXVlcnlJbnB1dERpcmVjdGl2ZSxcclxuICAgIFF1ZXJ5T3BlcmF0b3JEaXJlY3RpdmUsXHJcbiAgICBRdWVyeUZpZWxkRGlyZWN0aXZlLFxyXG4gICAgUXVlcnlFbnRpdHlEaXJlY3RpdmUsXHJcbiAgICBRdWVyeUJ1dHRvbkdyb3VwRGlyZWN0aXZlLFxyXG4gICAgUXVlcnlTd2l0Y2hHcm91cERpcmVjdGl2ZSxcclxuICAgIFF1ZXJ5UmVtb3ZlQnV0dG9uRGlyZWN0aXZlLFxyXG4gICAgUXVlcnlFbXB0eVdhcm5pbmdEaXJlY3RpdmUsXHJcbiAgICBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5QnVpbGRlck1vZHVsZSB7IH1cclxuIl19