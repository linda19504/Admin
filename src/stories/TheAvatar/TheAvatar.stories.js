// import { fn } from '@storybook/test'
import TheAvatar from '@/components/TheAvatar.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/TheAvatar',
  component: TheAvatar,
  tags: ['autodocs'],
  args: {
    label: 'test label',
    default: 'hello',
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    avatar_url: '/avatar.png',
    username: '慕容紫英',
    email: 'murogziying@gmail.com'},
  approvers: [
        {
          avatar_url: '/avatar.png',
          username: '慕容紫英',
          email: 'murogziying@gmail.com'
        },
        {
          avatar_url: '/avatar.png',
          username: '慕容紫英',
          email: 'murogziying@gmail.com'
        }
      ],

      create_date: '2024年3月5日 10:00',
      last_updated_date: '2024年3月8日 10:00'
    }
  





