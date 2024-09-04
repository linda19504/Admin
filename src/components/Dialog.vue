<template>
    <el-dialog v-model="dialogVisible" title="Tips" width="500" center>
        <span>
            {{ HOME_MAIN.SUBMIT_ITEMS }}
        </span>
        <template #footer>
            <div class="dialog-footer">
                <el-button  @click="dialogVisible = false">取消</el-button>
                <el-button type="primary"  @click="dialogVisible = false">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import { defineEmits } from 'vue';
import { HOME_MAIN } from "@/constants/MainPage.constants.js";
// const emit = defineEmits(['confirmDialog', 'cancelDialog']);
    // const confirmDialog = () => {
    //   emit('confirmDialog');
    //   dialogVisible.value = false;

    // };
    // const cancelDialog = () => {
    //     dialogVisible.value = true;
    //    emit('cancelDialog');
    // };

const dialogVisible = defineModel(false);

// const handleClose = () => {
//     ElMessageBox.confirm(HOME_MAIN.SUBMIT_ITEMS)
//         .then(() => {
//             dialogVisible.value = false;
//         })
//         .catch(() => {
//             alert('Are you sure to close ?')
//         })
// };
</script>


