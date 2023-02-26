<script>
    import Fa from 'svelte-fa/src/fa.svelte';
        import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
</script>
<div class="navIcons">
    <a href="/antonioortegajr"><Fa icon={faGithub} size="2x" /></a>
    <a href="/antonioortegajr"><Fa icon={faLinkedin} size="2x" /></a>
    <a href="/antonioortegajr"><Fa icon={faTwitter} size="2x" /></a>
    <a href="/antonioortegajr"><Fa icon={faFacebook} size="2x" /></a>
</div>
<style>
    .navIcons {
        display: flex;
        justify-content:  space-between;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
    }
</style>