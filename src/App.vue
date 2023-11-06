<template>
  <!-- Your existing code -->
  <div
    class="max-w-screen-lg mx-auto m-4 bg-white shadow-lg rounded-lg p-8 text-center flex justify-center items-center"
  >
    <div class="flex-1">
      <img src="images/illustration-woman-online-desktop.svg" alt="" />
    </div>
    <div class="ml-4 flex-1">
      <h1
        class="font-bold text-left text-4xl text-veryDarkDesaturatedBlue mb-5"
      >
        FAQ
      </h1>
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="text-veryDarkGrayishBlue mb-2"
      >
        <div class="flex justify-between items-center">
          <p
            class="hover:text-softRed hover:cursor-pointer"
            @click="toggleAnswer(index)"
          >
            {{ faq.question }}
          </p>
          <img
            v-if="faq.showAnswer"
            class="w-2 hover:cursor-pointer"
            src="images/icon-arrow-up.svg"
            alt=""
          />
          <img
            v-else
            class="w-2 hover:cursor-pointer"
            src="images/icon-arrow-down.svg"
            alt=""
          />
        </div>
        <div v-if="faq.showAnswer" class="faq-answer">{{ faq.answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "How many team members can I invite?",
          answer: "You can invite up to 100 team members",
          showAnswer: false,
        },
        {
          question: "What is the maximum file upload size?",
          answer:
            "No more than 2GB. All files in your account must be fit your allotted storage space",
          showAnswer: false,
        },
        {
          question: " How do I reset my password?",
          answer:
            "Please enter your new password, and then try again later to login again later to complete your registration",
          showAnswer: false,
        },
        {
          question: "Can I cancel my subscription?",
          answer: "",
          showAnswer: false,
        },
        {
          question: "Do you provide additional support?",
          answer: "",
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    },
  },
};
</script>
