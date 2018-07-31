
// Pashto
import * as React from 'react'

import { Audience } from 'helpers/graphql-types'

export const languageName = 'پښتو‎'
export const languageCode = 'pus'

export const graphqlAudience = Audience.pus

export const articleLabels = {
  updatedOn: (date: string) => `آخرین تجدید ${date}`,
  relatedContent: 'اړونده مقالې',
  shareMessage: 'دا مضمون هم وگورئ',
  galleryLoading: 'لټونه',
}

export const categorySettingsLabels = {
  header: 'د مطالبو تنظیم',
  myCategories: 'زما کتگورۍ',
  allCategories: 'ټول مطلبونه',
  dragAndDrop: 'د علاقې وړ برخې دلته ټولې کړئ',
  headlinesFirst: 'د سر ټکو لست',
  cancel: 'Cancel',
}

export const editorsChoiceLabels = {
  header: 'د اډیټر انتخاب',
  zoneId: 5507,
}

export const errorBoundaryLabels = {
  error: 'ستونزه رامنځ ته شوې',
  retry: 'بیا هڅه وکړئ',
}

export const favoritesSettingsLabels = {
  header: 'د علاقې وړ',
  removeAll: 'ټول پاک کړئ',
}

export const homeLabels = {
  headlines: 'د خبرونو سرټکي',
  search: 'لټونه',
  manage: '+',
}

export const introLabels = {
  primary: 'د خپلې خوښې ژبه مو وټاکئ',
  secondary: 'Choose Secondary Language(s)',
  primaryDescription: 'دلته به ټول عنوانونه او تنظیمات په پښتو ژبه ښکاره شي. تاسو دغې پاڼې ته په ورتلو کولی شی چې بله ژبه وټاکی او مضامین په دري ژبه ولولی.',
  secondaryDescription: 'This used to determine the default categories to display to you.  You can change this later in your settings.',
  continue: 'مخکې لاړ شئ',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        تاسې تر اوسه ویدیو او غږونه ندي انتخاب کړي. کله مو چې د علاقې وړ محتویات انتخاب کړل، مونږ به هغه پدغه مجموعه کې وساتو، هرکله چې غواړئ هغه کتلای شئ
      </p>
    </div>
  ),
  loading: 'د چمتو کیدو په حال کې',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'د خپریدو سرعت',
}

export const programsScreenLabels = {
  allCategories: 'ټولې خپرونې',
  videos: 'انتخابي ویدیوگانې',
  audio: 'انتخابي غږیزې خپرونې',
  empty: 'محتویات نشته',
}

export const pullToRefreshLabels = {
  pull: 'تازه معلومات',
  release: 'تازه معلومات',
}

export const searchLabels = {
  header: 'د لټونې پایله',
  back: 'شاته',
  all: 'ټول',
  query: 'د لټونې',
  empty: 'ونه موندل شو',
}

export const settingsLabels = {
  header: 'زما تنظیمات',
  sendToFriends: 'دا اپلیکیشن له ملگرو سره شریک کړئ',
  sendFeedback: 'د اپلیکیشن په اړه خپل نظر امریکا غږ سره شریک کړئ',
  aboutVoa: 'د امریکا غږ د نړۍ د گوټ گوټ څخه باوري، موثق او جامع خبرونه او رپوټونه تاسو ته رسوي. د امریکا غږ په ١٩۴٢ کال کې هغو خلکو ته په رادیویي خپرونو پیل وکړ چې د دوهمې نړیوالې جگړې په لړ کې د جگړې سیمو ته نژدې ژوند کاوه. له هغه وخت راهیسې د امریکا غږ په څو رسنیزې خبرې شبکې بدله شوې چې د رادیو، تلویزیون او انټرنیټ له لارې د نړۍ په څه دپاسه ۴٠ ژوندیو ژبو خپرونې لري.',
  feedbackEmail: 'afghanwebeditors@voanews.com',
  feedbackSubject: encodeURIComponent('د اپلیکیشن په اړه نظر'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'دا اپلیکیشن وازمایئ',
  resetPrimaryLanguage: 'د خپلې خوښې ژبې بدلول',
  resetSecondaryLanguages: 'Reset Secondary Languages',
}

export const textSettingsLabels = {
  textSize: 'د لیک د تورو اندازه',
  normalSize: 'کوچنی',
  largeSize: 'وسط',
  hugeSize: 'غټ',
}
