(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular2-query-builder', ['exports', '@angular/forms', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['angular2-query-builder'] = {}, global.ng.forms, global.ng.core, global.ng.common));
}(this, (function (exports, forms, core, common) { 'use strict';

    var QueryOperatorDirective = /** @class */ (function () {
        function QueryOperatorDirective(template) {
            this.template = template;
        }
        QueryOperatorDirective.ɵfac = function QueryOperatorDirective_Factory(t) { return new (t || QueryOperatorDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryOperatorDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryOperatorDirective, selectors: [["", "queryOperator", ""]] });
        return QueryOperatorDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryOperatorDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryOperator]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var QueryFieldDirective = /** @class */ (function () {
        function QueryFieldDirective(template) {
            this.template = template;
        }
        QueryFieldDirective.ɵfac = function QueryFieldDirective_Factory(t) { return new (t || QueryFieldDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryFieldDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryFieldDirective, selectors: [["", "queryField", ""]] });
        return QueryFieldDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryFieldDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryField]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var QueryEntityDirective = /** @class */ (function () {
        function QueryEntityDirective(template) {
            this.template = template;
        }
        QueryEntityDirective.ɵfac = function QueryEntityDirective_Factory(t) { return new (t || QueryEntityDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryEntityDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryEntityDirective, selectors: [["", "queryEntity", ""]] });
        return QueryEntityDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryEntityDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryEntity]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var QuerySwitchGroupDirective = /** @class */ (function () {
        function QuerySwitchGroupDirective(template) {
            this.template = template;
        }
        QuerySwitchGroupDirective.ɵfac = function QuerySwitchGroupDirective_Factory(t) { return new (t || QuerySwitchGroupDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QuerySwitchGroupDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QuerySwitchGroupDirective, selectors: [["", "querySwitchGroup", ""]] });
        return QuerySwitchGroupDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QuerySwitchGroupDirective, [{
            type: core.Directive,
            args: [{ selector: '[querySwitchGroup]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var QueryButtonGroupDirective = /** @class */ (function () {
        function QueryButtonGroupDirective(template) {
            this.template = template;
        }
        QueryButtonGroupDirective.ɵfac = function QueryButtonGroupDirective_Factory(t) { return new (t || QueryButtonGroupDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryButtonGroupDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryButtonGroupDirective, selectors: [["", "queryButtonGroup", ""]] });
        return QueryButtonGroupDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryButtonGroupDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryButtonGroup]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

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
        QueryInputDirective.ɵfac = function QueryInputDirective_Factory(t) { return new (t || QueryInputDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryInputDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryInputDirective, selectors: [["", "queryInput", ""]], inputs: { queryInputType: "queryInputType" } });
        return QueryInputDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryInputDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryInput]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, { queryInputType: [{
                type: core.Input
            }] }); })();

    var QueryRemoveButtonDirective = /** @class */ (function () {
        function QueryRemoveButtonDirective(template) {
            this.template = template;
        }
        QueryRemoveButtonDirective.ɵfac = function QueryRemoveButtonDirective_Factory(t) { return new (t || QueryRemoveButtonDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryRemoveButtonDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryRemoveButtonDirective, selectors: [["", "queryRemoveButton", ""]] });
        return QueryRemoveButtonDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryRemoveButtonDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryRemoveButton]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var QueryEmptyWarningDirective = /** @class */ (function () {
        function QueryEmptyWarningDirective(template) {
            this.template = template;
        }
        QueryEmptyWarningDirective.ɵfac = function QueryEmptyWarningDirective_Factory(t) { return new (t || QueryEmptyWarningDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryEmptyWarningDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryEmptyWarningDirective, selectors: [["", "queryEmptyWarning", ""]] });
        return QueryEmptyWarningDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryEmptyWarningDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryEmptyWarning]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var QueryArrowIconDirective = /** @class */ (function () {
        function QueryArrowIconDirective(template) {
            this.template = template;
        }
        QueryArrowIconDirective.ɵfac = function QueryArrowIconDirective_Factory(t) { return new (t || QueryArrowIconDirective)(core["ɵɵdirectiveInject"](core.TemplateRef)); };
        QueryArrowIconDirective.ɵdir = core["ɵɵdefineDirective"]({ type: QueryArrowIconDirective, selectors: [["", "queryArrowIcon", ""]] });
        return QueryArrowIconDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryArrowIconDirective, [{
            type: core.Directive,
            args: [{ selector: '[queryArrowIcon]' }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var _c0 = ["treeContainer"];
    function QueryBuilderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        var ctx_r161 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngClass", ctx_r161.getClassNames("arrowIcon"));
    } }
    function QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r172 = ctx.ngIf;
        var ctx_r171 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r172)("ngTemplateOutletContext", ctx_r171.getArrowIconContext());
    } }
    function QueryBuilderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
        var _r175 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 9);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_a_3_Template_a_click_0_listener() { core["ɵɵrestoreView"](_r175); var ctx_r174 = core["ɵɵnextContext"](); return ctx_r174.toggleCollapse(); });
        core["ɵɵtemplate"](1, QueryBuilderComponent_a_3_ng_container_1_Template, 2, 2, "ng-container", 3);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r162 = core["ɵɵnextContext"]();
        var _r160 = core["ɵɵreference"](2);
        core["ɵɵproperty"]("ngClass", ctx_r162.getClassNames("arrowIconButton", ctx_r162.data.collapsed ? "collapsed" : null));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r162.getArrowIconTemplate())("ngIfElse", _r160);
    } }
    function QueryBuilderComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 0);
        core["ɵɵtemplate"](2, QueryBuilderComponent_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r176 = ctx.ngIf;
        var ctx_r163 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r163.getClassNames("buttonGroup", "rightAlign"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r176)("ngTemplateOutletContext", ctx_r163.getButtonGroupContext());
    } }
    function QueryBuilderComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
        var _r181 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "button", 11);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_ng_template_5_button_4_Template_button_click_0_listener() { core["ɵɵrestoreView"](_r181); var ctx_r180 = core["ɵɵnextContext"](2); return ctx_r180.addRuleSet(); });
        core["ɵɵelement"](1, "i", 0);
        core["ɵɵtext"](2, " Ruleset ");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r178 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r178.getClassNames("button"))("disabled", ctx_r178.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r178.getClassNames("addIcon"));
    } }
    function QueryBuilderComponent_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        var _r183 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "button", 11);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_ng_template_5_ng_container_5_Template_button_click_1_listener() { core["ɵɵrestoreView"](_r183); var ctx_r182 = core["ɵɵnextContext"](2); return ctx_r182.removeRuleSet(); });
        core["ɵɵelement"](2, "i", 0);
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r179 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r179.getClassNames("button", "removeButton"))("disabled", ctx_r179.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r179.getClassNames("removeIcon"));
    } }
    function QueryBuilderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        var _r185 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "button", 11);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_ng_template_5_Template_button_click_1_listener() { core["ɵɵrestoreView"](_r185); var ctx_r184 = core["ɵɵnextContext"](); return ctx_r184.addRule(); });
        core["ɵɵelement"](2, "i", 0);
        core["ɵɵtext"](3, " Rule ");
        core["ɵɵelementEnd"]();
        core["ɵɵtemplate"](4, QueryBuilderComponent_ng_template_5_button_4_Template, 3, 3, "button", 12);
        core["ɵɵtemplate"](5, QueryBuilderComponent_ng_template_5_ng_container_5_Template, 3, 3, "ng-container", 13);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r165 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngClass", ctx_r165.getClassNames("buttonGroup", "rightAlign"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r165.getClassNames("button"))("disabled", ctx_r165.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r165.getClassNames("addIcon"));
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx_r165.allowRuleset);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !!ctx_r165.parentValue && ctx_r165.allowRuleset);
    } }
    function QueryBuilderComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r186 = ctx.ngIf;
        var ctx_r166 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r186)("ngTemplateOutletContext", ctx_r166.getSwitchGroupContext());
    } }
    function QueryBuilderComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r192 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "div", 0);
        core["ɵɵelementStart"](2, "input", 14, 15);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_2_listener($event) { core["ɵɵrestoreView"](_r192); var ctx_r191 = core["ɵɵnextContext"](2); return ctx_r191.data.condition = $event; });
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](4, "label", 9);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_4_listener() { core["ɵɵrestoreView"](_r192); var _r189 = core["ɵɵreference"](3); var ctx_r193 = core["ɵɵnextContext"](2); return ctx_r193.changeCondition(_r189.value); });
        core["ɵɵtext"](5, "AND");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](6, "div", 0);
        core["ɵɵelementStart"](7, "input", 16, 17);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_7_listener($event) { core["ɵɵrestoreView"](_r192); var ctx_r194 = core["ɵɵnextContext"](2); return ctx_r194.data.condition = $event; });
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](9, "label", 9);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_9_listener() { core["ɵɵrestoreView"](_r192); var _r190 = core["ɵɵreference"](8); var ctx_r195 = core["ɵɵnextContext"](2); return ctx_r195.changeCondition(_r190.value); });
        core["ɵɵtext"](10, "OR");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r188 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchGroup", "transition"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchControl"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchRadio"))("ngModel", ctx_r188.data.condition)("disabled", ctx_r188.disabled);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchLabel"));
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchControl"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchRadio"))("ngModel", ctx_r188.data.condition)("disabled", ctx_r188.disabled);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngClass", ctx_r188.getClassNames("switchLabel"));
    } }
    function QueryBuilderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, QueryBuilderComponent_ng_template_8_div_0_Template, 11, 11, "div", 8);
    } if (rf & 2) {
        var ctx_r168 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngIf", ctx_r168.data);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 0);
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r221 = ctx.ngIf;
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r206 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r206.getClassNames("buttonGroup", "rightAlign"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r221)("ngTemplateOutletContext", ctx_r206.getRemoveButtonContext(rule_r197));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r226 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "button", 11);
        core["ɵɵlistener"]("click", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template_button_click_1_listener() { core["ɵɵrestoreView"](_r226); var rule_r197 = core["ɵɵnextContext"](3).$implicit; var ctx_r224 = core["ɵɵnextContext"](2); return ctx_r224.removeRule(rule_r197, ctx_r224.data); });
        core["ɵɵelement"](2, "i", 0);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r208 = core["ɵɵnextContext"](5);
        core["ɵɵproperty"]("ngClass", ctx_r208.getClassNames("removeButtonSize", "rightAlign"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r208.getClassNames("button", "removeButton"))("disabled", ctx_r208.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r208.getClassNames("removeIcon"));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r228 = ctx.ngIf;
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r227 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r228)("ngTemplateOutletContext", ctx_r227.getEntityContext(rule_r197));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 27);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template, 2, 2, "ng-container", 3);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵnextContext"]();
        var _r210 = core["ɵɵreference"](6);
        var ctx_r209 = core["ɵɵnextContext"](4);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r209.getEntityTemplate())("ngIfElse", _r210);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 30);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var entity_r232 = ctx.$implicit;
        core["ɵɵproperty"]("ngValue", entity_r232.value);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", entity_r232.name, " ");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        var _r235 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "select", 28);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { core["ɵɵrestoreView"](_r235); var rule_r197 = core["ɵɵnextContext"](3).$implicit; return rule_r197.entity = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { core["ɵɵrestoreView"](_r235); var ctx_r237 = core["ɵɵnextContext"](3); var rule_r197 = ctx_r237.$implicit; var i_r198 = ctx_r237.index; var ctx_r236 = core["ɵɵnextContext"](2); return ctx_r236.changeEntity($event, rule_r197, i_r198, ctx_r236.data); });
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template, 2, 2, "option", 29);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r211 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r211.getClassNames("entityControlSize"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r211.getClassNames("entityControl"))("ngModel", rule_r197.entity)("disabled", ctx_r211.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r211.entities);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r239 = ctx.ngIf;
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r212 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r239)("ngTemplateOutletContext", ctx_r212.getFieldContext(rule_r197));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 30);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var field_r243 = ctx.$implicit;
        core["ɵɵproperty"]("ngValue", field_r243.value);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", field_r243.name, " ");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        var _r246 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "select", 28);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { core["ɵɵrestoreView"](_r246); var rule_r197 = core["ɵɵnextContext"](3).$implicit; return rule_r197.field = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { core["ɵɵrestoreView"](_r246); var rule_r197 = core["ɵɵnextContext"](3).$implicit; var ctx_r247 = core["ɵɵnextContext"](2); return ctx_r247.changeField($event, rule_r197); });
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template, 2, 2, "option", 29);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r214 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r214.getClassNames("fieldControlSize"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r214.getClassNames("fieldControl"))("ngModel", rule_r197.field)("disabled", ctx_r214.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r214.getFields(rule_r197.entity));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r250 = ctx.ngIf;
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r215 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r250)("ngTemplateOutletContext", ctx_r215.getOperatorContext(rule_r197));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 30);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var operator_r254 = ctx.$implicit;
        core["ɵɵproperty"]("ngValue", operator_r254);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", operator_r254, " ");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
        var _r257 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 0);
        core["ɵɵelementStart"](1, "select", 28);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener($event) { core["ɵɵrestoreView"](_r257); var rule_r197 = core["ɵɵnextContext"](3).$implicit; return rule_r197.operator = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener() { core["ɵɵrestoreView"](_r257); var rule_r197 = core["ɵɵnextContext"](3).$implicit; var ctx_r258 = core["ɵɵnextContext"](2); return ctx_r258.changeOperator(rule_r197); });
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template, 2, 2, "option", 29);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r217 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r217.getClassNames("operatorControlSize"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r217.getClassNames("operatorControl"))("ngModel", rule_r197.operator)("disabled", ctx_r217.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r217.getOperators(rule_r197.field));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r261 = ctx.ngIf;
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r218 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r261)("ngTemplateOutletContext", ctx_r218.getInputContext(rule_r197));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
        var _r273 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input", 39);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener($event) { core["ɵɵrestoreView"](_r273); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener() { core["ɵɵrestoreView"](_r273); var ctx_r274 = core["ɵɵnextContext"](6); return ctx_r274.changeInput(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r264 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r264.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r264.disabled);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template(rf, ctx) { if (rf & 1) {
        var _r278 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input", 40);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener($event) { core["ɵɵrestoreView"](_r278); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener() { core["ɵɵrestoreView"](_r278); var ctx_r279 = core["ɵɵnextContext"](6); return ctx_r279.changeInput(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r265 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r265.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r265.disabled);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template(rf, ctx) { if (rf & 1) {
        var _r283 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input", 41);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener($event) { core["ɵɵrestoreView"](_r283); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener() { core["ɵɵrestoreView"](_r283); var ctx_r284 = core["ɵɵnextContext"](6); return ctx_r284.changeInput(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r266 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r266.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r266.disabled);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template(rf, ctx) { if (rf & 1) {
        var _r288 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input", 42);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener($event) { core["ɵɵrestoreView"](_r288); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener() { core["ɵɵrestoreView"](_r288); var ctx_r289 = core["ɵɵnextContext"](6); return ctx_r289.changeInput(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r267 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r267.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r267.disabled);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 30);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var opt_r292 = ctx.$implicit;
        core["ɵɵproperty"]("ngValue", opt_r292.value);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", opt_r292.name, " ");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template(rf, ctx) { if (rf & 1) {
        var _r295 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "select", 28);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener($event) { core["ɵɵrestoreView"](_r295); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener() { core["ɵɵrestoreView"](_r295); var ctx_r296 = core["ɵɵnextContext"](6); return ctx_r296.changeInput(); });
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template, 2, 2, "option", 29);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r268 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r268.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r268.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r268.getOptions(rule_r197.field));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 30);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var opt_r299 = ctx.$implicit;
        core["ɵɵproperty"]("ngValue", opt_r299.value);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", opt_r299.name, " ");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        var _r302 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "select", 43);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener($event) { core["ɵɵrestoreView"](_r302); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener() { core["ɵɵrestoreView"](_r302); var ctx_r303 = core["ɵɵnextContext"](6); return ctx_r303.changeInput(); });
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template, 2, 2, "option", 29);
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r269 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r269.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r269.disabled);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r269.getOptions(rule_r197.field));
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template(rf, ctx) { if (rf & 1) {
        var _r307 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input", 44);
        core["ɵɵlistener"]("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener($event) { core["ɵɵrestoreView"](_r307); var rule_r197 = core["ɵɵnextContext"](4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener() { core["ɵɵrestoreView"](_r307); var ctx_r308 = core["ɵɵnextContext"](6); return ctx_r308.changeInput(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](4).$implicit;
        var ctx_r270 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r270.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r270.disabled);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 31);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template, 1, 3, "input", 32);
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template, 1, 3, "input", 33);
        core["ɵɵtemplate"](3, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template, 1, 3, "input", 34);
        core["ɵɵtemplate"](4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template, 1, 3, "input", 35);
        core["ɵɵtemplate"](5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template, 2, 4, "select", 36);
        core["ɵɵtemplate"](6, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template, 3, 4, "ng-container", 37);
        core["ɵɵtemplate"](7, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template, 1, 3, "input", 38);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](3).$implicit;
        var ctx_r220 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", ctx_r220.getClassNames("inputControlSize"))("ngSwitch", ctx_r220.getInputType(rule_r197.field, rule_r197.operator));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "string");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "number");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "date");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "time");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "category");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "multiselect");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "boolean");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 3);
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template, 3, 4, "ng-template", null, 21, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵtemplate"](4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template, 2, 2, "div", 22);
        core["ɵɵtemplate"](5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template, 3, 5, "ng-template", null, 23, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵtemplate"](7, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template, 2, 2, "ng-container", 3);
        core["ɵɵtemplate"](8, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template, 3, 5, "ng-template", null, 24, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵtemplate"](10, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template, 2, 2, "ng-container", 3);
        core["ɵɵtemplate"](11, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template, 3, 5, "ng-template", null, 25, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵtemplate"](13, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template, 2, 2, "ng-container", 3);
        core["ɵɵtemplate"](14, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_Template, 8, 9, "ng-template", null, 26, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var _r207 = core["ɵɵreference"](3);
        var _r213 = core["ɵɵreference"](9);
        var _r216 = core["ɵɵreference"](12);
        var _r219 = core["ɵɵreference"](15);
        var rule_r197 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r201 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r201.getRemoveButtonTemplate())("ngIfElse", _r207);
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ngIf", (ctx_r201.entities == null ? null : ctx_r201.entities.length) > 0);
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ngIf", ctx_r201.getFieldTemplate())("ngIfElse", _r213);
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ngIf", ctx_r201.getOperatorTemplate())("ngIfElse", _r216);
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ngIf", ctx_r201.findTemplateForRule(rule_r197))("ngIfElse", _r219);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "query-builder", 45);
    } if (rf & 2) {
        var rule_r197 = core["ɵɵnextContext"](2).$implicit;
        var ctx_r202 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("data", rule_r197)("disabled", ctx_r202.disabled)("parentTouchedCallback", ctx_r202.parentTouchedCallback || ctx_r202.onTouchedCallback)("parentChangeCallback", ctx_r202.parentChangeCallback || ctx_r202.onChangeCallback)("parentInputTemplates", ctx_r202.parentInputTemplates || ctx_r202.inputTemplates)("parentOperatorTemplate", ctx_r202.parentOperatorTemplate || ctx_r202.operatorTemplate)("parentFieldTemplate", ctx_r202.parentFieldTemplate || ctx_r202.fieldTemplate)("parentEntityTemplate", ctx_r202.parentEntityTemplate || ctx_r202.entityTemplate)("parentSwitchGroupTemplate", ctx_r202.parentSwitchGroupTemplate || ctx_r202.switchGroupTemplate)("parentButtonGroupTemplate", ctx_r202.parentButtonGroupTemplate || ctx_r202.buttonGroupTemplate)("parentRemoveButtonTemplate", ctx_r202.parentRemoveButtonTemplate || ctx_r202.removeButtonTemplate)("parentEmptyWarningTemplate", ctx_r202.parentEmptyWarningTemplate || ctx_r202.emptyWarningTemplate)("parentArrowIconTemplate", ctx_r202.parentArrowIconTemplate || ctx_r202.arrowIconTemplate)("parentValue", ctx_r202.data)("classNames", ctx_r202.classNames)("config", ctx_r202.config)("allowRuleset", ctx_r202.allowRuleset)("allowCollapse", ctx_r202.allowCollapse)("emptyMessage", ctx_r202.emptyMessage)("operatorMap", ctx_r202.operatorMap);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainer"](0);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var template_r313 = core["ɵɵnextContext"]().ngIf;
        var ctx_r314 = core["ɵɵnextContext"](4);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngTemplateOutlet", template_r313)("ngTemplateOutletContext", ctx_r314.getEmptyWarningContext());
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 13);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var local_r200 = core["ɵɵnextContext"]().ngIf;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", local_r200.invalid);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "p", 0);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r318 = core["ɵɵnextContext"](5);
        core["ɵɵproperty"]("ngClass", ctx_r318.getClassNames("emptyWarning"));
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", ctx_r318.emptyMessage, " ");
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template, 2, 2, "p", 8);
    } if (rf & 2) {
        var local_r200 = core["ɵɵnextContext"]().ngIf;
        core["ɵɵproperty"]("ngIf", local_r200.invalid);
    } }
    function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "li", 0);
        core["ɵɵtemplate"](2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_Template, 16, 9, "ng-container", 13);
        core["ɵɵtemplate"](3, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template, 1, 20, "query-builder", 19);
        core["ɵɵtemplate"](4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 3);
        core["ɵɵtemplate"](5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template, 1, 1, "ng-template", null, 20, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var local_r200 = ctx.ngIf;
        var _r204 = core["ɵɵreference"](6);
        var ctx_r199 = core["ɵɵnextContext"](3);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", ctx_r199.getQueryItemClassName(local_r200));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !local_r200.ruleset);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", local_r200.ruleset);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r199.getEmptyWarningTemplate())("ngIfElse", _r204);
    } }
    var _c1 = function (a0, a1) { return { ruleset: a0, invalid: a1 }; };
    function QueryBuilderComponent_ul_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 13);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var rule_r197 = ctx.$implicit;
        var ctx_r196 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", core["ɵɵpureFunction2"](1, _c1, !!rule_r197.rules, !ctx_r196.config.allowEmptyRulesets && rule_r197.rules && rule_r197.rules.length === 0));
    } }
    function QueryBuilderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "ul", 0);
        core["ɵɵtemplate"](1, QueryBuilderComponent_ul_12_ng_container_1_Template, 2, 4, "ng-container", 18);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r170 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngClass", ctx_r170.getClassNames("tree"));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r170.data.rules);
    } }
    var CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return QueryBuilderComponent; }),
        multi: true
    };
    var VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return QueryBuilderComponent; }),
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
        QueryBuilderComponent.ɵfac = function QueryBuilderComponent_Factory(t) { return new (t || QueryBuilderComponent)(core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        QueryBuilderComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: QueryBuilderComponent, selectors: [["query-builder"]], contentQueries: function QueryBuilderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, QueryButtonGroupDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QuerySwitchGroupDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryFieldDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryEntityDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryOperatorDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryRemoveButtonDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryEmptyWarningDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryArrowIconDirective, true);
                core["ɵɵcontentQuery"](dirIndex, QueryInputDirective, false);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.buttonGroupTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.switchGroupTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.fieldTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.entityTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.operatorTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.removeButtonTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.emptyWarningTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.arrowIconTemplate = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.inputTemplates = _t);
            } }, viewQuery: function QueryBuilderComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.treeContainer = _t.first);
            } }, inputs: { disabled: "disabled", data: "data", allowRuleset: "allowRuleset", allowCollapse: "allowCollapse", emptyMessage: "emptyMessage", classNames: "classNames", operatorMap: "operatorMap", parentValue: "parentValue", config: "config", parentArrowIconTemplate: "parentArrowIconTemplate", parentInputTemplates: "parentInputTemplates", parentOperatorTemplate: "parentOperatorTemplate", parentFieldTemplate: "parentFieldTemplate", parentEntityTemplate: "parentEntityTemplate", parentSwitchGroupTemplate: "parentSwitchGroupTemplate", parentButtonGroupTemplate: "parentButtonGroupTemplate", parentRemoveButtonTemplate: "parentRemoveButtonTemplate", parentEmptyWarningTemplate: "parentEmptyWarningTemplate", parentChangeCallback: "parentChangeCallback", parentTouchedCallback: "parentTouchedCallback", persistValueOnFieldChange: "persistValueOnFieldChange", value: "value" }, features: [core["ɵɵProvidersFeature"]([CONTROL_VALUE_ACCESSOR, VALIDATOR]), core["ɵɵNgOnChangesFeature"]()], decls: 13, vars: 8, consts: [[3, "ngClass"], ["defaultArrowIcon", ""], [3, "ngClass", "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["defaultButtonGroup", ""], ["defaultSwitchGroup", ""], [3, "ngClass", "transitionend"], ["treeContainer", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "ngClass", "disabled", "click"], ["type", "button", 3, "ngClass", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "value", "and", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["andOption", ""], ["type", "radio", "value", "or", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["orOption", ""], [4, "ngFor", "ngForOf"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap", 4, "ngIf"], ["defaultEmptyWarning", ""], ["defaultRemoveButton", ""], ["class", "q-inline-block-display", 4, "ngIf"], ["defaultEntity", ""], ["defaultField", ""], ["defaultOperator", ""], ["defaultInput", ""], [1, "q-inline-block-display"], [3, "ngClass", "ngModel", "disabled", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "ngClass", "ngSwitch"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["multiple", "", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap"]], template: function QueryBuilderComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, QueryBuilderComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](3, QueryBuilderComponent_a_3_Template, 2, 3, "a", 2);
                core["ɵɵtemplate"](4, QueryBuilderComponent_ng_container_4_Template, 3, 3, "ng-container", 3);
                core["ɵɵtemplate"](5, QueryBuilderComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵtemplate"](7, QueryBuilderComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
                core["ɵɵtemplate"](8, QueryBuilderComponent_ng_template_8_Template, 1, 1, "ng-template", null, 5, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](10, "div", 6, 7);
                core["ɵɵlistener"]("transitionend", function QueryBuilderComponent_Template_div_transitionend_10_listener($event) { return ctx.transitionEnd($event); });
                core["ɵɵtemplate"](12, QueryBuilderComponent_ul_12_Template, 2, 2, "ul", 8);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                var _r164 = core["ɵɵreference"](6);
                var _r167 = core["ɵɵreference"](9);
                core["ɵɵproperty"]("ngClass", ctx.getClassNames("switchRow"));
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngIf", ctx.allowCollapse);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.getButtonGroupTemplate())("ngIfElse", _r164);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngIf", ctx.getSwitchGroupTemplate())("ngIfElse", _r167);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngClass", ctx.getClassNames("treeContainer", ctx.data.collapsed ? "collapsed" : null));
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", ctx.data && ctx.data.rules);
            } }, directives: [common.NgClass, common.NgIf, common.NgTemplateOutlet, forms.RadioControlValueAccessor, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgForOf, forms.SelectControlValueAccessor, forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], common.NgSwitch, common.NgSwitchCase, forms.NumberValueAccessor, forms.SelectMultipleControlValueAccessor, forms.CheckboxControlValueAccessor, QueryBuilderComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .q-icon[_ngcontent-%COMP%]{font-style:normal;font-size:12px}[_nghost-%COMP%]   .q-remove-icon[_ngcontent-%COMP%]::before{content:'\u274C'}[_nghost-%COMP%]   .q-arrow-icon-button[_ngcontent-%COMP%]{float:left;margin:4px 6px 4px 0;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:transform .25s linear;transition:transform .25s linear;cursor:pointer}[_nghost-%COMP%]   .q-arrow-icon-button.q-collapsed[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0)}[_nghost-%COMP%]   .q-arrow-icon[_ngcontent-%COMP%]::before{content:'\u25B6'}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]{color:#555}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]::before{content:'\u2795'}[_nghost-%COMP%]   .q-remove-button[_ngcontent-%COMP%]{color:#b3415d;width:31px}[_nghost-%COMP%]   .q-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-group[_ngcontent-%COMP%]{font-family:\"Lucida Grande\",Tahoma,Verdana,sans-serif;overflow:hidden}[_nghost-%COMP%]   .q-right-align[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{margin-left:8px;padding:0 8px;background-color:#fff}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:disabled{display:none}[_nghost-%COMP%]   .q-control-size[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-right:10px}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]:disabled{border-color:transparent}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:not([type=checkbox]), [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{min-height:32px;-webkit-appearance:none}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:400;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,.2);box-sizing:border-box}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f0f0f0}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{background-color:#e4e4e4;padding:0 8px}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked + .q-switch-label[_ngcontent-%COMP%]{border:1px solid #619ed7;background:#fff;color:#3176b3}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:disabled + .q-switch-label[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked:disabled + .q-switch-label[_ngcontent-%COMP%]{display:initial;color:initial;cursor:default;border-color:transparent}[_nghost-%COMP%]   .q-invalid-ruleset[_ngcontent-%COMP%]{border:1px solid rgba(179,65,93,.5)!important;background:rgba(179,65,93,.1)!important}[_nghost-%COMP%]   .q-empty-warning[_ngcontent-%COMP%]{color:#8d252e;text-align:center}[_nghost-%COMP%]   .q-ruleset[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .q-rule[_ngcontent-%COMP%]{border:1px solid #ccc;background:#fff}[_nghost-%COMP%]   .q-transition[_ngcontent-%COMP%]{-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}[_nghost-%COMP%]   .q-tree-container[_ngcontent-%COMP%]{width:100%;overflow:hidden;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}[_nghost-%COMP%]   .q-tree-container.q-collapsed[_ngcontent-%COMP%]{max-height:0!important}[_nghost-%COMP%]   .q-tree[_ngcontent-%COMP%]{list-style:none;margin:4px 0 2px}[_nghost-%COMP%]   .q-row[_ngcontent-%COMP%]{padding:6px 8px;margin-top:6px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{top:-5px;border-width:0 0 2px 2px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after{border-width:0 0 0 2px;top:50%}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after, [_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{content:'';left:-12px;border-color:#ccc;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:last-child::after{content:none}[_nghost-%COMP%]   .q-inline-block-display[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}"] });
        return QueryBuilderComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryBuilderComponent, [{
            type: core.Component,
            args: [{
                    selector: 'query-builder',
                    templateUrl: './query-builder.component.html',
                    styleUrls: ['./query-builder.component.scss'],
                    providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { disabled: [{
                type: core.Input
            }], data: [{
                type: core.Input
            }], allowRuleset: [{
                type: core.Input
            }], allowCollapse: [{
                type: core.Input
            }], emptyMessage: [{
                type: core.Input
            }], classNames: [{
                type: core.Input
            }], operatorMap: [{
                type: core.Input
            }], parentValue: [{
                type: core.Input
            }], config: [{
                type: core.Input
            }], parentArrowIconTemplate: [{
                type: core.Input
            }], parentInputTemplates: [{
                type: core.Input
            }], parentOperatorTemplate: [{
                type: core.Input
            }], parentFieldTemplate: [{
                type: core.Input
            }], parentEntityTemplate: [{
                type: core.Input
            }], parentSwitchGroupTemplate: [{
                type: core.Input
            }], parentButtonGroupTemplate: [{
                type: core.Input
            }], parentRemoveButtonTemplate: [{
                type: core.Input
            }], parentEmptyWarningTemplate: [{
                type: core.Input
            }], parentChangeCallback: [{
                type: core.Input
            }], parentTouchedCallback: [{
                type: core.Input
            }], persistValueOnFieldChange: [{
                type: core.Input
            }], treeContainer: [{
                type: core.ViewChild,
                args: ['treeContainer', { static: true }]
            }], buttonGroupTemplate: [{
                type: core.ContentChild,
                args: [QueryButtonGroupDirective]
            }], switchGroupTemplate: [{
                type: core.ContentChild,
                args: [QuerySwitchGroupDirective]
            }], fieldTemplate: [{
                type: core.ContentChild,
                args: [QueryFieldDirective]
            }], entityTemplate: [{
                type: core.ContentChild,
                args: [QueryEntityDirective]
            }], operatorTemplate: [{
                type: core.ContentChild,
                args: [QueryOperatorDirective]
            }], removeButtonTemplate: [{
                type: core.ContentChild,
                args: [QueryRemoveButtonDirective]
            }], emptyWarningTemplate: [{
                type: core.ContentChild,
                args: [QueryEmptyWarningDirective]
            }], inputTemplates: [{
                type: core.ContentChildren,
                args: [QueryInputDirective]
            }], arrowIconTemplate: [{
                type: core.ContentChild,
                args: [QueryArrowIconDirective]
            }], value: [{
                type: core.Input
            }] }); })();

    var QueryBuilderModule = /** @class */ (function () {
        function QueryBuilderModule() {
        }
        QueryBuilderModule.ɵmod = core["ɵɵdefineNgModule"]({ type: QueryBuilderModule });
        QueryBuilderModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function QueryBuilderModule_Factory(t) { return new (t || QueryBuilderModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule
                ]] });
        return QueryBuilderModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](QueryBuilderModule, { declarations: [QueryBuilderComponent,
            QueryInputDirective,
            QueryOperatorDirective,
            QueryFieldDirective,
            QueryEntityDirective,
            QueryButtonGroupDirective,
            QuerySwitchGroupDirective,
            QueryRemoveButtonDirective,
            QueryEmptyWarningDirective,
            QueryArrowIconDirective], imports: [common.CommonModule,
            forms.FormsModule], exports: [QueryBuilderComponent,
            QueryInputDirective,
            QueryOperatorDirective,
            QueryFieldDirective,
            QueryEntityDirective,
            QueryButtonGroupDirective,
            QuerySwitchGroupDirective,
            QueryRemoveButtonDirective,
            QueryEmptyWarningDirective,
            QueryArrowIconDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](QueryBuilderModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule
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

    exports.CONTROL_VALUE_ACCESSOR = CONTROL_VALUE_ACCESSOR;
    exports.QueryArrowIconDirective = QueryArrowIconDirective;
    exports.QueryBuilderComponent = QueryBuilderComponent;
    exports.QueryBuilderModule = QueryBuilderModule;
    exports.QueryButtonGroupDirective = QueryButtonGroupDirective;
    exports.QueryEmptyWarningDirective = QueryEmptyWarningDirective;
    exports.QueryEntityDirective = QueryEntityDirective;
    exports.QueryFieldDirective = QueryFieldDirective;
    exports.QueryInputDirective = QueryInputDirective;
    exports.QueryOperatorDirective = QueryOperatorDirective;
    exports.QueryRemoveButtonDirective = QueryRemoveButtonDirective;
    exports.QuerySwitchGroupDirective = QuerySwitchGroupDirective;
    exports.VALIDATOR = VALIDATOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-query-builder.umd.js.map
