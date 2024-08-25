<template>
    <div>
        <TheBreadcrumb></TheBreadcrumb>
        <form class="profileForm">
            <label for="username">用户名：</label>
            <input type="text" />
            <label for="name">类型：</label>
            <input type="text" />
            <label for="intro">主机名：</label>
            <textarea rows="12"></textarea>
            <label for="mobilePhone">初值：</label>
            <input type="text" />
            <label>性别：</label>
            <div class="actions">
                <TheButton :kind="BUTTON_KIND.REVERSE">取消</TheButton>
                <TheButton :kind="BUTTON_KIND.PRIMARY">确认</TheButton>
            </div>
        </form>
    </div>
</template>
<script setup>
import { BUTTON_KIND } from '@/constants';
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';
import TheButton from '@/components/TheButton.vue';
</script>
<style>
.title {
    margin-bottom: 42px;
    font-size: 24px;
    font-weight: 600;
}

.inputFile {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
}

.profileForm {
    display: grid;
    grid-template-columns: max-content 1fr;
    row-gap: 32px;
    column-gap: 10px;
    margin-top: 38px;
}

.profileForm>label {
    grid-column: 1 / 2;
    justify-self: end;
    position: relative;
    top: 6px;
}

.profileForm .actions {
    grid-column: 1 / 3;
    justify-self: end;
    display: flex;
    gap: 16px;
}
</style>