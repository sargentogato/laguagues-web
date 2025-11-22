import type { IconName } from '@/components/icons/IconBase.vue';

const whyLanguage = ['why.title'];

const cardInfo: Array<{ iconName: IconName; title: string[]; text: string[]; fontWeight: string }> =
  [
    {
      iconName:   'IconWorld',
      title:      ['why.titleLanguage'],
      text:       ['why.languageTeam'],
      fontWeight: '500',
    },
    {
      iconName:   'IconMethod',
      title:      ['why.titleTransversal'],
      text:       ['why.transversalMethods'],
      fontWeight: '500',
    },
    {
      iconName:   'IconForWho',
      title:      ['why.titleForWhom'],
      text:       ['why.forWhom'],
      fontWeight: '500',
    },
    {
      iconName:   'IconObjectives',
      title:      ['why.titleObjective'],
      text:       ['why.objective'],
      fontWeight: '500',
    },
    {
      iconName:   'IconResults',
      title:      ['why.titleResults'],
      text:       ['why.results'],
      fontWeight: '500',
    },
  ];
export default {
  whyLanguage,
  cardInfo,
};
