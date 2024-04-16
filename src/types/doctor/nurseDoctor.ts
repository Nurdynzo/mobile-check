export type PatientDetails = {
  patientId: string;
  name: {firstName: string; lastName: string};
  imgUrl?: string;
  age: string | number;
  gender: 'Male' | 'Female';
  appointmentType: string;
  vitals: string[];
  treatments: string[];
  diagnosis: string[];
  status?: string;
  unit: string;
  managingDoctor: string;
  bed: string;
  payment?: {
    status: string;
    amount: number;
  };
  lastSeen?: {
    doctor: string;
    time: string;
    date: string;
  };
  intervention: string;
};
