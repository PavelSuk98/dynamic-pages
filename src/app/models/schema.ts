import { Validators } from '@angular/forms';

export enum CompomentType {
  HEADER,
  PARAGRAPH,
  TABLE,
}

export interface Field {
  name: string;
  label: string;
  type: CompomentType;
  children?: Field[];
  defaultValue?: any;
  disabled?: boolean;
  options?: KeyValuePair[];
  parent?: string;
  validation?: Validators[];
  visible?: boolean;
}

export interface KeyValuePair {
  key: string;
  value: any;
}
