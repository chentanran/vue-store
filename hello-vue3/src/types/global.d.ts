

declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>

declare type LocaleType = 'zh-CN' | 'en'