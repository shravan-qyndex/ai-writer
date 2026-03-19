// src/lib/i18n.test.ts
import { loadLocale, t, defaultLocale, supportedLocales } from './i18n';

jest.mock('../locales/en.json', () => ({})); // Mocking the English locale file

describe('i18n', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadLocale', () => {
    it('should load the locale and update translations', async () => {
      const mockTranslations = { greeting: 'Hello' };
      jest.mock('../locales/en.json', () => mockTranslations);

      await loadLocale('en');
      expect(t('greeting')).toBe('Hello');
    });

    it('should fallback to default translations if locale loading fails', async () => {
      jest.spyOn(global, 'import').mockImplementationOnce(() => {
        throw new Error('Locale not found');
      });

      await loadLocale('fr'); // Attempt to load a non-existent locale
      expect(t('greeting', 'Hello')).toBe('Hello'); // Fallback to fallback string
    });
  });

  describe('t', () => {
    it('should return the translation for a given key', async () => {
      const mockTranslations = { greeting: 'Hello' };
      jest.mock('../locales/en.json', () => mockTranslations);
      await loadLocale('en');

      expect(t('greeting')).toBe('Hello');
    });

    it('should return the fallback string if the key does not exist', async () => {
      const mockTranslations = { greeting: 'Hello' };
      jest.mock('../locales/en.json', () => mockTranslations);
      await loadLocale('en');

      expect(t('farewell', 'Goodbye')).toBe('Goodbye'); // Fallback to 'Goodbye'
    });

    it('should return the key itself if no translation and no fallback are provided', async () => {
      const mockTranslations = { greeting: 'Hello' };
      jest.mock('../locales/en.json', () => mockTranslations);
      await loadLocale('en');

      expect(t('unknownKey')).toBe('unknownKey'); // Return the key itself
    });
  });

  it('should have the correct default locale', () => {
    expect(defaultLocale).toBe('en');
  });

  it('should have supported locales', () => {
    expect(supportedLocales).toEqual(['en']);
  });
});
