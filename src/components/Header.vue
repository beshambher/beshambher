<template>
    <header class="d-print-none">
      <div class="container text-center text-lg-left">
        <div class="py-3 clearfix">
          <h1 class="site-title mb-0">{{personal.Name}}</h1>
          <div class="site-nav">
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
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    personal: {},
    social: []
  }
}
</script>

<style scoped>
</style>
