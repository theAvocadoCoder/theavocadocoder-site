<template>
  <div>
    <!-- HERO -->
    <section id="home" class="flex pt-44 justify-center h-screen">
      <div class="m-2">
        <div class="">
          <div class="flex flex-col gap-4">
            <div class="object-cover flex items-center justify-center">
              <img
                class="h-40 rounded-full"
                src="@/assets/profile-image.jpg"
                alt="image of Kelechi"
              />
            </div>

            <div class="flex self-center text-3xl font-sans font-bold">
              <h1 class="">🥑 K, a curious avocado</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="">
      <div class="">
        <div class="">
          <div class="">
            <h3 class="">About Me</h3>

            <p>
              I am a self-taught front-end web developer, constantly seeking out
              fun ways to learn new things. I enjoy novelty and creative
              expression.
            </p>

            <p>
              I strongly believe that learning never stops and I rarely turn
              down an opportunity to acquire new knowledge. On my journey of
              self-actualization, I have picked up a few skills which I
              constantly develop.
            </p>
          </div>
        </div>
        <div class="">
          <div class="">
            <h3>Integer volutpat</h3>
            <p>
              Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec
              lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut
              blandit, risus in venenatis ultricies, lacus tellus fermentum.
            </p>
          </div>
          <div class="">
            <h3>Mauris semper</h3>
            <p>
              Cras et nisl vestibulum, accumsan elit sed, pretium enim.
              Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu
              turpis et, commodo pulvinar leo.
            </p>
          </div>
          <div class="">
            <h3>Integer id neque</h3>
            <p>
              Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida
              euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex
              tristique gravida quis eget eros.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="">
      <div class="">
        <div class="">
          <div class="">
            <form action="#" method="get" class="" role="form">
              <div class="">
                <input
                  type="text"
                  class=""
                  name="cf-name"
                  id="cf-name"
                  placeholder="Your Name"
                />

                <label for="cf-name" class="">Full Name</label>
              </div>

              <div class="">
                <input
                  type="email"
                  class=""
                  name="cf-email"
                  id="cf-email"
                  placeholder="Your Email"
                />

                <label for="cf-email" class="">Your Email</label>
              </div>

              <div class="">
                <textarea
                  class=""
                  s="5"
                  name="cf-message"
                  id="cf-message"
                  placeholder="Your Message"
                ></textarea>

                <label for="cf-message" class="">Message</label>
              </div>

              <button type="submit" class="" id="submit-button" name="submit">
                Send
              </button>
            </form>
          </div>

          <div class="">
            <h3 class="">Hit Me Up!</h3>

            <a href="tel: +2348061116006">+234 806 1116 006</a>

            <p>
              <a href="#">
                theavocadocoder@gmail.com
                <span></span>
              </a>
            </p>

            <ul class="">
              <li><a href="#" rel="noopener" class=""></a></li>
              <li><a href="#" rel="noopener" class=""></a></li>
              <li><a href="#" rel="noopener" class=""></a></li>
              <li><a href="#" rel="noopener" class=""></a></li>
              <li><a href="#" rel="noopener" class=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 
