# getBase64Image

A simple function that converts an image from a URL to a base64 encoded string.

## Usage

```ts
const imageUrl = 'https://example.com/image.jpg';
const base64 = await getBase64Image(imageUrl);
console.log(base64); // base64 encoded string of the image
```

## API

### getBase64Image(url: string): Promise<string>

Converts an image from a URL to a base64 encoded string.

url
Type: string

The URL of the image to be converted.