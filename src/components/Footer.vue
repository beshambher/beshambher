<template>
    <footer class="pt-4 pb-4 text-muted text-center d-print-none">
      <div class="container">
        <div class="my-3">
          <div class="h4">{{personal.Name}}</div>
          <div class="footer-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item" v-for="s in social" :key="s.title">
                  <a class="nav-link" target="_blank" :href="s.url" :title="s.title">
                    <i class="fab" :class="s.icon"></i><span class="menu-title sr-only">{{s.title}}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- DO NOT REMOVE BELOW LINKS -->
        <div class="text-small">
          <div class="mb-1">&copy; Right Resume. All rights reserved.</div>
          <div>Design - <a href="https://templateflip.com/" target="_blank">TemplateFlip</a></div>
        </div>
        <div class="footer-nav d-inline">
          <nav role="navigation">
            <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link" href="https://twitter.com/templateflip" target="_blank" title="Twitter"><i class="fab fa-twitter"></i><span class="menu-title sr-only">Twitter</span></a>
              </li>
              <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/templateflip" target="_blank" title="Facebook"><i class="fab fa-facebook"></i><span class="menu-title sr-only">Facebook</span></a>
              </li>
              <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/templateflip" target="_blank" title="Instagram"><i class="fab fa-instagram"></i><span class="menu-title sr-only">Instagram</span></a>
              </li>
              <li class="nav-item"><a class="nav-link" href="https://github.com/templateflip" target="_blank" title="Github"><i class="fab fa-github"></i><span class="menu-title sr-only">Github</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    personal: {},
    social: []
  }
}
</script>

<style scoped>
</style>
