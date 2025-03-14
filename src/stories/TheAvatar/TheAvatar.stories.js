// import { fn } from '@storybook/test'
import TheAvatar from '@/Header/components/TheAvatar.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/TheAvatar',
  component: TheAvatar,
  tags: ['autodocs'],
  args: {
    avatar_url: '/avatar.png', 
    username: 'John Doe L',
    email: 'john.doe@example.com',
    showName:'true',
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    avatar_url: '/avatar.png',
    username: 'John Doe L',
    email: 'john.doe@example.com',
    showName: '',
  },
};
  
   
    
  





