import type { AxiosResponse } from 'axios';
import {
  OpinionType,
  ResOpinionType,
  ResType
} from '@/types/map';
import {
  GenerationKeywordType,
  ResGenKeywordType,
  GenerationOpinionType,
  ResGenOpinionType
} from '@/types/search';
import { get } from '@/utils/axios';
import dayjs from 'dayjs';
import { formatIntegerDate } from '@/utils/formatIntegerDate';

const toOpinion = (data: OpinionType): OpinionType => ({
  court: data.court,
  jud_date: dayjs(formatIntegerDate(data.jud_date)).format('YYYY/MM/DD'),
  jud_url: data.jud_url,
  case_num: data.case_num,
  opinion: data.opinion,
  csv_index: data.x_df_index,
  x_df_index: data.x_df_index,
  order_index: data.order_index,
  distance: data.distance,
  same_distance_num: data.same_distance_num,
  show_unique_result: data.show_unique_result,
});

// p2取得見解by keyword
export const getOpinionByKeyword = async (keyword: string): Promise<{ list: OpinionType[], queryText: string }> => {
  const res: AxiosResponse<ResType<ResOpinionType>> = await get(`/embeds/?keyword=${keyword}`);

  const list: OpinionType[] = res.data.content.data.map((item: OpinionType) => toOpinion(item));

  return {
    queryText: res.data.content.query_text,
    list,
  };
};

// p2取得見解by opinion
export const getOpinionByOpinion = async (opinion: string): Promise<{ list: OpinionType[], queryText: string }> => {
  const res: AxiosResponse<ResType<ResOpinionType>> = await get(`/embeds/?opinion=${opinion}`);

  const list: OpinionType[] = res.data.content.data.map((item: OpinionType) => toOpinion(item));

  return {
    queryText: res.data.content.query_text,
    list,
  };
};

const toRandomKeyWord = (data: GenerationKeywordType): GenerationKeywordType => ({
  keyword: data.keyword,
});

// p2取得隨機關鍵字
export const getRandomKeyword = async (): Promise<{ keyword: string }> => {
  const res: AxiosResponse<ResType<ResGenKeywordType>> = await get(`/generation/keyword`);

  const list: GenerationKeywordType[] = res.data.content.data.map((item: GenerationKeywordType) => toRandomKeyWord(item));

  return {
    keyword: list[0].keyword,
  };
};

const toRandomOpinion = (data: GenerationOpinionType): GenerationOpinionType => ({
  opinion: data.opinion,
});

// p2取得隨機見解
export const getRandomOpinion = async (): Promise<{ opinion: string }> => {
  const res: AxiosResponse<ResType<ResGenOpinionType>> = await get(`/generation/opinion`);

  const list: GenerationOpinionType[] = res.data.content.data.map((item: GenerationOpinionType) => toRandomOpinion(item));

  return {
    opinion: list[0].opinion,
  };
};



export default getOpinionByOpinion;
