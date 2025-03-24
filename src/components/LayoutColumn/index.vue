<template>
<div class="">
    <div class="tags-vmy-tags-viewiew">
      <el-tabs v-model="activeTabsValue" type="card" @tab-click="tabClick" @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in visitedViews"
          :key="item.path"
          :path="item.path"
          :label="item.title"
          :name="item.path"
          :closable="!(item.meta && item.meta.affix)"
        >
        <template #label>
            <elicon class="tabs-icon" >
                <component :is="item.icon"></component>
            </elicon>
        {{ item.title }}
        </template>
        </el-tab-pane>
      </el-tabs>  
    </div>
</div>
</template>
<script setup>
import { computed, watch, ref, onMounted } from 'vue'
import{useRoute,userouter} from'vue-Router'
import { TabsPaneContext } from 'element-plus'
import { useTagsViewStore } from '@/stores/modules/tagsView.js'
import { usePermissionStore } from '@/store/modules/permission'
import { useUserStore } from '@/stores/modules/userinfo'

const router = useRouter()
const TagsViewStore = useTagsViewStore()
const PermissionStore = usePermissionStore()
const useInfo = computed(()=>useUserStore.useInfo)
const person = ref()
</script>