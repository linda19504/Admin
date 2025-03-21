<template>
    <Teleport to="body">
        <div v-show="onShow">
            <div @click="handleOverlayClick" class="reveal-overlay">
            </div>
            <div class="reveal-container">
                <div class="my-modal">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup>
import { computed} from 'vue';
import { useMainStore } from "@/store/index.js";
const mainStore = useMainStore();
const onShow = computed(() => mainStore.onShow);   
function handleOverlayClick() {
    mainStore.changeOnShow(false);   
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

    @include breakpoint(medium) {
        width: 100%;
        height: 100%;
    }
}
</style>
  