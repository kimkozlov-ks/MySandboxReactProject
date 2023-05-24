type ConditionalClasses  = Record<string, boolean | string>

export function formatClassNames(classes: string[], conditionalClasses?: ConditionalClasses): string {
    return [
        ...classes,
        conditionalClasses
            ? Object.entries(conditionalClasses)
                .filter(([cls, condition]) => Boolean(condition))
                .map(([cls]) => cls)
            : null
    ].join(' ');
}
