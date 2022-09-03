import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root{
    --primary:#a31913;
    --primaryHover:#811410;
    --secondary:#7c7c7c;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --alertBad: #f8d7da;
    --gris:#adb5bd;
    --gris-fondo-btn: #e9ecef;
    --gris-border-btn:#ced4da;
    --gris-fondo-body:#f3f4f7;
    --fondo-menu:#354558;
    --color-text:#5b5b5b;
} 

body {
  background: var(--gris-fondo-body);
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
a{
  text-decoration: none;
}
` 


export default GlobalStyle;