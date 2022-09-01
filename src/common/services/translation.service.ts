import {
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import translations from '../translations';
import Language, { languages } from '../types/language';
import { convertToDotNotation } from '../utils/object';

type GetManyTranslationsResult<T extends string> = { [key in T]: string };

@Injectable()
export class TranslationService {
  private defaultLanguage: Language;
  private availableLanguages: readonly Language[];
  private translations: { [key: string]: string };

  constructor(configService: ConfigService) {
    this.defaultLanguage = configService.get('language');
    this.availableLanguages = languages;

    this.translations = this.flattenTranslations(translations);
    this.validateTranslations(this.translations);
  }

  get(translationKey: string, language: Language = this.defaultLanguage): string {
    const targetLanguage = language ?? this.defaultLanguage;
    const languageTranslations = this.translations[targetLanguage];

    return languageTranslations[translationKey] ?? translationKey;
  }

  getMany<T extends string>(
    translationKeys: T[],
    language: Language = this.defaultLanguage,
  ): GetManyTranslationsResult<T> {
    const translatedKeys = {} as GetManyTranslationsResult<T>;

    translationKeys.forEach((key) => {
      translatedKeys[key] = this.get(key, language);
    });

    return translatedKeys;
  }

  // eslint-disable-next-line class-methods-use-this
  private flattenTranslations(
    nestedTranslations: { [key: string]: any },
  ): { [key: string]: string } {
    const flattenedTranslations = {};

    Object.entries(nestedTranslations).forEach(([key, value]) => {
      flattenedTranslations[key] = convertToDotNotation(value);
    });

    return flattenedTranslations;
  }

  private validateTranslations(flattenedTranslations: { [key: string]: string }) {
    const translationsCount = Object.values(flattenedTranslations).map((t) => Object.values(t).length);
    if (new Set(translationsCount).size === 1) {
      // All languages have the same number of items
      return;
    }

    const defaultTranslationsCount = Object.values(flattenedTranslations[this.defaultLanguage]).length;

    this.availableLanguages.forEach((language) => {
      if (defaultTranslationsCount !== Object.values(flattenedTranslations[language]).length) {
        throw new Error(`Language '${language}' or default language (${this.defaultLanguage}) have missing translations`);
      }
    });
  }
}
