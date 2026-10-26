import { useState } from "react";

const routeOptions = ['home', 'projects', 'skills', 'challenges', 'devlog', 'contact'] as const;
export type Route = typeof routeOptions[number];

export function useHashRoute(): Route {

  //readRoute instead of readRoute() treats readRoute as an initial value, rather than a changing value that must be recomputed
  const [route, setRoute] = useState(readRoute);
  window.onhashchange = () => {
    setRoute(readRoute());
  }
  return route
}

function isValidRoute(routeStr : string): routeStr is Route {
  return routeOptions.includes(routeStr as Route);
}
export function parseRoute(hash: string): Route{
  if (isValidRoute(hash)){
    return hash;
  }
  return 'home';
}
function readRoute() : Route {
  if (typeof window === 'undefined'){
    return 'home';
  }
  const routeHash = window.location.hash.substring(2);
  return parseRoute(routeHash);
}