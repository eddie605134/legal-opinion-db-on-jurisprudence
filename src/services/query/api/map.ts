import type { AxiosResponse } from 'axios';
import { ResCurtType, CurtType, OpinionType, ResOpinionType, ResType } from '@/types/map';
import { get } from '@/utils/axios';
import { formatIntegerDate } from '@/utils/formatIntegerDate';
import dayjs from 'dayjs';

const toCourtInfo = (data: CurtType): CurtType => ({
  court: data.court,
  num_juds: data.num_juds,
  num_opinions: data.num_opinions,
  common_opinion_index1: data.common_opinion_index1,
  common_opinion_index2: data.common_opinion_index2,
  common_opinion_index3: data.common_opinion_index3,
  common_opinion_index4: data.common_opinion_index4,
  common_opinion_index5: data.common_opinion_index5,
  common_opinion_topic1: data.common_opinion_topic1,
  common_opinion_topic2: data.common_opinion_topic2,
  common_opinion_topic3: data.common_opinion_topic3,
  common_opinion_topic4: data.common_opinion_topic4,
  common_opinion_topic5: data.common_opinion_topic5,
  jud_date: data.jud_date,
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
  jud_date: dayjs(formatIntegerDate(data.jud_date)).format('YYYY/MM/DD'),
  jud_url: data.jud_url,
  case_num: data.case_num,
  opinion: data.opinion,
  csv_index: data.x_df_index,
  x_df_index: data.x_df_index,
  order_index: data.order_index,
  distance: data.distance
});

// p1取得見解
export const getOpinionByCourtIndex = async ({ court, opinionIndex }: {court: number, opinionIndex: number}): Promise<{ list: OpinionType[], queryText: string }> => {
  const res:AxiosResponse<ResType<ResOpinionType>> = await get(`/tfidf/court/${court}/opinion/${opinionIndex}`);

  const list: OpinionType[] = res.data.content.data.map((item: OpinionType) => toOpinion(item));

  return {
    queryText: res.data.content.query_text,
    list,
  };
};



export default getCourtInfo;
