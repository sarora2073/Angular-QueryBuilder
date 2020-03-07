import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { QueryOperatorDirective } from './query-operator.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QueryEntityDirective } from './query-entity.directive';
import { QuerySwitchGroupDirective } from './query-switch-group.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QueryInputDirective } from './query-input.directive';
import { QueryRemoveButtonDirective } from './query-remove-button.directive';
import { QueryEmptyWarningDirective } from './query-empty-warning.directive';
import { QueryArrowIconDirective } from './query-arrow-icon.directive';
import { ChangeDetectorRef, Component, ContentChild, ContentChildren, forwardRef, Input, QueryList, ViewChild, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
var _c0 = ["treeContainer"];
function QueryBuilderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 0);
} if (rf & 2) {
    var ctx_r161 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r161.getClassNames("arrowIcon"));
} }
function QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r172 = ctx.ngIf;
    var ctx_r171 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r172)("ngTemplateOutletContext", ctx_r171.getArrowIconContext());
} }
function QueryBuilderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r175 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵlistener("click", function QueryBuilderComponent_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r175); var ctx_r174 = i0.ɵɵnextContext(); return ctx_r174.toggleCollapse(); });
    i0.ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_Template, 2, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r162 = i0.ɵɵnextContext();
    var _r160 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", ctx_r162.getClassNames("arrowIconButton", ctx_r162.data.collapsed ? "collapsed" : null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r162.getArrowIconTemplate())("ngIfElse", _r160);
} }
function QueryBuilderComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 0);
    i0.ɵɵtemplate(2, QueryBuilderComponent_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r176 = ctx.ngIf;
    var ctx_r163 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r163.getClassNames("buttonGroup", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r176)("ngTemplateOutletContext", ctx_r163.getButtonGroupContext());
} }
function QueryBuilderComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r181 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r181); var ctx_r180 = i0.ɵɵnextContext(2); return ctx_r180.addRuleSet(); });
    i0.ɵɵelement(1, "i", 0);
    i0.ɵɵtext(2, " Ruleset ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r178 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r178.getClassNames("button"))("disabled", ctx_r178.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r178.getClassNames("addIcon"));
} }
function QueryBuilderComponent_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r183 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_ng_container_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r183); var ctx_r182 = i0.ɵɵnextContext(2); return ctx_r182.removeRuleSet(); });
    i0.ɵɵelement(2, "i", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r179 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r179.getClassNames("button", "removeButton"))("disabled", ctx_r179.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r179.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r185); var ctx_r184 = i0.ɵɵnextContext(); return ctx_r184.addRule(); });
    i0.ɵɵelement(2, "i", 0);
    i0.ɵɵtext(3, " Rule ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, QueryBuilderComponent_ng_template_5_button_4_Template, 3, 3, "button", 12);
    i0.ɵɵtemplate(5, QueryBuilderComponent_ng_template_5_ng_container_5_Template, 3, 3, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r165 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r165.getClassNames("buttonGroup", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r165.getClassNames("button"))("disabled", ctx_r165.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r165.getClassNames("addIcon"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r165.allowRuleset);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r165.parentValue && ctx_r165.allowRuleset);
} }
function QueryBuilderComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r186 = ctx.ngIf;
    var ctx_r166 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r186)("ngTemplateOutletContext", ctx_r166.getSwitchGroupContext());
} }
function QueryBuilderComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r192 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 0);
    i0.ɵɵelementStart(2, "input", 14, 15);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r192); var ctx_r191 = i0.ɵɵnextContext(2); return ctx_r191.data.condition = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 9);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_4_listener() { i0.ɵɵrestoreView(_r192); var _r189 = i0.ɵɵreference(3); var ctx_r193 = i0.ɵɵnextContext(2); return ctx_r193.changeCondition(_r189.value); });
    i0.ɵɵtext(5, "AND");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 0);
    i0.ɵɵelementStart(7, "input", 16, 17);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r192); var ctx_r194 = i0.ɵɵnextContext(2); return ctx_r194.data.condition = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "label", 9);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_9_listener() { i0.ɵɵrestoreView(_r192); var _r190 = i0.ɵɵreference(8); var ctx_r195 = i0.ɵɵnextContext(2); return ctx_r195.changeCondition(_r190.value); });
    i0.ɵɵtext(10, "OR");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r188 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchGroup", "transition"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchControl"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchRadio"))("ngModel", ctx_r188.data.condition)("disabled", ctx_r188.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchLabel"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchControl"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchRadio"))("ngModel", ctx_r188.data.condition)("disabled", ctx_r188.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r188.getClassNames("switchLabel"));
} }
function QueryBuilderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, QueryBuilderComponent_ng_template_8_div_0_Template, 11, 11, "div", 8);
} if (rf & 2) {
    var ctx_r168 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r168.data);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 0);
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r221 = ctx.ngIf;
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r206 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r206.getClassNames("buttonGroup", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r221)("ngTemplateOutletContext", ctx_r206.getRemoveButtonContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r226); var rule_r197 = i0.ɵɵnextContext(3).$implicit; var ctx_r224 = i0.ɵɵnextContext(2); return ctx_r224.removeRule(rule_r197, ctx_r224.data); });
    i0.ɵɵelement(2, "i", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r208 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", ctx_r208.getClassNames("removeButtonSize", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r208.getClassNames("button", "removeButton"))("disabled", ctx_r208.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r208.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r228 = ctx.ngIf;
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r227 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r228)("ngTemplateOutletContext", ctx_r227.getEntityContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template, 2, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r210 = i0.ɵɵreference(6);
    var ctx_r209 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r209.getEntityTemplate())("ngIfElse", _r210);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var entity_r232 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", entity_r232.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entity_r232.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r235 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r235); var rule_r197 = i0.ɵɵnextContext(3).$implicit; return rule_r197.entity = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r235); var ctx_r237 = i0.ɵɵnextContext(3); var rule_r197 = ctx_r237.$implicit; var i_r198 = ctx_r237.index; var ctx_r236 = i0.ɵɵnextContext(2); return ctx_r236.changeEntity($event, rule_r197, i_r198, ctx_r236.data); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r211 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r211.getClassNames("entityControlSize"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r211.getClassNames("entityControl"))("ngModel", rule_r197.entity)("disabled", ctx_r211.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r211.entities);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r239 = ctx.ngIf;
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r212 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r239)("ngTemplateOutletContext", ctx_r212.getFieldContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r243 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", field_r243.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r243.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r246 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r246); var rule_r197 = i0.ɵɵnextContext(3).$implicit; return rule_r197.field = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r246); var rule_r197 = i0.ɵɵnextContext(3).$implicit; var ctx_r247 = i0.ɵɵnextContext(2); return ctx_r247.changeField($event, rule_r197); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r214 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r214.getClassNames("fieldControlSize"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r214.getClassNames("fieldControl"))("ngModel", rule_r197.field)("disabled", ctx_r214.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r214.getFields(rule_r197.entity));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r250 = ctx.ngIf;
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r215 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r250)("ngTemplateOutletContext", ctx_r215.getOperatorContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var operator_r254 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", operator_r254);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", operator_r254, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    var _r257 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r257); var rule_r197 = i0.ɵɵnextContext(3).$implicit; return rule_r197.operator = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r257); var rule_r197 = i0.ɵɵnextContext(3).$implicit; var ctx_r258 = i0.ɵɵnextContext(2); return ctx_r258.changeOperator(rule_r197); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r217 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r217.getClassNames("operatorControlSize"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r217.getClassNames("operatorControl"))("ngModel", rule_r197.operator)("disabled", ctx_r217.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r217.getOperators(rule_r197.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r261 = ctx.ngIf;
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r218 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r261)("ngTemplateOutletContext", ctx_r218.getInputContext(rule_r197));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r273 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 39);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r273); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r273); var ctx_r274 = i0.ɵɵnextContext(6); return ctx_r274.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r264 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r264.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r264.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r278 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 40);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r278); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r278); var ctx_r279 = i0.ɵɵnextContext(6); return ctx_r279.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r265 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r265.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r265.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r283 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 41);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r283); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r283); var ctx_r284 = i0.ɵɵnextContext(6); return ctx_r284.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r266 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r266.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r266.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r288 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 42);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r288); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r288); var ctx_r289 = i0.ɵɵnextContext(6); return ctx_r289.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r267 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r267.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r267.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r292 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", opt_r292.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r292.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template(rf, ctx) { if (rf & 1) {
    var _r295 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r295); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r295); var ctx_r296 = i0.ɵɵnextContext(6); return ctx_r296.changeInput(); });
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r268 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r268.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r268.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r268.getOptions(rule_r197.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r299 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", opt_r299.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r299.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    var _r302 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "select", 43);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r302); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r302); var ctx_r303 = i0.ɵɵnextContext(6); return ctx_r303.changeInput(); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r269 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r269.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r269.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r269.getOptions(rule_r197.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template(rf, ctx) { if (rf & 1) {
    var _r307 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 44);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r307); var rule_r197 = i0.ɵɵnextContext(4).$implicit; return rule_r197.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r307); var ctx_r308 = i0.ɵɵnextContext(6); return ctx_r308.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(4).$implicit;
    var ctx_r270 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r270.getClassNames("inputControl"))("ngModel", rule_r197.value)("disabled", ctx_r270.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template, 1, 3, "input", 32);
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template, 1, 3, "input", 33);
    i0.ɵɵtemplate(3, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template, 1, 3, "input", 34);
    i0.ɵɵtemplate(4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template, 1, 3, "input", 35);
    i0.ɵɵtemplate(5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template, 2, 4, "select", 36);
    i0.ɵɵtemplate(6, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template, 3, 4, "ng-container", 37);
    i0.ɵɵtemplate(7, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template, 1, 3, "input", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r220 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r220.getClassNames("inputControlSize"))("ngSwitch", ctx_r220.getInputType(rule_r197.field, rule_r197.operator));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "string");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "time");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "category");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "multiselect");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "boolean");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template, 3, 4, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template, 2, 2, "div", 22);
    i0.ɵɵtemplate(5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template, 3, 5, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(7, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template, 2, 2, "ng-container", 3);
    i0.ɵɵtemplate(8, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template, 3, 5, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(10, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template, 2, 2, "ng-container", 3);
    i0.ɵɵtemplate(11, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template, 3, 5, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(13, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template, 2, 2, "ng-container", 3);
    i0.ɵɵtemplate(14, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_Template, 8, 9, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r207 = i0.ɵɵreference(3);
    var _r213 = i0.ɵɵreference(9);
    var _r216 = i0.ɵɵreference(12);
    var _r219 = i0.ɵɵreference(15);
    var rule_r197 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r201 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r201.getRemoveButtonTemplate())("ngIfElse", _r207);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r201.entities == null ? null : ctx_r201.entities.length) > 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r201.getFieldTemplate())("ngIfElse", _r213);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r201.getOperatorTemplate())("ngIfElse", _r216);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r201.findTemplateForRule(rule_r197))("ngIfElse", _r219);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "query-builder", 45);
} if (rf & 2) {
    var rule_r197 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r202 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", rule_r197)("disabled", ctx_r202.disabled)("parentTouchedCallback", ctx_r202.parentTouchedCallback || ctx_r202.onTouchedCallback)("parentChangeCallback", ctx_r202.parentChangeCallback || ctx_r202.onChangeCallback)("parentInputTemplates", ctx_r202.parentInputTemplates || ctx_r202.inputTemplates)("parentOperatorTemplate", ctx_r202.parentOperatorTemplate || ctx_r202.operatorTemplate)("parentFieldTemplate", ctx_r202.parentFieldTemplate || ctx_r202.fieldTemplate)("parentEntityTemplate", ctx_r202.parentEntityTemplate || ctx_r202.entityTemplate)("parentSwitchGroupTemplate", ctx_r202.parentSwitchGroupTemplate || ctx_r202.switchGroupTemplate)("parentButtonGroupTemplate", ctx_r202.parentButtonGroupTemplate || ctx_r202.buttonGroupTemplate)("parentRemoveButtonTemplate", ctx_r202.parentRemoveButtonTemplate || ctx_r202.removeButtonTemplate)("parentEmptyWarningTemplate", ctx_r202.parentEmptyWarningTemplate || ctx_r202.emptyWarningTemplate)("parentArrowIconTemplate", ctx_r202.parentArrowIconTemplate || ctx_r202.arrowIconTemplate)("parentValue", ctx_r202.data)("classNames", ctx_r202.classNames)("config", ctx_r202.config)("allowRuleset", ctx_r202.allowRuleset)("allowCollapse", ctx_r202.allowCollapse)("emptyMessage", ctx_r202.emptyMessage)("operatorMap", ctx_r202.operatorMap);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var template_r313 = i0.ɵɵnextContext().ngIf;
    var ctx_r314 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r313)("ngTemplateOutletContext", ctx_r314.getEmptyWarningContext());
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var local_r200 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", local_r200.invalid);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r318 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", ctx_r318.getClassNames("emptyWarning"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r318.emptyMessage, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template, 2, 2, "p", 8);
} if (rf & 2) {
    var local_r200 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("ngIf", local_r200.invalid);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 0);
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_Template, 16, 9, "ng-container", 13);
    i0.ɵɵtemplate(3, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template, 1, 20, "query-builder", 19);
    i0.ɵɵtemplate(4, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵtemplate(5, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template, 1, 1, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var local_r200 = ctx.ngIf;
    var _r204 = i0.ɵɵreference(6);
    var ctx_r199 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r199.getQueryItemClassName(local_r200));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !local_r200.ruleset);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", local_r200.ruleset);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r199.getEmptyWarningTemplate())("ngIfElse", _r204);
} }
var _c1 = function (a0, a1) { return { ruleset: a0, invalid: a1 }; };
function QueryBuilderComponent_ul_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var rule_r197 = ctx.$implicit;
    var ctx_r196 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction2(1, _c1, !!rule_r197.rules, !ctx_r196.config.allowEmptyRulesets && rule_r197.rules && rule_r197.rules.length === 0));
} }
function QueryBuilderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_Template, 2, 4, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r170 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r170.getClassNames("tree"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r170.data.rules);
} }
export var CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
export var VALIDATOR = {
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
    QueryBuilderComponent.ɵfac = function QueryBuilderComponent_Factory(t) { return new (t || QueryBuilderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    QueryBuilderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: QueryBuilderComponent, selectors: [["query-builder"]], contentQueries: function QueryBuilderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, QueryButtonGroupDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QuerySwitchGroupDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryFieldDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryEntityDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryOperatorDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryRemoveButtonDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryEmptyWarningDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryArrowIconDirective, true);
            i0.ɵɵcontentQuery(dirIndex, QueryInputDirective, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonGroupTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.switchGroupTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.entityTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.operatorTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.removeButtonTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emptyWarningTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.arrowIconTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputTemplates = _t);
        } }, viewQuery: function QueryBuilderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeContainer = _t.first);
        } }, inputs: { disabled: "disabled", data: "data", allowRuleset: "allowRuleset", allowCollapse: "allowCollapse", emptyMessage: "emptyMessage", classNames: "classNames", operatorMap: "operatorMap", parentValue: "parentValue", config: "config", parentArrowIconTemplate: "parentArrowIconTemplate", parentInputTemplates: "parentInputTemplates", parentOperatorTemplate: "parentOperatorTemplate", parentFieldTemplate: "parentFieldTemplate", parentEntityTemplate: "parentEntityTemplate", parentSwitchGroupTemplate: "parentSwitchGroupTemplate", parentButtonGroupTemplate: "parentButtonGroupTemplate", parentRemoveButtonTemplate: "parentRemoveButtonTemplate", parentEmptyWarningTemplate: "parentEmptyWarningTemplate", parentChangeCallback: "parentChangeCallback", parentTouchedCallback: "parentTouchedCallback", persistValueOnFieldChange: "persistValueOnFieldChange", value: "value" }, features: [i0.ɵɵProvidersFeature([CONTROL_VALUE_ACCESSOR, VALIDATOR]), i0.ɵɵNgOnChangesFeature()], decls: 13, vars: 8, consts: [[3, "ngClass"], ["defaultArrowIcon", ""], [3, "ngClass", "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["defaultButtonGroup", ""], ["defaultSwitchGroup", ""], [3, "ngClass", "transitionend"], ["treeContainer", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "ngClass", "disabled", "click"], ["type", "button", 3, "ngClass", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "value", "and", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["andOption", ""], ["type", "radio", "value", "or", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["orOption", ""], [4, "ngFor", "ngForOf"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap", 4, "ngIf"], ["defaultEmptyWarning", ""], ["defaultRemoveButton", ""], ["class", "q-inline-block-display", 4, "ngIf"], ["defaultEntity", ""], ["defaultField", ""], ["defaultOperator", ""], ["defaultInput", ""], [1, "q-inline-block-display"], [3, "ngClass", "ngModel", "disabled", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "ngClass", "ngSwitch"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["multiple", "", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap"]], template: function QueryBuilderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, QueryBuilderComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, QueryBuilderComponent_a_3_Template, 2, 3, "a", 2);
            i0.ɵɵtemplate(4, QueryBuilderComponent_ng_container_4_Template, 3, 3, "ng-container", 3);
            i0.ɵɵtemplate(5, QueryBuilderComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(7, QueryBuilderComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
            i0.ɵɵtemplate(8, QueryBuilderComponent_ng_template_8_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6, 7);
            i0.ɵɵlistener("transitionend", function QueryBuilderComponent_Template_div_transitionend_10_listener($event) { return ctx.transitionEnd($event); });
            i0.ɵɵtemplate(12, QueryBuilderComponent_ul_12_Template, 2, 2, "ul", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r164 = i0.ɵɵreference(6);
            var _r167 = i0.ɵɵreference(9);
            i0.ɵɵproperty("ngClass", ctx.getClassNames("switchRow"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.allowCollapse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.getButtonGroupTemplate())("ngIfElse", _r164);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.getSwitchGroupTemplate())("ngIfElse", _r167);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.getClassNames("treeContainer", ctx.data.collapsed ? "collapsed" : null));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.data && ctx.data.rules);
        } }, directives: [i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i2.RadioControlValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i2.SelectControlValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i1.NgSwitch, i1.NgSwitchCase, i2.NumberValueAccessor, i2.SelectMultipleControlValueAccessor, i2.CheckboxControlValueAccessor, QueryBuilderComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .q-icon[_ngcontent-%COMP%]{font-style:normal;font-size:12px}[_nghost-%COMP%]   .q-remove-icon[_ngcontent-%COMP%]::before{content:'\u274C'}[_nghost-%COMP%]   .q-arrow-icon-button[_ngcontent-%COMP%]{float:left;margin:4px 6px 4px 0;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:transform .25s linear;transition:transform .25s linear;cursor:pointer}[_nghost-%COMP%]   .q-arrow-icon-button.q-collapsed[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0)}[_nghost-%COMP%]   .q-arrow-icon[_ngcontent-%COMP%]::before{content:'\u25B6'}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]{color:#555}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]::before{content:'\u2795'}[_nghost-%COMP%]   .q-remove-button[_ngcontent-%COMP%]{color:#b3415d;width:31px}[_nghost-%COMP%]   .q-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-group[_ngcontent-%COMP%]{font-family:\"Lucida Grande\",Tahoma,Verdana,sans-serif;overflow:hidden}[_nghost-%COMP%]   .q-right-align[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{margin-left:8px;padding:0 8px;background-color:#fff}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:disabled{display:none}[_nghost-%COMP%]   .q-control-size[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-right:10px}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]:disabled{border-color:transparent}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:not([type=checkbox]), [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{min-height:32px;-webkit-appearance:none}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:400;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,.2);box-sizing:border-box}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f0f0f0}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{background-color:#e4e4e4;padding:0 8px}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked + .q-switch-label[_ngcontent-%COMP%]{border:1px solid #619ed7;background:#fff;color:#3176b3}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:disabled + .q-switch-label[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked:disabled + .q-switch-label[_ngcontent-%COMP%]{display:initial;color:initial;cursor:default;border-color:transparent}[_nghost-%COMP%]   .q-invalid-ruleset[_ngcontent-%COMP%]{border:1px solid rgba(179,65,93,.5)!important;background:rgba(179,65,93,.1)!important}[_nghost-%COMP%]   .q-empty-warning[_ngcontent-%COMP%]{color:#8d252e;text-align:center}[_nghost-%COMP%]   .q-ruleset[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .q-rule[_ngcontent-%COMP%]{border:1px solid #ccc;background:#fff}[_nghost-%COMP%]   .q-transition[_ngcontent-%COMP%]{-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}[_nghost-%COMP%]   .q-tree-container[_ngcontent-%COMP%]{width:100%;overflow:hidden;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}[_nghost-%COMP%]   .q-tree-container.q-collapsed[_ngcontent-%COMP%]{max-height:0!important}[_nghost-%COMP%]   .q-tree[_ngcontent-%COMP%]{list-style:none;margin:4px 0 2px}[_nghost-%COMP%]   .q-row[_ngcontent-%COMP%]{padding:6px 8px;margin-top:6px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{top:-5px;border-width:0 0 2px 2px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after{border-width:0 0 0 2px;top:50%}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after, [_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{content:'';left:-12px;border-color:#ccc;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:last-child::after{content:none}[_nghost-%COMP%]   .q-inline-block-display[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}"] });
    return QueryBuilderComponent;
}());
export { QueryBuilderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QueryBuilderComponent, [{
        type: Component,
        args: [{
                selector: 'query-builder',
                templateUrl: './query-builder.component.html',
                styleUrls: ['./query-builder.component.scss'],
                providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { disabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1xdWVyeS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL3F1ZXJ5LWJ1aWxkZXIvcXVlcnktYnVpbGRlci5jb21wb25lbnQudHMiLCJsaWIvcXVlcnktYnVpbGRlci9xdWVyeS1idWlsZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxpQkFBaUIsRUFDakIsYUFBYSxFQUdkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFvQnZFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDaERuQix1QkFBOEM7OztJQUEzQyw2REFBc0M7OztJQUt2Qyx3QkFBMEY7OztJQUQ1Riw2QkFDRTtJQUFBLDRHQUEyRTtJQUM3RSwwQkFBZTs7OztJ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LGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUM7YUFDL0M7O2tCQTRDRSxLQUFLOztrQkFDTCxLQUFLOztrQkFNTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUV6QyxZQUFZO21CQUFDLHlCQUF5Qjs7a0JBQ3RDLFlBQVk7bUJBQUMseUJBQXlCOztrQkFDdEMsWUFBWTttQkFBQyxtQkFBbUI7O2tCQUNoQyxZQUFZO21CQUFDLG9CQUFvQjs7a0JBQ2pDLFlBQVk7bUJBQUMsc0JBQXNCOztrQkFDbkMsWUFBWTttQkFBQywwQkFBMEI7O2tCQUN2QyxZQUFZO21CQUFDLDBCQUEwQjs7a0JBQ3ZDLGVBQWU7bUJBQUMsbUJBQW1COztrQkFDbkMsWUFBWTttQkFBQyx1QkFBdUI7O2tCQXNFcEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFF1ZXJ5T3BlcmF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LW9wZXJhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LWZpZWxkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5RW50aXR5RGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1lbnRpdHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUXVlcnlTd2l0Y2hHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktc3dpdGNoLWdyb3VwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5QnV0dG9uR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LWJ1dHRvbi1ncm91cC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUlucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktcmVtb3ZlLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUVtcHR5V2FybmluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktZW1wdHktd2FybmluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYXJyb3ctaWNvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbkdyb3VwQ29udGV4dCxcclxuICBFbnRpdHksXHJcbiAgRmllbGQsXHJcbiAgU3dpdGNoR3JvdXBDb250ZXh0LFxyXG4gIEVudGl0eUNvbnRleHQsXHJcbiAgRmllbGRDb250ZXh0LFxyXG4gIElucHV0Q29udGV4dCxcclxuICBMb2NhbFJ1bGVNZXRhLFxyXG4gIE9wZXJhdG9yQ29udGV4dCxcclxuICBPcHRpb24sXHJcbiAgUXVlcnlCdWlsZGVyQ2xhc3NOYW1lcyxcclxuICBRdWVyeUJ1aWxkZXJDb25maWcsXHJcbiAgUmVtb3ZlQnV0dG9uQ29udGV4dCxcclxuICBBcnJvd0ljb25Db250ZXh0LFxyXG4gIFJ1bGUsXHJcbiAgUnVsZVNldCxcclxuICBFbXB0eVdhcm5pbmdDb250ZXh0LFxyXG59IGZyb20gJy4vcXVlcnktYnVpbGRlci5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUXVlcnlCdWlsZGVyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUXVlcnlCdWlsZGVyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxdWVyeS1idWlsZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcXVlcnktYnVpbGRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcXVlcnktYnVpbGRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsIFZBTElEQVRPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5QnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcclxuICBwdWJsaWMgZmllbGRzOiBGaWVsZFtdO1xyXG4gIHB1YmxpYyBmaWx0ZXJGaWVsZHM6IEZpZWxkW107XHJcbiAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXTtcclxuICBwdWJsaWMgZGVmYXVsdENsYXNzTmFtZXM6IFF1ZXJ5QnVpbGRlckNsYXNzTmFtZXMgPSB7XHJcbiAgICBhcnJvd0ljb25CdXR0b246ICdxLWFycm93LWljb24tYnV0dG9uJyxcclxuICAgIGFycm93SWNvbjogJ3EtaWNvbiBxLWFycm93LWljb24nLFxyXG4gICAgcmVtb3ZlSWNvbjogJ3EtaWNvbiBxLXJlbW92ZS1pY29uJyxcclxuICAgIGFkZEljb246ICdxLWljb24gcS1hZGQtaWNvbicsXHJcbiAgICBidXR0b246ICdxLWJ1dHRvbicsXHJcbiAgICBidXR0b25Hcm91cDogJ3EtYnV0dG9uLWdyb3VwJyxcclxuICAgIHJlbW92ZUJ1dHRvbjogJ3EtcmVtb3ZlLWJ1dHRvbicsXHJcbiAgICBzd2l0Y2hHcm91cDogJ3Etc3dpdGNoLWdyb3VwJyxcclxuICAgIHN3aXRjaExhYmVsOiAncS1zd2l0Y2gtbGFiZWwnLFxyXG4gICAgc3dpdGNoUmFkaW86ICdxLXN3aXRjaC1yYWRpbycsXHJcbiAgICByaWdodEFsaWduOiAncS1yaWdodC1hbGlnbicsXHJcbiAgICB0cmFuc2l0aW9uOiAncS10cmFuc2l0aW9uJyxcclxuICAgIGNvbGxhcHNlZDogJ3EtY29sbGFwc2VkJyxcclxuICAgIHRyZWVDb250YWluZXI6ICdxLXRyZWUtY29udGFpbmVyJyxcclxuICAgIHRyZWU6ICdxLXRyZWUnLFxyXG4gICAgcm93OiAncS1yb3cnLFxyXG4gICAgY29ubmVjdG9yOiAncS1jb25uZWN0b3InLFxyXG4gICAgcnVsZTogJ3EtcnVsZScsXHJcbiAgICBydWxlU2V0OiAncS1ydWxlc2V0JyxcclxuICAgIGludmFsaWRSdWxlU2V0OiAncS1pbnZhbGlkLXJ1bGVzZXQnLFxyXG4gICAgZW1wdHlXYXJuaW5nOiAncS1lbXB0eS13YXJuaW5nJyxcclxuICAgIGZpZWxkQ29udHJvbDogJ3EtZmllbGQtY29udHJvbCcsXHJcbiAgICBmaWVsZENvbnRyb2xTaXplOiAncS1jb250cm9sLXNpemUnLFxyXG4gICAgZW50aXR5Q29udHJvbDogJ3EtZW50aXR5LWNvbnRyb2wnLFxyXG4gICAgZW50aXR5Q29udHJvbFNpemU6ICdxLWNvbnRyb2wtc2l6ZScsXHJcbiAgICBvcGVyYXRvckNvbnRyb2w6ICdxLW9wZXJhdG9yLWNvbnRyb2wnLFxyXG4gICAgb3BlcmF0b3JDb250cm9sU2l6ZTogJ3EtY29udHJvbC1zaXplJyxcclxuICAgIGlucHV0Q29udHJvbDogJ3EtaW5wdXQtY29udHJvbCcsXHJcbiAgICBpbnB1dENvbnRyb2xTaXplOiAncS1jb250cm9sLXNpemUnXHJcbiAgfTtcclxuICBwdWJsaWMgZGVmYXVsdE9wZXJhdG9yTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XHJcbiAgICBzdHJpbmc6IFsnPScsICchPScsICdjb250YWlucycsICdsaWtlJ10sXHJcbiAgICBudW1iZXI6IFsnPScsICchPScsICc+JywgJz49JywgJzwnLCAnPD0nXSxcclxuICAgIHRpbWU6IFsnPScsICchPScsICc+JywgJz49JywgJzwnLCAnPD0nXSxcclxuICAgIGRhdGU6IFsnPScsICchPScsICc+JywgJz49JywgJzwnLCAnPD0nXSxcclxuICAgIGNhdGVnb3J5OiBbJz0nLCAnIT0nLCAnaW4nLCAnbm90IGluJ10sXHJcbiAgICBib29sZWFuOiBbJz0nXVxyXG4gIH07XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGF0YTogUnVsZVNldCA9IHsgY29uZGl0aW9uOiAnYW5kJywgcnVsZXM6IFtdIH07XHJcblxyXG4gIC8vIEZvciBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICBwdWJsaWMgb25DaGFuZ2VDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICBwdWJsaWMgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IGFueTtcclxuXHJcbiAgQElucHV0KCkgYWxsb3dSdWxlc2V0OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbGxvd0NvbGxhcHNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgPSAnQSBydWxlc2V0IGNhbm5vdCBiZSBlbXB0eS4gUGxlYXNlIGFkZCBhIHJ1bGUgb3IgcmVtb3ZlIGl0IGFsbCB0b2dldGhlci4nO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZXM6IFF1ZXJ5QnVpbGRlckNsYXNzTmFtZXM7XHJcbiAgQElucHV0KCkgb3BlcmF0b3JNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuICBASW5wdXQoKSBwYXJlbnRWYWx1ZTogUnVsZVNldDtcclxuICBASW5wdXQoKSBjb25maWc6IFF1ZXJ5QnVpbGRlckNvbmZpZyA9IHsgZmllbGRzOiB7fSB9O1xyXG4gIEBJbnB1dCgpIHBhcmVudEFycm93SWNvblRlbXBsYXRlOiBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRJbnB1dFRlbXBsYXRlczogUXVlcnlMaXN0PFF1ZXJ5SW5wdXREaXJlY3RpdmU+O1xyXG4gIEBJbnB1dCgpIHBhcmVudE9wZXJhdG9yVGVtcGxhdGU6IFF1ZXJ5T3BlcmF0b3JEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcGFyZW50RmllbGRUZW1wbGF0ZTogUXVlcnlGaWVsZERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRFbnRpdHlUZW1wbGF0ZTogUXVlcnlFbnRpdHlEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcGFyZW50U3dpdGNoR3JvdXBUZW1wbGF0ZTogUXVlcnlTd2l0Y2hHcm91cERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRCdXR0b25Hcm91cFRlbXBsYXRlOiBRdWVyeUJ1dHRvbkdyb3VwRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHBhcmVudFJlbW92ZUJ1dHRvblRlbXBsYXRlOiBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRFbXB0eVdhcm5pbmdUZW1wbGF0ZTogUXVlcnlFbXB0eVdhcm5pbmdEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcGFyZW50Q2hhbmdlQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgcGFyZW50VG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIHBlcnNpc3RWYWx1ZU9uRmllbGRDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndHJlZUNvbnRhaW5lcicsIHtzdGF0aWM6IHRydWV9KSB0cmVlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkKFF1ZXJ5QnV0dG9uR3JvdXBEaXJlY3RpdmUpIGJ1dHRvbkdyb3VwVGVtcGxhdGU6IFF1ZXJ5QnV0dG9uR3JvdXBEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChRdWVyeVN3aXRjaEdyb3VwRGlyZWN0aXZlKSBzd2l0Y2hHcm91cFRlbXBsYXRlOiBRdWVyeVN3aXRjaEdyb3VwRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoUXVlcnlGaWVsZERpcmVjdGl2ZSkgZmllbGRUZW1wbGF0ZTogUXVlcnlGaWVsZERpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKFF1ZXJ5RW50aXR5RGlyZWN0aXZlKSBlbnRpdHlUZW1wbGF0ZTogUXVlcnlFbnRpdHlEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChRdWVyeU9wZXJhdG9yRGlyZWN0aXZlKSBvcGVyYXRvclRlbXBsYXRlOiBRdWVyeU9wZXJhdG9yRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoUXVlcnlSZW1vdmVCdXR0b25EaXJlY3RpdmUpIHJlbW92ZUJ1dHRvblRlbXBsYXRlOiBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKFF1ZXJ5RW1wdHlXYXJuaW5nRGlyZWN0aXZlKSBlbXB0eVdhcm5pbmdUZW1wbGF0ZTogUXVlcnlFbXB0eVdhcm5pbmdEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihRdWVyeUlucHV0RGlyZWN0aXZlKSBpbnB1dFRlbXBsYXRlczogUXVlcnlMaXN0PFF1ZXJ5SW5wdXREaXJlY3RpdmU+O1xyXG4gIEBDb250ZW50Q2hpbGQoUXVlcnlBcnJvd0ljb25EaXJlY3RpdmUpIGFycm93SWNvblRlbXBsYXRlOiBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBbXHJcbiAgICAnc3RyaW5nJywgJ251bWJlcicsICd0aW1lJywgJ2RhdGUnLCAnY2F0ZWdvcnknLCAnYm9vbGVhbicsICdtdWx0aXNlbGVjdCddO1xyXG4gIHByaXZhdGUgZGVmYXVsdFBlcnNpc3RWYWx1ZVR5cGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICdzdHJpbmcnLCAnbnVtYmVyJywgJ3RpbWUnLCAnZGF0ZScsICdib29sZWFuJ107XHJcbiAgcHJpdmF0ZSBkZWZhdWx0RW1wdHlMaXN0OiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgb3BlcmF0b3JzQ2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuICBwcml2YXRlIGlucHV0Q29udGV4dENhY2hlID0gbmV3IE1hcDxSdWxlLCBJbnB1dENvbnRleHQ+KCk7XHJcbiAgcHJpdmF0ZSBvcGVyYXRvckNvbnRleHRDYWNoZSA9IG5ldyBNYXA8UnVsZSwgT3BlcmF0b3JDb250ZXh0PigpO1xyXG4gIHByaXZhdGUgZmllbGRDb250ZXh0Q2FjaGUgPSBuZXcgTWFwPFJ1bGUsIEZpZWxkQ29udGV4dD4oKTtcclxuICBwcml2YXRlIGVudGl0eUNvbnRleHRDYWNoZSA9IG5ldyBNYXA8UnVsZSwgRW50aXR5Q29udGV4dD4oKTtcclxuICBwcml2YXRlIHJlbW92ZUJ1dHRvbkNvbnRleHRDYWNoZSA9IG5ldyBNYXA8UnVsZSwgUmVtb3ZlQnV0dG9uQ29udGV4dD4oKTtcclxuICBwcml2YXRlIGJ1dHRvbkdyb3VwQ29udGV4dDogQnV0dG9uR3JvdXBDb250ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS1PbkluaXQgSW1wbGVtZW50YXRpb24tLS0tLS0tLS0tXHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS1PbkNoYW5nZXMgSW1wbGVtZW50YXRpb24tLS0tLS0tLS0tXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjb25maWc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdGhpcy5maWVsZHMgPSBPYmplY3Qua2V5cyhjb25maWcuZmllbGRzKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBjb25maWcuZmllbGRzW3ZhbHVlXTtcclxuICAgICAgICBmaWVsZC52YWx1ZSA9IGZpZWxkLnZhbHVlIHx8IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChjb25maWcuZW50aXRpZXMpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gT2JqZWN0LmtleXMoY29uZmlnLmVudGl0aWVzKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRpdHkgPSBjb25maWcuZW50aXRpZXNbdmFsdWVdO1xyXG4gICAgICAgICAgZW50aXR5LnZhbHVlID0gZW50aXR5LnZhbHVlIHx8IHZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9wZXJhdG9yc0NhY2hlID0ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICdjb25maWcnIG11c3QgYmUgYSB2YWxpZCBvYmplY3QsIGdvdCAke3R5cGV9IGluc3RlYWQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tVmFsaWRhdG9yIEltcGxlbWVudGF0aW9uLS0tLS0tLS0tLVxyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGNvbnN0IHJ1bGVFcnJvclN0b3JlID0gW107XHJcbiAgICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hbGxvd0VtcHR5UnVsZXNldHMgJiYgdGhpcy5jaGVja0VtcHR5UnVsZUluUnVsZXNldCh0aGlzLmRhdGEpKSB7XHJcbiAgICAgIGVycm9ycy5lbXB0eSA9ICdFbXB0eSBydWxlc2V0cyBhcmUgbm90IGFsbG93ZWQuJztcclxuICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlUnVsZXNJblJ1bGVzZXQodGhpcy5kYXRhLCBydWxlRXJyb3JTdG9yZSk7XHJcblxyXG4gICAgaWYgKHJ1bGVFcnJvclN0b3JlLmxlbmd0aCkge1xyXG4gICAgICBlcnJvcnMucnVsZXMgPSBydWxlRXJyb3JTdG9yZTtcclxuICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNFcnJvcnMgPyBlcnJvcnMgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLUNvbnRyb2xWYWx1ZUFjY2Vzc29yIEltcGxlbWVudGF0aW9uLS0tLS0tLS0tLVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBSdWxlU2V0IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogUnVsZVNldCkge1xyXG4gICAgLy8gV2hlbiBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQgd2l0aG91dCBhIGZvcm1Db250cm9sLCBudWxsIGlzIHBhc3NlZCB0byB2YWx1ZVxyXG4gICAgdGhpcy5kYXRhID0gdmFsdWUgfHwgeyBjb25kaXRpb246ICdhbmQnLCBydWxlczogW10gfTtcclxuICAgIHRoaXMuaGFuZGxlRGF0YUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiBmbih0aGlzLmRhdGEpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4gZm4odGhpcy5kYXRhKTtcclxuICB9XHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLUVORC0tLS0tLS0tLS1cclxuXHJcbiAgZ2V0RGlzYWJsZWRTdGF0ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgZmluZFRlbXBsYXRlRm9yUnVsZShydWxlOiBSdWxlKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRJbnB1dFR5cGUocnVsZS5maWVsZCwgcnVsZS5vcGVyYXRvcik7XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICBjb25zdCBxdWVyeUlucHV0ID0gdGhpcy5maW5kUXVlcnlJbnB1dCh0eXBlKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gcXVlcnlJbnB1dC50ZW1wbGF0ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VGVtcGxhdGVUeXBlcy5pbmRleE9mKHR5cGUpID09PSAtMSkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCB0ZW1wbGF0ZSBmb3IgZmllbGQgd2l0aCB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kUXVlcnlJbnB1dCh0eXBlOiBzdHJpbmcpOiBRdWVyeUlucHV0RGlyZWN0aXZlIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRoaXMucGFyZW50SW5wdXRUZW1wbGF0ZXMgfHwgdGhpcy5pbnB1dFRlbXBsYXRlcztcclxuICAgIHJldHVybiB0ZW1wbGF0ZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5xdWVyeUlucHV0VHlwZSA9PT0gdHlwZSk7XHJcbiAgfVxyXG5cclxuICBnZXRPcGVyYXRvcnMoZmllbGQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGlmICh0aGlzLm9wZXJhdG9yc0NhY2hlW2ZpZWxkXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcnNDYWNoZVtmaWVsZF07XHJcbiAgICB9XHJcbiAgICBsZXQgb3BlcmF0b3JzID0gdGhpcy5kZWZhdWx0RW1wdHlMaXN0O1xyXG4gICAgY29uc3QgZmllbGRPYmplY3QgPSB0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRdO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5nZXRPcGVyYXRvcnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldE9wZXJhdG9ycyhmaWVsZCwgZmllbGRPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR5cGUgPSBmaWVsZE9iamVjdC50eXBlO1xyXG5cclxuICAgIGlmIChmaWVsZE9iamVjdCAmJiBmaWVsZE9iamVjdC5vcGVyYXRvcnMpIHtcclxuICAgICAgb3BlcmF0b3JzID0gZmllbGRPYmplY3Qub3BlcmF0b3JzO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlKSB7XHJcbiAgICAgIG9wZXJhdG9ycyA9ICh0aGlzLm9wZXJhdG9yTWFwICYmIHRoaXMub3BlcmF0b3JNYXBbdHlwZV0pIHx8IHRoaXMuZGVmYXVsdE9wZXJhdG9yTWFwW3R5cGVdIHx8IHRoaXMuZGVmYXVsdEVtcHR5TGlzdDtcclxuICAgICAgaWYgKG9wZXJhdG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBgTm8gb3BlcmF0b3JzIGZvdW5kIGZvciBmaWVsZCAnJHtmaWVsZH0nIHdpdGggdHlwZSAke2ZpZWxkT2JqZWN0LnR5cGV9LiBgICtcclxuICAgICAgICAgIGBQbGVhc2UgZGVmaW5lIGFuICdvcGVyYXRvcnMnIHByb3BlcnR5IG9uIHRoZSBmaWVsZCBvciB1c2UgdGhlICdvcGVyYXRvck1hcCcgYmluZGluZyB0byBmaXggdGhpcy5gKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmllbGRPYmplY3QubnVsbGFibGUpIHtcclxuICAgICAgICBvcGVyYXRvcnMgPSBvcGVyYXRvcnMuY29uY2F0KFsnaXMgbnVsbCcsICdpcyBub3QgbnVsbCddKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKGBObyAndHlwZScgcHJvcGVydHkgZm91bmQgb24gZmllbGQ6ICcke2ZpZWxkfSdgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWNoZSByZWZlcmVuY2UgdG8gYXJyYXkgb2JqZWN0LCBzbyBpdCB3b24ndCBiZSBjb21wdXRlZCBuZXh0IHRpbWUgYW5kIHRyaWdnZXIgYSByZXJlbmRlci5cclxuICAgIHRoaXMub3BlcmF0b3JzQ2FjaGVbZmllbGRdID0gb3BlcmF0b3JzO1xyXG4gICAgcmV0dXJuIG9wZXJhdG9ycztcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcyhlbnRpdHk6IHN0cmluZyk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuZW50aXRpZXMgJiYgZW50aXR5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkICYmIGZpZWxkLmVudGl0eSA9PT0gZW50aXR5O1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElucHV0VHlwZShmaWVsZDogc3RyaW5nLCBvcGVyYXRvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5nZXRJbnB1dFR5cGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldElucHV0VHlwZShmaWVsZCwgb3BlcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbmZpZ3VyYXRpb24gZm9yIGZpZWxkICcke2ZpZWxkfScgY291bGQgYmUgZm91bmQhIFBsZWFzZSBhZGQgaXQgdG8gY29uZmlnLmZpZWxkcy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkXS50eXBlO1xyXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xyXG4gICAgICBjYXNlICdpcyBudWxsJzpcclxuICAgICAgY2FzZSAnaXMgbm90IG51bGwnOlxyXG4gICAgICAgIHJldHVybiBudWxsOyAgLy8gTm8gZGlzcGxheWVkIGNvbXBvbmVudFxyXG4gICAgICBjYXNlICdpbic6XHJcbiAgICAgIGNhc2UgJ25vdCBpbic6XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdjYXRlZ29yeScgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nID8gJ211bHRpc2VsZWN0JyA6IHR5cGU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25zKGZpZWxkOiBzdHJpbmcpOiBPcHRpb25bXSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcuZ2V0T3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0T3B0aW9ucyhmaWVsZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkXS5vcHRpb25zIHx8IHRoaXMuZGVmYXVsdEVtcHR5TGlzdDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzTmFtZXMoLi4uYXJncyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbHNMb29rdXAgPSB0aGlzLmNsYXNzTmFtZXMgPyB0aGlzLmNsYXNzTmFtZXMgOiB0aGlzLmRlZmF1bHRDbGFzc05hbWVzO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGFyZ3MubWFwKChpZCkgPT4gY2xzTG9va3VwW2lkXSB8fCB0aGlzLmRlZmF1bHRDbGFzc05hbWVzW2lkXSkuZmlsdGVyKChjKSA9PiAhIWMpO1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMubGVuZ3RoID8gY2xhc3NOYW1lcy5qb2luKCcgJykgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdEZpZWxkKGVudGl0eTogRW50aXR5KTogRmllbGQge1xyXG4gICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVudGl0eS5kZWZhdWx0RmllbGQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0VmFsdWUoZW50aXR5LmRlZmF1bHRGaWVsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbnRpdHlGaWVsZHMgPSB0aGlzLmZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkICYmIGZpZWxkLmVudGl0eSA9PT0gZW50aXR5LnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGVudGl0eUZpZWxkcyAmJiBlbnRpdHlGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eUZpZWxkc1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYE5vIGZpZWxkcyBmb3VuZCBmb3IgZW50aXR5ICcke2VudGl0eS5uYW1lfScuIGAgK1xyXG4gICAgICAgICAgYEEgJ2RlZmF1bHRPcGVyYXRvcicgaXMgYWxzbyBub3Qgc3BlY2lmaWVkIG9uIHRoZSBmaWVsZCBjb25maWcuIE9wZXJhdG9yIHZhbHVlIHdpbGwgZGVmYXVsdCB0byBudWxsLmApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0T3BlcmF0b3IoZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGlmIChmaWVsZCAmJiBmaWVsZC5kZWZhdWx0T3BlcmF0b3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0VmFsdWUoZmllbGQuZGVmYXVsdE9wZXJhdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9wZXJhdG9ycyA9IHRoaXMuZ2V0T3BlcmF0b3JzKGZpZWxkLnZhbHVlKTtcclxuICAgICAgaWYgKG9wZXJhdG9ycyAmJiBvcGVyYXRvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yc1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYE5vIG9wZXJhdG9ycyBmb3VuZCBmb3IgZmllbGQgJyR7ZmllbGQudmFsdWV9Jy4gYCArXHJcbiAgICAgICAgICBgQSAnZGVmYXVsdE9wZXJhdG9yJyBpcyBhbHNvIG5vdCBzcGVjaWZpZWQgb24gdGhlIGZpZWxkIGNvbmZpZy4gT3BlcmF0b3IgdmFsdWUgd2lsbCBkZWZhdWx0IHRvIG51bGwuYCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJ1bGUocGFyZW50PzogUnVsZVNldCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudCA9IHBhcmVudCB8fCB0aGlzLmRhdGE7XHJcbiAgICBpZiAodGhpcy5jb25maWcuYWRkUnVsZSkge1xyXG4gICAgICB0aGlzLmNvbmZpZy5hZGRSdWxlKHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzWzBdO1xyXG4gICAgICBwYXJlbnQucnVsZXMgPSBwYXJlbnQucnVsZXMuY29uY2F0KFt7XHJcbiAgICAgICAgZmllbGQ6IGZpZWxkLnZhbHVlLFxyXG4gICAgICAgIG9wZXJhdG9yOiB0aGlzLmdldERlZmF1bHRPcGVyYXRvcihmaWVsZCksXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKGZpZWxkLmRlZmF1bHRWYWx1ZSksXHJcbiAgICAgICAgZW50aXR5OiBmaWVsZC5lbnRpdHlcclxuICAgICAgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVSdWxlKHJ1bGU6IFJ1bGUsIHBhcmVudD86IFJ1bGVTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgdGhpcy5kYXRhO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnJlbW92ZVJ1bGUpIHtcclxuICAgICAgdGhpcy5jb25maWcucmVtb3ZlUnVsZShydWxlLCBwYXJlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyZW50LnJ1bGVzID0gcGFyZW50LnJ1bGVzLmZpbHRlcigocikgPT4gciAhPT0gcnVsZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Q29udGV4dENhY2hlLmRlbGV0ZShydWxlKTtcclxuICAgIHRoaXMub3BlcmF0b3JDb250ZXh0Q2FjaGUuZGVsZXRlKHJ1bGUpO1xyXG4gICAgdGhpcy5maWVsZENvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcbiAgICB0aGlzLmVudGl0eUNvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbkNvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGFkZFJ1bGVTZXQocGFyZW50PzogUnVsZVNldCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudCA9IHBhcmVudCB8fCB0aGlzLmRhdGE7XHJcbiAgICBpZiAodGhpcy5jb25maWcuYWRkUnVsZVNldCkge1xyXG4gICAgICB0aGlzLmNvbmZpZy5hZGRSdWxlU2V0KHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnQucnVsZXMgPSBwYXJlbnQucnVsZXMuY29uY2F0KFt7IGNvbmRpdGlvbjogJ2FuZCcsIHJ1bGVzOiBbXSB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVJ1bGVTZXQocnVsZXNldD86IFJ1bGVTZXQsIHBhcmVudD86IFJ1bGVTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBydWxlc2V0ID0gcnVsZXNldCB8fCB0aGlzLmRhdGE7XHJcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgdGhpcy5wYXJlbnRWYWx1ZTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5yZW1vdmVSdWxlU2V0KSB7XHJcbiAgICAgIHRoaXMuY29uZmlnLnJlbW92ZVJ1bGVTZXQocnVsZXNldCwgcGFyZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudC5ydWxlcyA9IHBhcmVudC5ydWxlcy5maWx0ZXIoKHIpID0+IHIgIT09IHJ1bGVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2l0aW9uRW5kKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRyZWVDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbXB1dGVkVHJlZUNvbnRhaW5lckhlaWdodCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YS5jb2xsYXBzZWQgPSAhdGhpcy5kYXRhLmNvbGxhcHNlZDtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlZFRyZWVDb250YWluZXJIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMudHJlZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQgJiYgbmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICBuYXRpdmVFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IChuYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCArIDgpICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZUNvbmRpdGlvbih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRhLmNvbmRpdGlvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU9wZXJhdG9yKHJ1bGU6IFJ1bGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcuY29lcmNlVmFsdWVGb3JPcGVyYXRvcikge1xyXG4gICAgICBydWxlLnZhbHVlID0gdGhpcy5jb25maWcuY29lcmNlVmFsdWVGb3JPcGVyYXRvcihydWxlLm9wZXJhdG9yLCBydWxlLnZhbHVlLCBydWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJ1bGUudmFsdWUgPSB0aGlzLmNvZXJjZVZhbHVlRm9yT3BlcmF0b3IocnVsZS5vcGVyYXRvciwgcnVsZS52YWx1ZSwgcnVsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNvZXJjZVZhbHVlRm9yT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnB1dFR5cGU6IHN0cmluZyA9IHRoaXMuZ2V0SW5wdXRUeXBlKHJ1bGUuZmllbGQsIG9wZXJhdG9yKTtcclxuICAgIGlmIChpbnB1dFR5cGUgPT09ICdtdWx0aXNlbGVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBbdmFsdWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSW5wdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZpZWxkKGZpZWxkVmFsdWU6IHN0cmluZywgcnVsZTogUnVsZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlucHV0Q29udGV4dCA9IHRoaXMuaW5wdXRDb250ZXh0Q2FjaGUuZ2V0KHJ1bGUpO1xyXG4gICAgY29uc3QgY3VycmVudEZpZWxkID0gaW5wdXRDb250ZXh0ICYmIGlucHV0Q29udGV4dC5maWVsZDtcclxuXHJcbiAgICBjb25zdCBuZXh0RmllbGQ6IEZpZWxkID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkVmFsdWVdO1xyXG5cclxuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuY2FsY3VsYXRlRmllbGRDaGFuZ2VWYWx1ZShcclxuICAgICAgY3VycmVudEZpZWxkLCBuZXh0RmllbGQsIHJ1bGUudmFsdWUpO1xyXG5cclxuICAgIGlmIChuZXh0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBydWxlLnZhbHVlID0gbmV4dFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHJ1bGUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcnVsZS5vcGVyYXRvciA9IHRoaXMuZ2V0RGVmYXVsdE9wZXJhdG9yKG5leHRGaWVsZCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIG5ldyBjb250ZXh0IG9iamVjdHMgc28gdGVtcGxhdGVzIHdpbGwgYXV0b21hdGljYWxseSB1cGRhdGVcclxuICAgIHRoaXMuaW5wdXRDb250ZXh0Q2FjaGUuZGVsZXRlKHJ1bGUpO1xyXG4gICAgdGhpcy5vcGVyYXRvckNvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcbiAgICB0aGlzLmZpZWxkQ29udGV4dENhY2hlLmRlbGV0ZShydWxlKTtcclxuICAgIHRoaXMuZW50aXR5Q29udGV4dENhY2hlLmRlbGV0ZShydWxlKTtcclxuICAgIHRoaXMuZ2V0SW5wdXRDb250ZXh0KHJ1bGUpO1xyXG4gICAgdGhpcy5nZXRGaWVsZENvbnRleHQocnVsZSk7XHJcbiAgICB0aGlzLmdldE9wZXJhdG9yQ29udGV4dChydWxlKTtcclxuICAgIHRoaXMuZ2V0RW50aXR5Q29udGV4dChydWxlKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZVRvdWNoZWQoKTtcclxuICAgIHRoaXMuaGFuZGxlRGF0YUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRW50aXR5KGVudGl0eVZhbHVlOiBzdHJpbmcsIHJ1bGU6IFJ1bGUsIGluZGV4OiBudW1iZXIsIGRhdGE6IFJ1bGVTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBpID0gaW5kZXg7XHJcbiAgICBsZXQgcnMgPSBkYXRhO1xyXG4gICAgY29uc3QgZW50aXR5OiBFbnRpdHkgPSB0aGlzLmVudGl0aWVzLmZpbmQoKGUpID0+IGUudmFsdWUgPT09IGVudGl0eVZhbHVlKTtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWVsZDogRmllbGQgPSB0aGlzLmdldERlZmF1bHRGaWVsZChlbnRpdHkpO1xyXG4gICAgaWYgKCFycykge1xyXG4gICAgICBycyA9IHRoaXMuZGF0YTtcclxuICAgICAgaSA9IHJzLnJ1bGVzLmZpbmRJbmRleCgoeCkgPT4geCA9PT0gcnVsZSk7XHJcbiAgICB9XHJcbiAgICBydWxlLmZpZWxkID0gZGVmYXVsdEZpZWxkLnZhbHVlO1xyXG4gICAgcnMucnVsZXNbaV0gPSBydWxlO1xyXG4gICAgaWYgKGRlZmF1bHRGaWVsZCkge1xyXG4gICAgICB0aGlzLmNoYW5nZUZpZWxkKGRlZmF1bHRGaWVsZC52YWx1ZSwgcnVsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVRvdWNoZWQoKTtcclxuICAgICAgdGhpcy5oYW5kbGVEYXRhQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgc3dpdGNoICh0eXBlb2YgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlKCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9wZXJhdG9yVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0ID0gdGhpcy5wYXJlbnRPcGVyYXRvclRlbXBsYXRlIHx8IHRoaXMub3BlcmF0b3JUZW1wbGF0ZTtcclxuICAgIHJldHVybiB0ID8gdC50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50RmllbGRUZW1wbGF0ZSB8fCB0aGlzLmZpZWxkVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdCA/IHQudGVtcGxhdGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW50aXR5VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0ID0gdGhpcy5wYXJlbnRFbnRpdHlUZW1wbGF0ZSB8fCB0aGlzLmVudGl0eVRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIHQgPyB0LnRlbXBsYXRlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldEFycm93SWNvblRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50QXJyb3dJY29uVGVtcGxhdGUgfHwgdGhpcy5hcnJvd0ljb25UZW1wbGF0ZTtcclxuICAgIHJldHVybiB0ID8gdC50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRCdXR0b25Hcm91cFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50QnV0dG9uR3JvdXBUZW1wbGF0ZSB8fCB0aGlzLmJ1dHRvbkdyb3VwVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdCA/IHQudGVtcGxhdGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dpdGNoR3JvdXBUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIGNvbnN0IHQgPSB0aGlzLnBhcmVudFN3aXRjaEdyb3VwVGVtcGxhdGUgfHwgdGhpcy5zd2l0Y2hHcm91cFRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIHQgPyB0LnRlbXBsYXRlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFJlbW92ZUJ1dHRvblRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50UmVtb3ZlQnV0dG9uVGVtcGxhdGUgfHwgdGhpcy5yZW1vdmVCdXR0b25UZW1wbGF0ZTtcclxuICAgIHJldHVybiB0ID8gdC50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRFbXB0eVdhcm5pbmdUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIGNvbnN0IHQgPSB0aGlzLnBhcmVudEVtcHR5V2FybmluZ1RlbXBsYXRlIHx8IHRoaXMuZW1wdHlXYXJuaW5nVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdCA/IHQudGVtcGxhdGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlcnlJdGVtQ2xhc3NOYW1lKGxvY2FsOiBMb2NhbFJ1bGVNZXRhKTogc3RyaW5nIHtcclxuICAgIGxldCBjbHMgPSB0aGlzLmdldENsYXNzTmFtZXMoJ3JvdycsICdjb25uZWN0b3InLCAndHJhbnNpdGlvbicpO1xyXG4gICAgY2xzICs9ICcgJyArIHRoaXMuZ2V0Q2xhc3NOYW1lcyhsb2NhbC5ydWxlc2V0ID8gJ3J1bGVTZXQnIDogJ3J1bGUnKTtcclxuICAgIGlmIChsb2NhbC5pbnZhbGlkKSB7XHJcbiAgICAgIGNscyArPSAnICcgKyB0aGlzLmdldENsYXNzTmFtZXMoJ2ludmFsaWRSdWxlU2V0Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnV0dG9uR3JvdXBDb250ZXh0KCk6IEJ1dHRvbkdyb3VwQ29udGV4dCB7XHJcbiAgICBpZiAoIXRoaXMuYnV0dG9uR3JvdXBDb250ZXh0KSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uR3JvdXBDb250ZXh0ID0ge1xyXG4gICAgICAgIGFkZFJ1bGU6IHRoaXMuYWRkUnVsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGFkZFJ1bGVTZXQ6IHRoaXMuYWxsb3dSdWxlc2V0ICYmIHRoaXMuYWRkUnVsZVNldC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJlbW92ZVJ1bGVTZXQ6IHRoaXMuYWxsb3dSdWxlc2V0ICYmIHRoaXMucGFyZW50VmFsdWUgJiYgdGhpcy5yZW1vdmVSdWxlU2V0LmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgICRpbXBsaWNpdDogdGhpcy5kYXRhXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5idXR0b25Hcm91cENvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1vdmVCdXR0b25Db250ZXh0KHJ1bGU6IFJ1bGUpOiBSZW1vdmVCdXR0b25Db250ZXh0IHtcclxuICAgIGlmICghdGhpcy5yZW1vdmVCdXR0b25Db250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQnV0dG9uQ29udGV4dENhY2hlLnNldChydWxlLCB7XHJcbiAgICAgICAgcmVtb3ZlUnVsZTogdGhpcy5yZW1vdmVSdWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlbW92ZUJ1dHRvbkNvbnRleHRDYWNoZS5nZXQocnVsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZENvbnRleHQocnVsZTogUnVsZSk6IEZpZWxkQ29udGV4dCB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGRDb250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMuZmllbGRDb250ZXh0Q2FjaGUuc2V0KHJ1bGUsIHtcclxuICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2VGaWVsZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGdldEZpZWxkczogdGhpcy5nZXRGaWVsZHMuYmluZCh0aGlzKSxcclxuICAgICAgICBnZXREaXNhYmxlZFN0YXRlOiB0aGlzLmdldERpc2FibGVkU3RhdGUsXHJcbiAgICAgICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcclxuICAgICAgICAkaW1wbGljaXQ6IHJ1bGVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZENvbnRleHRDYWNoZS5nZXQocnVsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbnRpdHlDb250ZXh0KHJ1bGU6IFJ1bGUpOiBFbnRpdHlDb250ZXh0IHtcclxuICAgIGlmICghdGhpcy5lbnRpdHlDb250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMuZW50aXR5Q29udGV4dENhY2hlLnNldChydWxlLCB7XHJcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuY2hhbmdlRW50aXR5LmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgIGVudGl0aWVzOiB0aGlzLmVudGl0aWVzLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmVudGl0eUNvbnRleHRDYWNoZS5nZXQocnVsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTd2l0Y2hHcm91cENvbnRleHQoKTogU3dpdGNoR3JvdXBDb250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUNvbmRpdGlvbi5iaW5kKHRoaXMpLFxyXG4gICAgICBnZXREaXNhYmxlZFN0YXRlOiB0aGlzLmdldERpc2FibGVkU3RhdGUsXHJcbiAgICAgICRpbXBsaWNpdDogdGhpcy5kYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyb3dJY29uQ29udGV4dCgpOiBBcnJvd0ljb25Db250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldERpc2FibGVkU3RhdGU6IHRoaXMuZ2V0RGlzYWJsZWRTdGF0ZSxcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLmRhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRFbXB0eVdhcm5pbmdDb250ZXh0KCk6IEVtcHR5V2FybmluZ0NvbnRleHQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICBtZXNzYWdlOiB0aGlzLmVtcHR5TWVzc2FnZSxcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLmRhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRPcGVyYXRvckNvbnRleHQocnVsZTogUnVsZSk6IE9wZXJhdG9yQ29udGV4dCB7XHJcbiAgICBpZiAoIXRoaXMub3BlcmF0b3JDb250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMub3BlcmF0b3JDb250ZXh0Q2FjaGUuc2V0KHJ1bGUsIHtcclxuICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2VPcGVyYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGdldERpc2FibGVkU3RhdGU6IHRoaXMuZ2V0RGlzYWJsZWRTdGF0ZSxcclxuICAgICAgICBvcGVyYXRvcnM6IHRoaXMuZ2V0T3BlcmF0b3JzKHJ1bGUuZmllbGQpLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm9wZXJhdG9yQ29udGV4dENhY2hlLmdldChydWxlKTtcclxuICB9XHJcblxyXG4gIGdldElucHV0Q29udGV4dChydWxlOiBSdWxlKTogSW5wdXRDb250ZXh0IHtcclxuICAgIGlmICghdGhpcy5pbnB1dENvbnRleHRDYWNoZS5oYXMocnVsZSkpIHtcclxuICAgICAgdGhpcy5pbnB1dENvbnRleHRDYWNoZS5zZXQocnVsZSwge1xyXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuZ2V0T3B0aW9ucyhydWxlLmZpZWxkKSxcclxuICAgICAgICBmaWVsZDogdGhpcy5jb25maWcuZmllbGRzW3J1bGUuZmllbGRdLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlucHV0Q29udGV4dENhY2hlLmdldChydWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlRmllbGRDaGFuZ2VWYWx1ZShcclxuICAgIGN1cnJlbnRGaWVsZDogRmllbGQsXHJcbiAgICBuZXh0RmllbGQ6IEZpZWxkLFxyXG4gICAgY3VycmVudFZhbHVlOiBhbnlcclxuICApOiBhbnkge1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5jYWxjdWxhdGVGaWVsZENoYW5nZVZhbHVlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNhbGN1bGF0ZUZpZWxkQ2hhbmdlVmFsdWUoXHJcbiAgICAgICAgY3VycmVudEZpZWxkLCBuZXh0RmllbGQsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FuS2VlcFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudEZpZWxkID09IG51bGwgfHwgbmV4dEZpZWxkID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnRGaWVsZC50eXBlID09PSBuZXh0RmllbGQudHlwZVxyXG4gICAgICAgICYmIHRoaXMuZGVmYXVsdFBlcnNpc3RWYWx1ZVR5cGVzLmluZGV4T2YoY3VycmVudEZpZWxkLnR5cGUpICE9PSAtMTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucGVyc2lzdFZhbHVlT25GaWVsZENoYW5nZSAmJiBjYW5LZWVwVmFsdWUoKSkge1xyXG4gICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0RmllbGQgJiYgbmV4dEZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRWYWx1ZShuZXh0RmllbGQuZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0VtcHR5UnVsZUluUnVsZXNldChydWxlc2V0OiBSdWxlU2V0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXJ1bGVzZXQgfHwgIXJ1bGVzZXQucnVsZXMgfHwgcnVsZXNldC5ydWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcnVsZXNldC5ydWxlcy5zb21lKChpdGVtOiBSdWxlU2V0KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucnVsZXMpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrRW1wdHlSdWxlSW5SdWxlc2V0KGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVSdWxlc0luUnVsZXNldChydWxlc2V0OiBSdWxlU2V0LCBlcnJvclN0b3JlOiBhbnlbXSkge1xyXG4gICAgaWYgKHJ1bGVzZXQgJiYgcnVsZXNldC5ydWxlcyAmJiBydWxlc2V0LnJ1bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcnVsZXNldC5ydWxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKChpdGVtIGFzIFJ1bGVTZXQpLnJ1bGVzKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVJ1bGVzSW5SdWxlc2V0KGl0ZW0gYXMgUnVsZVNldCwgZXJyb3JTdG9yZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoaXRlbSBhcyBSdWxlKS5maWVsZCkge1xyXG4gICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZy5maWVsZHNbKGl0ZW0gYXMgUnVsZSkuZmllbGRdO1xyXG4gICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLnZhbGlkYXRvciAmJiBmaWVsZC52YWxpZGF0b3IuYXBwbHkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBmaWVsZC52YWxpZGF0b3IoaXRlbSBhcyBSdWxlLCBydWxlc2V0KTtcclxuICAgICAgICAgICAgaWYgKGVycm9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBlcnJvclN0b3JlLnB1c2goZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRGF0YUNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyZW50Q2hhbmdlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5wYXJlbnRDaGFuZ2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVUb3VjaGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25Ub3VjaGVkQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyZW50VG91Y2hlZENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMucGFyZW50VG91Y2hlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnc3dpdGNoUm93JylcIj5cclxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRBcnJvd0ljb24+XHJcbiAgICA8aSBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdhcnJvd0ljb24nKVwiPjwvaT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8YSAqbmdJZj1cImFsbG93Q29sbGFwc2VcIiAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2UoKVwiIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2Fycm93SWNvbkJ1dHRvbicsIGRhdGEuY29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiBudWxsKVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldEFycm93SWNvblRlbXBsYXRlKCkgYXMgdGVtcGxhdGU7IGVsc2UgZGVmYXVsdEFycm93SWNvblwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IGdldEFycm93SWNvbkNvbnRleHQoKVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9hPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0QnV0dG9uR3JvdXBUZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRCdXR0b25Hcm91cFwiPlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b25Hcm91cCcsICdyaWdodEFsaWduJylcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRCdXR0b25Hcm91cENvbnRleHQoKVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEJ1dHRvbkdyb3VwPlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b25Hcm91cCcsICdyaWdodEFsaWduJylcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZFJ1bGUoKVwiIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2J1dHRvbicpXCIgW2Rpc2FibGVkXT1kaXNhYmxlZD5cclxuICAgICAgICA8aSBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdhZGRJY29uJylcIj48L2k+IFJ1bGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRSdWxlU2V0KClcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b24nKVwiICpuZ0lmPVwiYWxsb3dSdWxlc2V0XCIgW2Rpc2FibGVkXT1kaXNhYmxlZD5cclxuICAgICAgICA8aSBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdhZGRJY29uJylcIj48L2k+IFJ1bGVzZXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhIXBhcmVudFZhbHVlICYmIGFsbG93UnVsZXNldFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmVSdWxlU2V0KClcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b24nLCAncmVtb3ZlQnV0dG9uJylcIiBbZGlzYWJsZWRdPWRpc2FibGVkPlxyXG4gICAgICAgICAgPGkgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygncmVtb3ZlSWNvbicpXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRTd2l0Y2hHcm91cFRlbXBsYXRlKCkgYXMgdGVtcGxhdGU7IGVsc2UgZGVmYXVsdFN3aXRjaEdyb3VwXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IGdldFN3aXRjaEdyb3VwQ29udGV4dCgpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFN3aXRjaEdyb3VwPlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hHcm91cCcsICd0cmFuc2l0aW9uJylcIiAqbmdJZj1cImRhdGFcIj5cclxuICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hDb250cm9sJylcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnc3dpdGNoUmFkaW8nKVwiIFsobmdNb2RlbCldPVwiZGF0YS5jb25kaXRpb25cIiBbZGlzYWJsZWRdPWRpc2FibGVkXHJcbiAgICAgICAgICB2YWx1ZT1cImFuZFwiICNhbmRPcHRpb24gLz5cclxuICAgICAgICA8bGFiZWwgKGNsaWNrKT1cImNoYW5nZUNvbmRpdGlvbihhbmRPcHRpb24udmFsdWUpXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnc3dpdGNoTGFiZWwnKVwiPkFORDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ3N3aXRjaENvbnRyb2wnKVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hSYWRpbycpXCIgWyhuZ01vZGVsKV09XCJkYXRhLmNvbmRpdGlvblwiIFtkaXNhYmxlZF09ZGlzYWJsZWRcclxuICAgICAgICAgIHZhbHVlPVwib3JcIiAjb3JPcHRpb24gLz5cclxuICAgICAgICA8bGFiZWwgKGNsaWNrKT1cImNoYW5nZUNvbmRpdGlvbihvck9wdGlvbi52YWx1ZSlcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hMYWJlbCcpXCI+T1I8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiAjdHJlZUNvbnRhaW5lciAodHJhbnNpdGlvbmVuZCk9XCJ0cmFuc2l0aW9uRW5kKCRldmVudClcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCd0cmVlQ29udGFpbmVyJywgZGF0YS5jb2xsYXBzZWQgPyAnY29sbGFwc2VkJyA6IG51bGwpXCI+XHJcbiAgPHVsIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ3RyZWUnKVwiICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnJ1bGVzXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBydWxlIG9mIGRhdGEucnVsZXM7bGV0IGk9aW5kZXhcIj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ7cnVsZXNldDogISFydWxlLnJ1bGVzLCBpbnZhbGlkOiAhY29uZmlnLmFsbG93RW1wdHlSdWxlc2V0cyAmJiBydWxlLnJ1bGVzICYmIHJ1bGUucnVsZXMubGVuZ3RoID09PSAwfSBhcyBsb2NhbFwiPlxyXG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJnZXRRdWVyeUl0ZW1DbGFzc05hbWUobG9jYWwpXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvY2FsLnJ1bGVzZXRcIj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRSZW1vdmVCdXR0b25UZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRSZW1vdmVCdXR0b25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2J1dHRvbkdyb3VwJywgJ3JpZ2h0QWxpZ24nKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRSZW1vdmVCdXR0b25Db250ZXh0KHJ1bGUpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0UmVtb3ZlQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygncmVtb3ZlQnV0dG9uU2l6ZScsICdyaWdodEFsaWduJylcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2J1dHRvbicsICdyZW1vdmVCdXR0b24nKVwiIChjbGljayk9XCJyZW1vdmVSdWxlKHJ1bGUsIGRhdGEpXCIgW2Rpc2FibGVkXT1kaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgPGkgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygncmVtb3ZlSWNvbicpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW50aXRpZXM/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cInEtaW5saW5lLWJsb2NrLWRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RW50aXR5VGVtcGxhdGUoKSBhcyB0ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0RW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IGdldEVudGl0eUNvbnRleHQocnVsZSlcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRFbnRpdHk+XHJcbiAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdlbnRpdHlDb250cm9sU2l6ZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2VudGl0eUNvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS5lbnRpdHlcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VFbnRpdHkoJGV2ZW50LCBydWxlLGksZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIGVudGl0aWVzXCIgW25nVmFsdWVdPVwiZW50aXR5LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tlbnRpdHkubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RmllbGRUZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRGaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogZ2V0RmllbGRDb250ZXh0KHJ1bGUpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RmllbGQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdmaWVsZENvbnRyb2xTaXplJylcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnZmllbGRDb250cm9sJylcIiBbKG5nTW9kZWwpXT1cInJ1bGUuZmllbGRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VGaWVsZCgkZXZlbnQsIHJ1bGUpXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcyhydWxlLmVudGl0eSlcIiBbbmdWYWx1ZV09XCJmaWVsZC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7ZmllbGQubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0T3BlcmF0b3JUZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRPcGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogZ2V0T3BlcmF0b3JDb250ZXh0KHJ1bGUpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0T3BlcmF0b3I+XHJcbiAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdvcGVyYXRvckNvbnRyb2xTaXplJylcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnb3BlcmF0b3JDb250cm9sJylcIiBbKG5nTW9kZWwpXT1cInJ1bGUub3BlcmF0b3JcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VPcGVyYXRvcihydWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcGVyYXRvciBvZiBnZXRPcGVyYXRvcnMocnVsZS5maWVsZClcIiBbbmdWYWx1ZV09XCJvcGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7b3BlcmF0b3J9fVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbmRUZW1wbGF0ZUZvclJ1bGUocnVsZSkgYXMgdGVtcGxhdGU7IGVsc2UgZGVmYXVsdElucHV0XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRJbnB1dENvbnRleHQocnVsZSlcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRJbnB1dD5cclxuICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2lucHV0Q29udHJvbFNpemUnKVwiIFtuZ1N3aXRjaF09XCJnZXRJbnB1dFR5cGUocnVsZS5maWVsZCwgcnVsZS5vcGVyYXRvcilcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3N0cmluZydcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2lucHV0Q29udHJvbCcpXCIgWyhuZ01vZGVsKV09XCJydWxlLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlSW5wdXQoKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIHR5cGU9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgdHlwZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3RpbWUnXCIgdHlwZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnaW5wdXRDb250cm9sJylcIiBbKG5nTW9kZWwpXT1cInJ1bGUudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VJbnB1dCgpXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKm5nU3dpdGNoQ2FzZT1cIidjYXRlZ29yeSdcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGdldE9wdGlvbnMocnVsZS5maWVsZClcIiBbbmdWYWx1ZV09XCJvcHQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e29wdC5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidtdWx0aXNlbGVjdCdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBnZXRPcHRpb25zKHJ1bGUuZmllbGQpXCIgW25nVmFsdWVdPVwib3B0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e29wdC5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2Jvb2xlYW4nXCIgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8cXVlcnktYnVpbGRlciAqbmdJZj1cImxvY2FsLnJ1bGVzZXRcIiBbZGF0YV09XCJydWxlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3BhcmVudFRvdWNoZWRDYWxsYmFja109XCJwYXJlbnRUb3VjaGVkQ2FsbGJhY2sgfHwgb25Ub3VjaGVkQ2FsbGJhY2tcIlxyXG4gICAgICAgICAgICBbcGFyZW50Q2hhbmdlQ2FsbGJhY2tdPVwicGFyZW50Q2hhbmdlQ2FsbGJhY2sgfHwgb25DaGFuZ2VDYWxsYmFja1wiIFtwYXJlbnRJbnB1dFRlbXBsYXRlc109XCJwYXJlbnRJbnB1dFRlbXBsYXRlcyB8fCBpbnB1dFRlbXBsYXRlc1wiXHJcbiAgICAgICAgICAgIFtwYXJlbnRPcGVyYXRvclRlbXBsYXRlXT1cInBhcmVudE9wZXJhdG9yVGVtcGxhdGUgfHwgb3BlcmF0b3JUZW1wbGF0ZVwiIFtwYXJlbnRGaWVsZFRlbXBsYXRlXT1cInBhcmVudEZpZWxkVGVtcGxhdGUgfHwgZmllbGRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRFbnRpdHlUZW1wbGF0ZV09XCJwYXJlbnRFbnRpdHlUZW1wbGF0ZSB8fCBlbnRpdHlUZW1wbGF0ZVwiIFtwYXJlbnRTd2l0Y2hHcm91cFRlbXBsYXRlXT1cInBhcmVudFN3aXRjaEdyb3VwVGVtcGxhdGUgfHwgc3dpdGNoR3JvdXBUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRCdXR0b25Hcm91cFRlbXBsYXRlXT1cInBhcmVudEJ1dHRvbkdyb3VwVGVtcGxhdGUgfHwgYnV0dG9uR3JvdXBUZW1wbGF0ZVwiIFtwYXJlbnRSZW1vdmVCdXR0b25UZW1wbGF0ZV09XCJwYXJlbnRSZW1vdmVCdXR0b25UZW1wbGF0ZSB8fCByZW1vdmVCdXR0b25UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRFbXB0eVdhcm5pbmdUZW1wbGF0ZV09XCJwYXJlbnRFbXB0eVdhcm5pbmdUZW1wbGF0ZSB8fCBlbXB0eVdhcm5pbmdUZW1wbGF0ZVwiIFtwYXJlbnRBcnJvd0ljb25UZW1wbGF0ZV09XCJwYXJlbnRBcnJvd0ljb25UZW1wbGF0ZSB8fCBhcnJvd0ljb25UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRWYWx1ZV09XCJkYXRhXCIgW2NsYXNzTmFtZXNdPVwiY2xhc3NOYW1lc1wiIFtjb25maWddPVwiY29uZmlnXCIgW2FsbG93UnVsZXNldF09XCJhbGxvd1J1bGVzZXRcIlxyXG4gICAgICAgICAgICBbYWxsb3dDb2xsYXBzZV09XCJhbGxvd0NvbGxhcHNlXCIgW2VtcHR5TWVzc2FnZV09XCJlbXB0eU1lc3NhZ2VcIiBbb3BlcmF0b3JNYXBdPVwib3BlcmF0b3JNYXBcIj5cclxuICAgICAgICAgIDwvcXVlcnktYnVpbGRlcj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RW1wdHlXYXJuaW5nVGVtcGxhdGUoKSBhcyB0ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0RW1wdHlXYXJuaW5nXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2NhbC5pbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRFbXB0eVdhcm5pbmdDb250ZXh0KClcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRFbXB0eVdhcm5pbmc+XHJcbiAgICAgICAgICAgIDxwIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2VtcHR5V2FybmluZycpXCIgKm5nSWY9XCJsb2NhbC5pbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAge3tlbXB0eU1lc3NhZ2V9fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC91bD5cclxuPC9kaXY+Il19