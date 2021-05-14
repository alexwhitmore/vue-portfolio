<template>
  <Layout>
    <TheHeroSection />
    <TheIntroSection />
    <TheAboutSection />
    <TheProjectSection :projects="$page.projects.edges" />
    <TheContactSection />
  </Layout>
</template>

<page-query>
query Posts {
  projects: allProjectPost {
    edges {
      node {
        title
        github
        external
        tech
        content
      }
    }
  }
}
</page-query>

<script>
import {
  TheHeroSection,
  TheIntroSection,
  TheAboutSection,
  TheProjectSection,
  TheContactSection,
} from '@/components';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    TheHeroSection,
    TheIntroSection,
    TheAboutSection,
    TheProjectSection,
    TheContactSection,
  },
};
</script>
