import Toast, { useToast, PluginOptions, POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin(nuxtApp => {
    // https://github.com/Maronato/vue-toastification
    nuxtApp.vueApp.use(Toast, {
        position: POSITION.TOP_CENTER,
        timeout: 3000,
    } as PluginOptions);

    return {
        provide: {
            toast: useToast(),
        },
    };
});
