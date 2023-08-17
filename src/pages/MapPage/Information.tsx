import React, { useEffect, useState } from 'react';
import { setSelectMap } from '@/store/mapSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { useSearchOpinionByCourtIndex, useCourtInfo } from '@/services/query';
import {
  FormLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./mapPage.css"
import { CurtType } from '@/types/map';
import { setResultList } from '@/store/resultSlice';
import { useNavigate } from 'react-router-dom';

const Information = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectMapValue = useSelector((state: RootState) => state.maper.value);

  const [selectBtn, setSelectedButton] = useState('0');
  const supremeCourt = '最高法院';
  const courtItems = [
    { id: '1', label: '臺灣高等法院' },
    { id: '2', label: '臺灣高等法院\n臺中分院' },
    { id: '3', label: '臺灣高等法院\n臺南分院' },
    { id: '4', label: '臺灣高等法院\n高雄分院' },
    { id: '5', label: '臺灣高等法院\n花蓮分院' },
    { id: '6', label: '福建高等法院\n金門分院' },
  ];
  const handleButtonClick = (event: any) => {
    if (event.target.value != undefined) {
      setSelectedButton(event.target.value);
      dispatch(setSelectMap(event.target.value));
    }
  };

  const [selectOpinion, setSelectedOpinion] = useState(0);
  const handleOpinionClick = async (index: number) => {
    await setSelectedOpinion(index);

    const fetchData = refetchSearchOpinionByCourtIndex;
    const { data } = await fetchData();
    if (data) {
      await dispatch(setResultList(data));
      navigate('/result');
    }
  };

  const {
    refetch: refetchSearchOpinionByCourtIndex,
    error: SearchOpinionByCourtIndexError,
    isLoading: SearchOpinionByCourtIndexLoading,
  } = useSearchOpinionByCourtIndex({courtId: +selectMapValue, opinionIndex: selectOpinion});


  const toInitCourtInfo : CurtType = ({
    court: '',
    num_juds: 0,
    num_opinions: 0,
    common_opinion_index1: '',
    common_opinion_index2: '',
    common_opinion_index3: '',
    common_opinion_index4: '',
    common_opinion_index5: '',
    common_opinion_topic1: '',
    common_opinion_topic2: '',
    common_opinion_topic3: '',
    common_opinion_topic4: '',
    common_opinion_topic5: '',
  });

  const [courtInfo, setCourtInfo] = useState(toInitCourtInfo);
  const handleCourtInfoChange = (event: any) => {
    if (event != undefined && event.list[0] != undefined) {
      setCourtInfo((prevCourtInfo) => ({
        ...prevCourtInfo,
        court: event.list[0].court,
        num_juds: event.list[0].num_juds,
        num_opinions: event.list[0].num_opinions,
        common_opinion_index1: event.list[0].common_opinion_index1,
        common_opinion_index2: event.list[0].common_opinion_index2,
        common_opinion_index3: event.list[0].common_opinion_index3,
        common_opinion_index4: event.list[0].common_opinion_index4,
        common_opinion_index5: event.list[0].common_opinion_index5,
        common_opinion_topic1: event.list[0].common_opinion_topic1,
        common_opinion_topic2: event.list[0].common_opinion_topic2,
        common_opinion_topic3: event.list[0].common_opinion_topic3,
        common_opinion_topic4: event.list[0].common_opinion_topic4,
        common_opinion_topic5: event.list[0].common_opinion_topic5,
      }));
    }
  };

  const handleCourtInfo = async () => {
    const fetchData = refetchCourtInfo;
    const { data } = await fetchData();
    if (data) {
      handleCourtInfoChange(data);
    }
  };

  const {
    refetch: refetchCourtInfo,
    error: courtinfoError,
    isLoading: courtInfoLoading,
  } = useCourtInfo(+selectMapValue);

  useEffect(() => {
    handleCourtInfo();
  }, [selectMapValue]);

  const accordionData = [
    {
      theme: courtInfo.common_opinion_topic1,
      details: courtInfo.common_opinion_index1,
    },
    {
      theme: courtInfo.common_opinion_topic2,
      details: courtInfo.common_opinion_index2,
    },
    {
      theme: courtInfo.common_opinion_topic3,
      details: courtInfo.common_opinion_index3,
    },
    {
      theme: courtInfo.common_opinion_topic4,
      details: courtInfo.common_opinion_index4,
    },
    {
      theme: courtInfo.common_opinion_topic5,
      details: courtInfo.common_opinion_index5,
    },
  ];

  return (
    <div>
      <div onClick={handleButtonClick}>
        <Box key='0' sx={{ display: 'block', marginBottom: '15px' }}>
          <Button
            value='0'
            style={{ width: '100%' }}
            className={
              selectMapValue == '0' ? 'button-click' : 'button-nonclick'
            }>
            {supremeCourt}
          </Button>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {courtItems.map((item) => (
            <Box key={item.id}>
              <Button
                value={item.id}
                style={{ marginBottom: '5px', whiteSpace: 'pre-wrap' }}
                className={
                  selectMapValue == item.id ? 'button-click' : 'button-nonclick'
                }>
                {item.label}
              </Button>
            </Box>
          ))}
        </div>
      </div>
      <div>
          <FormLabel className='setLabel'>最高法院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國107年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計{courtInfo.num_juds}篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出{courtInfo.num_opinions}筆見解</FormLabel>
          {accordionData.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}-${item.theme}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography onClick={() => handleOpinionClick(index + 1)}>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
    </div>
  );
};

export default Information;
