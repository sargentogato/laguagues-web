const learnTitle = ['packageTitles.learning'];
const includedTitle = ['packageTitles.included'];
const contactButtonText = 'packageTitles.contact';

//section Titles
const methodIntroduction = ['mengelMethodIncluded.methodIntroduction'];
const firstPillarTitle = ['mengelMethodIncluded.firstPillarTitle'];

//section includedTitle
const secondPillarTitle = ['mengelMethodIncluded.secondPillarTitle'];

//section learnItemsOne
const grammarItems = [
  {
    messages: ['mengelMethodIncluded.grammarBuildSentences'],
  },
  {
    messages: ['mengelMethodIncluded.grammarExpressIdeas'],
  },
  {
    messages: ['mengelMethodIncluded.grammarStructuresRange'],
  },
];

const skillsItems = [
  {
    messages: ['mengelMethodIncluded.skillSpeaking'],
  },
  {
    messages: ['mengelMethodIncluded.skillListening'],
  },
  {
    messages: ['mengelMethodIncluded.skillReading'],
  },
  {
    messages: ['mengelMethodIncluded.skillWriting'],
  },
];

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
  learnTitle,
  includedTitle,
  contactButtonText,
  methodIntroduction,
  firstPillarTitle,
  secondPillarTitle,
  grammarItems,
  skillsItems,
};
