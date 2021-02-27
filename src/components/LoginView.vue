<template>
    <v-container fill-height>
        <v-row>
            <v-col class="d-flex justify-center">
                <v-card max-width="600" class="pa-6">
                    <v-form
                        ref="form"
                        v-model="valid"
                        @submit.prevent="loginMethod"
                    >
                        <v-card-title>Welcome to Application</v-card-title>
                        <v-text-field 
                            label="Email"
                            :rules="[
                                v => !!v || 'Email is required',
                                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Enter valid email'
                            ]"
                            data-cy="email-input"
                        />
                        <v-text-field 
                            label="Password"
                            :rules="[
                                v => !!v || 'Password is required'
                            ]"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            data-cy="password-input"
                        />
                        <v-btn
                            color="primary"
                            type="submit"
                            data-cy="submit-input"
                        >
                            Login
                        </v-btn>
                        <v-card-subtitle data-cy="message-input">{{ loginMessage }}</v-card-subtitle>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            valid: true,
            loginData: {
                email: '',
                password: ''
            },
            loginMessage: '',
            show1: false
        }
    },
    methods: {
        loginMethod () {
            if (this.$refs.form.validate()) {
                this.loginMessage = "Login successful"
            }
        }
    }
}
</script>