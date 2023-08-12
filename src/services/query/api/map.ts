import type { AxiosResponse } from 'axios';
import { ResCurtType, CurtType, OpinionType, ResOpinionType, ResType } from '@/types/map';
import { get } from '@/utils/axios';

const toCourtInfo = (data: CurtType): CurtType => ({
  court: data.court,
  num_juds: data.num_juds,
  num_opinions: data.num_opinions,
  common_opinion1: data.common_opinion1,
  common_opinion2: data.common_opinion2,
  common_opinion3: data.common_opinion3,
  common_opinion4: data.common_opinion4,
  common_opinion5: data.common_opinion5,
});

// 該法院相關資訊
export const getCourtInfo= async (court: number): Promise<{ list: CurtType[] }> => {
  const res:AxiosResponse<ResType<ResCurtType>> = await get(`/tfidf/court/${court}`);

  const list: CurtType[] = res.data.content.data.map((item: CurtType) => toCourtInfo(item));

  return {
    list,
  };
};

const toOpinion = (data: OpinionType): OpinionType => ({
  court: data.court,
  jud_date: data.jud_date,
  jud_url: data.jud_url,
  case_num: data.case_num,
  opinion: data.opinion,
});

// p1取得見解
export const getOpinionByCourtIndex = async ({ court, opinionIndex }: {court: number, opinionIndex: number}): Promise<{ list: OpinionType[], queryText: string }> => {
  const res:AxiosResponse<ResType<ResOpinionType>> = await get(`/tfidf/court/${court}/opinion/${opinionIndex}}`);

  const list: OpinionType[] = res.data.content.data.map((item: OpinionType) => toOpinion(item));

  return {
    queryText: res.data.content.query_text,
    list,
  };
};



export default getCourtInfo;
