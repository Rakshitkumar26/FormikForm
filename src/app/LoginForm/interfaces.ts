// interfaces.ts
export interface Option {
  name: string;
  dropdownOptions: string[];
}

export interface FormData {
  userTypeOptions: string[];
  guestOptions: Option[];
}

export interface FormValues {
  userType: string;
  guestOptions: Record<string, OptionValue>;
}

export interface OptionValue {
  dropdown: string;
  percentage: number;
  dollars: number;
  agree: 'yes' | 'no';
  days: number;
}
