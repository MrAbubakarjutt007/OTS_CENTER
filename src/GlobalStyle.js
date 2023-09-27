import { createGlobalStyle } from "styled-components";

export  const GlobalStyle= createGlobalStyle`
*{
  margin:0;
  pading:0;
  box-sizing:border-box;
  font-family:sans-serif;
} 
html{
    font-size:62.5%;
    overflow-x:hidden;
   
}
h1
{
    
    color:${({theme})=>theme.colors.heading};
    font-size:6rem;
    font-weight:900;
}
h2
{
    
    color:${({theme})=>theme.colors.heading};
    font-size:4.4rem;
    font-weight:300;
    white-space:normal;
    text-align:center;

}
h3
{
    
    color:${({theme})=>theme.colors.heading};
    font-size:2rem;
    font-weight:400;

}
.shadow_data{
   box-shadow:2px 2px 8px 8px  rgb(113, 119, 200); 

}
p
{
  color:${({theme})=>theme.colors.text};
  opacity:0.7;
  font-size:1.5rem;
  line-height:1.5;
  margin-top:1rem;
  font-weight:400;
}
a{
  text-decoration:none;
}
li{
   list-style:none;
}
.container{
  max-width:120rem;
  margin:0 auto;
}
.grid{
  display:grid;
  gap:9rem;

}
.grid-two-column{
   grid-template-columns:repeat(2,1fr);


}
.grid-three-column{
  grid-template-columns:repeat(3,1fr);
}
.grid-four-column{
  grid-template-columns:1fr 1.2fr .5fr .8fr;
}

`;