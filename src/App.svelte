<script>
const [n, m] = [10, 15]
var table =Array(n).fill().map(()=>Array(m).fill(0))
var next = 1
</script>

<main>
<h1>Reversi</h1>
<table>
{#each table as tr}
  <tr>
    {#each tr as td}
      <td class={
        [next, td]
          .map((v, i) => `x${i}-${v}`)
          .join(" ")
      } on:click={() => {
        td = next;
        [[1, 1], [1, 0], [0, 1], [1, -1], [-1, 1], [-1, 0], [0, -1], [-1, -1]].forEach(([xi, yi]) => {
          
        })
        next = next - 1 ? 1 : 2 
      }}>
        {#if td}
          <table><td class=z{td}></td></table>
        {/if}
      </td>
    {/each}
  </tr>
{/each}
</table>
</main>

<style>

</style>
