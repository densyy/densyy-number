/* ---- Methods ---- */

function toDecimal (valor) {
  valor = toDecimalString(valor)
  return Number(valor) || 0
}

function toDecimalString (valor) {
  return Number(valor || 0).toFixed(2)
}

function toMoney (valor) {
  const idioma = 'pt-br'
  const opcoes = { style: 'currency', currency: 'BRL' }
  return valor.toLocaleString(idioma, opcoes)
}

module.exports = {
  toDecimal,
  toDecimalString,
  toMoney
}
