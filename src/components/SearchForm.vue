<template>
    
</template>
<script setup>
import { usePopupStore } from '@/stores/popup.js'
// import TheList from "@/components/TheList.vue";
// import TheButton from "@/components/TheButton.vue";
import { storeToRefs } from 'pinia';
const popupStore = usePopupStore();
const { popup } = storeToRefs(popupStore)
// const isOrdered = true;

const props = defineProps({
    handleClose: {
        type: Function,
    },
})
</script>
<style scoped lang="scss">
.reveal-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column;
    text-align: center;
    justify-content: center;
}

.reveal-content {
    padding: 0 1.125rem;
    overflow-y: auto;

    // @include breakpoint(medium) {
    //     max-width: 28rem;
    //     margin: 0 auto; //得一个元素的最大宽度为 28rem，同时在水平方向上居中对齐
    // }

    p {
        margin: 1.5rem 0 0;
    }
}

.calculate-principle-content {
    text-align: left;
}

.reveal-actions {
    display: flex;
    margin: 3rem 0;
    justify-content: center;
    flex-shrink: 1;

    .tooltip_button {
        // background-color: $blue-500;
        color: #fff;
        border: none;
        border-radius: 4px;
        margin-top: 35px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
}

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
</style>
