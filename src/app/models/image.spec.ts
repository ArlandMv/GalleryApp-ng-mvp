import { Image } from './image';

describe('Image', () => {
  it('should create an instance', () => {
    const image = new Image(
      '1',
      'Test Image',
      'This is a test image',
      'test.jpg'
    );
    expect(image).toBeTruthy();
  });

  it('should set properties correctly', () => {
    const image = new Image(
      '1',
      'Test Image',
      'This is a test image',
      'test.jpg'
    );
    expect(image.id).toEqual('1');
    expect(image.title).toEqual('Test Image');
    expect(image.description).toEqual('This is a test image');
    expect(image.imageUrl).toEqual('test.jpg');
  });
});

/**
 * ng test
 * Incomplete: No specs found, , randomized with seed 01847
 */
