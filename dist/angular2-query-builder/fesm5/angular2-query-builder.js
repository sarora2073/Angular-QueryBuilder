import { NG_VALUE_ACCESSOR, NG_VALIDATORS, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, NumberValueAccessor, SelectMultipleControlValueAccessor, CheckboxControlValueAccessor, FormsModule } from '@angular/forms';
import { ɵɵdirectiveInject, TemplateRef, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵadvance, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵreference, ɵɵtext, ɵɵtextInterpolate1, ɵɵtemplateRefExtractor, ɵɵpureFunction2, forwardRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstaticViewQuery, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, Component, ViewChild, ContentChild, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet, NgForOf, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';

var QueryOperatorDirective = /** @class */ (function () {
    function QueryOperatorDirective(template) {
        this.template = template;
    }
    QueryOperatorDirective.ɵfac = function QueryOperatorDirective_Factory(t) { return new (t || QueryOperatorDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryOperatorDirective.ɵdir = ɵɵdefineDirective({ type: QueryOperatorDirective, selectors: [["", "queryOperator", ""]] });
    return QueryOperatorDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryOperatorDirective, [{
        type: Directive,
        args: [{ selector: '[queryOperator]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var QueryFieldDirective = /** @class */ (function () {
    function QueryFieldDirective(template) {
        this.template = template;
    }
    QueryFieldDirective.ɵfac = function QueryFieldDirective_Factory(t) { return new (t || QueryFieldDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryFieldDirective.ɵdir = ɵɵdefineDirective({ type: QueryFieldDirective, selectors: [["", "queryField", ""]] });
    return QueryFieldDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryFieldDirective, [{
        type: Directive,
        args: [{ selector: '[queryField]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var QueryEntityDirective = /** @class */ (function () {
    function QueryEntityDirective(template) {
        this.template = template;
    }
    QueryEntityDirective.ɵfac = function QueryEntityDirective_Factory(t) { return new (t || QueryEntityDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryEntityDirective.ɵdir = ɵɵdefineDirective({ type: QueryEntityDirective, selectors: [["", "queryEntity", ""]] });
    return QueryEntityDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryEntityDirective, [{
        type: Directive,
        args: [{ selector: '[queryEntity]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var QuerySwitchGroupDirective = /** @class */ (function () {
    function QuerySwitchGroupDirective(template) {
        this.template = template;
    }
    QuerySwitchGroupDirective.ɵfac = function QuerySwitchGroupDirective_Factory(t) { return new (t || QuerySwitchGroupDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QuerySwitchGroupDirective.ɵdir = ɵɵdefineDirective({ type: QuerySwitchGroupDirective, selectors: [["", "querySwitchGroup", ""]] });
    return QuerySwitchGroupDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QuerySwitchGroupDirective, [{
        type: Directive,
        args: [{ selector: '[querySwitchGroup]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var QueryButtonGroupDirective = /** @class */ (function () {
    function QueryButtonGroupDirective(template) {
        this.template = template;
    }
    QueryButtonGroupDirective.ɵfac = function QueryButtonGroupDirective_Factory(t) { return new (t || QueryButtonGroupDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryButtonGroupDirective.ɵdir = ɵɵdefineDirective({ type: QueryButtonGroupDirective, selectors: [["", "queryButtonGroup", ""]] });
    return QueryButtonGroupDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryButtonGroupDirective, [{
        type: Directive,
        args: [{ selector: '[queryButtonGroup]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

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
    QueryInputDirective.ɵfac = function QueryInputDirective_Factory(t) { return new (t || QueryInputDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryInputDirective.ɵdir = ɵɵdefineDirective({ type: QueryInputDirective, selectors: [["", "queryInput", ""]], inputs: { queryInputType: "queryInputType" } });
    return QueryInputDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryInputDirective, [{
        type: Directive,
        args: [{ selector: '[queryInput]' }]
    }], function () { return [{ type: TemplateRef }]; }, { queryInputType: [{
            type: Input
        }] }); })();

var QueryRemoveButtonDirective = /** @class */ (function () {
    function QueryRemoveButtonDirective(template) {
        this.template = template;
    }
    QueryRemoveButtonDirective.ɵfac = function QueryRemoveButtonDirective_Factory(t) { return new (t || QueryRemoveButtonDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryRemoveButtonDirective.ɵdir = ɵɵdefineDirective({ type: QueryRemoveButtonDirective, selectors: [["", "queryRemoveButton", ""]] });
    return QueryRemoveButtonDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryRemoveButtonDirective, [{
        type: Directive,
        args: [{ selector: '[queryRemoveButton]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var QueryEmptyWarningDirective = /** @class */ (function () {
    function QueryEmptyWarningDirective(template) {
        this.template = template;
    }
    QueryEmptyWarningDirective.ɵfac = function QueryEmptyWarningDirective_Factory(t) { return new (t || QueryEmptyWarningDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryEmptyWarningDirective.ɵdir = ɵɵdefineDirective({ type: QueryEmptyWarningDirective, selectors: [["", "queryEmptyWarning", ""]] });
    return QueryEmptyWarningDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryEmptyWarningDirective, [{
        type: Directive,
        args: [{ selector: '[queryEmptyWarning]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var QueryArrowIconDirective = /** @class */ (function () {
    function QueryArrowIconDirective(template) {
        this.template = template;
    }
    QueryArrowIconDirective.ɵfac = function QueryArrowIconDirective_Factory(t) { return new (t || QueryArrowIconDirective)(ɵɵdirectiveInject(TemplateRef)); };
    QueryArrowIconDirective.ɵdir = ɵɵdefineDirective({ type: QueryArrowIconDirective, selectors: [["", "queryArrowIcon", ""]] });
    return QueryArrowIconDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(QueryArrowIconDirective, [{
        type: Directive,
        args: [{ selector: '[queryArrowIcon]' }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var _c0 = ["treeContainer"];
function QueryBuilderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 0);
} if (rf & 2) {
    var ctx_r161 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r161.getClassNames("arrowIcon"));
} }
function QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r172 = ctx.ngIf;
    var ctx_r171 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r172)("ngTemplateOutletContext", ctx_r171.getArrowIconContext());
} }
function QueryBuilderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r175 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function QueryBuilderComponent_a_3_Template_a_click_0_listener() { ɵɵrestoreView(_r175); var ctx_r174 = ɵɵnextContext(); return ctx_r174.toggleCollapse(); });
    ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r162 = ɵɵnextContext();
    var _r160 = ɵɵreference(2);
    ɵɵproperty("ngClass", ctx_r162.getClassNames("arrowIconButton", ctx_r162.data.collapsed ? "collapsed" : null));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r162.getArrowIconTemplate())("ngIfElse", _r160);
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
    var template_r176 = ctx.ngIf;
    var ctx_r163 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r163.getClassNames("buttonGroup", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r176)("ngTemplateOutletContext", ctx_r163.getButtonGroupContext());
} }
function QueryBuilderComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r181 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r181); var ctx_r180 = ɵɵnextContext(2); return ctx_r180.addRuleSet(); });
    ɵɵelement(1, "i", 0);
    ɵɵtext(2, " Ruleset ");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r178 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r178.getClassNames("button"))("disabled", ctx_r178.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r178.getClassNames("addIcon"));
} }
function QueryBuilderComponent_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r183 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_ng_container_5_Template_button_click_1_listener() { ɵɵrestoreView(_r183); var ctx_r182 = ɵɵnextContext(2); return ctx_r182.removeRuleSet(); });
    ɵɵelement(2, "i", 0);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r179 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r179.getClassNames("button", "removeButton"))("disabled", ctx_r179.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r179.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r185 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_Template_button_click_1_listener() { ɵɵrestoreView(_r185); var ctx_r184 = ɵɵnextContext(); return ctx_r184.addRule(); });
    ɵɵelement(2, "i", 0);
    ɵɵtext(3, " Rule ");
    ɵɵelementEnd();
    ɵɵtemplate(4, QueryBuilderComponent_ng_template_5_button_4_Template, 3, 3, "button", 12);
    ɵɵtemplate(5, QueryBuilderComponent_ng_template_5_ng_container_5_Template, 3, 3, "ng-container", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r165 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r165.getClassNames("buttonGroup", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r165.getClassNames("button"))("disabled", ctx_r165.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r165.getClassNames("addIcon"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r165.allowRuleset);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r165.parentValue && ctx_r165.allowRuleset);
} }
function QueryBuilderComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r186 = ctx.ngIf;
    var ctx_r166 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r186)("ngTemplateOutletContext", ctx_r166.getSwitchGroupContext());
} }
function QueryBuilderComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r192 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "div", 0);
    ɵɵelementStart(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r192); var ctx_r191 = ɵɵnextContext(2); return ctx_r191.data.condition = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 9);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_4_listener() { ɵɵrestoreView(_r192); var _r189 = ɵɵreference(3); var ctx_r193 = ɵɵnextContext(2); return ctx_r193.changeCondition(_r189.value); });
    ɵɵtext(5, "AND");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 0);
    ɵɵelementStart(7, "input", 16, 17);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r192); var ctx_r194 = ɵɵnextContext(2); return ctx_r194.data.condition = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(9, "label", 9);
    ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_9_listener() { ɵɵrestoreView(_r192); var _r190 = ɵɵreference(8); var ctx_r195 = ɵɵnextContext(2); return ctx_r195.changeCondition(_r190.value); });
    ɵɵtext(10, "OR");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r188 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchGroup", "transition"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchControl"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchRadio"))("ngModel", ctx_r188.data.condition)("disabled", ctx_r188.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchLabel"));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchControl"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchRadio"))("ngModel", ctx_r188.data.condition)("disabled", ctx_r188.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r188.getClassNames("switchLabel"));
} }
function QueryBuilderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, QueryBuilderComponent_ng_template_8_div_0_Template, 11, 11, "div", 8);
} if (rf & 2) {
    var ctx_r168 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r168.data);
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
    var template_r221 = ctx.ngIf;
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r206 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r206.getClassNames("buttonGroup", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r221)("ngTemplateOutletContext", ctx_r206.getRemoveButtonContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r226 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template_button_click_1_listener() { ɵɵrestoreView(_r226); var rule_r197 = ɵɵnextContext(3).$implicit; var ctx_r224 = ɵɵnextContext(2); return ctx_r224.removeRule(rule_r197, ctx_r224.data); });
    ɵɵelement(2, "i", 0);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r208 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r208.getClassNames("removeButtonSize", "rightAlign"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r208.getClassNames("button", "removeButton"))("disabled", ctx_r208.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r208.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r228 = ctx.ngIf;
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r227 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r228)("ngTemplateOutletContext", ctx_r227.getEntityContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r210 = ɵɵreference(6);
    var ctx_r209 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r209.getEntityTemplate())("ngIfElse", _r210);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var entity_r232 = ctx.$implicit;
    ɵɵproperty("ngValue", entity_r232.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", entity_r232.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r235 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r235); var rule_r197 = ɵɵnextContext(3).$implicit; return rule_r197.entity = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r235); var ctx_r237 = ɵɵnextContext(3); var rule_r197 = ctx_r237.$implicit; var i_r198 = ctx_r237.index; var ctx_r236 = ɵɵnextContext(2); return ctx_r236.changeEntity($event, rule_r197, i_r198, ctx_r236.data); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r211 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r211.getClassNames("entityControlSize"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r211.getClassNames("entityControl"))("ngModel", rule_r197.entity)("disabled", ctx_r211.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r211.entities);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r239 = ctx.ngIf;
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r212 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r239)("ngTemplateOutletContext", ctx_r212.getFieldContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r243 = ctx.$implicit;
    ɵɵproperty("ngValue", field_r243.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", field_r243.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r246 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r246); var rule_r197 = ɵɵnextContext(3).$implicit; return rule_r197.field = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r246); var rule_r197 = ɵɵnextContext(3).$implicit; var ctx_r247 = ɵɵnextContext(2); return ctx_r247.changeField($event, rule_r197); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r214 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r214.getClassNames("fieldControlSize"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r214.getClassNames("fieldControl"))("ngModel", rule_r197.field)("disabled", ctx_r214.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r214.getFields(rule_r197.entity));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r250 = ctx.ngIf;
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r215 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r250)("ngTemplateOutletContext", ctx_r215.getOperatorContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var operator_r254 = ctx.$implicit;
    ɵɵproperty("ngValue", operator_r254);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", operator_r254, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    var _r257 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵelementStart(1, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r257); var rule_r197 = ɵɵnextContext(3).$implicit; return rule_r197.operator = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener() { ɵɵrestoreView(_r257); var rule_r197 = ɵɵnextContext(3).$implicit; var ctx_r258 = ɵɵnextContext(2); return ctx_r258.changeOperator(rule_r197); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r217 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r217.getClassNames("operatorControlSize"));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r217.getClassNames("operatorControl"))("ngModel", rule_r197.operator)("disabled", ctx_r217.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r217.getOperators(rule_r197.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r261 = ctx.ngIf;
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r218 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r261)("ngTemplateOutletContext", ctx_r218.getInputContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r273 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 39);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r273); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r273); var ctx_r274 = ɵɵnextContext(6); return ctx_r274.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r264 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r264.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r264.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r278 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 40);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r278); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r278); var ctx_r279 = ɵɵnextContext(6); return ctx_r279.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r265 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r265.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r265.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r283 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 41);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r283); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r283); var ctx_r284 = ɵɵnextContext(6); return ctx_r284.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r266 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r266.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r266.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r288 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 42);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r288); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r288); var ctx_r289 = ɵɵnextContext(6); return ctx_r289.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r267 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r267.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r267.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r292 = ctx.$implicit;
    ɵɵproperty("ngValue", opt_r292.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r292.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template(rf, ctx) { if (rf & 1) {
    var _r295 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select", 28);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r295); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener() { ɵɵrestoreView(_r295); var ctx_r296 = ɵɵnextContext(6); return ctx_r296.changeInput(); });
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r268 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r268.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r268.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r268.getOptions(rule_r197.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r299 = ctx.$implicit;
    ɵɵproperty("ngValue", opt_r299.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r299.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    var _r302 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "select", 43);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r302); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener() { ɵɵrestoreView(_r302); var ctx_r303 = ɵɵnextContext(6); return ctx_r303.changeInput(); });
    ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template, 2, 2, "option", 29);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r269 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r269.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r269.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r269.getOptions(rule_r197.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template(rf, ctx) { if (rf & 1) {
    var _r307 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 44);
    ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r307); var rule_r197 = ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r307); var ctx_r308 = ɵɵnextContext(6); return ctx_r308.changeInput(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(4).$implicit;
    var ctx_r270 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r270.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r270.disabled);
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
    var rule_r197 = ɵɵnextContext(3).$implicit;
    var ctx_r220 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r220.getClassNames("inputControlSize"))("ngSwitch", ctx_r220.getInputType(rule_r197.field, rule_r197.operator));
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
    var _r207 = ɵɵreference(3);
    var _r213 = ɵɵreference(9);
    var _r216 = ɵɵreference(12);
    var _r219 = ɵɵreference(15);
    var rule_r197 = ɵɵnextContext(2).$implicit;
    var ctx_r201 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r201.getRemoveButtonTemplate())("ngIfElse", _r207);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (ctx_r201.entities == null ? null : ctx_r201.entities.length) > 0);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r201.getFieldTemplate())("ngIfElse", _r213);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r201.getOperatorTemplate())("ngIfElse", _r216);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r201.findTemplateForRule(rule_r197))("ngIfElse", _r219);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "query-builder", 45);
} if (rf & 2) {
    var rule_r197 = ɵɵnextContext(2).$implicit;
    var ctx_r202 = ɵɵnextContext(2);
    ɵɵproperty("data", rule_r197)("disabled", ctx_r202.disabled)("parentTouchedCallback", ctx_r202.parentTouchedCallback || ctx_r202.onTouchedCallback)("parentChangeCallback", ctx_r202.parentChangeCallback || ctx_r202.onChangeCallback)("parentInputTemplates", ctx_r202.parentInputTemplates || ctx_r202.inputTemplates)("parentOperatorTemplate", ctx_r202.parentOperatorTemplate || ctx_r202.operatorTemplate)("parentFieldTemplate", ctx_r202.parentFieldTemplate || ctx_r202.fieldTemplate)("parentEntityTemplate", ctx_r202.parentEntityTemplate || ctx_r202.entityTemplate)("parentSwitchGroupTemplate", ctx_r202.parentSwitchGroupTemplate || ctx_r202.switchGroupTemplate)("parentButtonGroupTemplate", ctx_r202.parentButtonGroupTemplate || ctx_r202.buttonGroupTemplate)("parentRemoveButtonTemplate", ctx_r202.parentRemoveButtonTemplate || ctx_r202.removeButtonTemplate)("parentEmptyWarningTemplate", ctx_r202.parentEmptyWarningTemplate || ctx_r202.emptyWarningTemplate)("parentArrowIconTemplate", ctx_r202.parentArrowIconTemplate || ctx_r202.arrowIconTemplate)("parentValue", ctx_r202.data)("classNames", ctx_r202.classNames)("config", ctx_r202.config)("allowRuleset", ctx_r202.allowRuleset)("allowCollapse", ctx_r202.allowCollapse)("emptyMessage", ctx_r202.emptyMessage)("operatorMap", ctx_r202.operatorMap);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r313 = ɵɵnextContext().ngIf;
    var ctx_r314 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", template_r313)("ngTemplateOutletContext", ctx_r314.getEmptyWarningContext());
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var local_r200 = ɵɵnextContext().ngIf;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", local_r200.invalid);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r318 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r318.getClassNames("emptyWarning"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r318.emptyMessage, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template, 2, 2, "p", 8);
} if (rf & 2) {
    var local_r200 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngIf", local_r200.invalid);
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
    var local_r200 = ctx.ngIf;
    var _r204 = ɵɵreference(6);
    var ctx_r199 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r199.getQueryItemClassName(local_r200));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !local_r200.ruleset);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", local_r200.ruleset);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r199.getEmptyWarningTemplate())("ngIfElse", _r204);
} }
var _c1 = function (a0, a1) { return { ruleset: a0, invalid: a1 }; };
function QueryBuilderComponent_ul_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var rule_r197 = ctx.$implicit;
    var ctx_r196 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpureFunction2(1, _c1, !!rule_r197.rules, !ctx_r196.config.allowEmptyRulesets && rule_r197.rules && rule_r197.rules.length === 0));
} }
function QueryBuilderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 0);
    ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_Template, 2, 4, "ng-container", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r170 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r170.getClassNames("tree"));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r170.data.rules);
} }
var CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
var VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
var QueryBuilderComponent = /** @class */ (function () {
    function QueryBuilderComponent(changeDetectorRef) {
        var _this = this;
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
        this.getDisabledState = function () {
            return _this.disabled;
        };
    }
    // ----------OnInit Implementation----------
    QueryBuilderComponent.prototype.ngOnInit = function () { };
    // ----------OnChanges Implementation----------
    QueryBuilderComponent.prototype.ngOnChanges = function (changes) {
        var config = this.config;
        var type = typeof config;
        if (type === 'object') {
            this.fields = Object.keys(config.fields).map(function (value) {
                var field = config.fields[value];
                field.value = field.value || value;
                return field;
            });
            if (config.entities) {
                this.entities = Object.keys(config.entities).map(function (value) {
                    var entity = config.entities[value];
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
            throw new Error("Expected 'config' must be a valid object, got " + type + " instead.");
        }
    };
    // ----------Validator Implementation----------
    QueryBuilderComponent.prototype.validate = function (control) {
        var errors = {};
        var ruleErrorStore = [];
        var hasErrors = false;
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
    };
    Object.defineProperty(QueryBuilderComponent.prototype, "value", {
        // ----------ControlValueAccessor Implementation----------
        get: function () {
            return this.data;
        },
        set: function (value) {
            // When component is initialized without a formControl, null is passed to value
            this.data = value || { condition: 'and', rules: [] };
            this.handleDataChange();
        },
        enumerable: true,
        configurable: true
    });
    QueryBuilderComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    QueryBuilderComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChangeCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.registerOnTouched = function (fn) {
        var _this = this;
        this.onTouchedCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.detectChanges();
    };
    QueryBuilderComponent.prototype.findTemplateForRule = function (rule) {
        var type = this.getInputType(rule.field, rule.operator);
        if (type) {
            var queryInput = this.findQueryInput(type);
            if (queryInput) {
                return queryInput.template;
            }
            else {
                if (this.defaultTemplateTypes.indexOf(type) === -1) {
                    console.warn("Could not find template for field with type: " + type);
                }
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.findQueryInput = function (type) {
        var templates = this.parentInputTemplates || this.inputTemplates;
        return templates.find(function (item) { return item.queryInputType === type; });
    };
    QueryBuilderComponent.prototype.getOperators = function (field) {
        if (this.operatorsCache[field]) {
            return this.operatorsCache[field];
        }
        var operators = this.defaultEmptyList;
        var fieldObject = this.config.fields[field];
        if (this.config.getOperators) {
            return this.config.getOperators(field, fieldObject);
        }
        var type = fieldObject.type;
        if (fieldObject && fieldObject.operators) {
            operators = fieldObject.operators;
        }
        else if (type) {
            operators = (this.operatorMap && this.operatorMap[type]) || this.defaultOperatorMap[type] || this.defaultEmptyList;
            if (operators.length === 0) {
                console.warn("No operators found for field '" + field + "' with type " + fieldObject.type + ". " +
                    "Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.");
            }
            if (fieldObject.nullable) {
                operators = operators.concat(['is null', 'is not null']);
            }
        }
        else {
            console.warn("No 'type' property found on field: '" + field + "'");
        }
        // Cache reference to array object, so it won't be computed next time and trigger a rerender.
        this.operatorsCache[field] = operators;
        return operators;
    };
    QueryBuilderComponent.prototype.getFields = function (entity) {
        if (this.entities && entity) {
            return this.fields.filter(function (field) {
                return field && field.entity === entity;
            });
        }
        else {
            return this.fields;
        }
    };
    QueryBuilderComponent.prototype.getInputType = function (field, operator) {
        if (this.config.getInputType) {
            return this.config.getInputType(field, operator);
        }
        if (!this.config.fields[field]) {
            throw new Error("No configuration for field '" + field + "' could be found! Please add it to config.fields.");
        }
        var type = this.config.fields[field].type;
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
    };
    QueryBuilderComponent.prototype.getOptions = function (field) {
        if (this.config.getOptions) {
            return this.config.getOptions(field);
        }
        return this.config.fields[field].options || this.defaultEmptyList;
    };
    QueryBuilderComponent.prototype.getClassNames = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var clsLookup = this.classNames ? this.classNames : this.defaultClassNames;
        var classNames = args.map(function (id) { return clsLookup[id] || _this.defaultClassNames[id]; }).filter(function (c) { return !!c; });
        return classNames.length ? classNames.join(' ') : null;
    };
    QueryBuilderComponent.prototype.getDefaultField = function (entity) {
        if (!entity) {
            return null;
        }
        else if (entity.defaultField !== undefined) {
            return this.getDefaultValue(entity.defaultField);
        }
        else {
            var entityFields = this.fields.filter(function (field) {
                return field && field.entity === entity.value;
            });
            if (entityFields && entityFields.length) {
                return entityFields[0];
            }
            else {
                console.warn("No fields found for entity '" + entity.name + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.getDefaultOperator = function (field) {
        if (field && field.defaultOperator !== undefined) {
            return this.getDefaultValue(field.defaultOperator);
        }
        else {
            var operators = this.getOperators(field.value);
            if (operators && operators.length) {
                return operators[0];
            }
            else {
                console.warn("No operators found for field '" + field.value + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.addRule = function (parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRule) {
            this.config.addRule(parent);
        }
        else {
            var field = this.fields[0];
            parent.rules = parent.rules.concat([{
                    field: field.value,
                    operator: this.getDefaultOperator(field),
                    value: this.getDefaultValue(field.defaultValue),
                    entity: field.entity
                }]);
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRule = function (rule, parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.removeRule) {
            this.config.removeRule(rule, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== rule; });
        }
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.removeButtonContextCache.delete(rule);
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.addRuleSet = function (parent) {
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
    };
    QueryBuilderComponent.prototype.removeRuleSet = function (ruleset, parent) {
        if (this.disabled) {
            return;
        }
        ruleset = ruleset || this.data;
        parent = parent || this.parentValue;
        if (this.config.removeRuleSet) {
            this.config.removeRuleSet(ruleset, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== ruleset; });
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.transitionEnd = function (e) {
        this.treeContainer.nativeElement.style.maxHeight = null;
    };
    QueryBuilderComponent.prototype.toggleCollapse = function () {
        var _this = this;
        this.computedTreeContainerHeight();
        setTimeout(function () {
            _this.data.collapsed = !_this.data.collapsed;
        }, 100);
    };
    QueryBuilderComponent.prototype.computedTreeContainerHeight = function () {
        var nativeElement = this.treeContainer.nativeElement;
        if (nativeElement && nativeElement.firstElementChild) {
            nativeElement.style.maxHeight = (nativeElement.firstElementChild.clientHeight + 8) + 'px';
        }
    };
    QueryBuilderComponent.prototype.changeCondition = function (value) {
        if (this.disabled) {
            return;
        }
        this.data.condition = value;
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeOperator = function (rule) {
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
    };
    QueryBuilderComponent.prototype.coerceValueForOperator = function (operator, value, rule) {
        var inputType = this.getInputType(rule.field, operator);
        if (inputType === 'multiselect' && !Array.isArray(value)) {
            return [value];
        }
        return value;
    };
    QueryBuilderComponent.prototype.changeInput = function () {
        if (this.disabled) {
            return;
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeField = function (fieldValue, rule) {
        if (this.disabled) {
            return;
        }
        var inputContext = this.inputContextCache.get(rule);
        var currentField = inputContext && inputContext.field;
        var nextField = this.config.fields[fieldValue];
        var nextValue = this.calculateFieldChangeValue(currentField, nextField, rule.value);
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
    };
    QueryBuilderComponent.prototype.changeEntity = function (entityValue, rule, index, data) {
        if (this.disabled) {
            return;
        }
        var i = index;
        var rs = data;
        var entity = this.entities.find(function (e) { return e.value === entityValue; });
        var defaultField = this.getDefaultField(entity);
        if (!rs) {
            rs = this.data;
            i = rs.rules.findIndex(function (x) { return x === rule; });
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
    };
    QueryBuilderComponent.prototype.getDefaultValue = function (defaultValue) {
        switch (typeof defaultValue) {
            case 'function':
                return defaultValue();
            default:
                return defaultValue;
        }
    };
    QueryBuilderComponent.prototype.getOperatorTemplate = function () {
        var t = this.parentOperatorTemplate || this.operatorTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getFieldTemplate = function () {
        var t = this.parentFieldTemplate || this.fieldTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getEntityTemplate = function () {
        var t = this.parentEntityTemplate || this.entityTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getArrowIconTemplate = function () {
        var t = this.parentArrowIconTemplate || this.arrowIconTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getButtonGroupTemplate = function () {
        var t = this.parentButtonGroupTemplate || this.buttonGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getSwitchGroupTemplate = function () {
        var t = this.parentSwitchGroupTemplate || this.switchGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getRemoveButtonTemplate = function () {
        var t = this.parentRemoveButtonTemplate || this.removeButtonTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getEmptyWarningTemplate = function () {
        var t = this.parentEmptyWarningTemplate || this.emptyWarningTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getQueryItemClassName = function (local) {
        var cls = this.getClassNames('row', 'connector', 'transition');
        cls += ' ' + this.getClassNames(local.ruleset ? 'ruleSet' : 'rule');
        if (local.invalid) {
            cls += ' ' + this.getClassNames('invalidRuleSet');
        }
        return cls;
    };
    QueryBuilderComponent.prototype.getButtonGroupContext = function () {
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
    };
    QueryBuilderComponent.prototype.getRemoveButtonContext = function (rule) {
        if (!this.removeButtonContextCache.has(rule)) {
            this.removeButtonContextCache.set(rule, {
                removeRule: this.removeRule.bind(this),
                getDisabledState: this.getDisabledState,
                $implicit: rule
            });
        }
        return this.removeButtonContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getFieldContext = function (rule) {
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
    };
    QueryBuilderComponent.prototype.getEntityContext = function (rule) {
        if (!this.entityContextCache.has(rule)) {
            this.entityContextCache.set(rule, {
                onChange: this.changeEntity.bind(this),
                getDisabledState: this.getDisabledState,
                entities: this.entities,
                $implicit: rule
            });
        }
        return this.entityContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getSwitchGroupContext = function () {
        return {
            onChange: this.changeCondition.bind(this),
            getDisabledState: this.getDisabledState,
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getArrowIconContext = function () {
        return {
            getDisabledState: this.getDisabledState,
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getEmptyWarningContext = function () {
        return {
            getDisabledState: this.getDisabledState,
            message: this.emptyMessage,
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getOperatorContext = function (rule) {
        if (!this.operatorContextCache.has(rule)) {
            this.operatorContextCache.set(rule, {
                onChange: this.changeOperator.bind(this),
                getDisabledState: this.getDisabledState,
                operators: this.getOperators(rule.field),
                $implicit: rule
            });
        }
        return this.operatorContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getInputContext = function (rule) {
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
    };
    QueryBuilderComponent.prototype.calculateFieldChangeValue = function (currentField, nextField, currentValue) {
        var _this = this;
        if (this.config.calculateFieldChangeValue != null) {
            return this.config.calculateFieldChangeValue(currentField, nextField, currentValue);
        }
        var canKeepValue = function () {
            if (currentField == null || nextField == null) {
                return false;
            }
            return currentField.type === nextField.type
                && _this.defaultPersistValueTypes.indexOf(currentField.type) !== -1;
        };
        if (this.persistValueOnFieldChange && canKeepValue()) {
            return currentValue;
        }
        if (nextField && nextField.defaultValue !== undefined) {
            return this.getDefaultValue(nextField.defaultValue);
        }
        return undefined;
    };
    QueryBuilderComponent.prototype.checkEmptyRuleInRuleset = function (ruleset) {
        var _this = this;
        if (!ruleset || !ruleset.rules || ruleset.rules.length === 0) {
            return true;
        }
        else {
            return ruleset.rules.some(function (item) {
                if (item.rules) {
                    return _this.checkEmptyRuleInRuleset(item);
                }
                else {
                    return false;
                }
            });
        }
    };
    QueryBuilderComponent.prototype.validateRulesInRuleset = function (ruleset, errorStore) {
        var _this = this;
        if (ruleset && ruleset.rules && ruleset.rules.length > 0) {
            ruleset.rules.forEach(function (item) {
                if (item.rules) {
                    return _this.validateRulesInRuleset(item, errorStore);
                }
                else if (item.field) {
                    var field = _this.config.fields[item.field];
                    if (field && field.validator && field.validator.apply) {
                        var error = field.validator(item, ruleset);
                        if (error != null) {
                            errorStore.push(error);
                        }
                    }
                }
            });
        }
    };
    QueryBuilderComponent.prototype.handleDataChange = function () {
        this.changeDetectorRef.markForCheck();
        if (this.onChangeCallback) {
            this.onChangeCallback();
        }
        if (this.parentChangeCallback) {
            this.parentChangeCallback();
        }
    };
    QueryBuilderComponent.prototype.handleTouched = function () {
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
        if (this.parentTouchedCallback) {
            this.parentTouchedCallback();
        }
    };
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
            var _r164 = ɵɵreference(6);
            var _r167 = ɵɵreference(9);
            ɵɵproperty("ngClass", ctx.getClassNames("switchRow"));
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.allowCollapse);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.getButtonGroupTemplate())("ngIfElse", _r164);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.getSwitchGroupTemplate())("ngIfElse", _r167);
            ɵɵadvance(3);
            ɵɵproperty("ngClass", ctx.getClassNames("treeContainer", ctx.data.collapsed ? "collapsed" : null));
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.data && ctx.data.rules);
        } }, directives: [NgClass, NgIf, NgTemplateOutlet, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, NgSwitch, NgSwitchCase, NumberValueAccessor, SelectMultipleControlValueAccessor, CheckboxControlValueAccessor, QueryBuilderComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .q-icon[_ngcontent-%COMP%]{font-style:normal;font-size:12px}[_nghost-%COMP%]   .q-remove-icon[_ngcontent-%COMP%]::before{content:'\u274C'}[_nghost-%COMP%]   .q-arrow-icon-button[_ngcontent-%COMP%]{float:left;margin:4px 6px 4px 0;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:transform .25s linear;transition:transform .25s linear;cursor:pointer}[_nghost-%COMP%]   .q-arrow-icon-button.q-collapsed[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0)}[_nghost-%COMP%]   .q-arrow-icon[_ngcontent-%COMP%]::before{content:'\u25B6'}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]{color:#555}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]::before{content:'\u2795'}[_nghost-%COMP%]   .q-remove-button[_ngcontent-%COMP%]{color:#b3415d;width:31px}[_nghost-%COMP%]   .q-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-group[_ngcontent-%COMP%]{font-family:\"Lucida Grande\",Tahoma,Verdana,sans-serif;overflow:hidden}[_nghost-%COMP%]   .q-right-align[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{margin-left:8px;padding:0 8px;background-color:#fff}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:disabled{display:none}[_nghost-%COMP%]   .q-control-size[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-right:10px}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]:disabled{border-color:transparent}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:not([type=checkbox]), [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{min-height:32px;-webkit-appearance:none}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:400;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,.2);box-sizing:border-box}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f0f0f0}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{background-color:#e4e4e4;padding:0 8px}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked + .q-switch-label[_ngcontent-%COMP%]{border:1px solid #619ed7;background:#fff;color:#3176b3}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:disabled + .q-switch-label[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked:disabled + .q-switch-label[_ngcontent-%COMP%]{display:initial;color:initial;cursor:default;border-color:transparent}[_nghost-%COMP%]   .q-invalid-ruleset[_ngcontent-%COMP%]{border:1px solid rgba(179,65,93,.5)!important;background:rgba(179,65,93,.1)!important}[_nghost-%COMP%]   .q-empty-warning[_ngcontent-%COMP%]{color:#8d252e;text-align:center}[_nghost-%COMP%]   .q-ruleset[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .q-rule[_ngcontent-%COMP%]{border:1px solid #ccc;background:#fff}[_nghost-%COMP%]   .q-transition[_ngcontent-%COMP%]{-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}[_nghost-%COMP%]   .q-tree-container[_ngcontent-%COMP%]{width:100%;overflow:hidden;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}[_nghost-%COMP%]   .q-tree-container.q-collapsed[_ngcontent-%COMP%]{max-height:0!important}[_nghost-%COMP%]   .q-tree[_ngcontent-%COMP%]{list-style:none;margin:4px 0 2px}[_nghost-%COMP%]   .q-row[_ngcontent-%COMP%]{padding:6px 8px;margin-top:6px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{top:-5px;border-width:0 0 2px 2px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after{border-width:0 0 0 2px;top:50%}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after, [_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{content:'';left:-12px;border-color:#ccc;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:last-child::after{content:none}[_nghost-%COMP%]   .q-inline-block-display[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}"] });
    return QueryBuilderComponent;
}());
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

var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    QueryBuilderModule.ɵmod = ɵɵdefineNgModule({ type: QueryBuilderModule });
    QueryBuilderModule.ɵinj = ɵɵdefineInjector({ factory: function QueryBuilderModule_Factory(t) { return new (t || QueryBuilderModule)(); }, imports: [[
                CommonModule,
                FormsModule
            ]] });
    return QueryBuilderModule;
}());
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
