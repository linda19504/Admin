<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple">cell 1</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple">cell 2</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple">cell 3</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ep-bg-purple">cell 4</div>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.ep-bg-purple {
    background-color: purple;
}
</style>