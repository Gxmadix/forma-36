# GridItem

Grid items are child elements of [Grid](./info/components-grid--default) component.

```js
import { Grid, GridItem } from '@contenful/forma-36-react-components';
```

<br />
## Usage

### columnStart

Specifies a grid item’s start position within the grid columns; corresponds to [grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start) CSS property.

```jsx
<GridItem columnStart={1}></GridItem>
// Or
<GridItem columnStart='columnName'></GridItem>
```

### columnEnd

Specifies a grid item’s end position within the grid columns; corresponds to [grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end) CSS property.

```jsx
<GridItem columnEnd={6}></GridItem>
// Or
<GridItem columnEnd='columnName'></GridItem>
```

### rowStart

Specifies a grid item’s start position within the grid rows; corresponds to [grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start) CSS property.

**e.g.**

```jsx
  <GridItem rowStart={2}></GridItem>
  // Or
  <GridItem rowStart='rowName'></GridItem>
```

### rowStart

Specifies a grid item’s end position within the grid rows; corresponds to [grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end) CSS property.

**e.g.**

```jsx
  <GridItem rowEnd={2}></GridItem>
  // Or
  <GridItem rowEnd='rowName'></GridItem>
```

### area

A grid area is one or more grid items that make up a rectangular area on the grid.
It is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`

**e.g**

```jsx
  <GridItem area='2 / 1 / 2 / 4'></GridItem>
  // Or
  <GridItem area='rowStartName / columnStartName / rowEndName / columnEndName'></GridItem>
```

## Best practices

### Nesting grids

A grid item can become a grid container. Replace any `GridItem` with `Grid` component, e.g.

```jsx
<Grid columns={3}>
  <Grid columns={2}>
    <GridItem></GridItem>
    <GridItem></GridItem>
  </Grid>
  <GridItem></GridItem>
  <GridItem></GridItem>
</Grid>
```
