<template>
    <Teleport to="body">
        <!-- <div v-show="onShow"> -->
            <div @click="handleOverlayClick" class="reveal-overlay">
            </div>
            <div class="reveal-container">
                <div class="my-modal">
                    <slot></slot>
                </div>
            </div>
        <!-- </div> -->
    </Teleport>
</template>
<script setup>
import { computed, ref } from 'vue';
import classnames from "classnames";
import { useCloseStore } from '@/stores/close.js';
import { storeToRefs } from 'pinia';
const store = useCloseStore();
const onShow = ref();
const closeStore = useCloseStore();
const { close } = storeToRefs(closeStore);
// const onShow = store.state.onShow;
// const onShow = computed(() => store.state.onShow);

async function handleOverlayClick() {
    await store.closeClick(false);
}

</script>
<style lang="scss" scoped>
.reveal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    /* 确保遮罩层在其他元素之上 */
}

.reveal-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
}

/* 确保居中显示模态框 */
.my-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    z-index: 1000;
    width: 43rem;
    height: 45rem;

    // @include breakpoint(medium) {
    //     width: 100%;
    //     height: 100%;
    // }
}

/* 定义了模态框的位置，背景色，大小等 */
</style>