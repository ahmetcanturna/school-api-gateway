export const languages = ['en', 'tr'] as const;
type Language = typeof languages[number];

export default Language;
