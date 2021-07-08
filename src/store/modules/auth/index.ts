export default {
    namespaced: true,
        state: {
            email:'',
            password: '',
            name:'',
            nickname: '',
            birthday: '',
            phoneNumber: '',
            address: '',
            hit: '',
        },
        mutations: {
            UPDATE_AUTH_EMAIL (state: { email: string; }, payload:string) {
                state.email = payload;
            },
            UPDATE_AUTH_PASSWORD (state: { password: string; }, payload:string) {
                state.password = payload;
            },
            UPDATE_AUTH_NAME (state: { name: string; }, payload:string) {
                state.name = payload;
            },
            UPDATE_AUTH_NICKNAME (state: { nickname: string; }, payload:string) {
                state.nickname = payload;
            },
            UPDATE_AUTH_BIRTHDAY (state: { birthday: string; }, payload:string) {
                state.birthday = payload;
            },
            UPDATE_AUTH_PHONENUMBER (state: { phoneNumber: string; }, payload:string) {
                state.phoneNumber = payload;
            },
            UPDATE_AUTH_ADDRESS (state: { address: string; }, payload:string) {
                state.address = payload;
            },
            UPDATE_AUTH_HIT (state: { hit: string; }, payload:string) {
                state.hit = payload;
            }
        },
        actions: {
        },
        getters: {
        },
    }