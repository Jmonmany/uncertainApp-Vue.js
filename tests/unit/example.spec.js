describe('Example', () => {
  test('should be bigger than 10', () => {
    // Arange 
    let value = 10;
    // Act
    value++
    // Assert
    expect(value).toBeGreaterThan(10);
  });
});
