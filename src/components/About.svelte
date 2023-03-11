<script>
    const abouts = {
    "Discuss":{
        "icon": "",
        "text": "Eugene Web Developers is all about web and mobile app development in the age of ubiquitous internet. This group is all level of skill and experience. If you're interested in any of these things, regardless of your skill level, please feel free to join us."
    },
    "Community Focused":{
        "icon": "",
        "text": "Eugene's web development community has been quietly growing and thriving. We're enthusiastically contributing to the community with cooperative learning, networking the occasionally critique, and most importantly getting to know each other."
    },
    "Web Technology":{
        "icon": "",
        "text": "We are into: Web development languages such as Javascript, Python, Ruby, .NET, PHP, HTML and CSS. Frameworks and web environments. Design trends and paradigms such as Bootstrap, Foundation, and Material Design. Databases of all types SQL and NoSQL: MySQL, Postgres, MongoDB, Couchbase, and Graphql."
    }
}
</script>
<div class="about">
    {#each Object.entries(abouts) as [about, content]}
    <div>
        <h4>{about}</h4>
        <p>{content.text}</p>
    </div>
    {/each}
</div>
<style>
</style>