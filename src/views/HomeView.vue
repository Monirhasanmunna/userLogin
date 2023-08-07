<script setup>
  import {RouterLink,RouterView} from 'vue-router'
  import router from "@/router";
  import { ref,reactive,computed } from 'vue'

  const registration  = reactive({
    firstName : '',
    lastName  : '',
    userName  : '',
    email     : '',
    password  : '',
    confirmPassword : '',
    isRegistration  : true
  });

  const registrationError = reactive({
    firstNameError : false,
    lastNameError  : false,
    userNameError  : false,
    emailError     : false,
    passwordError  : false,
    confirmPasswordError : false,
    passwordIsMatch : true
  });

  const login = reactive({
    userName  : '',
    password  : '',
    isLogin   : false
  });


  const loginError = reactive({
    userNameError  : false,
    passwordError  : false,
  });


  function registrationComplete(){
    registration.firstName == '' ? registrationError.firstNameError = true : ''
    registration.lastName == '' ? registrationError.lastNameError = true : ''
    registration.userName == '' ? registrationError.userNameError = true : ''
    registration.email == '' ? registrationError.emailError = true : ''
    registration.password == '' ? registrationError.passwordError = true : ''
    registration.confirmPassword == '' ? registrationError.confirmPasswordError = true : ''

    if(registration.firstName != '' && registration.lastName != '' && registration.userName != '' && registration.email != '' && registration.password != '' && registration.confirmPassword != ''){
      if(registration.password == registration.confirmPassword){
        registration.isRegistration = true
      }else{
        registrationError.passwordIsMatch = false
      }
    }
  }


  function loginFunction(){
    if(registration.userName == login.userName && registration.password == login.password && login.userName != '' && login.password != ''){
      login.isLogin = true
      if(login.isLogin == true){
        console.log('login')
        router.push({name:'welcome'})
      }
    }else{
      loginError.userNameError = true
      loginError.passwordError = true
    }
  }

</script>

<template>
  <section v-if="true == registration.isRegistration">
    <div class="container-fluid px-0">
      <div class="wraper">
        <div class="login-form">
          <div class="row">
            <div class="icon">
              <a href="#"><i class="icon-1 fab fa-facebook-f"></i></a>
              <a href="#"><i class="icon-2 fab fa-google"></i></a>
            </div>

            <div class="title mb-3 text-center text-white text-capitalize">
              <h2>log in</h2>
            </div>
            <div class="col-12">
              <form class="form">

                <div class="form-group mb-3">
                  <input class="form-control user-name" type="text" placeholder="User Name" v-model="login.userName" required>
                  <p class="text-danger text-small" v-if="loginError.userNameError == true">Enter valid user name</p>
                </div>

                <div class="form-group mb-3">
                  <input class="form-control password" type="password" placeholder="Password" v-model="login.password" required>
                  <p class="text-danger text-small" v-if="loginError.passwordError == true">Enter valid password</p>
                </div>

                <div class="button mb-4">
                  <button type="button" class="btn form-btn" @click="loginFunction()">Submit</button>
                </div>
              </form>
                <div class="forgot-pass  text-light ">
                  <a href="javascript:void(0)" @click="registration.isRegistration = false">
                    <h6>Registration</h6>
                  </a>
                </div>

              
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section v-if="false == registration.isRegistration">
    <div class="container-fluid px-0">
      <div class="wraper">
        <div class="login-form">

          <div class="row">


            <div class="title mb-3 text-center text-white text-capitalize">
              <h2>Registration</h2>
            </div>
            <div class="col-12">
              <form class="form">
                <div class="form-group mb-3">
                  <input class="form-control user-name" type="text" placeholder="First Name" v-model="registration.firstName" required>
                  <p class="text-danger text-small" v-if="registrationError.firstNameError == true">please enter your first name</p>
                </div>
                <div class="form-group mb-3">
                  <input class="form-control user-name" type="text" placeholder="Last Name" v-model="registration.lastName" required>
                  <p class="text-danger text-small" v-if="registrationError.lastNameError == true">please enter your last name</p>
                </div>
                <div class="form-group mb-3">
                  <input class="form-control user-name" type="text" placeholder="User Name" v-model="registration.userName" required>
                  <p class="text-danger text-small" v-if="registrationError.userNameError == true">please enter your user name</p>
                </div>
                <div class="form-group mb-3">
                  <input class="form-control user-name" type="email" placeholder="Email" v-model="registration.email" required>
                  <p class="text-danger text-small" v-if="registrationError.emailError == true">please enter your email</p>
                </div>

                <div class="form-group mb-3">
                  <input class="form-control password" type="password" placeholder="Password" v-model="registration.password" required>
                  <p class="text-danger text-small" v-if="registrationError.passwordError == true">please enter your password</p>
                </div>
                <div class="form-group mb-3">
                  <input class="form-control password" type="password" placeholder="Confirm Password" v-model="registration.confirmPassword" required>
                  <p class="text-danger text-small" v-if="registrationError.confirmPassword == true">please enter your email</p>
                  <p class="text-danger text-small" v-if="registrationError.passwordIsMatch == false">password not match</p>
                </div>

                <div class="button mb-4">
                  <button type="button" class="btn form-btn" @click="registrationComplete()">Registration</button>
                </div>

              </form>
                <div class="forgot-pass  text-light ">
                  <a href="javascript:void(0)" @click="registration.isRegistration = true">
                    <h6>Login</h6>
                  </a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
