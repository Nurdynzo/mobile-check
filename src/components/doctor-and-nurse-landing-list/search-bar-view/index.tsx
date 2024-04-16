import {SearchPatientInput} from '@/components/inputs/search';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  selectDoctorNurseSearchPatientTerm,
  setDoctorNurseSearchPatientTerm,
  setDoctorNurseSelectedPatientResult,
} from '@/state/slices/doctor-nurse/doctorNurseSearchPatientBar';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent} from 'react';

const DoctorAndNurseSearchBarView: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectDoctorNurseSearchPatientTerm);

  return (
    <SearchPatientInput
      height={40}
      onSelectedItem={item => {
        dispatch(
          setDoctorNurseSearchPatientTerm(item.fullname || EMPTY_STRING),
        );
        dispatch(setDoctorNurseSelectedPatientResult(item));
      }}
      placeholder={'Find patient'}
      value={searchText}
    />
  );
};

export default DoctorAndNurseSearchBarView;
