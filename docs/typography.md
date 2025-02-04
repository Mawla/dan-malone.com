# Typography System

## Fonts

- Primary: Satoshi (Body text)
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
  - Usage: Main text, UI elements, navigation
- Secondary: Lora (Headings)
  - Weights: 400, 500, 600, 700
  - Usage: Headings, quotes, emphasis

## Usage

### Headings

- H1: `font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`
- H2: `font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`
- H3: `font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight`

### Body Text

- Body: `font-sans text-base md:text-lg leading-relaxed`
- Small: `font-sans text-sm leading-normal`
- Quote: `font-heading text-xl md:text-2xl italic leading-relaxed`

## Font Loading

- Satoshi loaded locally from `/public/fonts/`
- Lora loaded from Google Fonts with optimized subsets

## Best Practices

1. Use Satoshi for body text and UI elements
2. Use Lora for headings and decorative text
3. Maintain consistent spacing with leading classes
4. Follow responsive text sizing patterns
5. Use appropriate font weights for hierarchy
