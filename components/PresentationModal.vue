<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal my-form">
            <div class="parthners__presentation" style="margin-top:0;">
              <client-only>
                <splide>
                  <splide-slide v-for="id in sliders" :key="id">
                    <img
                      :src="
                        require(`~/assets/img/presentation/Чингисхан_page-${id}.jpg`)
                      "
                      width="100%"
                      alt=""
                    />
                  </splide-slide>
                </splide>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen" class="btn btn-transparent">
      <svg-icon name="play-svgrepo-com" fill="#FACF43" width="21" height="21" />
      Презентация
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isOpen: false,
      sliders: [
        "0001",
        "0002",
        "0003",
        "0004",
        "0005",
        "0006",
        "0007",
        "0008",
        "0009",
        "0010",
        "0011",
        "0012",
      ],
      options: {
        rewind: true,
        width: 800,
        perPage: 2,
        gap: "1rem",
      },
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
  width: 700px;
  margin: 0px auto;
  padding: 20px;
  background-color: #000;
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
.btn-transparent {
  background-color: transparent;
  border: 3px solid #facf43;
  box-sizing: border-box;
  border-radius: 19.5px;
  font-family: "Intro";
  box-shadow: 0px 0px 20px 5px rgb(250 207 67 / 50%);
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
