<template>
    <div>
        <v-container fluid>
            <h1>Doneaza</h1>
            <p>Aici scriem ceva info despre cum functioneaza donatia recurenta</p>

            <v-stepper v-model="recdonate">
              <v-stepper-header>
                <v-stepper-step step="1" :complete="recdonate>1">
                  Informatii Personale
                </v-stepper-step>
                <v-divider />
                <v-stepper-step step="2" :complete="recdonate>2">
                  Optiuni Donatie
                </v-stepper-step>
                <v-divider />
                <v-stepper-step step="3" :complete="recdonate>3">
                  Metoda de plata  
                </v-stepper-step>
                <v-divider />
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="input-1"
                        label="Nume"
                        id="testing"
                      ></v-text-field>
                    </v-flex>
                    
                    
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="input-1"
                        label="Prenume"
                        id="testing"
                      ></v-text-field>
                    </v-flex>
                    
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="input-1"
                        label="E-mail"
                        id="testing"
                      ></v-text-field>
                    </v-flex>
                     
                  </v-layout>
                  <v-btn color="primary" @click.native="recdonate = 2">Continua</v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-container fluid>
                  <h4>{{donateQuestion}}</h4>
                  <v-layout wrap>
                    <v-flex xs12 md10>
                      <v-slider v-model="recvalue" step="0.5" min="1" max="20"></v-slider>
                    </v-flex>
                    <v-spacer />
                    <v-flex xs12 md2>
                      <h1>€{{prettyrecvalue}}</h1>
                    </v-flex>
                  </v-layout>
                  <template v-if="donationtype==1">
                  <h4>In ce zi a lunii doresti sa efectuezi donatia?</h4>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-select
                        :items="recdateitems"
                        v-model="recdate"
                        single-line
                        bottom
                      ></v-select>
                    </v-flex>
                    </v-layout>
                    </template>
                    <v-layout>
                    <v-flex xs12>
                      <h4>Doresti sa donezi o singura data, fara recurenta lunara?</h4>
                      <v-select :items="donationtypeitems" v-model="donationtype" single-line bottom></v-select>
          
                    </v-flex>
                  </v-layout>
                  </v-container>
                  <v-btn color="light" @click.native="recdonate = 1">Inapoi</v-btn>
                  <v-btn color="primary" @click.native="recdonate = 3">Continua</v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <div v-if="!success" id="something"></div>
                  <v-btn color="light" @click.native="recdonate = 2">Inapoi</v-btn>
                  <v-btn color="info" v-if="!validated&&payment_instance" v-on:click="validate()">Doneaza</v-btn>
                  <v-progress-linear :indeterminate="true" v-if="processing||!payment_instance"></v-progress-linear>
                  
                  <h2 v-if="success!=null">{{message}}</h2>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
            
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
      transactionId: null,
      recdonate: 0,
      recvalue: 2.5,
      donationtype: 1,
      donationtypeitems: [
        {value:1,text:"Lunar"},
        {value:0,text:"O singura data"}
      ],
      recdate: {value:"0",text:"Imediat"},
      recdateitems: [
        {text:'Imediat',value:'0'},
        {text:'1',value:'1'},
        {text:'15',value:'15'},
        {text:'28',value:'28'}
      ]
    };
  },
  computed: {
    prettyrecvalue() {
      return this.recvalue.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
    donateQuestion() {
      return (this.donationtype==1)?"Cat vrei sa donezi lunar?":"Cat vrei sa donezi?"
    }
  },
  methods: {
    validate() {
      this.payment_instance.requestPaymentMethod((err, payload) => {
        if (!err) this.validated = true;
        this.nonce = payload.nonce;
        this.sale();
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
          container: "#something",
          card: {
            cardholderName: true,
            overrides: {
              styles: {}
            }
          }
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
  max-width: 800px;
}
</style>
