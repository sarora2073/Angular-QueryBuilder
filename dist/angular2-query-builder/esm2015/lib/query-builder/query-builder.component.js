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
const _c0 = ["treeContainer"];
function QueryBuilderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.getClassNames("arrowIcon"));
} }
function QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r12 = ctx.ngIf;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r12)("ngTemplateOutletContext", ctx_r11.getArrowIconContext());
} }
function QueryBuilderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵlistener("click", function QueryBuilderComponent_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.toggleCollapse(); });
    i0.ɵɵtemplate(1, QueryBuilderComponent_a_3_ng_container_1_Template, 2, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", ctx_r2.getClassNames("arrowIconButton", ctx_r2.data.collapsed ? "collapsed" : null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getArrowIconTemplate())("ngIfElse", _r0);
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
    const template_r16 = ctx.ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r3.getClassNames("buttonGroup", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r16)("ngTemplateOutletContext", ctx_r3.getButtonGroupContext());
} }
function QueryBuilderComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.addRuleSet(); });
    i0.ɵɵelement(1, "i", 0);
    i0.ɵɵtext(2, " Ruleset ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r18.getClassNames("button"))("disabled", ctx_r18.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r18.getClassNames("addIcon"));
} }
function QueryBuilderComponent_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_ng_container_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.removeRuleSet(); });
    i0.ɵɵelement(2, "i", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r19.getClassNames("button", "removeButton"))("disabled", ctx_r19.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r19.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.addRule(); });
    i0.ɵɵelement(2, "i", 0);
    i0.ɵɵtext(3, " Rule ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, QueryBuilderComponent_ng_template_5_button_4_Template, 3, 3, "button", 12);
    i0.ɵɵtemplate(5, QueryBuilderComponent_ng_template_5_ng_container_5_Template, 3, 3, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r5.getClassNames("buttonGroup", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.getClassNames("button"))("disabled", ctx_r5.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.getClassNames("addIcon"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.allowRuleset);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r5.parentValue && ctx_r5.allowRuleset);
} }
function QueryBuilderComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r26 = ctx.ngIf;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r26)("ngTemplateOutletContext", ctx_r6.getSwitchGroupContext());
} }
function QueryBuilderComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 0);
    i0.ɵɵelementStart(2, "input", 14, 15);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.data.condition = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 9);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_4_listener() { i0.ɵɵrestoreView(_r32); const _r29 = i0.ɵɵreference(3); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.changeCondition(_r29.value); });
    i0.ɵɵtext(5, "AND");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 0);
    i0.ɵɵelementStart(7, "input", 16, 17);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ng_template_8_div_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.data.condition = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "label", 9);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ng_template_8_div_0_Template_label_click_9_listener() { i0.ɵɵrestoreView(_r32); const _r30 = i0.ɵɵreference(8); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.changeCondition(_r30.value); });
    i0.ɵɵtext(10, "OR");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchGroup", "transition"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchControl"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchRadio"))("ngModel", ctx_r28.data.condition)("disabled", ctx_r28.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchLabel"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchControl"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchRadio"))("ngModel", ctx_r28.data.condition)("disabled", ctx_r28.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r28.getClassNames("switchLabel"));
} }
function QueryBuilderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, QueryBuilderComponent_ng_template_8_div_0_Template, 11, 11, "div", 8);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r8.data);
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
    const template_r61 = ctx.ngIf;
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r46 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r46.getClassNames("buttonGroup", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r61)("ngTemplateOutletContext", ctx_r46.getRemoveButtonContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r66); const rule_r37 = i0.ɵɵnextContext(3).$implicit; const ctx_r64 = i0.ɵɵnextContext(2); return ctx_r64.removeRule(rule_r37, ctx_r64.data); });
    i0.ɵɵelement(2, "i", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", ctx_r48.getClassNames("removeButtonSize", "rightAlign"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r48.getClassNames("button", "removeButton"))("disabled", ctx_r48.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r48.getClassNames("removeIcon"));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r68 = ctx.ngIf;
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r68)("ngTemplateOutletContext", ctx_r67.getEntityContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_div_4_ng_container_1_Template, 2, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r50 = i0.ɵɵreference(6);
    const ctx_r49 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r49.getEntityTemplate())("ngIfElse", _r50);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entity_r72 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", entity_r72.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entity_r72.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r75); const rule_r37 = i0.ɵɵnextContext(3).$implicit; return rule_r37.entity = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r77 = i0.ɵɵnextContext(3); const rule_r37 = ctx_r77.$implicit; const i_r38 = ctx_r77.index; const ctx_r76 = i0.ɵɵnextContext(2); return ctx_r76.changeEntity($event, rule_r37, i_r38, ctx_r76.data); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_5_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r51.getClassNames("entityControlSize"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r51.getClassNames("entityControl"))("ngModel", rule_r37.entity)("disabled", ctx_r51.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r51.entities);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r79 = ctx.ngIf;
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r79)("ngTemplateOutletContext", ctx_r52.getFieldContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r83 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", field_r83.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r83.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r86); const rule_r37 = i0.ɵɵnextContext(3).$implicit; return rule_r37.field = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r86); const rule_r37 = i0.ɵɵnextContext(3).$implicit; const ctx_r87 = i0.ɵɵnextContext(2); return ctx_r87.changeField($event, rule_r37); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_8_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r54 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r54.getClassNames("fieldControlSize"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r54.getClassNames("fieldControl"))("ngModel", rule_r37.field)("disabled", ctx_r54.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r54.getFields(rule_r37.entity));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r90 = ctx.ngIf;
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r90)("ngTemplateOutletContext", ctx_r55.getOperatorContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r94 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", operator_r94);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", operator_r94, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelementStart(1, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r97); const rule_r37 = i0.ɵɵnextContext(3).$implicit; return rule_r37.operator = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_Template_select_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r97); const rule_r37 = i0.ɵɵnextContext(3).$implicit; const ctx_r98 = i0.ɵɵnextContext(2); return ctx_r98.changeOperator(rule_r37); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_11_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r57 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r57.getClassNames("operatorControlSize"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r57.getClassNames("operatorControl"))("ngModel", rule_r37.operator)("disabled", ctx_r57.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r57.getOperators(rule_r37.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r101 = ctx.ngIf;
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r58 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r101)("ngTemplateOutletContext", ctx_r58.getInputContext(rule_r37));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 39);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r113); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_1_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r113); const ctx_r114 = i0.ɵɵnextContext(6); return ctx_r114.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r104 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r104.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r104.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 40);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r118); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_2_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r118); const ctx_r119 = i0.ɵɵnextContext(6); return ctx_r119.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r105 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r105.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r105.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 41);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r123); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_3_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r123); const ctx_r124 = i0.ɵɵnextContext(6); return ctx_r124.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r106 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r106.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r106.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 42);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r128); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_4_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r128); const ctx_r129 = i0.ɵɵnextContext(6); return ctx_r129.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r107 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r107.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r107.disabled);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r132 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", opt_r132.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r132.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 28);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r135); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_Template_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r135); const ctx_r136 = i0.ɵɵnextContext(6); return ctx_r136.changeInput(); });
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_select_5_option_1_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r108 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r108.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r108.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r108.getOptions(rule_r37.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r139 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", opt_r139.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r139.name, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "select", 43);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r142); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_Template_select_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r142); const ctx_r143 = i0.ɵɵnextContext(6); return ctx_r143.changeInput(); });
    i0.ɵɵtemplate(2, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_ng_container_6_option_2_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r109 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r109.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r109.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r109.getOptions(rule_r37.field));
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r147 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 44);
    i0.ɵɵlistener("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r147); const rule_r37 = i0.ɵɵnextContext(4).$implicit; return rule_r37.value = $event; })("ngModelChange", function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_2_ng_template_14_input_7_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r147); const ctx_r148 = i0.ɵɵnextContext(6); return ctx_r148.changeInput(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r110 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r110.getClassNames("inputControl"))("ngModel", rule_r37.value)("disabled", ctx_r110.disabled);
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
    const rule_r37 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r60 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r60.getClassNames("inputControlSize"))("ngSwitch", ctx_r60.getInputType(rule_r37.field, rule_r37.operator));
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
    const _r47 = i0.ɵɵreference(3);
    const _r53 = i0.ɵɵreference(9);
    const _r56 = i0.ɵɵreference(12);
    const _r59 = i0.ɵɵreference(15);
    const rule_r37 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r41 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r41.getRemoveButtonTemplate())("ngIfElse", _r47);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r41.entities == null ? null : ctx_r41.entities.length) > 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r41.getFieldTemplate())("ngIfElse", _r53);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r41.getOperatorTemplate())("ngIfElse", _r56);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r41.findTemplateForRule(rule_r37))("ngIfElse", _r59);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_query_builder_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "query-builder", 45);
} if (rf & 2) {
    const rule_r37 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", rule_r37)("disabled", ctx_r42.disabled)("parentTouchedCallback", ctx_r42.parentTouchedCallback || ctx_r42.onTouchedCallback)("parentChangeCallback", ctx_r42.parentChangeCallback || ctx_r42.onChangeCallback)("parentInputTemplates", ctx_r42.parentInputTemplates || ctx_r42.inputTemplates)("parentOperatorTemplate", ctx_r42.parentOperatorTemplate || ctx_r42.operatorTemplate)("parentFieldTemplate", ctx_r42.parentFieldTemplate || ctx_r42.fieldTemplate)("parentEntityTemplate", ctx_r42.parentEntityTemplate || ctx_r42.entityTemplate)("parentSwitchGroupTemplate", ctx_r42.parentSwitchGroupTemplate || ctx_r42.switchGroupTemplate)("parentButtonGroupTemplate", ctx_r42.parentButtonGroupTemplate || ctx_r42.buttonGroupTemplate)("parentRemoveButtonTemplate", ctx_r42.parentRemoveButtonTemplate || ctx_r42.removeButtonTemplate)("parentEmptyWarningTemplate", ctx_r42.parentEmptyWarningTemplate || ctx_r42.emptyWarningTemplate)("parentArrowIconTemplate", ctx_r42.parentArrowIconTemplate || ctx_r42.arrowIconTemplate)("parentValue", ctx_r42.data)("classNames", ctx_r42.classNames)("config", ctx_r42.config)("allowRuleset", ctx_r42.allowRuleset)("allowCollapse", ctx_r42.allowCollapse)("emptyMessage", ctx_r42.emptyMessage)("operatorMap", ctx_r42.operatorMap);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r153 = i0.ɵɵnextContext().ngIf;
    const ctx_r154 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r153)("ngTemplateOutletContext", ctx_r154.getEmptyWarningContext());
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const local_r40 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", local_r40.invalid);
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r158 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", ctx_r158.getClassNames("emptyWarning"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r158.emptyMessage, " ");
} }
function QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_ng_template_5_p_0_Template, 2, 2, "p", 8);
} if (rf & 2) {
    const local_r40 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("ngIf", local_r40.invalid);
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
    const local_r40 = ctx.ngIf;
    const _r44 = i0.ɵɵreference(6);
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r39.getQueryItemClassName(local_r40));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !local_r40.ruleset);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", local_r40.ruleset);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.getEmptyWarningTemplate())("ngIfElse", _r44);
} }
const _c1 = function (a0, a1) { return { ruleset: a0, invalid: a1 }; };
function QueryBuilderComponent_ul_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const rule_r37 = ctx.$implicit;
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction2(1, _c1, !!rule_r37.rules, !ctx_r36.config.allowEmptyRulesets && rule_r37.rules && rule_r37.rules.length === 0));
} }
function QueryBuilderComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 0);
    i0.ɵɵtemplate(1, QueryBuilderComponent_ul_12_ng_container_1_Template, 2, 4, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r10.getClassNames("tree"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.data.rules);
} }
export const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QueryBuilderComponent),
    multi: true
};
export const VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => QueryBuilderComponent),
    multi: true
};
export class QueryBuilderComponent {
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
        const _r4 = i0.ɵɵreference(6);
        const _r7 = i0.ɵɵreference(9);
        i0.ɵɵproperty("ngClass", ctx.getClassNames("switchRow"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.allowCollapse);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getButtonGroupTemplate())("ngIfElse", _r4);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.getSwitchGroupTemplate())("ngIfElse", _r7);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngClass", ctx.getClassNames("treeContainer", ctx.data.collapsed ? "collapsed" : null));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.data && ctx.data.rules);
    } }, directives: [i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i2.RadioControlValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i2.SelectControlValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i1.NgSwitch, i1.NgSwitchCase, i2.NumberValueAccessor, i2.SelectMultipleControlValueAccessor, i2.CheckboxControlValueAccessor, QueryBuilderComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .q-icon[_ngcontent-%COMP%]{font-style:normal;font-size:12px}[_nghost-%COMP%]   .q-remove-icon[_ngcontent-%COMP%]::before{content:'\u274C'}[_nghost-%COMP%]   .q-arrow-icon-button[_ngcontent-%COMP%]{float:left;margin:4px 6px 4px 0;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:transform .25s linear;transition:transform .25s linear;cursor:pointer}[_nghost-%COMP%]   .q-arrow-icon-button.q-collapsed[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0)}[_nghost-%COMP%]   .q-arrow-icon[_ngcontent-%COMP%]::before{content:'\u25B6'}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]{color:#555}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]::before{content:'\u2795'}[_nghost-%COMP%]   .q-remove-button[_ngcontent-%COMP%]{color:#b3415d;width:31px}[_nghost-%COMP%]   .q-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-group[_ngcontent-%COMP%]{font-family:\"Lucida Grande\",Tahoma,Verdana,sans-serif;overflow:hidden}[_nghost-%COMP%]   .q-right-align[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{margin-left:8px;padding:0 8px;background-color:#fff}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:disabled{display:none}[_nghost-%COMP%]   .q-control-size[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-right:10px}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]:disabled{border-color:transparent}[_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:not([type=checkbox]), [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]{min-height:32px;-webkit-appearance:none}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:400;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,.2);box-sizing:border-box}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f0f0f0}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{background-color:#e4e4e4;padding:0 8px}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked + .q-switch-label[_ngcontent-%COMP%]{border:1px solid #619ed7;background:#fff;color:#3176b3}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:disabled + .q-switch-label[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked:disabled + .q-switch-label[_ngcontent-%COMP%]{display:initial;color:initial;cursor:default;border-color:transparent}[_nghost-%COMP%]   .q-invalid-ruleset[_ngcontent-%COMP%]{border:1px solid rgba(179,65,93,.5)!important;background:rgba(179,65,93,.1)!important}[_nghost-%COMP%]   .q-empty-warning[_ngcontent-%COMP%]{color:#8d252e;text-align:center}[_nghost-%COMP%]   .q-ruleset[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .q-rule[_ngcontent-%COMP%]{border:1px solid #ccc;background:#fff}[_nghost-%COMP%]   .q-transition[_ngcontent-%COMP%]{-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out}[_nghost-%COMP%]   .q-tree-container[_ngcontent-%COMP%]{width:100%;overflow:hidden;-webkit-transition:max-height .25s ease-in;transition:max-height .25s ease-in}[_nghost-%COMP%]   .q-tree-container.q-collapsed[_ngcontent-%COMP%]{max-height:0!important}[_nghost-%COMP%]   .q-tree[_ngcontent-%COMP%]{list-style:none;margin:4px 0 2px}[_nghost-%COMP%]   .q-row[_ngcontent-%COMP%]{padding:6px 8px;margin-top:6px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{top:-5px;border-width:0 0 2px 2px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after{border-width:0 0 0 2px;top:50%}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::after, [_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]::before{content:'';left:-12px;border-color:#ccc;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:last-child::after{content:none}[_nghost-%COMP%]   .q-inline-block-display[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1xdWVyeS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL3F1ZXJ5LWJ1aWxkZXIvcXVlcnktYnVpbGRlci5jb21wb25lbnQudHMiLCJsaWIvcXVlcnktYnVpbGRlci9xdWVyeS1idWlsZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxpQkFBaUIsRUFDakIsYUFBYSxFQUdkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFvQnZFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDaERuQix1QkFBOEM7OztJQUEzQywyREFBc0M7OztJQUt2Qyx3QkFBMEY7OztJQUQ1Riw2QkFDRTtJQUFBLDRHQUEyRTtJQUM3RSwwQkFBZTs7OztJ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LFlBQVk7bUJBQUMseUJBQXlCOztrQkFDdEMsWUFBWTttQkFBQyxtQkFBbUI7O2tCQUNoQyxZQUFZO21CQUFDLG9CQUFvQjs7a0JBQ2pDLFlBQVk7bUJBQUMsc0JBQXNCOztrQkFDbkMsWUFBWTttQkFBQywwQkFBMEI7O2tCQUN2QyxZQUFZO21CQUFDLDBCQUEwQjs7a0JBQ3ZDLGVBQWU7bUJBQUMsbUJBQW1COztrQkFDbkMsWUFBWTttQkFBQyx1QkFBdUI7O2tCQXNFcEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFF1ZXJ5T3BlcmF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LW9wZXJhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LWZpZWxkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5RW50aXR5RGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1lbnRpdHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUXVlcnlTd2l0Y2hHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktc3dpdGNoLWdyb3VwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFF1ZXJ5QnV0dG9uR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL3F1ZXJ5LWJ1dHRvbi1ncm91cC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUlucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9xdWVyeS1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktcmVtb3ZlLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUVtcHR5V2FybmluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktZW1wdHktd2FybmluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlcnktYXJyb3ctaWNvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbkdyb3VwQ29udGV4dCxcclxuICBFbnRpdHksXHJcbiAgRmllbGQsXHJcbiAgU3dpdGNoR3JvdXBDb250ZXh0LFxyXG4gIEVudGl0eUNvbnRleHQsXHJcbiAgRmllbGRDb250ZXh0LFxyXG4gIElucHV0Q29udGV4dCxcclxuICBMb2NhbFJ1bGVNZXRhLFxyXG4gIE9wZXJhdG9yQ29udGV4dCxcclxuICBPcHRpb24sXHJcbiAgUXVlcnlCdWlsZGVyQ2xhc3NOYW1lcyxcclxuICBRdWVyeUJ1aWxkZXJDb25maWcsXHJcbiAgUmVtb3ZlQnV0dG9uQ29udGV4dCxcclxuICBBcnJvd0ljb25Db250ZXh0LFxyXG4gIFJ1bGUsXHJcbiAgUnVsZVNldCxcclxuICBFbXB0eVdhcm5pbmdDb250ZXh0LFxyXG59IGZyb20gJy4vcXVlcnktYnVpbGRlci5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUXVlcnlCdWlsZGVyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUXVlcnlCdWlsZGVyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxdWVyeS1idWlsZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcXVlcnktYnVpbGRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcXVlcnktYnVpbGRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsIFZBTElEQVRPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5QnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcclxuICBwdWJsaWMgZmllbGRzOiBGaWVsZFtdO1xyXG4gIHB1YmxpYyBmaWx0ZXJGaWVsZHM6IEZpZWxkW107XHJcbiAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXTtcclxuICBwdWJsaWMgZGVmYXVsdENsYXNzTmFtZXM6IFF1ZXJ5QnVpbGRlckNsYXNzTmFtZXMgPSB7XHJcbiAgICBhcnJvd0ljb25CdXR0b246ICdxLWFycm93LWljb24tYnV0dG9uJyxcclxuICAgIGFycm93SWNvbjogJ3EtaWNvbiBxLWFycm93LWljb24nLFxyXG4gICAgcmVtb3ZlSWNvbjogJ3EtaWNvbiBxLXJlbW92ZS1pY29uJyxcclxuICAgIGFkZEljb246ICdxLWljb24gcS1hZGQtaWNvbicsXHJcbiAgICBidXR0b246ICdxLWJ1dHRvbicsXHJcbiAgICBidXR0b25Hcm91cDogJ3EtYnV0dG9uLWdyb3VwJyxcclxuICAgIHJlbW92ZUJ1dHRvbjogJ3EtcmVtb3ZlLWJ1dHRvbicsXHJcbiAgICBzd2l0Y2hHcm91cDogJ3Etc3dpdGNoLWdyb3VwJyxcclxuICAgIHN3aXRjaExhYmVsOiAncS1zd2l0Y2gtbGFiZWwnLFxyXG4gICAgc3dpdGNoUmFkaW86ICdxLXN3aXRjaC1yYWRpbycsXHJcbiAgICByaWdodEFsaWduOiAncS1yaWdodC1hbGlnbicsXHJcbiAgICB0cmFuc2l0aW9uOiAncS10cmFuc2l0aW9uJyxcclxuICAgIGNvbGxhcHNlZDogJ3EtY29sbGFwc2VkJyxcclxuICAgIHRyZWVDb250YWluZXI6ICdxLXRyZWUtY29udGFpbmVyJyxcclxuICAgIHRyZWU6ICdxLXRyZWUnLFxyXG4gICAgcm93OiAncS1yb3cnLFxyXG4gICAgY29ubmVjdG9yOiAncS1jb25uZWN0b3InLFxyXG4gICAgcnVsZTogJ3EtcnVsZScsXHJcbiAgICBydWxlU2V0OiAncS1ydWxlc2V0JyxcclxuICAgIGludmFsaWRSdWxlU2V0OiAncS1pbnZhbGlkLXJ1bGVzZXQnLFxyXG4gICAgZW1wdHlXYXJuaW5nOiAncS1lbXB0eS13YXJuaW5nJyxcclxuICAgIGZpZWxkQ29udHJvbDogJ3EtZmllbGQtY29udHJvbCcsXHJcbiAgICBmaWVsZENvbnRyb2xTaXplOiAncS1jb250cm9sLXNpemUnLFxyXG4gICAgZW50aXR5Q29udHJvbDogJ3EtZW50aXR5LWNvbnRyb2wnLFxyXG4gICAgZW50aXR5Q29udHJvbFNpemU6ICdxLWNvbnRyb2wtc2l6ZScsXHJcbiAgICBvcGVyYXRvckNvbnRyb2w6ICdxLW9wZXJhdG9yLWNvbnRyb2wnLFxyXG4gICAgb3BlcmF0b3JDb250cm9sU2l6ZTogJ3EtY29udHJvbC1zaXplJyxcclxuICAgIGlucHV0Q29udHJvbDogJ3EtaW5wdXQtY29udHJvbCcsXHJcbiAgICBpbnB1dENvbnRyb2xTaXplOiAncS1jb250cm9sLXNpemUnXHJcbiAgfTtcclxuICBwdWJsaWMgZGVmYXVsdE9wZXJhdG9yTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XHJcbiAgICBzdHJpbmc6IFsnPScsICchPScsICdjb250YWlucycsICdsaWtlJ10sXHJcbiAgICBudW1iZXI6IFsnPScsICchPScsICc+JywgJz49JywgJzwnLCAnPD0nXSxcclxuICAgIHRpbWU6IFsnPScsICchPScsICc+JywgJz49JywgJzwnLCAnPD0nXSxcclxuICAgIGRhdGU6IFsnPScsICchPScsICc+JywgJz49JywgJzwnLCAnPD0nXSxcclxuICAgIGNhdGVnb3J5OiBbJz0nLCAnIT0nLCAnaW4nLCAnbm90IGluJ10sXHJcbiAgICBib29sZWFuOiBbJz0nXVxyXG4gIH07XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGF0YTogUnVsZVNldCA9IHsgY29uZGl0aW9uOiAnYW5kJywgcnVsZXM6IFtdIH07XHJcblxyXG4gIC8vIEZvciBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICBwdWJsaWMgb25DaGFuZ2VDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICBwdWJsaWMgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IGFueTtcclxuXHJcbiAgQElucHV0KCkgYWxsb3dSdWxlc2V0OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbGxvd0NvbGxhcHNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgPSAnQSBydWxlc2V0IGNhbm5vdCBiZSBlbXB0eS4gUGxlYXNlIGFkZCBhIHJ1bGUgb3IgcmVtb3ZlIGl0IGFsbCB0b2dldGhlci4nO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZXM6IFF1ZXJ5QnVpbGRlckNsYXNzTmFtZXM7XHJcbiAgQElucHV0KCkgb3BlcmF0b3JNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuICBASW5wdXQoKSBwYXJlbnRWYWx1ZTogUnVsZVNldDtcclxuICBASW5wdXQoKSBjb25maWc6IFF1ZXJ5QnVpbGRlckNvbmZpZyA9IHsgZmllbGRzOiB7fSB9O1xyXG4gIEBJbnB1dCgpIHBhcmVudEFycm93SWNvblRlbXBsYXRlOiBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRJbnB1dFRlbXBsYXRlczogUXVlcnlMaXN0PFF1ZXJ5SW5wdXREaXJlY3RpdmU+O1xyXG4gIEBJbnB1dCgpIHBhcmVudE9wZXJhdG9yVGVtcGxhdGU6IFF1ZXJ5T3BlcmF0b3JEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcGFyZW50RmllbGRUZW1wbGF0ZTogUXVlcnlGaWVsZERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRFbnRpdHlUZW1wbGF0ZTogUXVlcnlFbnRpdHlEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcGFyZW50U3dpdGNoR3JvdXBUZW1wbGF0ZTogUXVlcnlTd2l0Y2hHcm91cERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRCdXR0b25Hcm91cFRlbXBsYXRlOiBRdWVyeUJ1dHRvbkdyb3VwRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHBhcmVudFJlbW92ZUJ1dHRvblRlbXBsYXRlOiBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBwYXJlbnRFbXB0eVdhcm5pbmdUZW1wbGF0ZTogUXVlcnlFbXB0eVdhcm5pbmdEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgcGFyZW50Q2hhbmdlQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgcGFyZW50VG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIHBlcnNpc3RWYWx1ZU9uRmllbGRDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndHJlZUNvbnRhaW5lcicsIHtzdGF0aWM6IHRydWV9KSB0cmVlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkKFF1ZXJ5QnV0dG9uR3JvdXBEaXJlY3RpdmUpIGJ1dHRvbkdyb3VwVGVtcGxhdGU6IFF1ZXJ5QnV0dG9uR3JvdXBEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChRdWVyeVN3aXRjaEdyb3VwRGlyZWN0aXZlKSBzd2l0Y2hHcm91cFRlbXBsYXRlOiBRdWVyeVN3aXRjaEdyb3VwRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoUXVlcnlGaWVsZERpcmVjdGl2ZSkgZmllbGRUZW1wbGF0ZTogUXVlcnlGaWVsZERpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKFF1ZXJ5RW50aXR5RGlyZWN0aXZlKSBlbnRpdHlUZW1wbGF0ZTogUXVlcnlFbnRpdHlEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChRdWVyeU9wZXJhdG9yRGlyZWN0aXZlKSBvcGVyYXRvclRlbXBsYXRlOiBRdWVyeU9wZXJhdG9yRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoUXVlcnlSZW1vdmVCdXR0b25EaXJlY3RpdmUpIHJlbW92ZUJ1dHRvblRlbXBsYXRlOiBRdWVyeVJlbW92ZUJ1dHRvbkRpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKFF1ZXJ5RW1wdHlXYXJuaW5nRGlyZWN0aXZlKSBlbXB0eVdhcm5pbmdUZW1wbGF0ZTogUXVlcnlFbXB0eVdhcm5pbmdEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihRdWVyeUlucHV0RGlyZWN0aXZlKSBpbnB1dFRlbXBsYXRlczogUXVlcnlMaXN0PFF1ZXJ5SW5wdXREaXJlY3RpdmU+O1xyXG4gIEBDb250ZW50Q2hpbGQoUXVlcnlBcnJvd0ljb25EaXJlY3RpdmUpIGFycm93SWNvblRlbXBsYXRlOiBRdWVyeUFycm93SWNvbkRpcmVjdGl2ZTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBbXHJcbiAgICAnc3RyaW5nJywgJ251bWJlcicsICd0aW1lJywgJ2RhdGUnLCAnY2F0ZWdvcnknLCAnYm9vbGVhbicsICdtdWx0aXNlbGVjdCddO1xyXG4gIHByaXZhdGUgZGVmYXVsdFBlcnNpc3RWYWx1ZVR5cGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICdzdHJpbmcnLCAnbnVtYmVyJywgJ3RpbWUnLCAnZGF0ZScsICdib29sZWFuJ107XHJcbiAgcHJpdmF0ZSBkZWZhdWx0RW1wdHlMaXN0OiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgb3BlcmF0b3JzQ2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcclxuICBwcml2YXRlIGlucHV0Q29udGV4dENhY2hlID0gbmV3IE1hcDxSdWxlLCBJbnB1dENvbnRleHQ+KCk7XHJcbiAgcHJpdmF0ZSBvcGVyYXRvckNvbnRleHRDYWNoZSA9IG5ldyBNYXA8UnVsZSwgT3BlcmF0b3JDb250ZXh0PigpO1xyXG4gIHByaXZhdGUgZmllbGRDb250ZXh0Q2FjaGUgPSBuZXcgTWFwPFJ1bGUsIEZpZWxkQ29udGV4dD4oKTtcclxuICBwcml2YXRlIGVudGl0eUNvbnRleHRDYWNoZSA9IG5ldyBNYXA8UnVsZSwgRW50aXR5Q29udGV4dD4oKTtcclxuICBwcml2YXRlIHJlbW92ZUJ1dHRvbkNvbnRleHRDYWNoZSA9IG5ldyBNYXA8UnVsZSwgUmVtb3ZlQnV0dG9uQ29udGV4dD4oKTtcclxuICBwcml2YXRlIGJ1dHRvbkdyb3VwQ29udGV4dDogQnV0dG9uR3JvdXBDb250ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS1PbkluaXQgSW1wbGVtZW50YXRpb24tLS0tLS0tLS0tXHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS1PbkNoYW5nZXMgSW1wbGVtZW50YXRpb24tLS0tLS0tLS0tXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjb25maWc7XHJcbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdGhpcy5maWVsZHMgPSBPYmplY3Qua2V5cyhjb25maWcuZmllbGRzKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBjb25maWcuZmllbGRzW3ZhbHVlXTtcclxuICAgICAgICBmaWVsZC52YWx1ZSA9IGZpZWxkLnZhbHVlIHx8IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChjb25maWcuZW50aXRpZXMpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gT2JqZWN0LmtleXMoY29uZmlnLmVudGl0aWVzKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRpdHkgPSBjb25maWcuZW50aXRpZXNbdmFsdWVdO1xyXG4gICAgICAgICAgZW50aXR5LnZhbHVlID0gZW50aXR5LnZhbHVlIHx8IHZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9wZXJhdG9yc0NhY2hlID0ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICdjb25maWcnIG11c3QgYmUgYSB2YWxpZCBvYmplY3QsIGdvdCAke3R5cGV9IGluc3RlYWQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tVmFsaWRhdG9yIEltcGxlbWVudGF0aW9uLS0tLS0tLS0tLVxyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGNvbnN0IHJ1bGVFcnJvclN0b3JlID0gW107XHJcbiAgICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hbGxvd0VtcHR5UnVsZXNldHMgJiYgdGhpcy5jaGVja0VtcHR5UnVsZUluUnVsZXNldCh0aGlzLmRhdGEpKSB7XHJcbiAgICAgIGVycm9ycy5lbXB0eSA9ICdFbXB0eSBydWxlc2V0cyBhcmUgbm90IGFsbG93ZWQuJztcclxuICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlUnVsZXNJblJ1bGVzZXQodGhpcy5kYXRhLCBydWxlRXJyb3JTdG9yZSk7XHJcblxyXG4gICAgaWYgKHJ1bGVFcnJvclN0b3JlLmxlbmd0aCkge1xyXG4gICAgICBlcnJvcnMucnVsZXMgPSBydWxlRXJyb3JTdG9yZTtcclxuICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNFcnJvcnMgPyBlcnJvcnMgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLUNvbnRyb2xWYWx1ZUFjY2Vzc29yIEltcGxlbWVudGF0aW9uLS0tLS0tLS0tLVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBSdWxlU2V0IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogUnVsZVNldCkge1xyXG4gICAgLy8gV2hlbiBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQgd2l0aG91dCBhIGZvcm1Db250cm9sLCBudWxsIGlzIHBhc3NlZCB0byB2YWx1ZVxyXG4gICAgdGhpcy5kYXRhID0gdmFsdWUgfHwgeyBjb25kaXRpb246ICdhbmQnLCBydWxlczogW10gfTtcclxuICAgIHRoaXMuaGFuZGxlRGF0YUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSAoKSA9PiBmbih0aGlzLmRhdGEpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4gZm4odGhpcy5kYXRhKTtcclxuICB9XHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLUVORC0tLS0tLS0tLS1cclxuXHJcbiAgZ2V0RGlzYWJsZWRTdGF0ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgZmluZFRlbXBsYXRlRm9yUnVsZShydWxlOiBSdWxlKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRJbnB1dFR5cGUocnVsZS5maWVsZCwgcnVsZS5vcGVyYXRvcik7XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICBjb25zdCBxdWVyeUlucHV0ID0gdGhpcy5maW5kUXVlcnlJbnB1dCh0eXBlKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gcXVlcnlJbnB1dC50ZW1wbGF0ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VGVtcGxhdGVUeXBlcy5pbmRleE9mKHR5cGUpID09PSAtMSkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCB0ZW1wbGF0ZSBmb3IgZmllbGQgd2l0aCB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kUXVlcnlJbnB1dCh0eXBlOiBzdHJpbmcpOiBRdWVyeUlucHV0RGlyZWN0aXZlIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRoaXMucGFyZW50SW5wdXRUZW1wbGF0ZXMgfHwgdGhpcy5pbnB1dFRlbXBsYXRlcztcclxuICAgIHJldHVybiB0ZW1wbGF0ZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5xdWVyeUlucHV0VHlwZSA9PT0gdHlwZSk7XHJcbiAgfVxyXG5cclxuICBnZXRPcGVyYXRvcnMoZmllbGQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGlmICh0aGlzLm9wZXJhdG9yc0NhY2hlW2ZpZWxkXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcnNDYWNoZVtmaWVsZF07XHJcbiAgICB9XHJcbiAgICBsZXQgb3BlcmF0b3JzID0gdGhpcy5kZWZhdWx0RW1wdHlMaXN0O1xyXG4gICAgY29uc3QgZmllbGRPYmplY3QgPSB0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRdO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5nZXRPcGVyYXRvcnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldE9wZXJhdG9ycyhmaWVsZCwgZmllbGRPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR5cGUgPSBmaWVsZE9iamVjdC50eXBlO1xyXG5cclxuICAgIGlmIChmaWVsZE9iamVjdCAmJiBmaWVsZE9iamVjdC5vcGVyYXRvcnMpIHtcclxuICAgICAgb3BlcmF0b3JzID0gZmllbGRPYmplY3Qub3BlcmF0b3JzO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlKSB7XHJcbiAgICAgIG9wZXJhdG9ycyA9ICh0aGlzLm9wZXJhdG9yTWFwICYmIHRoaXMub3BlcmF0b3JNYXBbdHlwZV0pIHx8IHRoaXMuZGVmYXVsdE9wZXJhdG9yTWFwW3R5cGVdIHx8IHRoaXMuZGVmYXVsdEVtcHR5TGlzdDtcclxuICAgICAgaWYgKG9wZXJhdG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBgTm8gb3BlcmF0b3JzIGZvdW5kIGZvciBmaWVsZCAnJHtmaWVsZH0nIHdpdGggdHlwZSAke2ZpZWxkT2JqZWN0LnR5cGV9LiBgICtcclxuICAgICAgICAgIGBQbGVhc2UgZGVmaW5lIGFuICdvcGVyYXRvcnMnIHByb3BlcnR5IG9uIHRoZSBmaWVsZCBvciB1c2UgdGhlICdvcGVyYXRvck1hcCcgYmluZGluZyB0byBmaXggdGhpcy5gKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmllbGRPYmplY3QubnVsbGFibGUpIHtcclxuICAgICAgICBvcGVyYXRvcnMgPSBvcGVyYXRvcnMuY29uY2F0KFsnaXMgbnVsbCcsICdpcyBub3QgbnVsbCddKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKGBObyAndHlwZScgcHJvcGVydHkgZm91bmQgb24gZmllbGQ6ICcke2ZpZWxkfSdgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWNoZSByZWZlcmVuY2UgdG8gYXJyYXkgb2JqZWN0LCBzbyBpdCB3b24ndCBiZSBjb21wdXRlZCBuZXh0IHRpbWUgYW5kIHRyaWdnZXIgYSByZXJlbmRlci5cclxuICAgIHRoaXMub3BlcmF0b3JzQ2FjaGVbZmllbGRdID0gb3BlcmF0b3JzO1xyXG4gICAgcmV0dXJuIG9wZXJhdG9ycztcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcyhlbnRpdHk6IHN0cmluZyk6IEZpZWxkW10ge1xyXG4gICAgaWYgKHRoaXMuZW50aXRpZXMgJiYgZW50aXR5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkICYmIGZpZWxkLmVudGl0eSA9PT0gZW50aXR5O1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElucHV0VHlwZShmaWVsZDogc3RyaW5nLCBvcGVyYXRvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5nZXRJbnB1dFR5cGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldElucHV0VHlwZShmaWVsZCwgb3BlcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbmZpZ3VyYXRpb24gZm9yIGZpZWxkICcke2ZpZWxkfScgY291bGQgYmUgZm91bmQhIFBsZWFzZSBhZGQgaXQgdG8gY29uZmlnLmZpZWxkcy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkXS50eXBlO1xyXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xyXG4gICAgICBjYXNlICdpcyBudWxsJzpcclxuICAgICAgY2FzZSAnaXMgbm90IG51bGwnOlxyXG4gICAgICAgIHJldHVybiBudWxsOyAgLy8gTm8gZGlzcGxheWVkIGNvbXBvbmVudFxyXG4gICAgICBjYXNlICdpbic6XHJcbiAgICAgIGNhc2UgJ25vdCBpbic6XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdjYXRlZ29yeScgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nID8gJ211bHRpc2VsZWN0JyA6IHR5cGU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25zKGZpZWxkOiBzdHJpbmcpOiBPcHRpb25bXSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcuZ2V0T3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0T3B0aW9ucyhmaWVsZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkXS5vcHRpb25zIHx8IHRoaXMuZGVmYXVsdEVtcHR5TGlzdDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzTmFtZXMoLi4uYXJncyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjbHNMb29rdXAgPSB0aGlzLmNsYXNzTmFtZXMgPyB0aGlzLmNsYXNzTmFtZXMgOiB0aGlzLmRlZmF1bHRDbGFzc05hbWVzO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGFyZ3MubWFwKChpZCkgPT4gY2xzTG9va3VwW2lkXSB8fCB0aGlzLmRlZmF1bHRDbGFzc05hbWVzW2lkXSkuZmlsdGVyKChjKSA9PiAhIWMpO1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMubGVuZ3RoID8gY2xhc3NOYW1lcy5qb2luKCcgJykgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdEZpZWxkKGVudGl0eTogRW50aXR5KTogRmllbGQge1xyXG4gICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVudGl0eS5kZWZhdWx0RmllbGQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0VmFsdWUoZW50aXR5LmRlZmF1bHRGaWVsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbnRpdHlGaWVsZHMgPSB0aGlzLmZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkICYmIGZpZWxkLmVudGl0eSA9PT0gZW50aXR5LnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGVudGl0eUZpZWxkcyAmJiBlbnRpdHlGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eUZpZWxkc1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYE5vIGZpZWxkcyBmb3VuZCBmb3IgZW50aXR5ICcke2VudGl0eS5uYW1lfScuIGAgK1xyXG4gICAgICAgICAgYEEgJ2RlZmF1bHRPcGVyYXRvcicgaXMgYWxzbyBub3Qgc3BlY2lmaWVkIG9uIHRoZSBmaWVsZCBjb25maWcuIE9wZXJhdG9yIHZhbHVlIHdpbGwgZGVmYXVsdCB0byBudWxsLmApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0T3BlcmF0b3IoZmllbGQ6IEZpZWxkKTogc3RyaW5nIHtcclxuICAgIGlmIChmaWVsZCAmJiBmaWVsZC5kZWZhdWx0T3BlcmF0b3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0VmFsdWUoZmllbGQuZGVmYXVsdE9wZXJhdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9wZXJhdG9ycyA9IHRoaXMuZ2V0T3BlcmF0b3JzKGZpZWxkLnZhbHVlKTtcclxuICAgICAgaWYgKG9wZXJhdG9ycyAmJiBvcGVyYXRvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yc1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYE5vIG9wZXJhdG9ycyBmb3VuZCBmb3IgZmllbGQgJyR7ZmllbGQudmFsdWV9Jy4gYCArXHJcbiAgICAgICAgICBgQSAnZGVmYXVsdE9wZXJhdG9yJyBpcyBhbHNvIG5vdCBzcGVjaWZpZWQgb24gdGhlIGZpZWxkIGNvbmZpZy4gT3BlcmF0b3IgdmFsdWUgd2lsbCBkZWZhdWx0IHRvIG51bGwuYCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJ1bGUocGFyZW50PzogUnVsZVNldCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudCA9IHBhcmVudCB8fCB0aGlzLmRhdGE7XHJcbiAgICBpZiAodGhpcy5jb25maWcuYWRkUnVsZSkge1xyXG4gICAgICB0aGlzLmNvbmZpZy5hZGRSdWxlKHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzWzBdO1xyXG4gICAgICBwYXJlbnQucnVsZXMgPSBwYXJlbnQucnVsZXMuY29uY2F0KFt7XHJcbiAgICAgICAgZmllbGQ6IGZpZWxkLnZhbHVlLFxyXG4gICAgICAgIG9wZXJhdG9yOiB0aGlzLmdldERlZmF1bHRPcGVyYXRvcihmaWVsZCksXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKGZpZWxkLmRlZmF1bHRWYWx1ZSksXHJcbiAgICAgICAgZW50aXR5OiBmaWVsZC5lbnRpdHlcclxuICAgICAgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVSdWxlKHJ1bGU6IFJ1bGUsIHBhcmVudD86IFJ1bGVTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgdGhpcy5kYXRhO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnJlbW92ZVJ1bGUpIHtcclxuICAgICAgdGhpcy5jb25maWcucmVtb3ZlUnVsZShydWxlLCBwYXJlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyZW50LnJ1bGVzID0gcGFyZW50LnJ1bGVzLmZpbHRlcigocikgPT4gciAhPT0gcnVsZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Q29udGV4dENhY2hlLmRlbGV0ZShydWxlKTtcclxuICAgIHRoaXMub3BlcmF0b3JDb250ZXh0Q2FjaGUuZGVsZXRlKHJ1bGUpO1xyXG4gICAgdGhpcy5maWVsZENvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcbiAgICB0aGlzLmVudGl0eUNvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbkNvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGFkZFJ1bGVTZXQocGFyZW50PzogUnVsZVNldCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudCA9IHBhcmVudCB8fCB0aGlzLmRhdGE7XHJcbiAgICBpZiAodGhpcy5jb25maWcuYWRkUnVsZVNldCkge1xyXG4gICAgICB0aGlzLmNvbmZpZy5hZGRSdWxlU2V0KHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnQucnVsZXMgPSBwYXJlbnQucnVsZXMuY29uY2F0KFt7IGNvbmRpdGlvbjogJ2FuZCcsIHJ1bGVzOiBbXSB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVJ1bGVTZXQocnVsZXNldD86IFJ1bGVTZXQsIHBhcmVudD86IFJ1bGVTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBydWxlc2V0ID0gcnVsZXNldCB8fCB0aGlzLmRhdGE7XHJcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgdGhpcy5wYXJlbnRWYWx1ZTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5yZW1vdmVSdWxlU2V0KSB7XHJcbiAgICAgIHRoaXMuY29uZmlnLnJlbW92ZVJ1bGVTZXQocnVsZXNldCwgcGFyZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudC5ydWxlcyA9IHBhcmVudC5ydWxlcy5maWx0ZXIoKHIpID0+IHIgIT09IHJ1bGVzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2l0aW9uRW5kKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRyZWVDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbXB1dGVkVHJlZUNvbnRhaW5lckhlaWdodCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YS5jb2xsYXBzZWQgPSAhdGhpcy5kYXRhLmNvbGxhcHNlZDtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlZFRyZWVDb250YWluZXJIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMudHJlZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQgJiYgbmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICBuYXRpdmVFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IChuYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCArIDgpICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZUNvbmRpdGlvbih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRhLmNvbmRpdGlvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU9wZXJhdG9yKHJ1bGU6IFJ1bGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcuY29lcmNlVmFsdWVGb3JPcGVyYXRvcikge1xyXG4gICAgICBydWxlLnZhbHVlID0gdGhpcy5jb25maWcuY29lcmNlVmFsdWVGb3JPcGVyYXRvcihydWxlLm9wZXJhdG9yLCBydWxlLnZhbHVlLCBydWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJ1bGUudmFsdWUgPSB0aGlzLmNvZXJjZVZhbHVlRm9yT3BlcmF0b3IocnVsZS5vcGVyYXRvciwgcnVsZS52YWx1ZSwgcnVsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNvZXJjZVZhbHVlRm9yT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGFueSB7XHJcbiAgICBjb25zdCBpbnB1dFR5cGU6IHN0cmluZyA9IHRoaXMuZ2V0SW5wdXRUeXBlKHJ1bGUuZmllbGQsIG9wZXJhdG9yKTtcclxuICAgIGlmIChpbnB1dFR5cGUgPT09ICdtdWx0aXNlbGVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBbdmFsdWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSW5wdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmhhbmRsZURhdGFDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZpZWxkKGZpZWxkVmFsdWU6IHN0cmluZywgcnVsZTogUnVsZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlucHV0Q29udGV4dCA9IHRoaXMuaW5wdXRDb250ZXh0Q2FjaGUuZ2V0KHJ1bGUpO1xyXG4gICAgY29uc3QgY3VycmVudEZpZWxkID0gaW5wdXRDb250ZXh0ICYmIGlucHV0Q29udGV4dC5maWVsZDtcclxuXHJcbiAgICBjb25zdCBuZXh0RmllbGQ6IEZpZWxkID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkVmFsdWVdO1xyXG5cclxuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuY2FsY3VsYXRlRmllbGRDaGFuZ2VWYWx1ZShcclxuICAgICAgY3VycmVudEZpZWxkLCBuZXh0RmllbGQsIHJ1bGUudmFsdWUpO1xyXG5cclxuICAgIGlmIChuZXh0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBydWxlLnZhbHVlID0gbmV4dFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHJ1bGUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcnVsZS5vcGVyYXRvciA9IHRoaXMuZ2V0RGVmYXVsdE9wZXJhdG9yKG5leHRGaWVsZCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIG5ldyBjb250ZXh0IG9iamVjdHMgc28gdGVtcGxhdGVzIHdpbGwgYXV0b21hdGljYWxseSB1cGRhdGVcclxuICAgIHRoaXMuaW5wdXRDb250ZXh0Q2FjaGUuZGVsZXRlKHJ1bGUpO1xyXG4gICAgdGhpcy5vcGVyYXRvckNvbnRleHRDYWNoZS5kZWxldGUocnVsZSk7XHJcbiAgICB0aGlzLmZpZWxkQ29udGV4dENhY2hlLmRlbGV0ZShydWxlKTtcclxuICAgIHRoaXMuZW50aXR5Q29udGV4dENhY2hlLmRlbGV0ZShydWxlKTtcclxuICAgIHRoaXMuZ2V0SW5wdXRDb250ZXh0KHJ1bGUpO1xyXG4gICAgdGhpcy5nZXRGaWVsZENvbnRleHQocnVsZSk7XHJcbiAgICB0aGlzLmdldE9wZXJhdG9yQ29udGV4dChydWxlKTtcclxuICAgIHRoaXMuZ2V0RW50aXR5Q29udGV4dChydWxlKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZVRvdWNoZWQoKTtcclxuICAgIHRoaXMuaGFuZGxlRGF0YUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRW50aXR5KGVudGl0eVZhbHVlOiBzdHJpbmcsIHJ1bGU6IFJ1bGUsIGluZGV4OiBudW1iZXIsIGRhdGE6IFJ1bGVTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBpID0gaW5kZXg7XHJcbiAgICBsZXQgcnMgPSBkYXRhO1xyXG4gICAgY29uc3QgZW50aXR5OiBFbnRpdHkgPSB0aGlzLmVudGl0aWVzLmZpbmQoKGUpID0+IGUudmFsdWUgPT09IGVudGl0eVZhbHVlKTtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWVsZDogRmllbGQgPSB0aGlzLmdldERlZmF1bHRGaWVsZChlbnRpdHkpO1xyXG4gICAgaWYgKCFycykge1xyXG4gICAgICBycyA9IHRoaXMuZGF0YTtcclxuICAgICAgaSA9IHJzLnJ1bGVzLmZpbmRJbmRleCgoeCkgPT4geCA9PT0gcnVsZSk7XHJcbiAgICB9XHJcbiAgICBydWxlLmZpZWxkID0gZGVmYXVsdEZpZWxkLnZhbHVlO1xyXG4gICAgcnMucnVsZXNbaV0gPSBydWxlO1xyXG4gICAgaWYgKGRlZmF1bHRGaWVsZCkge1xyXG4gICAgICB0aGlzLmNoYW5nZUZpZWxkKGRlZmF1bHRGaWVsZC52YWx1ZSwgcnVsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVRvdWNoZWQoKTtcclxuICAgICAgdGhpcy5oYW5kbGVEYXRhQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgc3dpdGNoICh0eXBlb2YgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlKCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9wZXJhdG9yVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0ID0gdGhpcy5wYXJlbnRPcGVyYXRvclRlbXBsYXRlIHx8IHRoaXMub3BlcmF0b3JUZW1wbGF0ZTtcclxuICAgIHJldHVybiB0ID8gdC50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50RmllbGRUZW1wbGF0ZSB8fCB0aGlzLmZpZWxkVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdCA/IHQudGVtcGxhdGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW50aXR5VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICBjb25zdCB0ID0gdGhpcy5wYXJlbnRFbnRpdHlUZW1wbGF0ZSB8fCB0aGlzLmVudGl0eVRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIHQgPyB0LnRlbXBsYXRlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldEFycm93SWNvblRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50QXJyb3dJY29uVGVtcGxhdGUgfHwgdGhpcy5hcnJvd0ljb25UZW1wbGF0ZTtcclxuICAgIHJldHVybiB0ID8gdC50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRCdXR0b25Hcm91cFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50QnV0dG9uR3JvdXBUZW1wbGF0ZSB8fCB0aGlzLmJ1dHRvbkdyb3VwVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdCA/IHQudGVtcGxhdGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3dpdGNoR3JvdXBUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIGNvbnN0IHQgPSB0aGlzLnBhcmVudFN3aXRjaEdyb3VwVGVtcGxhdGUgfHwgdGhpcy5zd2l0Y2hHcm91cFRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIHQgPyB0LnRlbXBsYXRlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFJlbW92ZUJ1dHRvblRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgY29uc3QgdCA9IHRoaXMucGFyZW50UmVtb3ZlQnV0dG9uVGVtcGxhdGUgfHwgdGhpcy5yZW1vdmVCdXR0b25UZW1wbGF0ZTtcclxuICAgIHJldHVybiB0ID8gdC50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRFbXB0eVdhcm5pbmdUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIGNvbnN0IHQgPSB0aGlzLnBhcmVudEVtcHR5V2FybmluZ1RlbXBsYXRlIHx8IHRoaXMuZW1wdHlXYXJuaW5nVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdCA/IHQudGVtcGxhdGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlcnlJdGVtQ2xhc3NOYW1lKGxvY2FsOiBMb2NhbFJ1bGVNZXRhKTogc3RyaW5nIHtcclxuICAgIGxldCBjbHMgPSB0aGlzLmdldENsYXNzTmFtZXMoJ3JvdycsICdjb25uZWN0b3InLCAndHJhbnNpdGlvbicpO1xyXG4gICAgY2xzICs9ICcgJyArIHRoaXMuZ2V0Q2xhc3NOYW1lcyhsb2NhbC5ydWxlc2V0ID8gJ3J1bGVTZXQnIDogJ3J1bGUnKTtcclxuICAgIGlmIChsb2NhbC5pbnZhbGlkKSB7XHJcbiAgICAgIGNscyArPSAnICcgKyB0aGlzLmdldENsYXNzTmFtZXMoJ2ludmFsaWRSdWxlU2V0Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnV0dG9uR3JvdXBDb250ZXh0KCk6IEJ1dHRvbkdyb3VwQ29udGV4dCB7XHJcbiAgICBpZiAoIXRoaXMuYnV0dG9uR3JvdXBDb250ZXh0KSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uR3JvdXBDb250ZXh0ID0ge1xyXG4gICAgICAgIGFkZFJ1bGU6IHRoaXMuYWRkUnVsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGFkZFJ1bGVTZXQ6IHRoaXMuYWxsb3dSdWxlc2V0ICYmIHRoaXMuYWRkUnVsZVNldC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJlbW92ZVJ1bGVTZXQ6IHRoaXMuYWxsb3dSdWxlc2V0ICYmIHRoaXMucGFyZW50VmFsdWUgJiYgdGhpcy5yZW1vdmVSdWxlU2V0LmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgICRpbXBsaWNpdDogdGhpcy5kYXRhXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5idXR0b25Hcm91cENvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBnZXRSZW1vdmVCdXR0b25Db250ZXh0KHJ1bGU6IFJ1bGUpOiBSZW1vdmVCdXR0b25Db250ZXh0IHtcclxuICAgIGlmICghdGhpcy5yZW1vdmVCdXR0b25Db250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQnV0dG9uQ29udGV4dENhY2hlLnNldChydWxlLCB7XHJcbiAgICAgICAgcmVtb3ZlUnVsZTogdGhpcy5yZW1vdmVSdWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlbW92ZUJ1dHRvbkNvbnRleHRDYWNoZS5nZXQocnVsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZENvbnRleHQocnVsZTogUnVsZSk6IEZpZWxkQ29udGV4dCB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGRDb250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMuZmllbGRDb250ZXh0Q2FjaGUuc2V0KHJ1bGUsIHtcclxuICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2VGaWVsZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGdldEZpZWxkczogdGhpcy5nZXRGaWVsZHMuYmluZCh0aGlzKSxcclxuICAgICAgICBnZXREaXNhYmxlZFN0YXRlOiB0aGlzLmdldERpc2FibGVkU3RhdGUsXHJcbiAgICAgICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcclxuICAgICAgICAkaW1wbGljaXQ6IHJ1bGVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZENvbnRleHRDYWNoZS5nZXQocnVsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbnRpdHlDb250ZXh0KHJ1bGU6IFJ1bGUpOiBFbnRpdHlDb250ZXh0IHtcclxuICAgIGlmICghdGhpcy5lbnRpdHlDb250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMuZW50aXR5Q29udGV4dENhY2hlLnNldChydWxlLCB7XHJcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuY2hhbmdlRW50aXR5LmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgIGVudGl0aWVzOiB0aGlzLmVudGl0aWVzLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmVudGl0eUNvbnRleHRDYWNoZS5nZXQocnVsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTd2l0Y2hHcm91cENvbnRleHQoKTogU3dpdGNoR3JvdXBDb250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUNvbmRpdGlvbi5iaW5kKHRoaXMpLFxyXG4gICAgICBnZXREaXNhYmxlZFN0YXRlOiB0aGlzLmdldERpc2FibGVkU3RhdGUsXHJcbiAgICAgICRpbXBsaWNpdDogdGhpcy5kYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyb3dJY29uQ29udGV4dCgpOiBBcnJvd0ljb25Db250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldERpc2FibGVkU3RhdGU6IHRoaXMuZ2V0RGlzYWJsZWRTdGF0ZSxcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLmRhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRFbXB0eVdhcm5pbmdDb250ZXh0KCk6IEVtcHR5V2FybmluZ0NvbnRleHQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICBtZXNzYWdlOiB0aGlzLmVtcHR5TWVzc2FnZSxcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLmRhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRPcGVyYXRvckNvbnRleHQocnVsZTogUnVsZSk6IE9wZXJhdG9yQ29udGV4dCB7XHJcbiAgICBpZiAoIXRoaXMub3BlcmF0b3JDb250ZXh0Q2FjaGUuaGFzKHJ1bGUpKSB7XHJcbiAgICAgIHRoaXMub3BlcmF0b3JDb250ZXh0Q2FjaGUuc2V0KHJ1bGUsIHtcclxuICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2VPcGVyYXRvci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGdldERpc2FibGVkU3RhdGU6IHRoaXMuZ2V0RGlzYWJsZWRTdGF0ZSxcclxuICAgICAgICBvcGVyYXRvcnM6IHRoaXMuZ2V0T3BlcmF0b3JzKHJ1bGUuZmllbGQpLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm9wZXJhdG9yQ29udGV4dENhY2hlLmdldChydWxlKTtcclxuICB9XHJcblxyXG4gIGdldElucHV0Q29udGV4dChydWxlOiBSdWxlKTogSW5wdXRDb250ZXh0IHtcclxuICAgIGlmICghdGhpcy5pbnB1dENvbnRleHRDYWNoZS5oYXMocnVsZSkpIHtcclxuICAgICAgdGhpcy5pbnB1dENvbnRleHRDYWNoZS5zZXQocnVsZSwge1xyXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgZ2V0RGlzYWJsZWRTdGF0ZTogdGhpcy5nZXREaXNhYmxlZFN0YXRlLFxyXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuZ2V0T3B0aW9ucyhydWxlLmZpZWxkKSxcclxuICAgICAgICBmaWVsZDogdGhpcy5jb25maWcuZmllbGRzW3J1bGUuZmllbGRdLFxyXG4gICAgICAgICRpbXBsaWNpdDogcnVsZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlucHV0Q29udGV4dENhY2hlLmdldChydWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlRmllbGRDaGFuZ2VWYWx1ZShcclxuICAgIGN1cnJlbnRGaWVsZDogRmllbGQsXHJcbiAgICBuZXh0RmllbGQ6IEZpZWxkLFxyXG4gICAgY3VycmVudFZhbHVlOiBhbnlcclxuICApOiBhbnkge1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5jYWxjdWxhdGVGaWVsZENoYW5nZVZhbHVlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNhbGN1bGF0ZUZpZWxkQ2hhbmdlVmFsdWUoXHJcbiAgICAgICAgY3VycmVudEZpZWxkLCBuZXh0RmllbGQsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FuS2VlcFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudEZpZWxkID09IG51bGwgfHwgbmV4dEZpZWxkID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnRGaWVsZC50eXBlID09PSBuZXh0RmllbGQudHlwZVxyXG4gICAgICAgICYmIHRoaXMuZGVmYXVsdFBlcnNpc3RWYWx1ZVR5cGVzLmluZGV4T2YoY3VycmVudEZpZWxkLnR5cGUpICE9PSAtMTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucGVyc2lzdFZhbHVlT25GaWVsZENoYW5nZSAmJiBjYW5LZWVwVmFsdWUoKSkge1xyXG4gICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0RmllbGQgJiYgbmV4dEZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRWYWx1ZShuZXh0RmllbGQuZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0VtcHR5UnVsZUluUnVsZXNldChydWxlc2V0OiBSdWxlU2V0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXJ1bGVzZXQgfHwgIXJ1bGVzZXQucnVsZXMgfHwgcnVsZXNldC5ydWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcnVsZXNldC5ydWxlcy5zb21lKChpdGVtOiBSdWxlU2V0KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucnVsZXMpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrRW1wdHlSdWxlSW5SdWxlc2V0KGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVSdWxlc0luUnVsZXNldChydWxlc2V0OiBSdWxlU2V0LCBlcnJvclN0b3JlOiBhbnlbXSkge1xyXG4gICAgaWYgKHJ1bGVzZXQgJiYgcnVsZXNldC5ydWxlcyAmJiBydWxlc2V0LnJ1bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcnVsZXNldC5ydWxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKChpdGVtIGFzIFJ1bGVTZXQpLnJ1bGVzKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVJ1bGVzSW5SdWxlc2V0KGl0ZW0gYXMgUnVsZVNldCwgZXJyb3JTdG9yZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoaXRlbSBhcyBSdWxlKS5maWVsZCkge1xyXG4gICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZy5maWVsZHNbKGl0ZW0gYXMgUnVsZSkuZmllbGRdO1xyXG4gICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLnZhbGlkYXRvciAmJiBmaWVsZC52YWxpZGF0b3IuYXBwbHkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBmaWVsZC52YWxpZGF0b3IoaXRlbSBhcyBSdWxlLCBydWxlc2V0KTtcclxuICAgICAgICAgICAgaWYgKGVycm9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBlcnJvclN0b3JlLnB1c2goZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRGF0YUNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyZW50Q2hhbmdlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5wYXJlbnRDaGFuZ2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVUb3VjaGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25Ub3VjaGVkQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGFyZW50VG91Y2hlZENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMucGFyZW50VG91Y2hlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnc3dpdGNoUm93JylcIj5cclxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRBcnJvd0ljb24+XHJcbiAgICA8aSBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdhcnJvd0ljb24nKVwiPjwvaT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8YSAqbmdJZj1cImFsbG93Q29sbGFwc2VcIiAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2UoKVwiIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2Fycm93SWNvbkJ1dHRvbicsIGRhdGEuY29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiBudWxsKVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldEFycm93SWNvblRlbXBsYXRlKCkgYXMgdGVtcGxhdGU7IGVsc2UgZGVmYXVsdEFycm93SWNvblwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IGdldEFycm93SWNvbkNvbnRleHQoKVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9hPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0QnV0dG9uR3JvdXBUZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRCdXR0b25Hcm91cFwiPlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b25Hcm91cCcsICdyaWdodEFsaWduJylcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRCdXR0b25Hcm91cENvbnRleHQoKVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEJ1dHRvbkdyb3VwPlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b25Hcm91cCcsICdyaWdodEFsaWduJylcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZFJ1bGUoKVwiIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2J1dHRvbicpXCIgW2Rpc2FibGVkXT1kaXNhYmxlZD5cclxuICAgICAgICA8aSBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdhZGRJY29uJylcIj48L2k+IFJ1bGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRSdWxlU2V0KClcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b24nKVwiICpuZ0lmPVwiYWxsb3dSdWxlc2V0XCIgW2Rpc2FibGVkXT1kaXNhYmxlZD5cclxuICAgICAgICA8aSBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdhZGRJY29uJylcIj48L2k+IFJ1bGVzZXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhIXBhcmVudFZhbHVlICYmIGFsbG93UnVsZXNldFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmVSdWxlU2V0KClcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdidXR0b24nLCAncmVtb3ZlQnV0dG9uJylcIiBbZGlzYWJsZWRdPWRpc2FibGVkPlxyXG4gICAgICAgICAgPGkgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygncmVtb3ZlSWNvbicpXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRTd2l0Y2hHcm91cFRlbXBsYXRlKCkgYXMgdGVtcGxhdGU7IGVsc2UgZGVmYXVsdFN3aXRjaEdyb3VwXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IGdldFN3aXRjaEdyb3VwQ29udGV4dCgpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFN3aXRjaEdyb3VwPlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hHcm91cCcsICd0cmFuc2l0aW9uJylcIiAqbmdJZj1cImRhdGFcIj5cclxuICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hDb250cm9sJylcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnc3dpdGNoUmFkaW8nKVwiIFsobmdNb2RlbCldPVwiZGF0YS5jb25kaXRpb25cIiBbZGlzYWJsZWRdPWRpc2FibGVkXHJcbiAgICAgICAgICB2YWx1ZT1cImFuZFwiICNhbmRPcHRpb24gLz5cclxuICAgICAgICA8bGFiZWwgKGNsaWNrKT1cImNoYW5nZUNvbmRpdGlvbihhbmRPcHRpb24udmFsdWUpXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnc3dpdGNoTGFiZWwnKVwiPkFORDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ3N3aXRjaENvbnRyb2wnKVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hSYWRpbycpXCIgWyhuZ01vZGVsKV09XCJkYXRhLmNvbmRpdGlvblwiIFtkaXNhYmxlZF09ZGlzYWJsZWRcclxuICAgICAgICAgIHZhbHVlPVwib3JcIiAjb3JPcHRpb24gLz5cclxuICAgICAgICA8bGFiZWwgKGNsaWNrKT1cImNoYW5nZUNvbmRpdGlvbihvck9wdGlvbi52YWx1ZSlcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdzd2l0Y2hMYWJlbCcpXCI+T1I8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiAjdHJlZUNvbnRhaW5lciAodHJhbnNpdGlvbmVuZCk9XCJ0cmFuc2l0aW9uRW5kKCRldmVudClcIiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCd0cmVlQ29udGFpbmVyJywgZGF0YS5jb2xsYXBzZWQgPyAnY29sbGFwc2VkJyA6IG51bGwpXCI+XHJcbiAgPHVsIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ3RyZWUnKVwiICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnJ1bGVzXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBydWxlIG9mIGRhdGEucnVsZXM7bGV0IGk9aW5kZXhcIj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ7cnVsZXNldDogISFydWxlLnJ1bGVzLCBpbnZhbGlkOiAhY29uZmlnLmFsbG93RW1wdHlSdWxlc2V0cyAmJiBydWxlLnJ1bGVzICYmIHJ1bGUucnVsZXMubGVuZ3RoID09PSAwfSBhcyBsb2NhbFwiPlxyXG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJnZXRRdWVyeUl0ZW1DbGFzc05hbWUobG9jYWwpXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvY2FsLnJ1bGVzZXRcIj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRSZW1vdmVCdXR0b25UZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRSZW1vdmVCdXR0b25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2J1dHRvbkdyb3VwJywgJ3JpZ2h0QWxpZ24nKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRSZW1vdmVCdXR0b25Db250ZXh0KHJ1bGUpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0UmVtb3ZlQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygncmVtb3ZlQnV0dG9uU2l6ZScsICdyaWdodEFsaWduJylcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2J1dHRvbicsICdyZW1vdmVCdXR0b24nKVwiIChjbGljayk9XCJyZW1vdmVSdWxlKHJ1bGUsIGRhdGEpXCIgW2Rpc2FibGVkXT1kaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgPGkgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygncmVtb3ZlSWNvbicpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW50aXRpZXM/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cInEtaW5saW5lLWJsb2NrLWRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RW50aXR5VGVtcGxhdGUoKSBhcyB0ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0RW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IGdldEVudGl0eUNvbnRleHQocnVsZSlcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRFbnRpdHk+XHJcbiAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdlbnRpdHlDb250cm9sU2l6ZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2VudGl0eUNvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS5lbnRpdHlcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VFbnRpdHkoJGV2ZW50LCBydWxlLGksZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIGVudGl0aWVzXCIgW25nVmFsdWVdPVwiZW50aXR5LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tlbnRpdHkubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RmllbGRUZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRGaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogZ2V0RmllbGRDb250ZXh0KHJ1bGUpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RmllbGQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdmaWVsZENvbnRyb2xTaXplJylcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnZmllbGRDb250cm9sJylcIiBbKG5nTW9kZWwpXT1cInJ1bGUuZmllbGRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VGaWVsZCgkZXZlbnQsIHJ1bGUpXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcyhydWxlLmVudGl0eSlcIiBbbmdWYWx1ZV09XCJmaWVsZC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7ZmllbGQubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0T3BlcmF0b3JUZW1wbGF0ZSgpIGFzIHRlbXBsYXRlOyBlbHNlIGRlZmF1bHRPcGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogZ2V0T3BlcmF0b3JDb250ZXh0KHJ1bGUpXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0T3BlcmF0b3I+XHJcbiAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdvcGVyYXRvckNvbnRyb2xTaXplJylcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnb3BlcmF0b3JDb250cm9sJylcIiBbKG5nTW9kZWwpXT1cInJ1bGUub3BlcmF0b3JcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VPcGVyYXRvcihydWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcGVyYXRvciBvZiBnZXRPcGVyYXRvcnMocnVsZS5maWVsZClcIiBbbmdWYWx1ZV09XCJvcGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7b3BlcmF0b3J9fVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbmRUZW1wbGF0ZUZvclJ1bGUocnVsZSkgYXMgdGVtcGxhdGU7IGVsc2UgZGVmYXVsdElucHV0XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRJbnB1dENvbnRleHQocnVsZSlcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRJbnB1dD5cclxuICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2lucHV0Q29udHJvbFNpemUnKVwiIFtuZ1N3aXRjaF09XCJnZXRJbnB1dFR5cGUocnVsZS5maWVsZCwgcnVsZS5vcGVyYXRvcilcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3N0cmluZydcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2lucHV0Q29udHJvbCcpXCIgWyhuZ01vZGVsKV09XCJydWxlLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlSW5wdXQoKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIHR5cGU9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgdHlwZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3RpbWUnXCIgdHlwZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygnaW5wdXRDb250cm9sJylcIiBbKG5nTW9kZWwpXT1cInJ1bGUudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VJbnB1dCgpXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKm5nU3dpdGNoQ2FzZT1cIidjYXRlZ29yeSdcIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGdldE9wdGlvbnMocnVsZS5maWVsZClcIiBbbmdWYWx1ZV09XCJvcHQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e29wdC5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidtdWx0aXNlbGVjdCdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBnZXRPcHRpb25zKHJ1bGUuZmllbGQpXCIgW25nVmFsdWVdPVwib3B0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e29wdC5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJnZXRDbGFzc05hbWVzKCdpbnB1dENvbnRyb2wnKVwiIFsobmdNb2RlbCldPVwicnVsZS52YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUlucHV0KClcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2Jvb2xlYW4nXCIgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8cXVlcnktYnVpbGRlciAqbmdJZj1cImxvY2FsLnJ1bGVzZXRcIiBbZGF0YV09XCJydWxlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW3BhcmVudFRvdWNoZWRDYWxsYmFja109XCJwYXJlbnRUb3VjaGVkQ2FsbGJhY2sgfHwgb25Ub3VjaGVkQ2FsbGJhY2tcIlxyXG4gICAgICAgICAgICBbcGFyZW50Q2hhbmdlQ2FsbGJhY2tdPVwicGFyZW50Q2hhbmdlQ2FsbGJhY2sgfHwgb25DaGFuZ2VDYWxsYmFja1wiIFtwYXJlbnRJbnB1dFRlbXBsYXRlc109XCJwYXJlbnRJbnB1dFRlbXBsYXRlcyB8fCBpbnB1dFRlbXBsYXRlc1wiXHJcbiAgICAgICAgICAgIFtwYXJlbnRPcGVyYXRvclRlbXBsYXRlXT1cInBhcmVudE9wZXJhdG9yVGVtcGxhdGUgfHwgb3BlcmF0b3JUZW1wbGF0ZVwiIFtwYXJlbnRGaWVsZFRlbXBsYXRlXT1cInBhcmVudEZpZWxkVGVtcGxhdGUgfHwgZmllbGRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRFbnRpdHlUZW1wbGF0ZV09XCJwYXJlbnRFbnRpdHlUZW1wbGF0ZSB8fCBlbnRpdHlUZW1wbGF0ZVwiIFtwYXJlbnRTd2l0Y2hHcm91cFRlbXBsYXRlXT1cInBhcmVudFN3aXRjaEdyb3VwVGVtcGxhdGUgfHwgc3dpdGNoR3JvdXBUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRCdXR0b25Hcm91cFRlbXBsYXRlXT1cInBhcmVudEJ1dHRvbkdyb3VwVGVtcGxhdGUgfHwgYnV0dG9uR3JvdXBUZW1wbGF0ZVwiIFtwYXJlbnRSZW1vdmVCdXR0b25UZW1wbGF0ZV09XCJwYXJlbnRSZW1vdmVCdXR0b25UZW1wbGF0ZSB8fCByZW1vdmVCdXR0b25UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRFbXB0eVdhcm5pbmdUZW1wbGF0ZV09XCJwYXJlbnRFbXB0eVdhcm5pbmdUZW1wbGF0ZSB8fCBlbXB0eVdhcm5pbmdUZW1wbGF0ZVwiIFtwYXJlbnRBcnJvd0ljb25UZW1wbGF0ZV09XCJwYXJlbnRBcnJvd0ljb25UZW1wbGF0ZSB8fCBhcnJvd0ljb25UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtwYXJlbnRWYWx1ZV09XCJkYXRhXCIgW2NsYXNzTmFtZXNdPVwiY2xhc3NOYW1lc1wiIFtjb25maWddPVwiY29uZmlnXCIgW2FsbG93UnVsZXNldF09XCJhbGxvd1J1bGVzZXRcIlxyXG4gICAgICAgICAgICBbYWxsb3dDb2xsYXBzZV09XCJhbGxvd0NvbGxhcHNlXCIgW2VtcHR5TWVzc2FnZV09XCJlbXB0eU1lc3NhZ2VcIiBbb3BlcmF0b3JNYXBdPVwib3BlcmF0b3JNYXBcIj5cclxuICAgICAgICAgIDwvcXVlcnktYnVpbGRlcj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RW1wdHlXYXJuaW5nVGVtcGxhdGUoKSBhcyB0ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0RW1wdHlXYXJuaW5nXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2NhbC5pbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiBnZXRFbXB0eVdhcm5pbmdDb250ZXh0KClcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRFbXB0eVdhcm5pbmc+XHJcbiAgICAgICAgICAgIDxwIFtuZ0NsYXNzXT1cImdldENsYXNzTmFtZXMoJ2VtcHR5V2FybmluZycpXCIgKm5nSWY9XCJsb2NhbC5pbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAge3tlbXB0eU1lc3NhZ2V9fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC91bD5cclxuPC9kaXY+Il19