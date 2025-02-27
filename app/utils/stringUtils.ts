export function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function cfl(val: string): string {
  return capitalizeFirstLetter(val);
}
