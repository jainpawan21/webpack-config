import "./styles/index.scss"
const elvenShieldRecipe = {
  leatherStripe: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
