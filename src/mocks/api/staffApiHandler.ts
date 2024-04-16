import {ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiResponse} from '@/state/services/staffApi';
import {HttpResponse, http} from 'msw';

const getStaffMemeberByRole = http.get(
  `${process.env.API_BASE_URL}/api/services/app/StaffMembers/GetStaffMembersByRole`,
  () => {
    return HttpResponse.json({
      result: [
        {
          userId: 1,
          name: 'Sam Lui',
          staffMemberId: 1,
        },
        {
          userId: 2,
          name: 'David Tui',
          staffMemberId: 2,
        },
      ] as ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const staffApiHandler = [getStaffMemeberByRole];
