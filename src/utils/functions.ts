export const txtSlicer = (txt: string, amount: number = 12) => {
  if (txt.length > amount) return `${txt.slice(0, 12)}...`
  return txt
}