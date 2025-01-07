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
    avatar_url: '',
    username: '',
    email: ''},
  approvers: [
        {
          avatar_url: '',
          username: '',
          email: ''
        },
        {
          avatar_url: '',
          username: '',
          email: ''
        }
      ],

      create_date: '',
      last_updated_date: ''
    }
  





