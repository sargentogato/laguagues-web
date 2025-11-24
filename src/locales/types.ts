import enMessages from './en';

export type LangMessages = {
  menu: Record<keyof (typeof enMessages)['menu'], string>;
  header: Record<keyof (typeof enMessages)['header'], string>;
  why: Record<keyof (typeof enMessages)['why'], string>;
  categories: Record<keyof (typeof enMessages)['categories'], string>;
  footer: Record<keyof (typeof enMessages)['footer'], string>;
  packageTitles: Record<keyof (typeof enMessages)['packageTitles'], string>;
  basicPackageIncluded: Record<keyof (typeof enMessages)['basicPackageIncluded'], string>;
  premiumPackageIncluded: Record<keyof (typeof enMessages)['premiumPackageIncluded'], string>;
  platinumPackageIncluded: Record<keyof (typeof enMessages)['platinumPackageIncluded'], string>;
  mengelMethodIncluded: Record<keyof (typeof enMessages)['mengelMethodIncluded'], string>;
  methodFeatures: Record<keyof (typeof enMessages)['methodFeatures'], string>;
  headerDataCourse: Record<keyof (typeof enMessages)['headerDataCourse'], string>;
  methodPhilosophy: Record<keyof (typeof enMessages)['methodPhilosophy'], string>;
  cookieBanner: Record<keyof (typeof enMessages)['cookieBanner'], string>;
  privacyPolicy: Record<keyof (typeof enMessages)['privacyPolicy'], string>;
  cookiesPolicy: Record<keyof (typeof enMessages)['cookiesPolicy'], string>;
};
