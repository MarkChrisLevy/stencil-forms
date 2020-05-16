import { ControlElement, ReactiveFormControl, ReactiveFormControlOptions, ReactiveFormControlGroup } from '../types';

export const ctrlBooleanOptsMap = /*@__PURE__*/ new WeakMap<
  ReactiveFormControl | ReactiveFormControlGroup,
  ReactiveFormControlOptions
>();

export const ctrlElmAttrsMap = /*@__PURE__*/ new WeakMap<
  ReactiveFormControl | ReactiveFormControlGroup,
  Map<string, string>
>();

export const ctrlGroupsElmAttrsMap = /*@__PURE__*/ new WeakMap<
  ReactiveFormControl | ReactiveFormControlGroup,
  Map<string, Map<string, string>>
>();

export const ctrlGroupItemsMap = /*@__PURE__*/ new WeakMap<ReactiveFormControl | ReactiveFormControl>();

export const ctrlMap = /*@__PURE__*/ new WeakMap<ControlElement, ReactiveFormControl | ReactiveFormControlGroup>();

export const ctrlOptsMap = /*@__PURE__*/ new WeakMap<ReactiveFormControl, ReactiveFormControlOptions>();

export const inputEvDebounceMap = /*@__PURE__*/ new WeakMap<ControlElement, any>();