
import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import {
  type as setSecondaryLanguagesType,
  SetSecondaryLanguagesAction,
} from '../actions/setSecondaryLanguages'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'
import Category from 'types/Category'

const dariCategories: Category[] = [
  {
    id: 4771,
    name: 'صفحه اصلی',
  },
  {
    id: 3018,
    name: 'افغانستان',
  },
  {
    id: 3030,
    name: 'امریکا',
  },
  {
    id: 3031,
    name: 'جهان',
  },
  {
    id: 3029,
    name: 'ورزش',
  },
  {
    id: 3023,
    name: 'صحت',
  },
  {
    id: 3021,
    name: 'فرهنگ و اقتصاد',
  },
]

const pashtoCategories: Category[] = [
  {
    id: 4772,
    name: 'اصلي پاڼه',
  },
  {
    id: 2330,
    name: 'افغانستان',
  },
  {
    id: 2341,
    name: 'امریکا',
  },
  {
    id: 2344,
    name: 'نړۍ',
  },
  {
    id: 2340,
    name: 'ورزش',
  },
  {
    id: 2335,
    name: 'روغتیا',
  },
  {
    id: 4084,
    name: 'اقتصاد',
  },
]

const actors: ActorMap<AppSettings> = {
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
  [setSecondaryLanguagesType]: (prev, { secondaryLanguages }: SetSecondaryLanguagesAction) => {
    let categories = []
    if (secondaryLanguages.includes('prs')) {
      categories = [...categories, ...dariCategories]
    }
    if (secondaryLanguages.includes('pus')) {
      categories = [...categories, ...pashtoCategories]
    }

    return {
      ...prev,
      categories,
    }
  },
}

export const INITIAL_STATE: AppSettings = {
  categories: [],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  usePsiphon: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
