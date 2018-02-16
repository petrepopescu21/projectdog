<template>
    <div>
        <v-container fluid>
            <h1>Doneaza!</h1>
            <div v-if="!success" id="something"></div>
            <v-btn color="info" v-if="!validated&&payment_instance" v-on:click="validate()">Validate</v-btn>
            <v-btn color="success" v-if="validated&&!processing&&!success" v-on:click="sale()">Purchase</v-btn>
            <v-progress-linear :indeterminate="true" v-if="processing||!payment_instance"></v-progress-linear>
            <h2 v-if="success!=null">{{message}}</h2>
        </v-container>
    </div>
</template>

<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
export default {
  data() {
    return {
      payment_instance: null,
      nonce: null,
      validated: false,
      success: null,
      processing: false,
      message: null,
      transactionId: null
    };
  },
  methods: {
    validate() {
      this.payment_instance.requestPaymentMethod((err, payload) => {
        if (!err) this.validated = true;
        this.nonce = payload.nonce;
      });
    },
    sale() {
      this.processing = true;
      axios
        .post("https://coltalbdonations.herokuapp.com/checkouts", {
          payment_method_nonce: this.nonce
        })
        .then(res => {
          console.log(res.data);
          this.processing = false;
          if (!res.data.error) {
            this.success = true;
            this.message =
              "Thank you for your donation! Your transaction ID is " +
              res.data.transactionId;
          } else {
            this.success = false;
            this.message =
              "Something went wrong - your card has not been charged. Please try again";
          }
        });
    }
  },
  mounted() {
    var button = document.querySelector("#submit-button");
    var _this = this;
    axios.get("https://coltalbdonations.herokuapp.com/getToken").then(res => {
      dropin.create(
        {
          authorization: res.data.clientToken,
          container: "#something"
        },
        function(err, instance) {
          _this.payment_instance = instance;
        }
      );

      // function(createErr, instance) {
      //   button.addEventListener("click", function() {
      //     instance.requestPaymentMethod(function(
      //       requestPaymentMethodErr,
      //       payload
      //     ) {
      //       axios.post("http://localhost:3000/checkouts", {
      //         payment_method_nonce: payload.nonce
      //       });
      //     });
      //   });
      // }
    });
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
