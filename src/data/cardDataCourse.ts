/* Package Card Basic*/
const basic = ['packageTitles.basic'];
const timeNumber = 3;
const timeText = 'Meses';
const priceBasic = 200;
const basicIncluded = [
  { messages: [`basicPackageIncluded.liveClasses`] },
  { messages: [`basicPackageIncluded.timeClases`] },
];

/* Package Card Premium*/
const premium = ['packageTitles.premium'];
const pricePremium = 600;
const premiumIncluded = [
  { messages: [`premiumPackageIncluded.liveClasses`] },
  { messages: [`premiumPackageIncluded.teoricClasses`] },
  {
    messages: ['premiumPackageIncluded.practicalClasses'],
  },
  {
    messages: ['premiumPackageIncluded.group'],
  },
  {
    messages: ['premiumPackageIncluded.recordedClasses'],
  },
];

/* Package Card Platinum*/
const platinum = ['packageTitles.platinum'];
const pricePlatinum = 900;
const platinumIncluded = [
  { messages: [`platinumPackageIncluded.liveClasses`] },
  { messages: [`platinumPackageIncluded.teoricClasses`] },
  {
    messages: ['platinumPackageIncluded.practicalClasses'],
  },
  {
    messages: ['platinumPackageIncluded.groupTutoring'],
  },
  {
    messages: ['platinumPackageIncluded.group'],
  },
  {
    messages: ['platinumPackageIncluded.subtitledVideos'],
  },
  {
    messages: ['platinumPackageIncluded.recordedClasses'],
  },
];

export default {
  basic,
  timeNumber,
  timeText,
  priceBasic,
  basicIncluded,
  premium,
  pricePremium,
  premiumIncluded,
  platinum,
  pricePlatinum,
  platinumIncluded,
};
