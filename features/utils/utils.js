export function parseMenuExpression(menuExpression) {
    // menuExpression: Dresses -> Evening dresses
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}