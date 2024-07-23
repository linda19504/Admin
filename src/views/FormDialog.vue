<template>
    <el-row :gutter="10">
        <el-col :xl="4">
            <div class="action-bar-left">
                <el-button-group class="ml-4">
                    <el-button type="primary">Edit </el-button>
                    <el-button type="primary">Share</el-button>
                    <el-button type="primary">Delete</el-button>
                </el-button-group>
            </div>
        </el-col>
        <el-col :xl="16">
            <div class="action-bar-center">
                <el-button-group class="ml-4">
                    <el-button type="primary">Edit </el-button>
                    <el-button type="primary">Share</el-button>
                    <el-button type="primary">Delete</el-button>
                </el-button-group>
            </div>
        </el-col>
        <el-col :xl="4">
            <div class="action-bar-right">
                <el-button-group class="ml-4">
                    <el-button type="primary">Edit </el-button>
                    <el-button type="primary">Share</el-button>
                    <el-button type="primary">Delete</el-button>
                </el-button-group>
            </div>
        </el-col>
    </el-row>
</template>

<style>
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.ep-bg-purple {
    background-color: #d3dce6;
}

.ep-bg-purple-light {
    background-color: #e5e9f2;
}
</style>