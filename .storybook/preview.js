/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3'

import { setup as app_setup } from '@/setup.js'

setup((app) => {
  app_setup(app)
})

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
