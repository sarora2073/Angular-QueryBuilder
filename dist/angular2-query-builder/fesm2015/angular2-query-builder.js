import { NG_VALUE_ACCESSOR, NG_VALIDATORS, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, NumberValueAccessor, SelectMultipleControlValueAccessor, CheckboxControlValueAccessor, FormsModule } from '@angular/forms';
import { ɵɵdirectiveInject, TemplateRef, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵadvance, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵreference, ɵɵtext, ɵɵtextInterpolate1, ɵɵtemplateRefExtractor, ɵɵpureFunction2, forwardRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstaticViewQuery, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, Component, ViewChild, ContentChild, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet, NgForOf, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';

class QueryOperatorDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryOperatorDirective.ɵfac = function QueryOperatorDirective_Factory(t) { return new (t || QueryOperatorDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryOperatorDirective.ɵdir = ɵɵdefineDirective({ type: QueryOperatorDirective, selectors: [["", "queryOperator", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryOperatorDirective, [{
        type: Directive,
        args: [{ selector: '[queryOperator]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QueryFieldDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryFieldDirective.ɵfac = function QueryFieldDirective_Factory(t) { return new (t || QueryFieldDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryFieldDirective.ɵdir = ɵɵdefineDirective({ type: QueryFieldDirective, selectors: [["", "queryField", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryFieldDirective, [{
        type: Directive,
        args: [{ selector: '[queryField]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QueryEntityDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryEntityDirective.ɵfac = function QueryEntityDirective_Factory(t) { return new (t || QueryEntityDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryEntityDirective.ɵdir = ɵɵdefineDirective({ type: QueryEntityDirective, selectors: [["", "queryEntity", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryEntityDirective, [{
        type: Directive,
        args: [{ selector: '[queryEntity]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QuerySwitchGroupDirective {
    constructor(template) {
        this.template = template;
    }
}
QuerySwitchGroupDirective.ɵfac = function QuerySwitchGroupDirective_Factory(t) { return new (t || QuerySwitchGroupDirective)(ɵɵdirectiveInject(TemplateRef)); };
QuerySwitchGroupDirective.ɵdir = ɵɵdefineDirective({ type: QuerySwitchGroupDirective, selectors: [["", "querySwitchGroup", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QuerySwitchGroupDirective, [{
        type: Directive,
        args: [{ selector: '[querySwitchGroup]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QueryButtonGroupDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryButtonGroupDirective.ɵfac = function QueryButtonGroupDirective_Factory(t) { return new (t || QueryButtonGroupDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryButtonGroupDirective.ɵdir = ɵɵdefineDirective({ type: QueryButtonGroupDirective, selectors: [["", "queryButtonGroup", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryButtonGroupDirective, [{
        type: Directive,
        args: [{ selector: '[queryButtonGroup]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QueryInputDirective {
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
QueryInputDirective.ɵfac = function QueryInputDirective_Factory(t) { return new (t || QueryInputDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryInputDirective.ɵdir = ɵɵdefineDirective({ type: QueryInputDirective, selectors: [["", "queryInput", ""]], inputs: { queryInputType: "queryInputType" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryInputDirective, [{
        type: Directive,
        args: [{ selector: '[queryInput]' }]
    }], function () { return [{ type: TemplateRef }]; }, { queryInputType: [{
            type: Input
        }] }); })();

class QueryRemoveButtonDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryRemoveButtonDirective.ɵfac = function QueryRemoveButtonDirective_Factory(t) { return new (t || QueryRemoveButtonDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryRemoveButtonDirective.ɵdir = ɵɵdefineDirective({ type: QueryRemoveButtonDirective, selectors: [["", "queryRemoveButton", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryRemoveButtonDirective, [{
        type: Directive,
        args: [{ selector: '[queryRemoveButton]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QueryEmptyWarningDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryEmptyWarningDirective.ɵfac = function QueryEmptyWarningDirective_Factory(t) { return new (t || QueryEmptyWarningDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryEmptyWarningDirective.ɵdir = ɵɵdefineDirective({ type: QueryEmptyWarningDirective, selectors: [["", "queryEmptyWarning", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryEmptyWarningDirective, [{
        type: Directive,
        args: [{ selector: '[queryEmptyWarning]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

class QueryArrowIconDirective {
    constructor(template) {
        this.template = template;
    }
}
QueryArrowIconDirective.ɵfac = function QueryArrowIconDirective_Factory(t) { return new (t || QueryArrowIconDirective)(ɵɵdirectiveInject(TemplateRef)); };
QueryArrowIconDirective.ɵdir = ɵɵdefineDirective({ type: QueryArrowIconDirective, selectors: [["", "queryArrowIcon", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryArrowIconDirective, [{
        type: Directive,
        args: [{ selector: '[queryArrowIcon]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

const _c0 = ["treeContainer"];
function QueryBuilderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 0);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.getClassNames("arrowIcon"));
} }
function QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r12 = ctx.ngIf;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r12)("ngTemplateOutletContext", ctx_r11.getArrowIconContext());
} }
function QueryBuilderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function QueryBuilderComponent_a_3_Template_a_click_0_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(); return ctx_r14.toggleCollapse(); });
    ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵproperty("ngClass", ctx_r2.getClassNames("arrowIconButton", ctx_r2.data.collapsed ? "collapsed" : null));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.getArrowIconTemplate())("ngIfElse", _r0);
} }
function QueryBuilderComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 0);
    ɵɵtemplate(2, QueryBuilderComponent_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r16 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r3.getClassNames("buttonGroup", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r16)("ngTemplateOutletContext", ctx_r3.getButtonGroupContext());
} }
function QueryBuilderComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.addRuleSet(); });
    ɵɵelement(1, "i", 0);
    ɵɵtext(2, " Ruleset ");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r18.getClassNames("button"))("disabled", ctx_r18.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r18.getClassNames("addIcon"));
} }
function QueryBuilderComponent_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_ng_container_5_Template_button_click_1_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.removeRuleSet(); });
    ɵɵelement(2, "i", 0);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r19.getClassNames("button", "removeButton"))("disabled", ctx_r19.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r19.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_Template_button_click_1_listener() { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(); return ctx_r24.addRule(); });
    ɵɵelement(2, "i", 0);
    ɵɵtext(3, " Rule ");
    ɵɵelementEnd();
    ɵɵtemplate(4, QueryBuilderComponent_ng_template_5_button_4_Template, 3, 3, "button", 12);
    ɵɵtemplate(5, QueryBuilderComponent_ng_template_5_ng_container_5_Template, 3, 3, "ng-container", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r5.getClassNames("buttonGroup", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r5.getClassNames("button"))("disabled", ctx_r5.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r5.getClassNames("addIcon"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r5.allowRuleset);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r5.parentValue && ctx_r5.allowRuleset);
} }
function QueryBuilderComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r26 = ctx.ngIf;
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r26)("ngTemplateOutletContext", ctx_r6.getSwitchGroupContext());
} }
function QueryBuilderComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "div", 0);
    ɵɵelementStart(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r32); const ctx_r31 = ɵɵnextContext(2); return ctx_r31.data.condition = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 9);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_4_listener() { ɵɵrestoreView(_r32); const _r29 = ɵɵreference(3); const ctx_r33 = ɵɵnextContext(2); return ctx_r33.changeCondition(_r29.value); });
    ɵɵtext(5, "AND");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 0);
    ɵɵelementStart(7, "input", 16, 17);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r32); const ctx_r34 = ɵɵnextContext(2); return ctx_r34.data.condition = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(9, "label", 9);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_9_listener() { ɵɵrestoreView(_r32); const _r30 = ɵɵreference(8); const ctx_r35 = ɵɵnextContext(2); return ctx_r35.changeCondition(_r30.value); });
    ɵɵtext(10, "OR");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchGroup", "transition"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchControl"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchRadio"))("ngModel", ctx_r28.data.condition)("disabled", ctx_r28.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchLabel"));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchControl"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchRadio"))("ngModel", ctx_r28.data.condition)("disabled", ctx_r28.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r28.getClassNames("switchLabel"));
} }
function QueryBuilderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, QueryBuilderComponent_ng_template_8_div_0_Template, 11, 11, "div", 8);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r8.data);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 0);
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r61 = ctx.ngIf;
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r46 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r46.getClassNames("buttonGroup", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r61)("ngTemplateOutletContext", ctx_r46.getRemoveButtonContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template_button_click_1_listener() { ɵɵrestoreView(_r66); const rule_r37 = ɵɵnextContext(3).$implicit; const ctx_r64 = ɵɵnextContext(2); return ctx_r64.removeRule(rule_r37, ctx_r64.data); });
    ɵɵelement(2, "i", 0);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r48.getClassNames("removeButtonSize", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r48.getClassNames("button", "removeButton"))("disabled", ctx_r48.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r48.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r68 = ctx.ngIf;
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r67 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r68)("ngTemplateOutletContext", ctx_r67.getEntityContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r50 = ɵɵreference(6);
    const ctx_r49 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r49.getEntityTemplate())("ngIfElse", _r50);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const entity_r72 = ctx.$implicit;
    ɵɵproperty("ngValue", entity_r72.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", entity_r72.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r75 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r75); const rule_r37 = ɵɵnextContext(3).$implicit; return rule_r37.entity = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r75); const ctx_r77 = ɵɵnextContext(3); const rule_r37 = ctx_r77.$implicit; const i_r38 = ctx_r77.index; const ctx_r76 = ɵɵnextContext(2); return ctx_r76.changeEntity($event, rule_r37, i_r38, ctx_r76.data); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r51 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r51.getClassNames("entityControlSize"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r51.getClassNames("entityControl"))("ngModel", rule_r37.entity)("disabled", ctx_r51.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r51.entities);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r79 = ctx.ngIf;
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r52 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r79)("ngTemplateOutletContext", ctx_r52.getFieldContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r83 = ctx.$implicit;
    ɵɵproperty("ngValue", field_r83.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", field_r83.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r86 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r86); const rule_r37 = ɵɵnextContext(3).$implicit; return rule_r37.field = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r86); const rule_r37 = ɵɵnextContext(3).$implicit; const ctx_r87 = ɵɵnextContext(2); return ctx_r87.changeField($event, rule_r37); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r54 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r54.getClassNames("fieldControlSize"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r54.getClassNames("fieldControl"))("ngModel", rule_r37.field)("disabled", ctx_r54.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r54.getFields(rule_r37.entity));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r90 = ctx.ngIf;
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r55 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r90)("ngTemplateOutletContext", ctx_r55.getOperatorContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const operator_r94 = ctx.$implicit;
    ɵɵproperty("ngValue", operator_r94);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", operator_r94, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r97 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r97); const rule_r37 = ɵɵnextContext(3).$implicit; return rule_r37.operator = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener() { ɵɵrestoreView(_r97); const rule_r37 = ɵɵnextContext(3).$implicit; const ctx_r98 = ɵɵnextContext(2); return ctx_r98.changeOperator(rule_r37); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r57 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r57.getClassNames("operatorControlSize"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r57.getClassNames("operatorControl"))("ngModel", rule_r37.operator)("disabled", ctx_r57.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r57.getOperators(rule_r37.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r101 = ctx.ngIf;
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r58 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r101)("ngTemplateOutletContext", ctx_r58.getInputContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 39);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r113); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r113); const ctx_r114 = ɵɵnextContext(6); return ctx_r114.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r104 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r104.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r104.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r118 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 40);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r118); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r118); const ctx_r119 = ɵɵnextContext(6); return ctx_r119.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r105 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r105.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r105.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r123 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 41);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r123); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r123); const ctx_r124 = ɵɵnextContext(6); return ctx_r124.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r106 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r106.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r106.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r128 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 42);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r128); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r128); const ctx_r129 = ɵɵnextContext(6); return ctx_r129.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r107 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r107.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r107.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r132 = ctx.$implicit;
    ɵɵproperty("ngValue", opt_r132.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r132.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r135 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r135); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener() { ɵɵrestoreView(_r135); const ctx_r136 = ɵɵnextContext(6); return ctx_r136.changeInput(); });
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r108 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r108.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r108.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r108.getOptions(rule_r37.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r139 = ctx.$implicit;
    ɵɵproperty("ngValue", opt_r139.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r139.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r142 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "select", 43);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r142); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener() { ɵɵrestoreView(_r142); const ctx_r143 = ɵɵnextContext(6); return ctx_r143.changeInput(); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r109 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r109.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r109.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r109.getOptions(rule_r37.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r147 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 44);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r147); const rule_r37 = ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r147); const ctx_r148 = ɵɵnextContext(6); return ctx_r148.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(4).$implicit;
    const ctx_r110 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r110.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r110.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template, 1, 3, "input", 32);
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template, 1, 3, "input", 33);
    ɵɵtemplate(3, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template, 1, 3, "input", 34);
    ɵɵtemplate(4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template, 1, 3, "input", 35);
    ɵɵtemplate(5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template, 2, 4, "select", 36);
    ɵɵtemplate(6, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template, 3, 4, "ng-container", 37);
    ɵɵtemplate(7, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template, 1, 3, "input", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(3).$implicit;
    const ctx_r60 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r60.getClassNames("inputControlSize"))("ngSwitch", ctx_r60.getInputType(rule_r37.field, rule_r37.operator));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "string");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "number");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "date");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "time");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "category");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "multiselect");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "boolean");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 3);
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template, 3, 4, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template, 2, 2, "div", 22);
    ɵɵtemplate(5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template, 3, 5, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵtemplate(7, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template, 2, 2, "ng-container", 3);
    ɵɵtemplate(8, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template, 3, 5, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵtemplate(10, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template, 2, 2, "ng-container", 3);
    ɵɵtemplate(11, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template, 3, 5, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵtemplate(13, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template, 2, 2, "ng-container", 3);
    ɵɵtemplate(14, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_Template, 8, 9, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r47 = ɵɵreference(3);
    const _r53 = ɵɵreference(9);
    const _r56 = ɵɵreference(12);
    const _r59 = ɵɵreference(15);
    const rule_r37 = ɵɵnextContext(2).$implicit;
    const ctx_r41 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r41.getRemoveButtonTemplate())("ngIfElse", _r47);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (ctx_r41.entities == null ? null : ctx_r41.entities.length) > 0);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r41.getFieldTemplate())("ngIfElse", _r53);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r41.getOperatorTemplate())("ngIfElse", _r56);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r41.findTemplateForRule(rule_r37))("ngIfElse", _r59);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "query-builder", 45);
} if (rf & 2) {
    const rule_r37 = ɵɵnextContext(2).$implicit;
    const ctx_r42 = ɵɵnextContext(2);
    ɵɵproperty("data", rule_r37)("disabled", ctx_r42.disabled)("parentTouchedCallback", ctx_r42.parentTouchedCallback || ctx_r42.onTouchedCallback)("parentChangeCallback", ctx_r42.parentChangeCallback || ctx_r42.onChangeCallback)("parentInputTemplates", ctx_r42.parentInputTemplates || ctx_r42.inputTemplates)("parentOperatorTemplate", ctx_r42.parentOperatorTemplate || ctx_r42.operatorTemplate)("parentFieldTemplate", ctx_r42.parentFieldTemplate || ctx_r42.fieldTemplate)("parentEntityTemplate", ctx_r42.parentEntityTemplate || ctx_r42.entityTemplate)("parentSwitchGroupTemplate", ctx_r42.parentSwitchGroupTemplate || ctx_r42.switchGroupTemplate)("parentButtonGroupTemplate", ctx_r42.parentButtonGroupTemplate || ctx_r42.buttonGroupTemplate)("parentRemoveButtonTemplate", ctx_r42.parentRemoveButtonTemplate || ctx_r42.removeButtonTemplate)("parentEmptyWarningTemplate", ctx_r42.parentEmptyWarningTemplate || ctx_r42.emptyWarningTemplate)("parentArrowIconTemplate", ctx_r42.parentArrowIconTemplate || ctx_r42.arrowIconTemplate)("parentValue", ctx_r42.data)("classNames", ctx_r42.classNames)("config", ctx_r42.config)("allowRuleset", ctx_r42.allowRuleset)("allowCollapse", ctx_r42.allowCollapse)("emptyMessage", ctx_r42.emptyMessage)("operatorMap", ctx_r42.operatorMap);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r153 = ɵɵnextContext().ngIf;
    const ctx_r154 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r153)("ngTemplateOutletContext", ctx_r154.getEmptyWarningContext());
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const local_r40 = ɵɵnextContext().ngIf;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", local_r40.invalid);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r158 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r158.getClassNames("emptyWarning"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r158.emptyMessage, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template, 2, 2, "p", 8);
} if (rf & 2) {
    const local_r40 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngIf", local_r40.invalid);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 0);
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_Template, 16, 9, "ng-container", 13);
    ɵɵtemplate(3, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template, 1, 20, "query-builder", 19);
    ɵɵtemplate(4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 3);
    ɵɵtemplate(5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template, 1, 1, "ng-template", null, 20, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const local_r40 = ctx.ngIf;
    const _r44 = ɵɵreference(6);
    const ctx_r39 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r39.getQueryItemClassName(local_r40));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !local_r40.ruleset);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", local_r40.ruleset);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r39.getEmptyWarningTemplate())("ngIfElse", _r44);
} }
const _c1 = function (a0, a1) { return { ruleset: a0, invalid: a1 }; };
function QueryBuilderComponent_ul_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const rule_r37 = ctx.$implicit;
    const ctx_r36 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpureFunction2(1, _c1, !!rule_r37.rules, !ctx_r36.config.allowEmptyRulesets && rule_r37.rules && rule_r37.rules.length === 0));
} }
function QueryBuilderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_Template, 2, 4, "ng-container", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r10.getClassNames("tree"));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r10.data.rules);
} }
const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QueryBuilderComponent),
    multi: true
};
const VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => QueryBuilderComponent),
    multi: true
};
class QueryBuilderComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.defaultClassNames = {
            arrowIconButton: 'q-arrow-icon-button',
            arrowIcon: 'q-icon q-arrow-icon',
            removeIcon: 'q-icon q-remove-icon',
            addIcon: 'q-icon q-add-icon',
            button: 'q-button',
            buttonGroup: 'q-button-group',
            removeButton: 'q-remove-button',
            switchGroup: 'q-switch-group',
            switchLabel: 'q-switch-label',
            switchRadio: 'q-switch-radio',
            rightAlign: 'q-right-align',
            transition: 'q-transition',
            collapsed: 'q-collapsed',
            treeContainer: 'q-tree-container',
            tree: 'q-tree',
            row: 'q-row',
            connector: 'q-connector',
            rule: 'q-rule',
            ruleSet: 'q-ruleset',
            invalidRuleSet: 'q-invalid-ruleset',
            emptyWarning: 'q-empty-warning',
            fieldControl: 'q-field-control',
            fieldControlSize: 'q-control-size',
            entityControl: 'q-entity-control',
            entityControlSize: 'q-control-size',
            operatorControl: 'q-operator-control',
            operatorControlSize: 'q-control-size',
            inputControl: 'q-input-control',
            inputControlSize: 'q-control-size'
        };
        this.defaultOperatorMap = {
            string: ['=', '!=', 'contains', 'like'],
            number: ['=', '!=', '>', '>=', '<', '<='],
            time: ['=', '!=', '>', '>=', '<', '<='],
            date: ['=', '!=', '>', '>=', '<', '<='],
            category: ['=', '!=', 'in', 'not in'],
            boolean: ['=']
        };
        this.data = { condition: 'and', rules: [] };
        this.allowRuleset = true;
        this.allowCollapse = false;
        this.emptyMessage = 'A ruleset cannot be empty. Please add a rule or remove it all together.';
        this.config = { fields: {} };
        this.persistValueOnFieldChange = false;
        this.defaultTemplateTypes = [
            'string', 'number', 'time', 'date', 'category', 'boolean', 'multiselect'
        ];
        this.defaultPersistValueTypes = [
            'string', 'number', 'time', 'date', 'boolean'
        ];
        this.defaultEmptyList = [];
        this.inputContextCache = new Map();
        this.operatorContextCache = new Map();
        this.fieldContextCache = new Map();
        this.entityContextCache = new Map();
        this.removeButtonContextCache = new Map();
        // ----------END----------
        this.getDisabledState = () => {
            return this.disabled;
        };
    }
    // ----------OnInit Implementation----------
    ngOnInit() { }
    // ----------OnChanges Implementation----------
    ngOnChanges(changes) {
        const config = this.config;
        const type = typeof config;
        if (type === 'object') {
            this.fields = Object.keys(config.fields).map((value) => {
                const field = config.fields[value];
                field.value = field.value || value;
                return field;
            });
            if (config.entities) {
                this.entities = Object.keys(config.entities).map((value) => {
                    const entity = config.entities[value];
                    entity.value = entity.value || value;
                    return entity;
                });
            }
            else {
                this.entities = null;
            }
            this.operatorsCache = {};
        }
        else {
            throw new Error(`Expected 'config' must be a valid object, got ${type} instead.`);
        }
    }
    // ----------Validator Implementation----------
    validate(control) {
        const errors = {};
        const ruleErrorStore = [];
        let hasErrors = false;
        if (!this.config.allowEmptyRulesets && this.checkEmptyRuleInRuleset(this.data)) {
            errors.empty = 'Empty rulesets are not allowed.';
            hasErrors = true;
        }
        this.validateRulesInRuleset(this.data, ruleErrorStore);
        if (ruleErrorStore.length) {
            errors.rules = ruleErrorStore;
            hasErrors = true;
        }
        return hasErrors ? errors : null;
    }
    // ----------ControlValueAccessor Implementation----------
    get value() {
        return this.data;
    }
    set value(value) {
        // When component is initialized without a formControl, null is passed to value
        this.data = value || { condition: 'and', rules: [] };
        this.handleDataChange();
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChangeCallback = () => fn(this.data);
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = () => fn(this.data);
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.detectChanges();
    }
    findTemplateForRule(rule) {
        const type = this.getInputType(rule.field, rule.operator);
        if (type) {
            const queryInput = this.findQueryInput(type);
            if (queryInput) {
                return queryInput.template;
            }
            else {
                if (this.defaultTemplateTypes.indexOf(type) === -1) {
                    console.warn(`Could not find template for field with type: ${type}`);
                }
                return null;
            }
        }
    }
    findQueryInput(type) {
        const templates = this.parentInputTemplates || this.inputTemplates;
        return templates.find((item) => item.queryInputType === type);
    }
    getOperators(field) {
        if (this.operatorsCache[field]) {
            return this.operatorsCache[field];
        }
        let operators = this.defaultEmptyList;
        const fieldObject = this.config.fields[field];
        if (this.config.getOperators) {
            return this.config.getOperators(field, fieldObject);
        }
        const type = fieldObject.type;
        if (fieldObject && fieldObject.operators) {
            operators = fieldObject.operators;
        }
        else if (type) {
            operators = (this.operatorMap && this.operatorMap[type]) || this.defaultOperatorMap[type] || this.defaultEmptyList;
            if (operators.length === 0) {
                console.warn(`No operators found for field '${field}' with type ${fieldObject.type}. ` +
                    `Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.`);
            }
            if (fieldObject.nullable) {
                operators = operators.concat(['is null', 'is not null']);
            }
        }
        else {
            console.warn(`No 'type' property found on field: '${field}'`);
        }
        // Cache reference to array object, so it won't be computed next time and trigger a rerender.
        this.operatorsCache[field] = operators;
        return operators;
    }
    getFields(entity) {
        if (this.entities && entity) {
            return this.fields.filter((field) => {
                return field && field.entity === entity;
            });
        }
        else {
            return this.fields;
        }
    }
    getInputType(field, operator) {
        if (this.config.getInputType) {
            return this.config.getInputType(field, operator);
        }
        if (!this.config.fields[field]) {
            throw new Error(`No configuration for field '${field}' could be found! Please add it to config.fields.`);
        }
        const type = this.config.fields[field].type;
        switch (operator) {
            case 'is null':
            case 'is not null':
                return null; // No displayed component
            case 'in':
            case 'not in':
                return type === 'category' || type === 'boolean' ? 'multiselect' : type;
            default:
                return type;
        }
    }
    getOptions(field) {
        if (this.config.getOptions) {
            return this.config.getOptions(field);
        }
        return this.config.fields[field].options || this.defaultEmptyList;
    }
    getClassNames(...args) {
        const clsLookup = this.classNames ? this.classNames : this.defaultClassNames;
        const classNames = args.map((id) => clsLookup[id] || this.defaultClassNames[id]).filter((c) => !!c);
        return classNames.length ? classNames.join(' ') : null;
    }
    getDefaultField(entity) {
        if (!entity) {
            return null;
        }
        else if (entity.defaultField !== undefined) {
            return this.getDefaultValue(entity.defaultField);
        }
        else {
            const entityFields = this.fields.filter((field) => {
                return field && field.entity === entity.value;
            });
            if (entityFields && entityFields.length) {
                return entityFields[0];
            }
            else {
                console.warn(`No fields found for entity '${entity.name}'. ` +
                    `A 'defaultOperator' is also not specified on the field config. Operator value will default to null.`);
                return null;
            }
        }
    }
    getDefaultOperator(field) {
        if (field && field.defaultOperator !== undefined) {
            return this.getDefaultValue(field.defaultOperator);
        }
        else {
            const operators = this.getOperators(field.value);
            if (operators && operators.length) {
                return operators[0];
            }
            else {
                console.warn(`No operators found for field '${field.value}'. ` +
                    `A 'defaultOperator' is also not specified on the field config. Operator value will default to null.`);
                return null;
            }
        }
    }
    addRule(parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRule) {
            this.config.addRule(parent);
        }
        else {
            const field = this.fields[0];
            parent.rules = parent.rules.concat([{
                    field: field.value,
                    operator: this.getDefaultOperator(field),
                    value: this.getDefaultValue(field.defaultValue),
                    entity: field.entity
                }]);
        }
        this.handleTouched();
        this.handleDataChange();
    }
    removeRule(rule, parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.removeRule) {
            this.config.removeRule(rule, parent);
        }
        else {
            parent.rules = parent.rules.filter((r) => r !== rule);
        }
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.removeButtonContextCache.delete(rule);
        this.handleTouched();
        this.handleDataChange();
    }
    addRuleSet(parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRuleSet) {
            this.config.addRuleSet(parent);
        }
        else {
            parent.rules = parent.rules.concat([{ condition: 'and', rules: [] }]);
        }
        this.handleTouched();
        this.handleDataChange();
    }
    removeRuleSet(ruleset, parent) {
        if (this.disabled) {
            return;
        }
        ruleset = ruleset || this.data;
        parent = parent || this.parentValue;
        if (this.config.removeRuleSet) {
            this.config.removeRuleSet(ruleset, parent);
        }
        else {
            parent.rules = parent.rules.filter((r) => r !== ruleset);
        }
        this.handleTouched();
        this.handleDataChange();
    }
    transitionEnd(e) {
        this.treeContainer.nativeElement.style.maxHeight = null;
    }
    toggleCollapse() {
        this.computedTreeContainerHeight();
        setTimeout(() => {
            this.data.collapsed = !this.data.collapsed;
        }, 100);
    }
    computedTreeContainerHeight() {
        const nativeElement = this.treeContainer.nativeElement;
        if (nativeElement && nativeElement.firstElementChild) {
            nativeElement.style.maxHeight = (nativeElement.firstElementChild.clientHeight + 8) + 'px';
        }
    }
    changeCondition(value) {
        if (this.disabled) {
            return;
        }
        this.data.condition = value;
        this.handleTouched();
        this.handleDataChange();
    }
    changeOperator(rule) {
        if (this.disabled) {
            return;
        }
        if (this.config.coerceValueForOperator) {
            rule.value = this.config.coerceValueForOperator(rule.operator, rule.value, rule);
        }
        else {
            rule.value = this.coerceValueForOperator(rule.operator, rule.value, rule);
        }
        this.handleTouched();
        this.handleDataChange();
    }
    coerceValueForOperator(operator, value, rule) {
        const inputType = this.getInputType(rule.field, operator);
        if (inputType === 'multiselect' && !Array.isArray(value)) {
            return [value];
        }
        return value;
    }
    changeInput() {
        if (this.disabled) {
            return;
        }
        this.handleTouched();
        this.handleDataChange();
    }
    changeField(fieldValue, rule) {
        if (this.disabled) {
            return;
        }
        const inputContext = this.inputContextCache.get(rule);
        const currentField = inputContext && inputContext.field;
        const nextField = this.config.fields[fieldValue];
        const nextValue = this.calculateFieldChangeValue(currentField, nextField, rule.value);
        if (nextValue !== undefined) {
            rule.value = nextValue;
        }
        else {
            delete rule.value;
        }
        rule.operator = this.getDefaultOperator(nextField);
        // Create new context objects so templates will automatically update
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.getInputContext(rule);
        this.getFieldContext(rule);
        this.getOperatorContext(rule);
        this.getEntityContext(rule);
        this.handleTouched();
        this.handleDataChange();
    }
    changeEntity(entityValue, rule, index, data) {
        if (this.disabled) {
            return;
        }
        let i = index;
        let rs = data;
        const entity = this.entities.find((e) => e.value === entityValue);
        const defaultField = this.getDefaultField(entity);
        if (!rs) {
            rs = this.data;
            i = rs.rules.findIndex((x) => x === rule);
        }
        rule.field = defaultField.value;
        rs.rules[i] = rule;
        if (defaultField) {
            this.changeField(defaultField.value, rule);
        }
        else {
            this.handleTouched();
            this.handleDataChange();
        }
    }
    getDefaultValue(defaultValue) {
        switch (typeof defaultValue) {
            case 'function':
                return defaultValue();
            default:
                return defaultValue;
        }
    }
    getOperatorTemplate() {
        const t = this.parentOperatorTemplate || this.operatorTemplate;
        return t ? t.template : null;
    }
    getFieldTemplate() {
        const t = this.parentFieldTemplate || this.fieldTemplate;
        return t ? t.template : null;
    }
    getEntityTemplate() {
        const t = this.parentEntityTemplate || this.entityTemplate;
        return t ? t.template : null;
    }
    getArrowIconTemplate() {
        const t = this.parentArrowIconTemplate || this.arrowIconTemplate;
        return t ? t.template : null;
    }
    getButtonGroupTemplate() {
        const t = this.parentButtonGroupTemplate || this.buttonGroupTemplate;
        return t ? t.template : null;
    }
    getSwitchGroupTemplate() {
        const t = this.parentSwitchGroupTemplate || this.switchGroupTemplate;
        return t ? t.template : null;
    }
    getRemoveButtonTemplate() {
        const t = this.parentRemoveButtonTemplate || this.removeButtonTemplate;
        return t ? t.template : null;
    }
    getEmptyWarningTemplate() {
        const t = this.parentEmptyWarningTemplate || this.emptyWarningTemplate;
        return t ? t.template : null;
    }
    getQueryItemClassName(local) {
        let cls = this.getClassNames('row', 'connector', 'transition');
        cls += ' ' + this.getClassNames(local.ruleset ? 'ruleSet' : 'rule');
        if (local.invalid) {
            cls += ' ' + this.getClassNames('invalidRuleSet');
        }
        return cls;
    }
    getButtonGroupContext() {
        if (!this.buttonGroupContext) {
            this.buttonGroupContext = {
                addRule: this.addRule.bind(this),
                addRuleSet: this.allowRuleset && this.addRuleSet.bind(this),
                removeRuleSet: this.allowRuleset && this.parentValue && this.removeRuleSet.bind(this),
                getDisabledState: this.getDisabledState,
                $implicit: this.data
            };
        }
        return this.buttonGroupContext;
    }
    getRemoveButtonContext(rule) {
        if (!this.removeButtonContextCache.has(rule)) {
            this.removeButtonContextCache.set(rule, {
                removeRule: this.removeRule.bind(this),
                getDisabledState: this.getDisabledState,
                $implicit: rule
            });
        }
        return this.removeButtonContextCache.get(rule);
    }
    getFieldContext(rule) {
        if (!this.fieldContextCache.has(rule)) {
            this.fieldContextCache.set(rule, {
                onChange: this.changeField.bind(this),
                getFields: this.getFields.bind(this),
                getDisabledState: this.getDisabledState,
                fields: this.fields,
                $implicit: rule
            });
        }
        return this.fieldContextCache.get(rule);
    }
    getEntityContext(rule) {
        if (!this.entityContextCache.has(rule)) {
            this.entityContextCache.set(rule, {
                onChange: this.changeEntity.bind(this),
                getDisabledState: this.getDisabledState,
                entities: this.entities,
                $implicit: rule
            });
        }
        return this.entityContextCache.get(rule);
    }
    getSwitchGroupContext() {
        return {
            onChange: this.changeCondition.bind(this),
            getDisabledState: this.getDisabledState,
            $implicit: this.data
        };
    }
    getArrowIconContext() {
        return {
            getDisabledState: this.getDisabledState,
            $implicit: this.data
        };
    }
    getEmptyWarningContext() {
        return {
            getDisabledState: this.getDisabledState,
            message: this.emptyMessage,
            $implicit: this.data
        };
    }
    getOperatorContext(rule) {
        if (!this.operatorContextCache.has(rule)) {
            this.operatorContextCache.set(rule, {
                onChange: this.changeOperator.bind(this),
                getDisabledState: this.getDisabledState,
                operators: this.getOperators(rule.field),
                $implicit: rule
            });
        }
        return this.operatorContextCache.get(rule);
    }
    getInputContext(rule) {
        if (!this.inputContextCache.has(rule)) {
            this.inputContextCache.set(rule, {
                onChange: this.changeInput.bind(this),
                getDisabledState: this.getDisabledState,
                options: this.getOptions(rule.field),
                field: this.config.fields[rule.field],
                $implicit: rule
            });
        }
        return this.inputContextCache.get(rule);
    }
    calculateFieldChangeValue(currentField, nextField, currentValue) {
        if (this.config.calculateFieldChangeValue != null) {
            return this.config.calculateFieldChangeValue(currentField, nextField, currentValue);
        }
        const canKeepValue = () => {
            if (currentField == null || nextField == null) {
                return false;
            }
            return currentField.type === nextField.type
                && this.defaultPersistValueTypes.indexOf(currentField.type) !== -1;
        };
        if (this.persistValueOnFieldChange && canKeepValue()) {
            return currentValue;
        }
        if (nextField && nextField.defaultValue !== undefined) {
            return this.getDefaultValue(nextField.defaultValue);
        }
        return undefined;
    }
    checkEmptyRuleInRuleset(ruleset) {
        if (!ruleset || !ruleset.rules || ruleset.rules.length === 0) {
            return true;
        }
        else {
            return ruleset.rules.some((item) => {
                if (item.rules) {
                    return this.checkEmptyRuleInRuleset(item);
                }
                else {
                    return false;
                }
            });
        }
    }
    validateRulesInRuleset(ruleset, errorStore) {
        if (ruleset && ruleset.rules && ruleset.rules.length > 0) {
            ruleset.rules.forEach((item) => {
                if (item.rules) {
                    return this.validateRulesInRuleset(item, errorStore);
                }
                else if (item.field) {
                    const field = this.config.fields[item.field];
                    if (field && field.validator && field.validator.apply) {
                        const error = field.validator(item, ruleset);
                        if (error != null) {
                            errorStore.push(error);
                        }
                    }
                }
            });
        }
    }
    handleDataChange() {
        this.changeDetectorRef.markForCheck();
        if (this.onChangeCallback) {
            this.onChangeCallback();
        }
        if (this.parentChangeCallback) {
            this.parentChangeCallback();
        }
    }
    handleTouched() {
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
        if (this.parentTouchedCallback) {
            this.parentTouchedCallback();
        }
    }
}
QueryBuilderComponent.ɵfac = function QueryBuilderComponent_Factory(t) { return new (t || QueryBuilderComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
QueryBuilderComponent.ɵcmp = ɵɵdefineComponent({ type: QueryBuilderComponent, selectors: [["query-builder"]], contentQueries: function QueryBuilderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, QueryButtonGroupDirective, true);
        ɵɵcontentQuery(dirIndex, QuerySwitchGroupDirective, true);
        ɵɵcontentQuery(dirIndex, QueryFieldDirective, true);
        ɵɵcontentQuery(dirIndex, QueryEntityDirective, true);
        ɵɵcontentQuery(dirIndex, QueryOperatorDirective, true);
        ɵɵcontentQuery(dirIndex, QueryRemoveButtonDirective, true);
        ɵɵcontentQuery(dirIndex, QueryEmptyWarningDirective, true);
        ɵɵcontentQuery(dirIndex, QueryArrowIconDirective, true);
        ɵɵcontentQuery(dirIndex, QueryInputDirective, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonGroupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.switchGroupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fieldTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.entityTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.operatorTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.removeButtonTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyWarningTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrowIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputTemplates = _t);
    } }, viewQuery: function QueryBuilderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeContainer = _t.first);
    } }, inputs: { disabled: "disabled", data: "data", allowRuleset: "allowRuleset", allowCollapse: "allowCollapse", emptyMessage: "emptyMessage", classNames: "classNames", operatorMap: "operatorMap", parentValue: "parentValue", config: "config", parentArrowIconTemplate: "parentArrowIconTemplate", parentInputTemplates: "parentInputTemplates", parentOperatorTemplate: "parentOperatorTemplate", parentFieldTemplate: "parentFieldTemplate", parentEntityTemplate: "parentEntityTemplate", parentSwitchGroupTemplate: "parentSwitchGroupTemplate", parentButtonGroupTemplate: "parentButtonGroupTemplate", parentRemoveButtonTemplate: "parentRemoveButtonTemplate", parentEmptyWarningTemplate: "parentEmptyWarningTemplate", parentChangeCallback: "parentChangeCallback", parentTouchedCallback: "parentTouchedCallback", persistValueOnFieldChange: "persistValueOnFieldChange", value: "value" }, features: [ɵɵProvidersFeature([CONTROL_VALUE_ACCESSOR, VALIDATOR]), ɵɵNgOnChangesFeature()], decls: 13, vars: 8, consts: [[3, "ngClass"], ["defaultArrowIcon", ""], [3, "ngClass", "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["defaultButtonGroup", ""], ["defaultSwitchGroup", ""], [3, "ngClass", "transitionend"], ["treeContainer", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "ngClass", "disabled", "click"], ["type", "button", 3, "ngClass", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "value", "and", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["andOption", ""], ["type", "radio", "value", "or", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["orOption", ""], [4, "ngFor", "ngForOf"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap", 4, "ngIf"], ["defaultEmptyWarning", ""], ["defaultRemoveButton", ""], ["class", "q-inline-block-display", 4, "ngIf"], ["defaultEntity", ""], ["defaultField", ""], ["defaultOperator", ""], ["defaultInput", ""], [1, "q-inline-block-display"], [3, "ngClass", "ngModel", "disabled", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "ngClass", "ngSwitch"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["multiple", "", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap"]], template: function QueryBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, QueryBuilderComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, QueryBuilderComponent_a_3_Template, 2, 3, "a", 2);
        ɵɵtemplate(4, QueryBuilderComponent_ng_container_4_Template, 3, 3, "ng-container", 3);
        ɵɵtemplate(5, QueryBuilderComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(7, QueryBuilderComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
        ɵɵtemplate(8, QueryBuilderComponent_ng_template_8_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 6, 7);
        ɵɵlistener("transitionend", function QueryBuilderComponent_Template_div_transitionend_10_listener($event) { return ctx.transitionEnd($event); });
        ɵɵtemplate(12, QueryBuilderComponent_ul_12_Template, 2, 2, "ul", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = ɵɵreference(6);
        const _r7 = ɵɵreference(9);
        ɵɵproperty("ngClass", ctx.getClassNames("switchRow"));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.allowCollapse);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.getButtonGroupTemplate())("ngIfElse", _r4);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.getSwitchGroupTemplate())("ngIfElse", _r7);
        ɵɵadvance(3);
        ɵɵproperty("ngClass", ctx.getClassNames("treeContainer", ctx.data.collapsed ? "collapsed" : null));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.data && ctx.data.rules);
    } }, directives: [NgClass, NgIf, NgTemplateOutlet, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, NgSwitch, NgSwitchCase, NumberValueAccessor, SelectMultipleControlValueAccessor, CheckboxControlValueAccessor, QueryBuilderComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .q-icon[_ngcontent-%COMP%]{font-style:normal;font-size:12px}[_nghost-%COMP%]   .q-remove-icon[_ngcontent-%COMP%]::before{content:'\u274C'}[_nghost-%COMP%]   .q-arrow-icon-button[_ngcontent-%COMP%]{float:left;margin:4px 6px 4px 0;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:transform .25s linear;transition:transform .25s linear;cursor:pointer}[_nghost-%COMP%]   .q-arrow-icon-button.q-collapsed[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0)}[_nghost-%COMP%]   .q-arrow-icon[_ngcontent-%COMP%]::before{content:'\u25B6'}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]{color:#555}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]::before{content:'\u2795'}[_nghost-%COMP%]   .q-remove-button[_ngcontent-%COMP%]{color:#b3415d;width:31px}[_nghost-%COMP%]   .q-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-group[_ngcontent-%COMP%]{font-family:\"Lucida Grande\",Tahoma,Verdana,sans-serif;overflow:hidden}[_nghost-%COMP%]   .q-right-align[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{margin-left:8px;padding:0 8px;background-color:#fff}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:disabled{display:none}[_nghost-%COMP%]   .q-control-size[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-right:10px}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]:disabled{border-color:transparent}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:not([type=checkbox]), [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{min-height:32px;-webkit-appearance:none}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:400;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,.2);box-sizing:border-box}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f0f0f0}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{background-color:#e4e4e4;padding:0 8px}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked + .q-switch-label[_ngcontent-%COMP%]{border:1px solid #619ed7;background:#fff;color:#3176b3}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:disabled + .q-switch-label[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked:disabled + .q-switch-label[_ngcontent-%COMP%]{display:initial;color:initial;cursor:default;border-color:transparent}[_nghost-%COMP%]   .q-invalid-ruleset[_ngcontent-%COMP%]{border:1px solid rgba(179,65,93,.5)!important;background:rgba(179,65,93,.1)!important}[_nghost-%COMP%]   .q-empty-warning[_ngcontent-%COMP%]{color:#8d252e;text-align:center}[_nghost-%COMP%]   .q-ruleset[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .q-rule[_ngcontent-%COMP%]{border:1px solid #ccc;background:#fff}[_nghost-%COMP%]   .q-transition[_ngcontent-%COMP%]{-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}[_nghost-%COMP%]   .q-tree-container[_ngcontent-%COMP%]{width:100%;overflow:hidden;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}[_nghost-%COMP%]   .q-tree-container.q-collapsed[_ngcontent-%COMP%]{max-height:0!important}[_nghost-%COMP%]   .q-tree[_ngcontent-%COMP%]{list-style:none;margin:4px 0 2px}[_nghost-%COMP%]   .q-row[_ngcontent-%COMP%]{padding:6px 8px;margin-top:6px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{top:-5px;border-width:0 0 2px 2px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after{border-width:0 0 0 2px;top:50%}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after, [_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{content:'';left:-12px;border-color:#ccc;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:last-child::after{content:none}[_nghost-%COMP%]   .q-inline-block-display[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryBuilderComponent, [{
        type: Component,
        args: [{
                selector: 'query-builder',
                templateUrl: './query-builder.component.html',
                styleUrls: ['./query-builder.component.scss'],
                providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR]
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], data: [{
            type: Input
        }], allowRuleset: [{
            type: Input
        }], allowCollapse: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], classNames: [{
            type: Input
        }], operatorMap: [{
            type: Input
        }], parentValue: [{
            type: Input
        }], config: [{
            type: Input
        }], parentArrowIconTemplate: [{
            type: Input
        }], parentInputTemplates: [{
            type: Input
        }], parentOperatorTemplate: [{
            type: Input
        }], parentFieldTemplate: [{
            type: Input
        }], parentEntityTemplate: [{
            type: Input
        }], parentSwitchGroupTemplate: [{
            type: Input
        }], parentButtonGroupTemplate: [{
            type: Input
        }], parentRemoveButtonTemplate: [{
            type: Input
        }], parentEmptyWarningTemplate: [{
            type: Input
        }], parentChangeCallback: [{
            type: Input
        }], parentTouchedCallback: [{
            type: Input
        }], persistValueOnFieldChange: [{
            type: Input
        }], treeContainer: [{
            type: ViewChild,
            args: ['treeContainer', { static: true }]
        }], buttonGroupTemplate: [{
            type: ContentChild,
            args: [QueryButtonGroupDirective]
        }], switchGroupTemplate: [{
            type: ContentChild,
            args: [QuerySwitchGroupDirective]
        }], fieldTemplate: [{
            type: ContentChild,
            args: [QueryFieldDirective]
        }], entityTemplate: [{
            type: ContentChild,
            args: [QueryEntityDirective]
        }], operatorTemplate: [{
            type: ContentChild,
            args: [QueryOperatorDirective]
        }], removeButtonTemplate: [{
            type: ContentChild,
            args: [QueryRemoveButtonDirective]
        }], emptyWarningTemplate: [{
            type: ContentChild,
            args: [QueryEmptyWarningDirective]
        }], inputTemplates: [{
            type: ContentChildren,
            args: [QueryInputDirective]
        }], arrowIconTemplate: [{
            type: ContentChild,
            args: [QueryArrowIconDirective]
        }], value: [{
            type: Input
        }] }); })();

class QueryBuilderModule {
}
QueryBuilderModule.ɵmod = ɵɵdefineNgModule({ type: QueryBuilderModule });
QueryBuilderModule.ɵinj = ɵɵdefineInjector({ factory: function QueryBuilderModule_Factory(t) { return new (t || QueryBuilderModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(QueryBuilderModule, { declarations: [QueryBuilderComponent,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryBuilderModule, [{
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

/*
 * Public API Surface of angular2-query-builder
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CONTROL_VALUE_ACCESSOR, QueryArrowIconDirective, QueryBuilderComponent, QueryBuilderModule, QueryButtonGroupDirective, QueryEmptyWarningDirective, QueryEntityDirective, QueryFieldDirective, QueryInputDirective, QueryOperatorDirective, QueryRemoveButtonDirective, QuerySwitchGroupDirective, VALIDATOR };
//# sourceMappingURL=angular2-query-builder.js.map
