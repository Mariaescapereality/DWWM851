//exo2
const lastP = document.querySelector("main p:last-child");
//const obsLast = new IntersectionObserver(addMore, {rootMargin: 200px});
const m = document.querySelector("main");

obsLast.observe(lastP);

function addMore(entries)
{
const ent = entries[0];
if(ent.IsInterSecting)
{
    let p;
    for(let i = 0; i < 10; i++)
    {
        p = document.createElement("p");
        p.textContent = "Minima optio unde officia, eaque voluptatem architecto sint voluptate saepe aliquam aliquid labore laboriosam repudiandae atque facere laudantium nemo eius qui pariatur quos odio. Assumenda repellat hic dignissimos optio id.";
        m.append(p);
        obsPara.obsPara(p);
    }
    obsLast.unobserve(lastP);
    obsLast.observe(p);
}
}