import { useTranslation } from 'i18n'
import React from 'react'

const BRContent = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <h1>{t('title-abroad')}</h1>
      <h2 className="subtitle">{t('subtitle-abroad')}</h2>
      <p style={{ width: '700px' }}>{t('content-abroad')}</p>
    </>
  )
}

export default BRContent
