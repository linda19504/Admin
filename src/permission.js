import router from '@/routers/index'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/store/modules/user'
import { usePermissionStore } from '@/store/modules/permission'

export default {
    mounted() {
      NProgress.start(); // 组件加载时启动进度条
    },
    beforeDestroy() {
      NProgress.done(); // 组件销毁时完成进度条
    },
  };