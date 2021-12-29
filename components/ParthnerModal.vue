<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal my-form">
            <div v-if="!success">
              <h1>Оставьте заявку и мы с вами свяжемся</h1>
              <input v-model="name" type="name" placeholder="Имя" />
              <input
                v-model="firstname"
                type="lastname"
                placeholder="Фамилия"
              />
              <input v-model="phone" type="phone" placeholder="Телефон" />
              <input v-model="company" type="text" placeholder="Компания" />
              <button class="btn btn-primary" @click="sendForm()">
                Отправить
              </button>
            </div>
            <div v-else>
              <h1>
                Ваша заявка успешно отрпавленна в скором времени мы с вами
                сяжемся
              </h1>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen">Стать партнером</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isOpen: false,
      success: false,
      name: null,
      firstname: null,
      phone: null,
      company: null,
    };
  },
  methods: {
    sendForm() {
      this.$axios
        .$post("https://srv.allmy.blog/api/telegrams/notification", {
          firstname: this.name,
          surname: this.firstname,
          phone: this.phone,
          company: this.company,
        })
        .then(() => {
          this.success = true;
        });
    },
  },
};
</script>

<style scoped>
.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: hsl(0, 0%, 14%);
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 10px 30px;
  border: 3px solid #f72e1a;
  box-sizing: border-box;
  border-radius: 19.5px;
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  text-align: center;
  display: flex;
  margin: 0 auto;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.045em;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
.my-form select,
.my-form input,
.my-form textarea,
.my-form button {
  width: 100%;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);
  color: #fff;
  background: hsl(0, 0%, 14%);
  box-sizing: border-box;
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
}
.my-form h1 {
  color: #fff;
  font-family: "Bebas Neue";
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}
.my-form .btn-primary {
  width: auto;
  margin: 0 auto;
  padding: 10px;
  border: 3px solid #f72e1a;
  font-size: 27px;
  background: transparent;
  padding: 5px 30px;
}
</style>
