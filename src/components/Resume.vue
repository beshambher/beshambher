<template>
  <div id="top">
      <Header :personal="personal" :social="social"/>

      <div class="page-content">
        <div class="container">
          <div class="cover shadow-lg bg-white">
            <div class="cover-bg p-3 p-lg-4 text-white">
              <div class="row">
                <div class="col-lg-4 col-md-5">
                  <div class="avatar hover-effect bg-white shadow-sm p-1"><img src="@/assets/images/avatar.jpg" width="200" height="200"/></div>
                </div>
                <div class="col-lg-8 col-md-7 text-center text-md-start">
                  <h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{{personal.Name}}</h2>
                  <p data-aos="fade-left" data-aos-delay="100">Full Stack Developer</p>
                  <div class="d-print-none" data-aos="fade-left" data-aos-delay="200">
                    <a class="btn btn-light text-dark shadow-sm mt-1 me-1" :href="resumeLink" target="_blank">Download CV</a>
                    <a class="btn btn-success shadow-sm mt-1 me-1" href="#contact">Hire Me</a>
                    <button class="btn btn-light shadow-sm mt-1" @click="showModal=true">My Projects</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-section pt-4 px-3 px-lg-4 mt-1">
              <div class="row">
                <div class="col-md-6">
                  <h2 class="h3 mb-3">About Me</h2>
                  <p>I am passionate about software development.
                  I am a skilled Backend and Frontend developer having experience of developing enterprise level applications using Agile methodologies.</p>
                </div>
                <div class="col-md-5 offset-md-1">
                  <div class="row mt-2">
                    <template v-for="(value, key) of personal" :key="key">
                      <div class="col-sm-4">
                        <div class="pb-1">{{key}}</div>
                      </div>
                      <div class="col-sm-8">
                        <div class="pb-1 text-secondary">{{value}}</div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <hr class="d-print-none"/>
            <div class="skills-section px-3 px-lg-4">
              <h2 class="h3 mb-3">Professional Skills</h2>
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <template v-for="(skill, i) in skills.backend" :key="skill.key">
                      <div class="col-md-6 mb-2">
                        <span>{{skill.key}}</span>
                        <div class="progress my-1">
                          <div class="progress-bar bg-primary" role="progressbar" :style="{width: skill.value+'%'}"
                            data-aos="zoom-in-right" :data-aos-delay="(i+1)*100" data-aos-anchor=".skills-section"
                            :aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </template>
                    <template v-for="(skill, i) in skills.frontend" :key="skill.key">
                      <div class="col-md-6 mb-2">
                        <span>{{skill.key}}</span>
                        <div class="progress my-1">
                          <div class="progress-bar bg-success" role="progressbar" :style="{width: skill.value+'%'}"
                            data-aos="zoom-in-right" :data-aos-delay="(i+1)*100" data-aos-anchor=".skills-section"
                            :aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </template>
                    <template v-for="(skill, i) in skills.others" :key="skill.key">
                      <div class="col-md-6 mb-2">
                        <span>{{skill.key}}</span>
                        <div class="progress my-1">
                          <div class="progress-bar bg-danger" role="progressbar" :style="{width: skill.value+'%'}"
                            data-aos="zoom-in-right" :data-aos-delay="(i+1)*100" data-aos-anchor=".skills-section"
                            :aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <hr class="d-print-none"/>
            <div class="work-experience-section px-3 px-lg-4">
              <h2 class="h3 mb-4">Work Experience</h2>
              <div class="timeline">
                <template v-for="w in workExperience" :key="w.duration">
                  <div class="timeline-card timeline-card-primary card shadow-sm">
                    <div class="card-body">
                      <div class="h5 mb-1">{{w.title}} <span class="text-muted h6">at {{w.company}}</span></div>
                      <div class="text-muted text-small mb-2">{{w.duration}}</div>
                      <div>{{w.description}}</div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <hr class="d-print-none"/>
            <div class="page-break"></div>
            <div class="education-section px-3 px-lg-4">
              <h2 class="h3 mb-4">Education</h2>
              <div class="timeline">
                <template v-for="e in education" :key="e.duration">
                  <div class="timeline-card timeline-card-success card shadow-sm">
                    <div class="card-body">
                      <div class="h5 mb-1">{{e.school}} </div>
                      <div class="text-muted h6 mb-1">{{e.title}}</div>
                      <div class="text-muted text-small mb-1">{{e.duration}}</div>
                      <div class="text-muted text-small mb-0">{{e.description}}</div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <hr class="d-print-none"/>
            <div class="contant-section px-3 px-lg-4 pb-4" id="contact">
              <h2 class="h3 text mb-3">Contact</h2>
              <div class="row">
                <div class="col-md-7 d-print-none">
                  <div class="my-2">
                  <form action="https://formspree.io/f/mdoypowv" method="POST">
                    <div class="row">
                      <div class="col-6">
                        <input class="form-control" type="text" id="name" name="name" placeholder="Your Name" required>
                      </div>
                      <div class="col-6">
                        <input class="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required>
                      </div>
                    </div>
                    <div class="form-group my-2">
                      <textarea class="form-control" style="resize: none;" id="message" name="message" rows="4"  placeholder="Your Message" required></textarea>
                    </div>
                    <button class="btn btn-primary mt-2" type="submit">Send</button>
                  </form>
                  </div>
                </div>
                <div class="col">
                  <div class="mt-2">
                    <h3 class="h6">Address</h3>
                    <div class="pb-2 text-secondary">{{personal.Address}}</div>
                    <!--
                    <h3 class="h6">Phone</h3>
                    <div class="pb-2 text-secondary">{{personal.Phone}}</div>
                     -->
                    <h3 class="h6">Email</h3>
                    <div class="pb-2 text-secondary">{{personal.Email}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer :personal="personal" :social="social"/>

      <div class="modal fade" tabindex="-1" role="dialog" :class="{show: showModal, 'd-block': showModal}">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header p-2">
              <h6 class="modal-title">My Projects</h6>
              <button type="button" class="btn btn-close" data-dismiss="modal" aria-label="Close" @click="showModal=false">
              </button>
            </div>
            <div class="modal-body">
              <div class="row g-3">
                <template v-for="project in projects" :key="project.title">
                  <div class="col">
                    <a :href="project.url" target="_blank" class="text-dark text-decoration-none">
                      <div class="card shadow-sm">
                        <img :src="project.image" :alt="project.title" class="bd-placeholder-img card-img-top" width="100%" height="225"/>
                        <div class="card-body py-2">
                          <h2 class="display-6 lh-1 fw-bold">{{project.title}}</h2>
                          <p class="card-text">{{project.description}}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                              <i class="fas fa-globe me-1"></i>
                              <a :href="project.url" target="_blank" class="text-link text-decoration-link">{{project.title}}</a>
                            </small>
                            <small class="text-muted"><i class="fas fa-user me-1"></i>{{project.author}}</small>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </template>
              </div>
            </div>
            <div class="modal-footer p-1">
              <button type="button" class="btn btn-sm btn-danger mx-auto" data-dismiss="modal" @click="showModal=false">Ok</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import resumeLink from '@/assets/docs/BeshambherChaukhwan.pdf';

export default {
  name: 'Resume',
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      showModal: false,
      personal: {
        Name: 'Beshambher Chaukhwan',
        DOB: '30 Jan 1995',
        Email: 'bchaukh@gmail.com',
        // Phone: '+49-',
        Address: 'Berlin, Germany'
      },
      social: [
        { title: 'GitHub', url: 'https://github.com/beshambher', icon: 'fa-github' },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/beshambher-chaukhwan', icon: 'fa-linkedin' },
        { title: 'StackOverFlow', url: 'https://stackoverflow.com/users/6220223/beshambher-chaukhwan', icon: 'fa-stack-overflow' },
        { title: 'LeetCode', url: 'https://leetcode.com/bishamberc/', icon: 'fa fa-file-code' }
      ],
      resumeLink: resumeLink,
      skills: {
        backend: [
          { key: 'Java', value: '100'},
          { key: 'Kotlin', value: '70'},
          { key: 'MySQL', value: '90'},
          { key: 'PostgreSQL', value: '90'},
          { key: 'Spring Boot', value: '85'},
          { key: 'Python', value: '50'},
          { key: 'Django', value: '50'},
          { key: 'PHP', value: '70'},
          { key: 'C++', value: '70'}
        ],
        frontend: [
          { key: 'HTML', value: '100'},
          { key: 'CSS', value: '95'},
          { key: 'JavaScript', value: '90'},
          { key: 'Angular', value: '90'},
          { key: 'Vue.js', value: '70'},
        ],
        others: [
          { key: 'Amazon Web Services (AWS)', value: '70'},
          { key: 'Kafka/Nakadi', value: '85'},
          { key: 'Docker', value: '90'},
          { key: 'Kubernetes', value: '60'},
          { key: 'Git', value: '100'},
          { key: 'Agile Methodology (Jira/Sprint/Kanban)', value: '100'}
        ]
      },
      education: [{
        title: 'Bachelor of Technology, Software Engineering',
        school: 'Delhi Technological University (formely DCE)',
        duration: '2013 - 2017',
        description: 'Grade: 7.7/10'
      }],
      workExperience: [{
         title: 'Senior Software Engineer',
         company: 'Zalando, Germany',
         duration: 'Jul 2024 - Present',
         description: 'As a Senior Backend Developer on the B2B Returns team, I developed and designed ' +
         'microservices using Java/Kotlin (Spring Boot), Python, PostgreSQL, Kafka (Nakadi), Kubernetes, and AWS ' +
         'to facilitate partner returns and reports. I also created architectural designs and automated support tasks with scripts.'
       }, {
         title: 'Software Engineer',
         company: 'Zalando, Germany',
         duration: 'Mar 2022 - Jul 2024',
         description: 'As a backend developer and a core member of the development team, ' +
         'I worked on shipping and returns solutions for partners, focusing on efficient logistics and invoicing within the EU region (B2B). ' +
         'This included design and development of several microservices using Java (Spring Boot), PostgreSQL, Kafka (Nakadi), Kubernetes, and AWS.'
       }, {
        title: 'Lead Software Engineer',
        company: 'Samsung, India',
        duration: 'Mar 2021 - Feb 2022',
        description: 'A member of the server development team as a full stack developer. ' +
        'Designed and development a micro-service for browser notifications using pub-sub mechanism in Spring Boot.'
      }, {
        title: 'Software Engineer',
        company: 'Samsung, India',
        duration: 'July 2017 - Mar 2021',
        description: 'A member of the server development team as a full stack developer for several enterprise solutions. ' +
        'A key player in the development of several micro-services in Spring Boot (Java), Angular and Vue.js (JavaScript).'
      }, {
        title: 'Web Developer Intern',
        company: 'WebMoneyCafe (StartUp)',
        duration: 'Dec 2015 - Feb 2016',
        description: 'Worked as an intern and participated in the development of several web development projects in Laravel and Symfony (PHP).'
      }],
      projects: [{
        title: 'Social Media',
        description: 'A place to connect with the people.',
        logo: 'https://social-media-ibue.onrender.com/assets/images/logo.png',
        image: 'https://social-media-ibue.onrender.com/assets/images/social-media-1.jpg',
        url: 'https://social-media-ibue.onrender.com/',
        location: 'Germany',
        author: 'Beshambher'
      }]
    }
  }
}
</script>

<style scoped>
#top {
  text-align: left;
}
</style>
