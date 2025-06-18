<script setup lang="ts">
import IconBase from '@/components/icons/IconBase.vue';
import TitlesParagraph from './TitlesParagraph.vue';
// import { useScrollAnimation } from '@/composables/useScrollAnimation';
// import { onMounted, ref } from 'vue';

// const endOfWeb = ref();
const titleSectionLinks = ["footer.links"];
const titleSocialMedia = ["footer.followUs"];
const titleContact = ["footer.contact"];
const textContact = ["footer.help", "footer.writeUs"];
const emailContact = "marlonjvelasquez@gmail.com"
// const iconBgColor = ref('hsl(200, 80%, 50%)');

// const { registerElements } = useScrollAnimation()
// 
// onMounted(() => {
//   registerElements(endOfWeb.value);
// })

</script>

<template>
  <footer ref="endOfWeb" class="footer" aria-label="end">
    <div class="footer__info">
      <div class="footer__links">
        <TitlesParagraph 
          tag="h3" 
          :texts="titleSectionLinks" 
          font-weight="600" 
          text-transform="uppercase" 
        />
        <RouterLink class="footer__link" :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink class="footer__link" :to="{ name: 'privacyPage' }">{{ $t('footer.privacy') }}</RouterLink>
        <RouterLink class="footer__link" :to="{ name: 'cookiesPage' }">{{$t('footer.cookies')}}</RouterLink>
      </div>
      <div class="footer__rs">
        <div class="footer__icon-text">
          <TitlesParagraph tag="h3" :texts="titleSocialMedia" font-weight="600" text-transform="uppercase" />
        </div>
        <div class="footer__icon-box">
          <IconBase icon-name="IconFacebook" :iconBgColor="iconBgColor" />
          <IconBase icon-name="IconInstagram" />
        </div>
      </div>
      <div class="footer__contact">
        <TitlesParagraph 
          tag="h3"
          :texts="titleContact"
          font-weight="600"
          text-transform="uppercase"
        />
        <div class="footer__questionContact">
          <TitlesParagraph
            tag="p"
            :texts="textContact"
          />
        </div>
        <a class="footer__email" href="mailto:marlonjvelasquez@gmail.com">{{ emailContact }}</a>
      </div>
    </div>
    <div class="footer__design">{{ $t('footer.desing') }}</div>
  </footer>
</template>


<style scoped>
.footer {
  align-items: stretch;
  background-color: var(--primary-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 300px;
  padding: 35px;
  
  animation: aparecerFooter 1s forwards; 
  animation-delay: 2s;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.footer__info {
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer__links,
.footer__rs,
.footer__contact {
  flex-basis: 100%;
}

.footer__link {
  color: var(--white);
}

.footer__rs {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer__icon-box {
  display: flex;
  gap: 15px;
  width: 80px;
}

.footer__questionContact {
  display: flex;
  gap: 5px;
}

.footer__email {
  color: var(--white);
}

.footer__design {
  align-self: flex-end;
  margin-top: 5px;
  text-align: center;
  color: var(--white);
  font-size: 0.8rem;
}

@media screen and (min-width:576px) {
  .footer__links,
  .footer__rs,
  .footer__contact {
    flex-basis: 33.3%;
  }
}

/* Animation*/
@keyframes aparecerFooter {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>