import {
  Associations,
  Character,
  Exacerbating,
  Pill,
  Radiation,
  SocratesState,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import {EMPTY_STRING} from '@/utils/constants';

export const combineSocratesStateToDraftString = ({
  socrates,
}: {
  socrates: SocratesState;
}): string => {
  const {
    associations,
    character,
    exacerbating,
    note,
    onSet,
    radiation,
    severity,
    site,
    timeCourse,
  } = socrates;
  const activeSitePills = site.activePills.map(p => p.value).join(' region, ');

  const onSetString = `began ${onSet.interval} ${onSet.intervalUnit} ago${
    onSet.cyclicality ? `, ${onSet.cyclicality}` : EMPTY_STRING
  }`;
  const timeCourseString =
    timeCourse.interval && timeCourse.intervalUnit
      ? `lasts for ${timeCourse.interval} ${timeCourse.intervalUnit} ${timeCourse.symptomsFelt}`
      : EMPTY_STRING;
  const severityString = severity
    ? `described as ${severity} on a 0 - 10 scale`
    : EMPTY_STRING;

  return [
    activeSitePills,
    onSetString,
    getCharacterDraftText(character),
    getRadiatesDraftText(radiation),
    getAssociateDraftText(associations),
    timeCourseString,
    getExacerbatedDraftText(exacerbating),
    severityString,
    note,
  ]
    .filter(p => p !== EMPTY_STRING)
    .join('; ');
};

const getPresentOrAbsentPills = (
  activePills: Pill[],
  presentString = 'Present',
  absentString = 'Absent',
) => {
  const present = activePills
    .filter(p => p.type === presentString)
    .map(p => p.value)
    .join(', ');

  const absent = activePills
    .filter(p => p.type === absentString)
    .map(p => p.value)
    .join(', ');
  return {present, absent};
};

const createDraftMessage = (
  presentPrefix: string,
  absentPrefix: string,
  present: string,
  absent: string,
) => {
  let result = EMPTY_STRING;
  if (present) {
    result = result.concat(
      `${presentPrefix} ${present}${absent ? ', ' : EMPTY_STRING}`,
    );
  }
  if (absent) {
    result = result.concat(`${absentPrefix} ${absent}`);
  }

  return result;
};
const getCharacterDraftText = (character: Character): string => {
  const {present, absent} = getPresentOrAbsentPills(character.activePills);

  return createDraftMessage(
    'characterized as',
    'not described as',
    present,
    absent,
  );
};

const getRadiatesDraftText = (radiation: Radiation): string => {
  const {present, absent} = getPresentOrAbsentPills(radiation.activePills);

  return createDraftMessage(
    'radiates to the',
    'does not radiate to the',
    present,
    absent,
  );
};

const getAssociateDraftText = (associations: Associations): string => {
  const {present, absent} = getPresentOrAbsentPills(associations.activePills);

  return createDraftMessage(
    'associated with',
    'no history of',
    present,
    absent,
  );
};

const getExacerbatedDraftText = (exacerbating: Exacerbating): string => {
  const {present, absent} = getPresentOrAbsentPills(
    exacerbating.activePills,
    'Exacerbating',
    'Relieving',
  );

  return createDraftMessage('exacerbated by', 'relieved by', present, absent);
};
