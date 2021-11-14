
// not used
export const loadState = () => {
    try {
      const serialState = localStorage.getItem('cart');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};
export const saveState = (state) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('cart', serialState);
    } catch(err) {
        console.log(err);
    }
};