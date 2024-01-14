import React from 'react';
import { useTranslation } from 'react-i18next';
import netflixLogoSvg from '../assets/images/netflix-logo.svg';

function SmallScreen() {
    const { t } = useTranslation();

    return (
        <div className="small-screen-message p-5" >
            <div className='container p-5'>
                <img style={{ flex: '0 0 260px', minWidth: '100%', maxWidth: '100%' }} src={netflixLogoSvg} alt="Netflix Logo" />
            </div>
            <div className='container p-5'>
                <p className="text-white p-5 fs13">
                    {t('common.smallScreen')}
                </p>
            </div>

        </div>
    );
}

export default SmallScreen;
