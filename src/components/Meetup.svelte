<script>
    const meetups = {
        "Eugene Web devs":{
            "icon": "web-devs.jpg",
            "link": "https://www.meetup.com/eugenewebdev",
            "text": "Meet up with local web developers to network and learn about current technologies. Every last Thursday of the month, we'll host curated presentations and workshops focused on all things related to web development. We're enthusiastic about learning and getting to know each other in Eugene's growing tech scene."
        },
        "Community Focused":{
            "icon": "tech-tuesday.jpg",
            "link": "https://www.meetup.com/openeugene-eugenetech/events/mdbjbtyfcdblc/",
            "text": "Join the @EugeneTech community every Tuesday and support downtown businesses by having a drink at The Barn Light. Food is available at the bar, next door at Slice, around the corner at Killer Burger, or at any of the nearby downtown restaurants."
        },
    }
</script>
<div class="meetups">
    <h3>Meet Ups</h3>
    <div class="meetups">
    {#each Object.entries(meetups) as [meetup, content]}
    <div>
        <h4>{meetup}</h4>
        <a href="{content.link}">
            <img class="meetup-image" src="images/meetups/{content.icon}" alt="meetup">
        </a>
        <p>{content.text}</p>
    </div>
    {/each}
</div>
</div>
<style>
    .meetup-image {
        width: 100%;
    }

</style>