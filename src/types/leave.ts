export type LeaveType="Casual Leave"|"Sick Leave"|"Earned Leave"|"Work From Home";
export type LeaveStatus="Pending"|"Approved"|"Rejected"|"Cancelled";
export interface LeaveRequest{id:string;type:LeaveType;startDate:string;endDate:string;days:number;reason:string;status:LeaveStatus;appliedOn:string;}
export interface LeaveBalance{type:LeaveType;available:number;total:number;}
