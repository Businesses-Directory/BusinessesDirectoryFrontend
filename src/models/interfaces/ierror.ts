import { SweetAlertIcon } from 'sweetalert2';

export interface IError {
  helpLink: string;
  type: SweetAlertIcon;
  title: string;
  detail: string;
  status: number;
  instance: string;
}
