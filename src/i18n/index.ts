import ptBR from './locales/pt-BR';

export default function i18n(locale: string | undefined): object {
    switch (locale) {
        case 'pt-BR':
            return ptBR;

        default:
            return ptBR;
    }
}
