<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: title => {
        if (title === 'Katka Market') {
            return title;
        } else if (title) {
            return title + ' - Katka Market';
        }

        return 'Katka Market';
    },
});
</script>
