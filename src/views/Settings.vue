<template>
  <section id="settings" :style="{ backgroundImage: `url(${backgroundImage})`}" class="pb-20">
    <b-container>
      <h5 class="pt-5 font-black">Account Settings</h5>
      <b-card class="my-8">
        <fieldset>
          <b-form>
            <legend class="flex items-center">
              <img :src="legendIcon" class="mr-2" alt /> Personal Information
            </legend>
            <p
              class="font-semibold tracking-wider"
            >Use this page to update your contact Information and change your password</p>
            <div class="flex py-3 items-center">
              <img class="h-16 w-16 md:h-24 md:w-24 mr-4" :src="getAvatar" alt="Your Profile Image" />
              <div class="text-left flex-col justify-center pt-2">
                <!-- <a
                  href="#"
                  aria-describedby="file-upload"
                  class="font-semibold underline leading-loose"
                >
                  Upload a new profile picture
                  <input type="file" @change="handleFileChange" />
                </a>-->
                <label class="file-select underline leading-loose">
                  Upload a new profile picture
                  <input type="file" @change="handleFileChange" />
                </label>
                <p
                  id="file-upload"
                  class="faded-gray mt-2"
                >Maximum size allowed is 600kb of PNG, JPEG,JPG.</p>
              </div>
            </div>
            <b-row>
              <b-col md="4">
                <label for="email-address">Email Address</label>
                <b-input type="email" id="email-address" value="amarachukwu@gmail.com" disabled></b-input>
              </b-col>
            </b-row>
            <b-row class="my-4">
              <b-col sm>
                <label for="first-name">Full Name</label>
                <b-input type="email" id="first-name" value="Olatunji Joseph"></b-input>
              </b-col>
              <b-col sm>
                <label for="user-name">User Name</label>
                <b-input type="email" id="user-name" value="Madjozi"></b-input>
              </b-col>
              <b-col sm>
                <label for="birth-date">Birth Date</label>
                <b-input type="email" id="birth-date" value="07/15/1990" disabled></b-input>
              </b-col>
            </b-row>
            <b-button class="p-2">Save Changes</b-button>
            <hr class="line-down mt-4" />
            <b-row class="my-4">
              <b-col sm>
                <label for="current-password">Current Password</label>
                <b-input type="password" id="current-password" value="secretpin"></b-input>
              </b-col>
              <b-col sm>
                <label for="new-password">New Password</label>
                <b-input type="password" id="new-password"></b-input>
              </b-col>
              <b-col sm>
                <label for="confirm-password">Confirm Password</label>
                <b-input type="password" id="confirm-password"></b-input>
              </b-col>
            </b-row>
            <b-button>Save Changes</b-button>
          </b-form>
        </fieldset>
      </b-card>

      <b-card class="my-4">
        <fieldset>
          <b-form>
            <legend class="flex items-center">
              <img :src="legendIcon" class="mr-2" alt />
              Change your state of Residence
            </legend>
            <p
              class="font-semibold tracking-widest"
            >Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <b-row>
              <b-col md="4">
                <label for="current-state">Current State</label>
                <b-input type="text" id="current-state" value="Niger" disabled></b-input>
              </b-col>
            </b-row>

            <b-row class="my-4">
              <b-col md="4" class="mb-3">
                <label for="State-of-origin">New State of Residence</label>
                <b-input type="text" id="State-of-origin"></b-input>
              </b-col>
              <b-col md="4" class="mb-3">
                <label for="LGA">What LGA do you live in?</label>
                <b-input type="text" id="LGA"></b-input>
              </b-col>
              <b-col md="4" class="mb-3">
                <label for="federal-constituency">Federal Constituencies</label>
                <b-input type="text" id="federal-constituency"></b-input>
              </b-col>
              <b-col md="4" class="mb-3">
                <label for="senatorial-district">Senatorial District</label>
                <b-input type="text" id="senatorial-district"></b-input>
              </b-col>
              <b-col md="4" class="mb-3">
                <label for="state-constituency">State Constituencies</label>
                <b-input type="text" id="state-constituency"></b-input>
              </b-col>
            </b-row>
            <b-button>Save Changes</b-button>
          </b-form>
        </fieldset>
      </b-card>
    </b-container>
  </section>
</template>
<script>
import getAvatar from "@/assets/image/avatar.png";
import legendIcon from "@/assets/image/svg-ting.png";
import backgroundImage from "@/assets/image/shapes-background-2.png";
export default {
  data() {
    return {
      getAvatar,
      legendIcon,
      backgroundImage
    };
  }
};
</script>
<style lang="scss" scoped>
.card {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05),
    0px 10px 20px rgba(46, 91, 255, 0.07);
  border: 1px solid #e5e5e5;
  border-radius: 0;
  // background: red;
}
.file-select {
  text-transform: capitalize !important;
  color: black;
  background-color: none;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>