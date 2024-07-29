<template>
    <button :class="classes" :title="label" @click="clickAction">
        <slot></slot>
    </button>
</template>
<script setup>
import { EMPTY_FUNC, BUTTON_KIND } from "@/constants";
import classnames from "classnames";

const props = defineProps({
    name: 'button',
    kind: {
        type: String,
        default: "BUTTON_KIND.PRIMARY",//secondary，tertiary
    },
    label: {
        type: String,
        default: "",
    },
    size: {
        type: String,
        default: "BUTTON_SIZE.STANDARD",
    },
    clickAction: {
        type: Function,
        default: EMPTY_FUNC,
    }
});

const classes = classnames('button', {
    'button--primary': props.kind === BUTTON_KIND.PRIMARY,
    'button--reverse': props.kind === BUTTON_KIND.REVERSE,
});

</script>
<style scoped>
.button {
    border-radius: none;
    padding: 10px 32px;
    border: none;
    color: white;
    font-size: 16px;
}

.button--primary {
    background: #1da0ff;
}

.button--reverse {
    background: none;
    border: 1px solid rgb(245, 246, 243);
    color: initial;
}
</style>