const columns = 12
const baseWidth = (100 / 12).toFixed(2)

export const generateColumnClasses = () => {
  let styles = ''
  for (let i = 1; i <= columns; i++) {
    styles += `
      .col-${i} {
        width: ${baseWidth * i}px;
      }
      .col-offset${i} {
        margin-left: ${baseWidth * i}px;
      }
    `
  }
  return styles
}

export const gridContainer = `
.container {
  //   max-width: 990px;
  // max-width: 1600px;
  min-width: 320px;
  margin: 0 auto;
    .row {
      display: flex;
      flex-wrap: wrap;
      [class*='col-'] {
        min-height: 1.5em;
        // padding: 0.5em;
        width: 100%;
        // border: solid rgb(255, 204, 2) 1px;
      }
    }

`
