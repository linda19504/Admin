<template>
    <Teleport to="body">
        <div v-show="popup">
            <div @click="handleOverlayClick" class="reveal-overlay">
            </div>
            <!-- <div class="reveal-container">
                <div class="my-modal">
                    <div class="reveal-wrapper">
                        <div class="reveal-content">
                            <p class="heading-xxl modal_title">Setting</p>
                            <div class="calculate-principle-content">
                                <p class="body-m text">
                                    旅行规划涉及旅行中较为重要的时间安排以及目的地满意度的实现,我们的旅行主要是为了在美好的风景中放松身心与自然和谐共处,与此同时能够让心情得到放松与休息,因此旅行规划显得尤为重要
                                </p>
                                <p class="body-m calculate-principle-text">
                                    半数以上的受邀调查者对旅行前的规划有一定详细周密的设计,并对旅行目的地进行过深入的调查与了解</p>
                                <p class="body-m calculate-principle-text">
                                    少数游客冲动消费盲目选择为冲动而买单,选择的旅行目的地带有一定的盲目操控性,此举也是旅行规划中需要避免的重要原则性问题。
                                </p>
                                <p class="body-s modal_title">注释：我们的度假方案建立在一系列假设基础之上，仅供参考。</p>
                                <TheList class="body-s calculate-principle-list" :isOrdered="isOrdered" :lists="['旅行规划涉及旅行中较为重要的时间安排以及目的满意度的实现，我们的旅行主要是为了在美好的风景中放松身心与自然和谐共处，与此同时能够让心情得到放松与休息，因此旅行规划显得尤为重要',
                                    '半数以上的受邀调查者对旅行前的规划有一定详细周密的设计, 并对旅行目的地进行过深入的调查与了解']">
                                </TheList>
                            </div>
                            <div class="reveal-actions">
                                <TheButton class="tooltip_button" kind="primary" :clickAction="handleClose">关闭
                                </TheButton>
                            </div>
                        </div>
                    </div> -->
            <!-- </div> -->
            <!-- </div> -->
        </div>
    </Teleport>
</template>
<script setup>
import { usePopupStore } from '@/stores/popup.js'
import TheList from "@/components/TheList.vue";
import TheButton from "@/components/TheButton.vue";
import { storeToRefs } from 'pinia';
const popupStore = usePopupStore();
const { popup } = storeToRefs(popupStore)
const isOrdered = true;

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
