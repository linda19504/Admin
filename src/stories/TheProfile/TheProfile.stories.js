// import { fn } from '@storybook/test'
import TheProfile from '@/components/TheProfile.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/TheProfile',
  component: TheProfile,
  tags: ['autodocs'],
  args: {
    label: 'test label',
    default: 'hello',
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    args: {
      avatar_url: '/avatar.png',
      username: '慕容紫英',
      email: 'murogziying@gmail.com'
    }

  }
}
 