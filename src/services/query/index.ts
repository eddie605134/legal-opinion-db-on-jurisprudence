import { useQuery } from '@tanstack/react-query';
import { mapSchema } from './queries/map';
import { searchSchema } from './queries/search';


export const useCourtInfo = (courtId: number) => useQuery({ ...mapSchema.getCourtInfo(courtId)});
export const useSearchOpinionByCourtIndex = ({ courtId, opinionIndex }: { courtId: number, opinionIndex: number }) => useQuery({ ...mapSchema.getOpinionByCourtIndex({ courtId, opinionIndex })});

export const useSearchOpinionByKeyword = (keyword: string) => useQuery({...searchSchema.getOpinionByKeyword(keyword)});
export const useSearchOpinionByOpinion = (opinion: string) => useQuery({...searchSchema.getOpinionByOpinion(opinion)});
export const useRandomKeyword = () => useQuery({ ...searchSchema.getRandomKeyword() });
export const useRandomOpinion = () => useQuery({ ...searchSchema.getRandomOpinion() });

export default useCourtInfo;
