<template>
    <div class="common-layout ">
        <el-container class="h-max">
            <el-aside>
                <!-- <el-col :span="12"> -->
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1-1">
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>{{ HOME_MAIN.ITEMS_ONE }}</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <el-icon>
                            <PieChart />
                        </el-icon>
                        <span>{{ HOME_MAIN.ITEMS_TWO }}</span>
                    </el-menu-item>
                    <el-sub-menu index="1-3">
                        <template #title>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <span>{{ HOME_MAIN.ITEMS_THREE }}</span>
                        </template>
                        <el-menu-item index="1-1">{{ HOME_MAIN.ITEMS_THREE_FIRST }}</el-menu-item>
                        <el-menu-item index="1-2">{{ HOME_MAIN.ITEMS_THREE_SECOND }}</el-menu-item>
                        <el-menu-item index="1-3">{{ HOME_MAIN.ITEMS_THREE_THIRD }}</el-menu-item>
                        <el-menu-item index="1-4">{{ HOME_MAIN.ITEMS_THREE_FOURTH }}</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-4">
                        <template #title>
                            <el-icon>
                                <Message />
                            </el-icon>
                            <span>{{ HOME_MAIN.ITEMS_FOUR }}</span>
                        </template>
                        <el-menu-item index="1-1">{{ HOME_MAIN.ITEMS_FOUR_FIRST }}</el-menu-item>
                        <el-menu-item index="1-2">{{ HOME_MAIN.ITEMS_FOUR_SECOND }}</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="1-5">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>{{ HOME_MAIN.ITEMS_FIVE }}</span>
                    </el-menu-item>
                </el-menu>
                <!-- </el-col> -->
            </el-aside>
        </el-container>
    </div>
</template>
<script setup>
import { Menu as IconMenu, Message, UserFilled, HomeFilled, PieChart } from '@element-plus/icons-vue';
import { HOME_MAIN } from "@/constants/MainPage.constants.js";
</script>
<style scoped>
.title_name {
    font-weight: bold;
    font-size: medium;
}
</style>