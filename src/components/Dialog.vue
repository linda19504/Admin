<template>
    <el-dialog v-model="dialogVisible" title="Tips" width="500" center :before-close="handleClose">
        <span>
            {{ HOME_MAIN.SUBMIT_ONE }}
        </span>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="cancelDialog">Cancel</el-button>
                <el-button type="primary" @click="confirmDialog">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref } from 'vue';
import { defineComponent, defineEmits } from 'vue';
import { HOME_MAIN } from "@/constants/MainPage.constants.js";
import { ElMessageBox } from 'element-plus';
const emit = defineEmits(['confirmDialog', 'cancelDialog']);
    const confirmDialog = () => {
      emit('confirmDialog');
    };

    const cancelDialog = () => {
      emit('cancelDialog');
    };

const dialogVisible = ref(true);
const handleClose = () => {
    ElMessageBox.confirm('HOME_MAIN.SUBMIT_ITEMS')
        .then(() => {
            done()
        })
        .catch(() => {
        })
};
</script>


