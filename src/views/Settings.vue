<template>
  <section>
    <h1>Account Settings</h1>
    <b-card class="my-4 shadow-md">
      <h5 class="tracking-widest">Personal Information</h5>
      <p>Use this page to update your contact Information</p>
      <div class="flex rounded-lg p-6">
        <img class="h-16 w-16 h-24 w-24 rounded-full mr-6" src="avatar.jpg" />
        <div class="text-left">
          <p class="text-red-800 font-semibold underline">Upload a new profile picture</p>
          <p class="text-gray-500">Maximum size allowed is 600kb of PNG, JPEG ,JPG.</p>
        </div>
      </div>
      <fieldset>
        <b-form>
          <label for="email-address">Email Address</label>
          <b-input type="email" id="email-address" placeholder="amarachukwu@gmail.com" disabled></b-input>

          <b-row class="my-4">
            <b-col>
              <label for="first-name">Full Name</label>
              <b-input type="email" id="first-name" placeholder="Olatunji Joseph"></b-input>
            </b-col>
            <b-col>
              <label for="user-name">User Name</label>
              <b-input type="email" id="user-name" placeholder="Madjozi"></b-input>
            </b-col>
            <b-col>
              <label for="birth-date">Birth Date</label>
              <b-input type="email" id="birth-date" placeholder="07/15/1990" disabled></b-input>
            </b-col>
          </b-row>
          <b-button class="p-2">Save Changes</b-button>
          <b-row class="my-4">
            <b-col>
              <label for="current-password">Current Password</label>
              <b-input type="password" id="current-password" value="secretpin"></b-input>
            </b-col>
            <b-col>
              <label for="new-password">User Name</label>
              <b-input type="password" id="new-password"></b-input>
            </b-col>
            <b-col>
              <label for="confirm-password">Confirm Password</label>
              <b-input type="password" id="confirm-password"></b-input>
            </b-col>
          </b-row>
          <b-button class="p-2">Save Changes</b-button>
        </b-form>
      </fieldset>
    </b-card>

    <b-card class="my-4 shadow-md">
      <h5 class="tracking-widest">Change State of Residence</h5>
      <p>Use this page to update your contact Information</p>
      <fieldset>
        <b-form>
          <label for="current-state">Current State</label>
          <b-input type="text" id="current-state" placeholder="Niger" disabled></b-input>

          <b-row class="my-4">
            <b-col>
              <label for="State-of-origin">New State of Residence</label>
              <b-input type="text" id="State-of-origin"></b-input>
            </b-col>
            <b-col>
              <label for="LGA">What LGA do you live in?</label>
              <b-input type="text" id="LGA"></b-input>
            </b-col>
            <b-col>
              <label for="federal-constituency">Federal Constituencies</label>
              <b-input type="text" id="federal-constituency"></b-input>
            </b-col>
            <b-col>
              <label for="senatorial-district">Senatorial District</label>
              <b-input type="text" id="senatorial-district"></b-input>
            </b-col>
            <b-col>
              <label for="state-constituency">State Constituencies</label>
              <b-input type="text" id="state-constituency"></b-input>
            </b-col>
          </b-row>
          <b-button class="p-2">Save Changes</b-button>
        </b-form>
      </fieldset>
    </b-card>
  </section>
</template>
