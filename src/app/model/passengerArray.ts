export interface Ipassenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate: number | Date;
  children: number | null;
}
