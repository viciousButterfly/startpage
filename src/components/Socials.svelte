<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Add font awesome icons -->
<fa>
  <a href="https://www.github.com/" class="fa fa-github"> </a>
  <a href="https://www.gitlab.com/" class="fa fa-gitlab"> </a>
  <a href="https://www.facebook.com/" class="fa fa-facebook"> </a>
  <a href="https://www.twitter.com" class="fa fa-twitter"> </a>
  <a href="https://www.instagram.com/" class="fa fa-instagram"> </a>
  <a href="https://web.whatsapp.com/" class="fa fa-whatsapp"> </a>
</fa>

<style>
fa {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 30px;
  height: 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  border: none;
  gap: 20px;
}

/* hover effect */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */
/* Github */
.fa-github {
  background: #090909;
  color: white;
} 

/* Gitlab */
.fa-gitlab {
  background: #f46207;
  color: white;
} 

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;
}

/* Twitter */
.fa-twitter {
  background: #55ACEE;
  color: white;
} 

/* Instagram */
.fa-instagram {
  background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
  color: white;
} 

/* Whatsapp */
.fa-whatsapp {
  background: #1fb31f;
  color: white;
}

</style>