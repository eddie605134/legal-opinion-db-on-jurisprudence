import React, { ChangeEvent, useState } from 'react';
import { setSelectMap } from '@/store/mapSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
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

const Information = () => {

  const dispatch = useDispatch();
  const selectMapValue = useSelector((state: RootState) => state.maper.value);
  const handleSelectMap = (value: any) => {
    // 假設你要更新的新值是 '1'
    dispatch(setSelectMap(value));
  };

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
      handleSelectMap(event.target.value);
    }
  };

  const accordionData0 = [
    {
      theme: '',
      details: '按取捨證據、認定事實及解釋契約屬於事實審法院之職權，若其取捨、認事並不違背法令及經驗法則、論理法則或證據法則，即不許任意指摘其採證或認定不當，以為上訴理由',
    },
    {
      theme: '',
      details: '按民事訴訟法第496條第1項第1款所謂適用法規顯有錯誤者，係指確定判決所適用之法規，顯然不合於法律規定，或與司法院現尚有效及大法官會議之解釋，或最高法院現尚有效之判例顯有違反，或消極的不適用法規，顯然影響裁判者而言，並不包括判決理由矛盾、理由不備、漏未斟酌證據及認定事實錯誤之情形在內（最高法院57年台上字第1091號、60年台再字第170號、63年台上字第880號判例意旨參照）',
    },
    {
      theme: '',
      details: '按判決書理由項下，應記載關於攻擊防禦方法之意見，民事訴訟法第二百二十六條第三項定有明文，法院為原告或被告敗訴之判決，而其關於攻擊或防禦方法之意見有未記載於判決理由項下者，即為同法第四百六十九條第六款所謂判決不備理由',
    },
    {
      theme: '',
      details: '解釋契約，固須探求當事人立約時之真意，不能拘泥於契約文字，但契約文字業已表示當事人真意，無須別事探求者，即不得反捨契約文字而更為曲解（最高法院17年上字第1118號判例意旨參照）',
    },
    {
      theme: '',
      details: '且第三審為法律審，其所為判決，以第二審判決所確定之事實為基礎，故上開規定所謂適用法規顯有錯誤，對第三審判決而言，應以該判決依據第二審判決所確定之事實而為之法律上判斷，有適用法規顯有錯誤之情形為限',
    },
  ];
  const accordionData1 = [
    {
      theme: '',
      details: '上訴人之配偶、三親等內之血親、二親等內之姻親，或上訴人為法人、中央或地方機關時，其所屬專任人員具有律師資格並經法院認為適當者，亦得為第三審訴訟代理人',
    },
    {
      theme: '',
      details: '按訴訟標的對於共同訴訟之各人必須合一確定者，共同訴訟人中一人之行為有利益於共同訴訟人者，其效力及於全體；不利益者，對於全體不生效力，民事訴訟法第56條第1項第1款定有明文',
    },
    {
      theme: '',
      details: '按民事訴訟法第496條第1項第1款所謂適用法規顯有錯誤者，係指確定判決所適用之法規顯然不合於法律規定，或與司法院現尚有效及大法官會議之解釋，或最高法院有效之判例顯然違反者而言，含消極之不適用法規，顯然影響裁判者，但不包含漏未斟酌證據、判決理由不備、判決理由矛盾、取捨證據及認定事實錯誤之情形在內（司法院大法官會議釋字第177號、最高法院60年台再字第170號、63年台上字第880號判例意旨參照）',
    },
    {
      theme: '',
      details: '又民事訴訟如係由原告主張權利者，應先由原告負舉證之責，若原告先不能舉證，以證實自己主張之事實為真實，則被告就其抗辯事實即令不能舉證，或其所舉證據尚有疵累，亦應駁回原告之請求（最高法院17年上字第917號判例意旨參照）',
    },
    {
      theme: '',
      details: '按稱借名登記者，謂當事人約定一方將自己之財產以他方名義登記，而仍由自己管理、使用、處分，他方允就該財產為出名登記之契約，倘其內容不違反強制禁止規定或公序良俗者，應承認其法律效力，於其內部間仍應承認借名人為真正所有權人（最高法院99年度台上字第2448號裁判意旨參照）',
    },
  ];
  const accordionData2 = [
    {
      theme: '',
      details: '末按給付給付無確定期限者，債務人於債權人得請求給付時，經其催告而未為給付，自受催告時起，負遲延責任；其經債權人起訴而送達訴狀，與催告有同一之效力，民法第229條第2項定有明文',
    },
    {
      theme: '',
      details: '若上訴人對一審判決認可被上訴人主張而為不利於其之判斷表示不服 ，上訴二審，被上訴人則未提起上訴或附帶上訴，依不利變更禁止之原則，第二審法院於審理時，對於上訴人在第一審勝訴部分，不得列入審理範圍，僅得就上訴人表示不服部分加以審理（最高法院89年度台簡上字第45號判決意旨參照）',
    },
    {
      theme: '',
      details: '非指經法院審理結果有利者其效力及於共同訴訟人，不利者其效力不及於共同訴訟人而言，故共同訴訟人中之一人，對於下級法院之判決聲明不服提起上訴，在上訴審法院未就其內容為審判之前，難謂其提起上訴之行為對於他共同訴訟人不利，其效力應及於共同訴訟人全體，即應視其上訴為共同訴訟人全體所為（最高法院五十二年台上字第一九三０號判例意旨參照）',
    },
    {
      theme: '',
      details: '又裁判分割共有物，屬形成判決，法院定共有物之分割方法，應斟酌各共有人之意願、共有物之性質、經濟效用、共有土地之使用現況，並顧及分割後全體之通路及全體共有人之利益等，而本其自由裁量權為公平合理之分配，但並不受當事人聲明、主張或分管約定之拘束（最高法院70年度台上字第3468號、93年度台上字第1797號民事裁判可資參照）',
    },
    {
      theme: '',
      details: '民事訴訟如係由原告主張權利者，應先由原告負舉證之責，若原告先不能舉證，以證實自己主張之事實為真實，則被告就其抗辯事實即令不能舉證，或其所舉證據尚有疵累，亦應駁回原告之請求（最高法院17年上字第917號判例參照）',
    },
  ];
  const accordionData3 = [
    {
      theme: '',
      details: '上訴人之配偶、三親等內之血親、二親等內之姻親，或上訴人為法人、中央或地方機關時，其所屬專任人員具有律師資格並經法院認為適當者，亦得為第三審訴訟代理人',
    },
    {
      theme: '',
      details: '按民事訴訟如係由原告主張權利者，應先由原告負舉證之責，若原告先不能舉證，以證實自己主張之事實為真實，則被告就其抗辯事實即令不能舉證，或其所舉證據尚有疵累，亦應駁回原告之請求（最高法院17年上字第917號判例要旨參照）',
    },
    {
      theme: '',
      details: '又給付有確定期限者，債務人自期限屆滿時起，負遲延責任；給付無確定期限者，債務人於債權人得請求給付時，經其催告而未為給付，自受催告時起，負遲延責任；其經債權人起訴而送達訴狀，或依督促程序送達支付命令，或為其他相類之行為者，與催告有同一之效力；民法第229條第1、2項分別定有明文',
    },
    {
      theme: '',
      details: '倘不負舉證責任之他造當事人，就同一待證事實已證明間接事實，而該間接事實依經驗法則為判斷，與待證事實之不存在可認有因果關係，足以動搖法院原已形成之心證者，將因該他造當事人所提出之反證，使待證事實回復至真偽不明之狀態',
    },
    {
      theme: '',
      details: '按民事訴訟法第496條第1項第1款所謂適用法規顯有錯誤者，係指確定判決所適用之法規顯然不合於法律規定，或與司法院現尚有效及大法官會議之解釋，或最高法院有效之判例顯然違反者而言，含消極之不適用法規，顯然影響裁判者，但不包含漏未斟酌證據、判決理由不備、判決理由矛盾、取捨證據及認定事實錯誤之情形在內（司法院釋字第177號解釋、最高法院60年台再字第170號、63年台上字第880號判例、92年度台上字第320號判決意旨參照）',
    },
  ];
  const accordionData4 = [
    {
      theme: '',
      details: '上訴人之配偶、三親等內之血親、二親等內之姻親，或上訴人為法人、中央或地方機關時，其所屬專任人員具有律師資格並經法院認為適當者，亦得為第三審訴訟代理人',
    },
    {
      theme: '',
      details: '所謂經常性之給與，係指在一般情形下，經常可以領得之給付即屬之，舉凡某種給與係屬工作上之報酬，在制度上具經常性者，均得列入平均工資以計算退休金；而所謂對價性，則著重於勞方所付出之勞力與資方之給付是否有對價平衡關係，是以夜點費是否為工資之一部分，自應以夜點費是否為勞工給付勞務之對價，且屬經常性給與為判斷依據',
    },
    {
      theme: '',
      details: '然依勞基法第2條第3款就工資所為定義，只須符合勞工因工作而獲得之報酬，以現金或實物等方式之經常性給與均屬之，可見實物給與亦在工資涵攝範圍內，故縱系爭夜點費之沿革係由實物給與之方式改為現金而來，因兩造在成立勞動契約時，已知悉工作型態為3班制之輪班，並均認知輪值小夜班、大夜班者即可領取夜點費',
    },
    {
      theme: '',
      details: '94年6月14日修正前之勞動基準法施行細則第10條第9款雖將「差旅費、差旅津貼、交際費、夜點費及誤餐費等」排除於「經常性給與」之外，惟該款規定之差旅費、差旅津貼及交際費，因屬不確定之事項所支出，固可認定並非「經常性給與」，然與系爭夜點費係屬固定輪班工作型態下經常性給與之勞務對價之性質不同，自不得以發給名目為「夜點費」',
    },
    {
      theme: '',
      details: '上訴人雖辯稱被上訴人為經濟部所屬國營事業之人員，故有關其待遇、福利及退休事項應優先適用國營事業管理法及相關行政院規定標準核定，而夜點費並未列入經濟部所屬事業機構之平均工資給與項目表，自難列入平均工資云云',
    },
  ];
  const accordionData5 = [
    {
      theme: '',
      details: '上訴人之配偶、三親等內之血親、二親等內之姻親，或上訴人為法人、中央或地方機關時，其所屬專任人員具有律師資格並經法院認為適當者，亦得為第三審訴訟代理人',
    },
    {
      theme: '',
      details: '當事人在第一審已經主張之爭點，即其攻擊或防禦方法（包括事實、法律及證據上之爭點），因第一審法院就該事實、法律及證據上評價錯誤為由提起上訴，其上訴理由，仍在第一審審理範圍內，應允許當事人就該上訴理由，再行提出補強之攻擊及防禦方法，或就之提出其他抗辯事由，以推翻第一審法院就該事實上、法律上及證據上之評價（前開規定之立法理由參照）',
    },
    {
      theme: '',
      details: '按民事法院對於訴訟事件之紛爭事實，為求發現真實並促進訴訟，應依舉證責任分配之原則，命負舉證責任之一方，就其主張或抗辯之事實提出證據，再本於調查證據之結果，斟酌全辯論意旨，以判斷事實之真偽（最高法院102年度臺上字第466號判決意旨參照）',
    },
    {
      theme: '',
      details: '又通常一般人無置疑程度之真實性確信程度，考量民事訴訟當事人之證據蒐集手段，難以與刑事案件具強制搜查權限之檢察官相比擬，民事訴訟上之證明，無論在手段上、費用上或時間上，均不可能無限制行之',
    },
    {
      theme: '',
      details: '按當事人至第二審程序，違背民事訴訟法第447條規定，提出新攻擊或防禦方法，如他造已表示無異議或無異議而就該訴訟有所聲明或陳述者，即喪失責問權，此項程序上之瑕疵，亦因其不責問而為補正，此觀同法第197條第1項之規定自明（最高法院96年度臺上字第1783號判決意旨參照）',
    },
  ];
  const accordionData6 = [
    {
      theme: '',
      details: '上訴人之配偶、三親等內之血親、二親等內之姻親，或上訴人為法人、中央或地方機關時，其所屬專任人員具有律師資格並經法院認為適當者，亦得為第三審訴訟代理人',
    },
    {
      theme: '',
      details: '此時原不負舉證責任之被告，可就與上開事實不能併存之他項事實，為相當於本證（等同於同法第281條所稱之「反證」）之舉證活動而予以推翻，例如證明借名委任關係之事實存在於其與第三人間；亦可另證明在經驗法則或論理法則上，足以動搖法院原已形成確信心證之他項間接事實，使借名委任關係是否存在，回復至真偽不明之狀態，',
    },
    {
      theme: '',
      details: '是買受人受領買賣標的物後，主張出賣人應負物之瑕疵擔保責任，而為出賣人所否認時，應由買受人先就物之瑕疵存在之有利於己事實，負舉證責任，必須證明其為真實後，出賣人於其抗辯之事實，始應負證明之責（最高法院104年度台再字第20號判決意旨參照）',
    },
    {
      theme: '',
      details: '國家立法保障勞工權益固有其政策上之緣由，但因勞務需求之種類及方式繁多，自無從僅以「僱傭契約」加以框束，如勞資雙方已約明具體之權義關係，本於「契約自由」之原則，國家亦不能因政策之理由，強予解釋及變更當事人契約之約定，否則國家過度介入私人間之契約關係，其衍生之後果恐致勞資關係問題更為複雜及不確定，對勞資雙方及社會亦非絕對有利',
    },
    {
      theme: '',
      details: '出賣人就其交付之買賣標的物有應負擔保責任之瑕疵，而其瑕疵係於契約成立後始發生，且因可歸責於出賣人之事由所致，則出賣人除負物之瑕疵擔保責任外，始同時構成不完全給付之債務不履行責任，有最高法院77年度第7次民事庭會議決議可參',
    },
  ];

  return (
    <div>
      <div onClick={handleButtonClick}>
        <Box key='0' sx={{ display: 'block', marginBottom: '5px' }}>
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

      {selectMapValue == '0' ?
        <div>
          <FormLabel className='setLabel'>最高法院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計9653篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
      {selectMapValue == '1' ?
        <div>
          <FormLabel className='setLabel'>臺灣高等法院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計90319篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
      {selectMapValue == '2' ?
        <div>
          <FormLabel className='setLabel'>臺灣高等法院臺中分院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計30477篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
      {selectMapValue == '3' ?
        <div>
          <FormLabel className='setLabel'>臺灣高等法院臺南分院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計17553篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
      {selectMapValue == '4' ?
        <div>
          <FormLabel className='setLabel'>臺灣高等法院高雄分院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計19010篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
      {selectMapValue == '5' ?
        <div>
          <FormLabel className='setLabel'>臺灣高等法院花蓮分院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計8849篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
      {selectMapValue == '6' ?
        <div>
          <FormLabel className='setLabel'>福建高等法院金門分院</FormLabel>
          <FormLabel className='setLabel'>裁判日期：民國110年1月1日～民國112年12月31日</FormLabel>
          <FormLabel className='setLabel'>共計1003篇民事案件判決書</FormLabel>
          <FormLabel className='setLabel'>共找出5筆見解</FormLabel>
          {accordionData0.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: 'lightgray' }}
              >
                <Typography>{`最常見的見解${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        : null}
    </div>
  );
};


export default Information;
