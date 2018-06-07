
// Dari
import * as React from 'react'

import { Audience } from 'helpers/graphql-types'

export const languageName = 'دری‎'
export const languageCode = 'prs'

export const graphqlAudience = Audience.prs

export const articleLabels = {
  updatedOn: (date: string) => `Updated on ${date}`,
  relatedContent: 'مطالب مرتبط',
  shareMessage: '',
  galleryLoading: 'Gallery loading...',
}

export const categorySettingsLabels = {
  header: 'تنظیم مطالب',
  myCategories: 'دسته بندی های من',
  allCategories: 'همۀ مطالب',
  dragAndDrop: 'بخش های مورد نظر تان را اینجا اضافه کنید',
  headlinesFirst: 'فهرست سرخط ها',
  cancel: 'Cancel',
}

export const circumventionDrawerLabels = {
  content: (
    <div>
      Your connection is secured via a VPN.
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'انتخاب ادیتر',
}

export const errorBoundaryLabels = {
  error: 'با ما باشید!',
  retry: 'دوباره تلاش کنید',
}

export const favoritesSettingsLabels = {
  header: 'برگزیده‌ها',
  removeAll: 'همه را حذف کنید',
}

export const homeLabels = {
  headlines: 'سرخط خبرها',
  search: 'جستجو',
  manage: '+',
}

export const introLabels = {
  primary: 'Choose Primary Language',
  secondary: 'Choose Secondary Language(s)',
  primaryDescription: 'Dari: This is the language that the settings and other app labels will appear in.  You can still get content from both languages.',
  secondaryDescription: 'This used to determine the default categories to display to you.  You can change this later in your settings.',
  continue: 'ادامه دهید',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        شما تا کنون ویدیو یا صدایی را انتخاب نکرده اید. پس از آنکه شما محتویات مورد نظر تان را انتخاب کردید، ما آن را در این مجموعه برایتان حفظ خواهیم کرد تا هر وقتی خواستید آن را تماشا کنید یا بشنوید.
      </p>
    </div>
  ),
  loading: 'در حال پخش ...',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'سرعت پخش',
}

export const programsScreenLabels = {
  videos: 'ویدیوهای انتخابی',
  audio: 'نوارهای صوتی انتخابی',
  empty: 'محتوا موجود نیست',
}

export const pullToRefreshLabels = {
  pull: 'Pull to refresh',
  release: 'Release to refresh',
}

export const searchLabels = {
  header: 'نتیجۀ جستجو',
  back: 'عقب',
  all: 'همه',
  query: 'جستجو',
  empty: 'پیدا نشد',
}

export const settingsLabels = {
  header: 'تنظیمات من',
  panic: 'Reset the App',
  sendToFriends: 'این اپلیکشن را با دوستان تان شریک سازید',
  sendFeedback: 'در مورد این اپلکیشن چی فکر می‌کنید',
  aboutVoa: 'صدای امریکا خبرها و گزارش‌های معتبر، موثق و جامع را از سرتاسر جهان به شما می‌رساند. صدای امریکا در سال ۱۹۴۲ به نشرات رادیویی برای مردمانی آغاز کرد که در جریان جنگ جهانی دوم در نزدیک ساحات جنگی زیست داشتند. از آن زمان تا کنون صدای امریکا به یک خبرگزاری چند رسانه ای -رادیو، تلویزیون، آنلاین- مبدل شده است و به بیش از ۴۰ زبان زندۀ جهان نشرات دارد.',
  feedbackEmail: 'afghanwebeditors@voanews.com',
  feedbackSubject: encodeURIComponent('نظر در مورد اپلکیشن صدای امریکا'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'این اپلکیشن را هم بیازمایید',
}

export const textSettingsLabels = {
  textSize: 'اندازۀ فونت خط',
  normalSize: 'کوچک',
  largeSize: 'متوسط',
  hugeSize: 'بزرگ',
}
