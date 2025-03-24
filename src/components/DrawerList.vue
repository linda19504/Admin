<template>
    <main>
        <el-drawer v-model="drawer" title="SettingList" :with-header="false">
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
                label-width="auto" class="ruleForm_container">
                <el-form-item label="Id" prop="Id">
                    <el-input v-model="ruleForm.Id" type="Number" autocomplete="off" />
                </el-form-item>
                <el-form-item label="SettingId" prop="SettingId">
                    <el-input v-model="ruleForm.SettingId" type="Number" autocomplete="off" />
                </el-form-item>
                <el-form-item label="key" prop="Key">
                    <el-input v-model="ruleForm.Key" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-drawer>
    </main>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useDrawerStore } from '@/stores/drawer.js'
import { storeToRefs } from 'pinia'
let items = [ ];
const store = useDrawerStore();
const { drawer } = storeToRefs(store)
const ruleFormRef = ref(null);
const ruleForm = reactive({
    Id: '',
    SettingId: '',
    Key: '',
})
const checkKey = (rule, value, callback) => {
    const keyPattern = /^[a-zA-Z_]+$/;
    console.log(value)
    if (!keyPattern.test(value)) {
        return callback(new Error('Key should only contain letters and numbers'))
    } else {
        callback()
    }
};
const validatePass = (rule, value, callback) => {
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(value)) {
        callback(new Error('SettingId should be a number'))
    } else {
        // if (ruleForm.SettingId !== '') {
        //     if (!ruleFormRef.value) return
        //     ruleFormRef.value.validateField('SettingId')
        // }
        callback()
    }
};
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input the Id again'))
    } else if (value !== ruleForm.Id) {
        callback(new Error("Two inputs don't match!"))
    } else {
        callback()
    }
}
const rules = reactive({
    Id: [{ validator: validatePass, trigger: 'blur' }],
    SettingId: [{ validator: validatePass2, trigger: 'blur' }],
    Key: [{ validator: checkKey, trigger: 'blur' }],
})
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
        }
    })
}
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>