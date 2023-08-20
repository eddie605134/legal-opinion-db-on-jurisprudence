import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectMap } from '@/store/mapSlice';
import { RootState } from '@/store';
import { setResultList, setQueryText } from '@/store/resultSlice';

import { CurtType } from '@/types/map';
import { useSearchOpinionByCourtIndex, useCourtInfo } from '@/services/query';

import {
  FormLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Button,
  Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Loading from '@/components/common/Loading';

import './mapPage.css'

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
      await dispatch(setResultList(data.list));
      await dispatch(setQueryText(data.queryText))
      navigate('/result');

      setTimeout(() => {
        window.scrollTo({ top: 150, behavior: 'smooth' });
      }, 300)
    }
  };

  const {
    refetch: refetchSearchOpinionByCourtIndex,
    error: SearchOpinionByCourtIndexError,
    isFetching: SearchOpinionByCourtIndexLoading,
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
    jud_date: '',
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
        jud_date: event.list[0].jud_date,
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

  // Loading <Loading />

  return (
    <div>
      { SearchOpinionByCourtIndexLoading && <Loading /> }
      <div onClick={handleButtonClick}>
        <div key='0' style={{ display: 'block', marginBottom: '15px' }}>
          <Button
            value='0'
            sx={{
              backgroundColor: selectMapValue == '0' ? 'brown' : 'rgb(231, 180, 180)',
              color: selectMapValue == '0' ? 'white' : 'black',
              '&:hover': {
                backgroundColor: 'brown',
                color: 'white',
              },
            }}
            style={{
              width: '100%',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            
          >
            {supremeCourt}
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          {courtItems.map((item) => (
            <Box key={item.id}>
              <Button
                value={item.id}
                sx={{
                  backgroundColor: selectMapValue == item.id ? '#52b27b' : '#94d6b1',
                  color: selectMapValue == item.id ? 'white' : 'black',
                  '&:hover': {
                    backgroundColor: '#52B27B',
                    color: 'white',
                  },
                }}
                style={{
                  marginBottom: '5px',
                  whiteSpace: 'pre-wrap',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  height: '75px',
                }}
              >
                {item.label}
              </Button>
            </Box>
          ))}
        </div>
      </div>
      <div>
        <FormLabel sx={{pl: 2, fontSize: '1.1rem', fontWeight: 600, color: '#5F5346'}} className='setLabel'>{courtInfo.court}</FormLabel>
        <FormLabel sx={{ pl: 2, fontSize: '1.1rem', fontWeight: 600, color: '#5F5346' }} className='setLabel'>{`裁判日期：${courtInfo.jud_date}`}</FormLabel>
          <FormLabel sx={{pl: 2, fontSize: '1.1rem', fontWeight: 600, color: '#5F5346'}} className='setLabel'>共計{courtInfo.num_juds}篇民事案件判決書</FormLabel>
        <FormLabel className='setLabel' sx={{
          mb: 2,
          pl: 2, fontSize: '1.1rem', fontWeight: 600, color: '#5F5346'
        }}>共找出{courtInfo.num_opinions}筆見解</FormLabel>
          {accordionData.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: '#D6B894', color: '#5F5346'}}
              >
                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>{`最常見的見解${index + 1}-${item.theme}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Tooltip title="點擊以見解搜尋見解" placement="left" arrow>
                  <Typography sx={{
                    cursor: 'pointer',
                  }} onClick={() => handleOpinionClick(index + 1)}>{item.details}</Typography>
                </Tooltip>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
    </div>
  );
};

export default Information;
