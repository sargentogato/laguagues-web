// 1. Definimos la forma del objeto de TEXTO
export interface FeatureTextItem {
  text: string;
  icon?: string; // El icono es opcional en el objeto de texto
}

// 2. Definimos la forma de la CAJA (Item)
export interface FeatureItem {
  title: string[];
  subtitle: string[];
  defaultIcon?: string; // El icono por defecto es opcional
  texts: FeatureTextItem[]; // 'texts' es un array de 'FeatureTextItem'
}
