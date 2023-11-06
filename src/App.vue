<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="max-w-screen-lg w-80 sm:w-full mx-auto m-4 bg-white shadow-lg rounded-2xl sm:p-12 p-8 text-center sm:flex justify-center items-center"
    >
      <div class="flex-1">
        <img
          class="static sm:block hidden overflow-hidden women"
          src="/images/illustration-woman-online-desktop.svg"
          alt=""
        />
        <img
          class="static block sm:hidden w-64 overflow-hidden womens"
          src="/images/illustration-woman-online-mobile.svg"
          alt=""
        />
        <img
          class="absolute sm:block hidden bg"
          src="/images/bg-pattern-desktop.svg"
        />
        <img
          class="absolute block sm:hidden bgs"
          src="/images/bg-pattern-mobile.svg"
        />
        <img
          class="static sm:block hidden overflow-hidden box"
          src="/images/illustration-box-desktop.svg"
        />
      </div>
      <div class="ml-4 flex-1">
        <h1
          class="font-bold sm:text-left text-center text-4xl text-veryDarkDesaturatedBlue mb-5"
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
              :class="{ 'font-bold': faq.showAnswer }"
            >
              {{ faq.question }}
            </p>
            <font-awesome-icon
              class="hover:cursor-pointer text-softRed"
              :class="{ rotated: faq.showAnswer, unrotated: !faq.showAnswer }"
              :icon="['fas', 'chevron-down']"
            />
          </div>
          <div v-if="faq.showAnswer" class="faq-answer">
            <p class="font-thin text-left text-darkGrayishBlue py-2">
              {{ faq.answer }}
            </p>
          </div>
          <hr class="my-2" />
        </div>
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
            "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
          showAnswer: false,
        },
        {
          question: "Can I cancel my subscription?",
          answer:
            "Yes! Send us a message and we’ll process your request no questions asked.",
          showAnswer: false,
        },
        {
          question: "Do you provide additional support?",
          answer:
            "Chat and email support is available 24/7. Phone lines are open during normal business hours",
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

<style scoped>
.rotated {
  transition: transform 0.5s ease;
  transform: rotate(-180deg);
}
.unrotated {
  transition: transform 0.5s ease;
  transform: rotate(0deg);
}
.bg {
  transform: translate(-60%, -72%);
  object-fit: cover;
}
.bgs {
  position: inherit;
}
.women {
  transform: translateX(-25%);
}
.womens {
  position: absolute;
  transform: translateY(-60%);
}
.box {
  transform: translate(-80%, -95%);
}
</style>
