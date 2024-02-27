<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: title => {
        if (title === 'Buhspace') {
            return title;
        } else if (title) {
            return title + ' - Buhspace';
        }

        return 'Buhspace';
    },
});
</script>
