<!-- Add Font Awesome CSS file -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

<script>
  export let favorites = [
    {
      link: "https://www.twitter.com/your_twitter_username",
      icon: "fab fa-twitter",
    },
    {
      link: "https://www.facebook.com/your_facebook_username",
      icon: "fab fa-facebook-f",
    },
    {
      link: "https://www.instagram.com/your_instagram_username",
      icon: "fab fa-instagram",
    },
    {
      link: "https://www.linkedin.com/in/your_linkedin_username",
      icon: "fab fa-linkedin-in",
    },
  ];
</script>

<style>
  .social-media-favorites {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }

  .social-media-favorite {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }

  .social-media-favorite i {
    font-size: 24px;
    margin-bottom: 10px;
  }

</style>

<div class="social-media-favorites">
  {#each favorites as favorite}
    <div 
      class="social-media-favorite" 
      on:click={() => window.open(favorite.link, '_blank')}
      on:keydown={(event) => {
        if (event.which === 13) {
          window.open(favorite.link, '_blank')
        }
      }}
      tabindex="0"
    >
      <i class={favorite.icon}></i>
    </div>
  {/each}
</div>
