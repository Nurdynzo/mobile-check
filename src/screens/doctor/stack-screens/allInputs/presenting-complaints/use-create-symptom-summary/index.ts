import {showToast} from '@/components/app-toast';
import {useApiServicesAppSymptomCreatesymptomPostMutation} from '@/state/services/symptomApi';
import {
  OnSet,
  Pill,
  selectStates,
  setSavedSocratesStates,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import dayjs from 'dayjs';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {noteDefaultValues} from '../type-note';
import {EMPTY_STRING} from '@/utils/constants';
import {logThis} from '@/utils/helpers/logThis';

export const useCreateSymptomSummary = ({
  encounterId,
  patientId,
}: {
  encounterId: number;
  patientId: number;
}) => {
  const savedSocratesStates = useSelector(selectStates);
  const dispatch = useDispatch();
  const [addSymptomRequest, {isLoading, isSuccess}] =
    useApiServicesAppSymptomCreatesymptomPostMutation();

  const createRequestBodyForPills = (activePills: Array<Pill>, type: string) =>
    activePills.map(pill => ({
      suggestionQuestionType: type,
      suggestionAnswer: {
        symptomSnowmedId: pill.snowmedId,
        description: pill.value,
        isAbsent: pill.type === 'Absent',
      },
    }));

  const createRequestBodyExacerbating = (activePills: Array<Pill>) =>
    activePills.map(pill => ({
      suggestionQuestionType: 'ExacerbatingOrRelieving',
      suggestionAnswer: {
        symptomSnowmedId: pill.snowmedId,
        description: pill.value,
        exacerbatingOrRelievingType: pill.type,
      },
    }));

  const createRequestBodyOnSet = (onSet: OnSet) => ({
    suggestionQuestionType: 'Onset',
    suggestionAnswer: {
      whenOrHowLongAgo: `${onSet.interval} ${onSet.intervalUnit}`,
      cyclicality: onSet.cyclicality,
    },
  });

  const handleSaveSymptomSummary = async () => {
    try {
      const requests = savedSocratesStates
        .map(p => {
          const siteRequest = createRequestBodyForPills(
            p.site.activePills,
            'Site',
          );
          const radiationRequest = createRequestBodyForPills(
            p.radiation.activePills,
            'Radiation',
          );
          const characterRequest = createRequestBodyForPills(
            p.character.activePills,
            'Character',
          );
          const associationsRequest = createRequestBodyForPills(
            p.radiation.activePills,
            'Associations',
          );
          const exacerbatingRequest = createRequestBodyExacerbating(
            p.exacerbating.activePills,
          );
          const onSetRequest = createRequestBodyOnSet(p.onSet);
          const timeCourseRequest = [
            {
              suggestionQuestionType: 'TimeCourse',
              suggestionAnswer: {
                frequency: p.timeCourse.symptomsFelt,
                howLongDidItLast:
                  p.timeCourse.interval && p.timeCourse.intervalUnit
                    ? `${p.timeCourse.interval} ${p.timeCourse.intervalUnit}`
                    : EMPTY_STRING,
              },
            },
          ];
          const severityRequest = [
            {
              suggestionQuestionType: 'Severity',
              suggestionAnswer: {
                severityScale: p.severity,
              },
            },
          ];

          return {
            description: p.mainSearchResult.name,
            note: p.note,
            snowmedId: p.mainSearchResult.id,
            suggestions: _.flatMap([
              siteRequest,
              onSetRequest,
              characterRequest,
              radiationRequest,
              associationsRequest,
              exacerbatingRequest,
              timeCourseRequest,
              severityRequest,
            ]),
          };
        })
        .map(async ({suggestions, note, snowmedId, description}) => {
          await addSymptomRequest({
            createSymptomDto: {
              symptomEntryType: 'Suggestion',
              encounterId,
              stamp: dayjs().unix(),
              patientId,
              otherNote: note,
              description,
              symptomSnowmedId: snowmedId.toString(),
              suggestions,
            },
          }).unwrap();
        });

      await Promise.all(requests);
      dispatch(setSavedSocratesStates([]));
      showToast('SUCCESS', {
        title: 'Symptom summary created successfully',
        message: 'Symptom summary have been added to our records',
      });
    } catch (error) {
      logThis('error!', error);
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Symptom summary failed to be added to our records',
      });
    }
  };

  const handleSaveTypeNote = async ({
    values,
    reset,
  }: {
    values: typeof noteDefaultValues;
    reset: () => void;
  }) => {
    try {
      await addSymptomRequest({
        createSymptomDto: {
          symptomEntryType: 'TypeNote',
          encounterId,
          stamp: dayjs().unix(),
          patientId,
          description: EMPTY_STRING,
          typeNotes: [
            {
              type: 'History of Presenting Complaints',
              note: values.complaintsHistory,
            },
            {type: 'Past Medical History', note: values.pastMedical},
            {type: 'Family History', note: values.familyHistory},
            {type: 'Social History', note: values.socialHistory},
            {type: 'Other History', note: values.otherHistory},
          ],
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Summary note created successfully',
        message: 'Summary note have has added to our record',
      });
      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Summary note failed to be added to our record',
      });
    }
  };

  const handleGeneralNotesSubmit = async ({
    note,
    reset,
  }: {
    note: string;
    reset: () => void;
  }) => {
    try {
      await addSymptomRequest({
        createSymptomDto: {
          symptomEntryType: 'TypeNote',
          encounterId,
          stamp: dayjs().unix(),
          patientId,
          description: EMPTY_STRING,
          typeNotes: [
            {
              type: 'Recorded Notes',
              note,
            },
          ],
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Summary note created successfully',
        message: 'Summary note have has added to our record',
      });
      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Summary note failed to be added to our record',
      });
    }
  };

  return {
    handleSaveSymptomSummary,
    handleSaveTypeNote,
    handleGeneralNotesSubmit,
    isLoading,
    isSuccess,
  };
};
