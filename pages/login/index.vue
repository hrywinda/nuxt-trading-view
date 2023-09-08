<template>
  <div class="login">
    <div class="left-image basis-full">
      <img src="/sally-13.png" alt="" />
    </div>
    <div class="right-content">
      <h1 class="title font-bold">Welcome back!</h1>
      <h6 class="subheading">Enter your email and password to our dashboard</h6>
      <div class="form-login mt-[48px]">
        <div class="input-wrapper mb-4">
          <label class="mb-2 label-input" for="email">Email</label>
          <InputText id="email" placeholder="ex: hrywinda@gmail.com" v-model="email" />
        </div>
        <div class="input-wrapper mb-8">
          <label class="mb-2 label-input" for="password">Password</label>
          <InputText id="password" placeholder="**********" v-model="password" />
        </div>
        <div class="button-wrapper text-center">
          <button class="btn-primary mb-4">Login</button>
          <GoogleSignInButton @success="onLogginSucces" @error="onLogginError"></GoogleSignInButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { GoogleSignInButton } from "vue3-google-signin";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const onLogginSucces = (response) => {
      const { credential } = response;
      store.dispatch("loginSuccess");
      router.push({ path: "/" });
    };

    const onLogginError = () => {
      console.error("Login failed");
    };

    return {
      onLogginSucces,
      onLogginError,
    };
  },
  components: {
    GoogleSignInButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
});
</script>

<style lang="scss">
.login {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .left-image {
    background: lightblue;
    height: 100%;
  }

  .right-content {
    text-align: left;
    padding: 96px;
  }
}
@media (max-width: 913px) {
  .login {
    display: block;

    .left-image {
      height: unset;

      img {
        margin: auto;
        max-width: 70%;
        height: auto;
      }
    }

    .right-content {
      text-align: center;

      .form-login {
        width: 400px;
        margin: auto;
      }
    }
  }
}

@media (max-width: 425px) {
  .login {
    display: block;

    .left-image {
      height: unset;

      img {
        margin: auto;
        max-width: 70%;
        height: auto;
      }
    }

    .right-content {
      text-align: center;
      padding: 24px;

      .form-login {
        width: 100%;
        margin: auto;

        .input-wrapper {
          width: 100%;
          text-align: left;
        }
      }
    }
  }
}
</style>
