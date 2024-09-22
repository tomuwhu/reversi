<script>
const [n, m] = [10, 15]
var table =Array(n).fill().map(()=>Array(m).fill(0))
var next = 1
var ej = [0, 0]
</script>
<main>
<h1>Reversi</h1>
<table>
{#each table as tr, y}
  <tr>
    {#each tr as td, x}
      <td class={
        [next, td]
          .map((v, i) => `x${i}-${v}`)
          .join(" ")
      } on:click={() => {
        if (!table[y][x]) {
          td = next
          ej[next - 1]++
          [[1, 1], [1, 0], [0, 1], [1, -1], [-1, 1], [-1, 0], [0, -1], [-1, -1]].forEach(([xi, yi]) => {
            let [xp, yp] = [x, y]
            let szinezni = []
            xp = xp + xi
            yp = yp + yi
            while(table[yp] && table[yp][xp] === [0, 2, 1][next]) {
              szinezni.push([yp, xp])
              xp = xp + xi
              yp = yp + yi
            }
            if (table[yp] && table[yp][xp] === next) {
              szinezni.forEach(([yp, xp]) => {
                table[yp][xp] = next
                ej[next - 1]++
                ej[[0, 2, 1][next]-1]--
              })
            }
          })
          next = [2, 1][next - 1]
        }
      }}>
        {#if td}
          <table><td class=z{td}></td></table>
        {/if}
      </td>
    {/each}
  </tr>
{/each}
</table>
<hr>
<table>
  <td class="x1-1"><table><td class="z1"></td></table></td>
  <td class="ej">
    {ej.join(" - ")}
  </td>
  <td class="x1-2"><table><td class="z2"></td></table></td>
</table>
</main>
