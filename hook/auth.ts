import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {
    const store = useStore();
    const AuthEmail = computed(() => store.state.auth.email);

    return {
        AuthEmail,
    }
}
// email:'',
//             password: '',
//             name:'',
//             nickname: '',
//             birthday: '',
//             phoneNumber: '',
//             address: '',
//             hit: '',
