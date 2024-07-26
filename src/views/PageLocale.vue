<template>

    <div>
        <p>{{ t('Login') }}</p>



    </div>
</template>
<script set up>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({ inheritLocale: true, useScope: 'local' });
</script>