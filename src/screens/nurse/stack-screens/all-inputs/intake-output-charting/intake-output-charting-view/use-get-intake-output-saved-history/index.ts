import {useApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetQuery} from '@/state/services/intakeOutputApi';

export const useGetIntakeOutputSavedHistory = ({
  patientId,
  type = 'UNKNOWN',
}: {
  patientId: number;
  type: 'INTAKE' | 'OUTPUT' | 'UNKNOWN';
}) => {
  const props =
    useApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetQuery(
      {
        patientId,
      },
      {
        selectFromResult: ({currentData, ...rest}) => ({
          currentData: (
            (currentData?.[type] ?? []).filter(
              el => el.chartingTypeText === type && el.suggestedText,
            ) || []
          ).flatMap(el => el.suggestedText || []),
          ...rest,
        }),
        skip: !type,
      },
    );

  return props;
};
