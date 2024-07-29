<template>
    <component :is="tag" class="list">
        <li v-for="(list, index) in lists" :key="preName + '-' + index">
            <template v-if="typeof list === 'string'">{{ list }}</template>
            <template v-if="typeof list === 'object'">
                <p v-for="(item, subIndex) in list" :key="preName + '-' + index + '-' + subIndex">{{ item }}</p>
            </template>
        </li>
    </component>
</template>
<script setup>

import { computed } from 'vue';

const props = defineProps({
    name: 'TheList',
    isOrdered: {
        type: Boolean,
        default: "false",
    },
    lists: {
        type: Array,
        default: new Array([]),
    },
    preName: {
        type: String,
        default: "",
    },
});

const tag = computed(() => props.isOrdered ? 'ol' : 'ul'); //tag 可以被用作一个动态组件的标签名，这个组件会根据 props.isOrdered 的值动态地渲染为一个有序列表或无序列表



</script>
<style scoped></style>