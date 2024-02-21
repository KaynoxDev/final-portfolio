<template>
    <div>
        <footer>
            <small>Dernière mise à jour le 21/02/2024</small>  
            <section>
                <a href="https://github.com/kaynoxdev" target="_blank" ref=""><img src="../assets/img/git.png" alt="icon de github"></a>
                <a href="https://github.com/kaynoxdev"><img src="../assets/img/linkd.png" alt="icon de linkedin"></a>

            </section>
            <small> &copy; 2024 by KaynoxDev</small>
        </footer>
    </div>
</template>

<style scoped>

footer {
  background-color: #043444;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1230px;
  margin-top: 100px;
  height: 50px;
  align-items: center;
  border-top: 0.1rem solid #0484b7;
  overflow: auto;
  color: var(--secondary-color);
}

    img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }
</style>