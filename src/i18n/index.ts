import ptBR from './locales/pt-BR';

export default function i18n(locale: string | undefined) {
    switch (locale) {
        case 'pt-BR':
            return (locale = ptBR);

        default:
            return (locale = ptBR);
    }
}
