import * as api from '../api/map';

export const mapSchema = {
  getCourtInfo: (courtId: number) => ({
    queryKey: ['getCourtInfo', courtId],
    queryFn: () => api.getCourtInfo(courtId),
  }),
  getOpinionByCourtIndex: ({ courtId, opinionIndex }: { courtId: number, opinionIndex: number }) => ({
    queryKey: ['getOpinionByIndex', courtId, opinionIndex],
    queryFn: () => api.getOpinionByCourtIndex({ court: courtId, opinionIndex }),
  }),
};

export default mapSchema;
