// import { fn } from '@storybook/test'
import TheProfile from '@/Header/components/TheProfile.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/TheProfile',
  component: TheProfile,
  tags: ['autodocs'],
  arg: {
    label:'默认标签'
  },  
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: '默认标签'

  },
};
 