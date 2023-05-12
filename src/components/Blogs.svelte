<script>
    import Blog from "./Blog.svelte";
    import { onMount } from 'svelte';

    let blogs1 = [
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/03/musicpod-first-look.jpg", title:"MusicPod: A Beautiful Flutter-based Music, Radio, and Podcast Player for Ubuntu", url:"https://news.itsfoss.com/musicpod/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/04/mint-21-2-color-styles.png", title:"Color Variants & Styles Are Coming to Linux Mint 21.2", url:"https://news.itsfoss.com/color-styles-linux-mint/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/03/save-deskop-first-look--1-.jpg", title:"Effortlessly Save Your Linux Desktop Settings with SaveDesktop", url:"https://news.itsfoss.com/savedesktop/"}
    ];

    let blogs2 = [
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/03/ubuntu-cinnamon-official-flavour.png", title:"Ubuntu Cinnamon Gets Official Ubuntu Flavor Status", url:"https://news.itsfoss.com/ubuntu-cinnamon-official/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/04/linux-lite-6-4-released.jpg", title:"Linux Lite 6.4 Gets Lighter With More Features like WebP Image Support", url:"https://news.itsfoss.com/linux-lite-6-4-released/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/03/scrcpy-2-0-release-with-audio-support.png", title:"Open-Source Android Mirroring App Scrcpy 2.0 Adds Audio Support", url:"https://news.itsfoss.com/scrcpy-2-0-release/"}
    ];

    let blogs3 = [
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/05/gnome-files-new-column-chooser.png", title:"GNOME Files to Drop Old-School Column Chooser, Now Lets You Easily Configure It", url:"https://news.itsfoss.com/gnome-column-chooser/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/05/zinc-first-look.png", title:"Zinc: A New Ubuntu-Based Distro With Nemo File Manager and XFCE Desktop", url:"https://news.itsfoss.com/zinc-distro/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/05/blackhole-music-app.png", title:"Upgrade Your Music Experience with This Spotify-like Open Source Mobile Music Player", url:"https://news.itsfoss.com/blackhole-music-app/"}
    ]

    let blogs4 = [
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/04/pano-clipboard-manager.jpg", title:"Pano Clipboard Manager is An Awesome GNOME Extension You Need", url:"https://news.itsfoss.com/pano-clipboard-manager/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/05/gnome-to-replace-new-console-with-old-terminal.jpg", title:"GNOME is Considering to Bring Back Terminal App to Replace the New Console", url:"https://news.itsfoss.com/gnome-terminal-console/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/04/debian-12-new-features.png", title:"Debian 12 'Bookworm' New Features and Release Date", url:"https://news.itsfoss.com/debian-12-features/"}
    ]

    let blogs5 = [
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/03/scrcpy-2-0-release-with-audio-support.png", title:"Open-Source Android Mirroring App Scrcpy 2.0 Adds Audio Support", url:"https://news.itsfoss.com/scrcpy-2-0-release/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/05/snapshot-gnome-app.jpg", title:"Say Cheese to the Future: Snapshot is GNOME's Next-Gen Camera App", url:"https://news.itsfoss.com/gnome-snapshot/"},
      {image_url:"https://news.itsfoss.com/content/images/size/w1304/2023/04/mint-21-2-color-styles.png", title:"Color Variants & Styles Are Coming to Linux Mint 21.2", url:"https://news.itsfoss.com/color-styles-linux-mint/"}
    ]

</script>

<blogs>
  <div class="blog-container">
    {#each blogs3 as blog}
      <Blog imageUrl={blog.image_url} title={blog.title} url={blog.url}/>
    {/each}
  </div>
  <div class="blog-container">
    {#each blogs2 as blog}
      <Blog imageUrl={blog.image_url} title={blog.title} url={blog.url}/>
    {/each}
  </div>
  <div class="blog-container">
    {#each blogs4 as blog}
      <Blog imageUrl={blog.image_url} title={blog.title} url={blog.url}/>
    {/each}
  </div>
  <div class="blog-container">
    {#each blogs5 as blog}
      <Blog imageUrl={blog.image_url} title={blog.title} url={blog.url}/>
    {/each}
  </div>
  <div class="blog-container">
    {#each blogs1 as blog}
      <Blog imageUrl={blog.image_url} title={blog.title} url={blog.url}/>
    {/each}
  </div>
</blogs>

<style> 
    blogs {
      margin-bottom: 100px;
    }
    .blog-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
