import nextTypescript from 'eslint-config-next/typescript'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import rocketseat from '@rocketseat/eslint-config'

const config = [
  ...rocketseat,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      '@stylistic/max-len': 'off',
    },
  },
]

export default config
