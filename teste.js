function parimpar(n) {
    if (typeof n != Number) return
    if (n%2 == 0) {
      return "Par!"
    } else {
      return "Ímpar!"
    }
  }
  console.log("console 1", parimpar(5))


  let res = parimpar(5)
  console.log(res)

  function positnegat(n) {
    if (n >= 1) {
        return "Positivo!"
    } else {
        return "Negativo!"
    }
  }

  let result = positnegat(1)
  console.log(result)

