

declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>

declare type LocaleType = 'zh-CN' | 'en'

declare type ElememtPlusSize = 'default' | 'small' | 'large'

declare type Nullable<T> = T | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>