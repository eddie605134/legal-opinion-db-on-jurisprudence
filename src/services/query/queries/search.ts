import * as search from '../api/search';

export const searchSchema = {
  getOpinionByKeyword: (keyword: string) => ({
    queryKey: ['getOpinionByKeyword', keyword],
    queryFn: () => search.getOpinionByKeyword(keyword),
  }),
  getOpinionByOpinion: (opinion: string) => ({
    queryKey: ['getOpinionByOpinion', opinion],
    queryFn: () => search.getOpinionByOpinion(opinion),
  }),
  getRandomKeyword: () => ({
    queryKey: ['getRandomKeyword'],
    queryFn: () => search.getRandomKeyword(),
  }),
  getRandomOpinion: () => ({
    queryKey: ['getRandomOpinion'],
    queryFn: () => search.getRandomOpinion(),
  }),
};

export default searchSchema;