import { Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import i18n from '~/i18n';

const Home: NextPage = () => {
    const { locale } = useRouter();

    return (
        <div>
            <Button>Teste</Button>
        </div>
    );
};

export default Home;
