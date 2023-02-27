<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
</script>
<div class="navIcons">
    <a href="/antonioortegajr"><Fa icon={faGithub} size="1x" /></a>
    <a href="/antonioortegajr"><Fa icon={faLinkedin} size="1x" /></a>
    <a href="/antonioortegajr"><Fa icon={faTwitter} size="1x" /></a>
    <a href="/antonioortegajr"><Fa icon={faFacebook} size="1x" /></a>
</div>
<style>
    .navIcons {
        display: flex;
        justify-content:  space-between;
        padding-bottom: 5%;
    }
</style>