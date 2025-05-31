<script setup>
// Importa cada componente de icono manualmente
import IconHome from '@/components/icons/IconHome.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconUser from '@/components/icons/IconUser.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconStar from '@/components/icons/IconStar.vue';
import IconSettings from '@/components/icons/IconSettings.vue';

// Lista de componentes para iterar
const icons = [
  IconHome,
  IconSearch,
  IconUser,
  IconCart,
  IconStar,
  IconSettings,
];
</script>
Vue 3 tengo que poner 10 iconos, qué sería mejor, crear 10 componentes, un componente por icon, instalar una librería de iconos para vue 3, meter el svg donde necesite los iconos?

Qué opción sería la más recomendable?
<template>
  <div>
    <!-- Itera sobre los componentes -->
    <component
      v-for="(icon, index) in icons"
      :is="icon"
      :key="index"
      :size="24"
      class="text-blue-500"
    />
  </div>
</template>

Versión con Props Dinámicas
Si quieres controlar propiedades como el nombre, color o tamaño desde un array:

vue
<script setup>
// ... mismos imports

const iconList = [
  { component: IconHome, color: "#ff0000", size: 32 },
  { component: IconSearch, color: "#00ff00", size: 24 },
  // ... otros iconos
];
</script>

<template>
  <div>
    <component
      v-for="(item, index) in iconList"
      :is="item.component"
      :key="index"
      :size="item.size"
      :color="item.color"
    />
  </div>
</template>
¿Por qué funciona?
:is acepta componentes importados directamente (no solo strings).

<component> es una utilidad de Vue para renderizar componentes dinámicamente.

Ventajas de este enfoque
Máximo control: Cada icono es un componente Vue con props personalizadas.

0 magia oculta: Todo es explícito y fácil de depurar.

Perfecto para 6 iconos: No necesitas automatizar imports.

Alternativa con Íconos Dinámicos (usando nombres)
Si prefieres usar nombres en lugar de componentes directamente:

vue
<script setup>
import IconHome from '@/components/icons/IconHome.vue';
// ... otros imports

// Objeto con nombres como claves
const iconComponents = {
  home: IconHome,
  search: IconSearch,
  user: IconUser,
  // ... otros
};
</script>

<template>
  <div>
    <component
      v-for="(name, index) in ['home', 'search', 'user']"
      :is="iconComponents[name]"
      :key="index"
      size="24"
    />
  </div>
</template>
Conclusión
Sí, puedes combinar manual imports + v-for sin problemas en Vue 3. Es la mejor opción si:

Tienes pocos iconos.

Quieres mantener el código simple y explícito.

No necesitas escalar a decenas de iconos.

Para proyectos más grandes, considera usar import.meta.glob (como te mostré antes), pero para 6 íconos, ¡esto es perfecto! 😊

