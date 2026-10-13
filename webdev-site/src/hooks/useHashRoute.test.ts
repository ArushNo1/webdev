import { expect, test } from "bun:test";

import { parseRoute, type Route } from "./useHashRoute";


function testRouteParsing() {
    const validRoutes: Route[] = ["home", "projects", "skills", "contact", "challenges"];

    validRoutes.forEach((route) => {
        test(`Route Parsing: '${route}' routes to itself`, () => {
            const parsedRoute = parseRoute(route);
            expect(parsedRoute).toBe(route);
        });
    });

    const unknownRoutes: string[] = ["unknown-page", "random/path", "", "12345", "!@#\$"];

    unknownRoutes.forEach((invalidInput) => {
        test(`Route Parsing: fallback unknown '${invalidInput}' to 'home'`, () => {
            const parsedRoute = parseRoute(invalidInput);
            expect(parsedRoute).toBe("home");
        });
    });
}
testRouteParsing();