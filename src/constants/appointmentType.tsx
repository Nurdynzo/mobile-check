import React from 'react';
import {ArrowRightIcon} from '@/assets/svg';
import {EnumAppointmentType} from '@/types/frondesk/appointment/types';

export const appointmentTypeOptions = [
  {
    item: {
      id: '1',
      value: 'New (Walk-in, Referral or Consult)',
    },
    itemOptions: [
      {
        item: {
          id: '1',
          value: 'Walk-in',
          data: EnumAppointmentType.WalkIn,
        },
      },
      {
        item: {
          id: '2',
          value: 'Referral',
          data: EnumAppointmentType.Referral,
        },
      },
      {
        item: {
          id: '3',
          value: 'Consult',
          data: EnumAppointmentType.Consultation,
        },
        renderRightIcon: () => <ArrowRightIcon />,
      },
    ],
  },
  {
    item: {
      id: '2',
      value: 'Follow-up',
      data: EnumAppointmentType.FollowUp,
    },
  },
  {
    item: {
      id: '3',
      value: 'For Medical Exam',
      data: EnumAppointmentType.MedicalExam,
    },
  },
];

export const consultAppointmentTypeOptions = [
  {
    item: {
      id: '1',
      value: 'Accident & Emergency',
      data: EnumAppointmentType.Consultation,
    },
  },
  {
    item: {
      id: '2',
      value: 'Neurology',
      data: EnumAppointmentType.Consultation,
    },
  },
  {
    item: {
      id: '3',
      value: 'Cardiology',
      data: EnumAppointmentType.Consultation,
    },
  },
  {
    item: {
      id: '4',
      value: 'Respiratory Medicine',
      data: EnumAppointmentType.Consultation,
    },
  },
  {
    item: {
      id: '5',
      value: 'Gastroenterology & Hepatology',
      data: EnumAppointmentType.Consultation,
    },
  },
  {
    item: {
      id: '6',
      value: 'Infectious Disease Unit',
      data: EnumAppointmentType.Consultation,
    },
  },
];
